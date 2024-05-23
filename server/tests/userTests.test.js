const request = require('supertest');
const app = require('../app');
const { User } = require('../models/index');
const sequelize = require('../db');

let user;
let userId;

beforeAll(async () => {
    await sequelize.sync({ force: true });

    user = await User.create({
        firstName: 'Jim',
        lastName: 'Halpert',
        email: 'JimHalpert@gmail.com',
        passwordHash: 'Password1@'
    })

    userId = user.id;
});


afterAll(async () => {
    await sequelize.close();
});

describe('User creation', () => {

    it('should create a user with valid input', async () => {
        const response = await request(app)
            .post('/api/auth/signup')
            .send({
                firstName: 'Michael',
                lastName: 'Scott',
                email: 'MichaelScott@gmail.com',
                passwordHash: 'Password1@'
            })
        expect(response.statusCode).toBe(201);
        const createdUser = await User.findOne({ where: { email: 'michaelscott@gmail.com' } });
        expect(createdUser).toBeTruthy();
        expect(createdUser.firstName).toBe("Michael");
        expect(createdUser.lastName).toBe("Scott");
        expect(createdUser.passwordHash).toBe("Password1@");//failing this test because passowrd is getting hashed in the before create hook
    });

    describe('Validation', () => {

        const invalidUser = {
            firstName: 'Dwight',
            lastName: 'Schrute',
            email: 'DwightSchrute@gmail.com',
            passwordHash: 'Password1@'
        }

        it('should require a first name length greater than 1 character', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, firstName: 'D' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('First name must be at least 2 characters long');
        });

        it('should require a last name length greater than 1 character', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, lastName: 'S' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Last name must be at least 2 characters long');
        });

        it('should require a password length greater than 7 characters', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, passwordHash: 'p' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must be between 8 and 24 characters');
        });

        it('should require a password length less than 25 characters', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({
                ...invalidUser,
                passwordHash: 'passwordLongerThan24Characters',
              });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must be between 8 and 24 characters');
        });


        it('should require at least one special character in the password', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, passwordHash: 'password1' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one special character');
        });

        it('should require at least one number in the password', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, passwordHash: 'Password@' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one number');
        });

        it('should require at least one uppercase letter in the password', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, passwordHash: 'password1@' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one uppercase letter');
        });

        it('should require at least one lowercase letter in the password', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, passwordHash: 'PASSWORD1@' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute@gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('Password must contain at least one lowercase letter');
        });

        it('should require a valid email', async () => {
            const response = await request(app)
              .post('/api/auth/signup')
              .send({ ...invalidUser, email: 'DwightSchrute.email.com' });
            const createdUser = await User.findOne({ where: { email: 'DwightSchrute.gmail.com' } });
            expect(!createdUser).toBe(true);
            expect(response.statusCode).toBe(500);
        });
    })
})

describe('User update', () => {
    it('should update a user with valid input', async () => {
        const response = await request(app)
            .put(`/api/users/${userId}`)
            .send({
                firstName: 'Pam',
                lastName: 'Beesly',
                email: 'PamBeesly@gmail.com',
                passwordHash: 'updatedPassword1@'
            })

        expect(response.statusCode).toBe(200);
        const updatedUser = await User.findOne({ where: { email: 'pambeesly@gmail.com' } });
        expect(updatedUser.firstName).toBe('Pam');
        expect(updatedUser.lastName).toBe('Beesly');
        expect(updatedUser.passwordHash).toBe('updatedPassword1@');
    })

    describe('Validation', () => {
        it('should require valid inputs', async () => {
            const response = await request(app)
                .put(`/api/users/${userId}`)
                .send({
                    firstName: 'P',
                    lastName: 'B',
                    email: 'PamBeesly@gmail.com',
                    passwordHash: 'p'
                })
            const updatedUser = await User.findOne({ where: { email: 'PamBeesly@gmail.com' } });
            expect(updatedUser.firstName).toBe('Pam');
            expect(response.statusCode).toBe(400);
            expect(response.body.errors[0].msg).toBe('First name must be at least 2 characters long');
            expect(response.body.errors[1].msg).toBe('Last name must be at least 2 characters long');
            expect(response.body.errors[2].msg).toBe('Password must be between 8 and 24 characters');
            expect(response.body.errors[3].msg).toBe('Password must contain at least one special character');
            expect(response.body.errors[4].msg).toBe('Password must contain at least one number');
            expect(response.body.errors[5].msg).toBe('Password must contain at least one uppercase letter');
        });
    })
})