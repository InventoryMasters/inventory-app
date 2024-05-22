const request = require('supertest');
const app = require('../../app');
const { User } = require('../../models/index');
const sequelize = require('../../db');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});


afterAll(async () => {
    await sequelize.close();
});

describe('User creation', () => {

    it('should create a user with valid input', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({
                firstName: 'Michael',
                lastName: 'Scott',
                email: 'MichaelScott@gmail.com',
                passwordHash: 'Password1@'
            })
        expect(response.statusCode).toBe(201);
        const createdUser = await User.findOne({ where: { email: 'MichaelScott@gmail.com' } });
        expect(createdUser).toBeTruthy();
        expect(createdUser.firstName).toBe("Michael");
        expect(createdUser.lastName).toBe("Scott");
        expect(createdUser.passwordHash).toBe("Password1@");
    });

    describe('Validation', () => {

        const invalidUser = {
            firstName: 'Dwight',
            lastName: 'Schrute',
            email: 'DwightSchrute@gmail.com',
            passwordHash: 'p'
        }

        it('should require a first name length greater than 1 character', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, firstName: "D" })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('First name must be at least 2 characters long');
        });

        it('should require a last name length greater than 1 character', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, lastName: 'S' })
            const createdUser = await User.findOne({ where: { email: 'MichaelS@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Last name must be at least 2 characters long');
        });

        it('should require a password length greater than 7 characters', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'p' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must be between 8 and 24 characters');
        });

        it('should require a password length less than 25 characters', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'passwordLongerThan24Characters' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must be between 8 and 24 characters');
        });


        it('should require at least one special character in the password', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'password1' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one special character');
        });

        it('should require at least one number in the password', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'Password@' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one number');
        });

        it('should require at least one uppercase letter in the password', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'password1@' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one uppercase letter');
        });

        it('should require at least one lowercase letter in the password', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ ...invalidUser, passwordHash: 'PASSWORD1@' })
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one lowercase letter');
        });
    })
})