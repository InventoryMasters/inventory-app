import React from 'react';
// import banner from '../../assets/allProdsBanners'

export default function About() {
  return (
    <main className='w-full font-encode'>
      about page
      <img
        src='https://www.teamdrjoseph.com/cms/wp-content/uploads/148A1649-Kopie.jpg.webp'
        className='w-full object-cover h-[40vh] rounded-b-xl px-6'
      />
      <section className='flex px-36 pt-10 justify-center items-center gap-20'>
        <article className='flex flex-col w-3/4 self-center'>
          <p className='font-thin tracking-wide pb-3'>
            NATURAL COSMETICS PIONEER
            </p>
            <h1 className='pb-2 font-medium text-xl'>A PROFOUND MASTERMIND</h1>
            <p className='font-thin'>
              Our founder Erb. Dipl. Dr. Joseph Franz discovered his passion for
              the world of plants at a very early age. His inexhaustible
              curiosity and deep knowledge of natural active ingredients led him
              to develop the world’s first Hightech Natural Cosmetics®. 
              <p className='pt-2'>
              What he
              pioneered over 40 years ago is today a sustainable, proven,
              certified natural skincare brand.
              </p>
            </p>
        </article>

        <div className='w-11/12'>
          <img src='https://www.teamdrjoseph.com/cms/wp-content/uploads/Dr-Joseph-Family-36_1000x1000-1.jpg.webp' />
        </div>
      </section>
    </main>
  );
}
