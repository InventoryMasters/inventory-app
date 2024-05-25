import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='flex max-w-[80vw] gap-36 pt-36 bg-primary-backdrop rounded-t-full px-36'>
      <div className='w-5/12 h-auto'>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className='text-center font-encode pt-10 w-7/12 bg-transparent'>
        <h1 className='bg-transparent text-[1.6rem] font-light uppercase'>
          {product.name}
        </h1>
        <p className='lowercase font-epilogue italic font-thin text-sm pt-2 bg-transparent'>
          {product.category.name}
        </p>
        <article className='bg-transparent font-extra-light pt-6'>
          {product.description}
        </article>
        <p className='bg-transparent uppercase pt-6 font-light'>
          qty in stock: {product.qty}
        </p>
        <p className='bg-transparent font-thin pt-1 uppercase'>
          Price: ${product.price}
        </p>
      </div>
    </div>
  );
}
