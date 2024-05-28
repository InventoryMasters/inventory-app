import React from 'react';
import { Link } from 'react-router-dom';


export default function Homepage() {
  return (
    <>
      <main className='w-[80vw] h-[100vh] flex justify-center items-center mx-auto font-encode  -z-[100]'>
        <section className='flex gap-5 relative'>
          <img
            src='https://orthodontistbrisbane.net/wp-content/uploads/2019/09/pexels-cottonbro-3402510-684x1024.jpg'
            className='h-[80vh] rounded-l-3xl  opacity-90 '
          />
          <h1 className='absolute bottom-44 z-10 left-0 translate-x-20 font-encode text-[6rem]  uppercase bg-transparent  font-medium  text-nowrap text-white'>
            reimagine skincare
          </h1>
          <p className='absolute bottom-[10.5rem] left-28 bg-transparent text-nowrap text-lg font-thin text-white'>
            find the products that are proven to heal and improve your skin
          </p>
          <img
            src='https://images.pexels.com/photos/6543238/pexels-photo-6543238.jpeg'
            className='h-[80vh] rounded-r-3xl opacity-90'
          />
          <section className='relative'>
            <Link
              to={'/products'}
              className='absolute bottom-20 right-1/2 w-full text-nowrap '
            >
              <button className='uppercase -translate-x-[200%] border border-white px-10 py-2 rounded-full text-white font-thin tracking-wide'>
                Explore Products
              </button>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
