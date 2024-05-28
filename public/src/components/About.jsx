import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../assets/allProdsBanners'

export default function About({ isSliderHidden }) {
  return (
    <main className='w-full font-encode flex justify-center flex-col items-center text-primary-dark-gray'>
      <section className=''>
        <div className='relative text-white'>
          {!isSliderHidden ? (
            ''
          ) : (
            <header className='absolute bg-transparent top-36 right-1/2 uppercase translate-x-[70%] translate-y-[60%]'>
              <p className='bg-transparent uppercase font-thin'>our promise</p>
              <span className='bg-transparent text-3xl font-medium'>
                skin health since 1986
              </span>
            </header>
          )}
        </div>
        <img
          src='https://www.teamdrjoseph.com/cms/wp-content/uploads/148A1649-Kopie.jpg.webp'
          className='w-screen object-cover h-[40vh] rounded-b-xl px-6 pt-5'
        />
      </section>

      <section className='flex px-36 pt-10 justify-center items-center gap-20 max-w-[80vw]'>
        <article className='flex flex-col w-2/4 self-center'>
          <p className='font-thin tracking-wide pb-3'>
            NATURAL COSMETICS PIONEER
          </p>
          <h1 className='pb-2 font-medium text-2xl'>A PROFOUND MASTERMIND</h1>
          <p className='font-light'>
            Our founder Erb. Dipl. Dr. Joseph Franz discovered his passion for
            the world of plants at a very early age. His inexhaustible curiosity
            and deep knowledge of natural active ingredients led him to develop
            the world’s first Hightech Natural Cosmetics®.
            <p className='pt-2'>
              What he pioneered over 40 years ago is today a sustainable,
              proven, certified natural skincare brand.
            </p>
          </p>
        </article>

        <div className='w-9/12 aspect-square'>
          <img src='https://www.teamdrjoseph.com/cms/wp-content/uploads/Dr-Joseph-Family-36_1000x1000-1.jpg.webp' />
        </div>
      </section>

      <section className='flex bg-primary-popup/80 justify-center items-center gap-20 w-full  mt-28 py-20'>
        <div className='max-w-[80vw] flex flex-row-reverse bg-transparent px-36 gap-16'>
          <article className='flex flex-col w-2/4 self-center bg-transparent'>
            <p className='font-thin tracking-wide pb-3 bg-transparent'>
              TRUE SUSTAINABILITY
            </p>
            <h1 className='pb-2 font-medium text-2xl bg-transparent'>
              OUR PROMISE SINCE 1986
            </h1>
            <p className='font-light bg-transparent'>
              Our long-term impact, and our commitment to social, ethical, and
              environmental aims are deeply rooted in our corporate philosophy
              and our family. Our commitment to quality and efficacy is
              inevitably linked to a responsible approach to nature and its
              resources.
              <p className='pt-2 bg-transparent'>
                The family behind TEAM DR JOSEPH · Joseph, Fabian, Lena, Viktor
              </p>
            </p>
          </article>

          <div className='w-9/12 aspect-square bg-transparent'>
            <img src='https://www.teamdrjoseph.com/cms/wp-content/uploads/Dr-Joseph-Family-8_1000x1000-1.jpg.webp' />
          </div>
        </div>
      </section>

      <section className='py-20 px-44 '>
        <p className='text-3xl pl-64 text-right text-primary-dark-gray'>
          Nature has found answers to countless questions. We just have to look
          and engage with the genius that she possesses.
        </p>
        <p className='text-right pt-3 font-thin'>
          Erb. Dipl. Franz Dr. Joseph · Founder
        </p>
      </section>

      <section className='flex bg-[#DFDBD6] justify-center items-center gap-20 w-full py-20 pt-28'>
        <div className='max-w-[80vw] flex flex-row-reverse bg-transparent px-36 gap-16'>
          <div className='w-9/12 aspect-square'>
            <img src='https://www.teamdrjoseph.com/thumbnail/ba/3d/54/1678222818/02add7671f0b4ed1b481d353a7b51885_1920x1920.png' />
          </div>

          <article className='flex flex-col w-2/4 self-center bg-transparent'>
            <p className='font-thin tracking-wide pb-3 bg-transparent'>
              OUR CREDO
            </p>
            <h1 className='pb-2 font-medium text-2xl bg-transparent'>
              QUALITY AND EFFICACY
            </h1>
            <p className='font-light bg-transparent'>
              If you take the health of your skin seriously, you should trust
              someone who has been doing so since 1986.
            </p>
            <p className='pt-2 bg-transparent font-light'>
              We have made it our mission to develop products that are both good
              for the body and good for the planet.
            </p>
            <Link
              to={'/products'}
              className=' w-fit mt-10 py-2 px-9 border border-primary-dark-gray rounded-full'
            >
              explore our products
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
