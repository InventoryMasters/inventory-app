import React from 'react'
import sortFilter from '../../../../assets/icons/sort-filter.svg'

export default function SortFilter() {
  return (
    <div className=' text-end tracking-wide flex  gap-4 justify-end'>
      sort/filter
      <img src={sortFilter} alt="Sort and filter" className='text-end'/>
    </div>
  )
}
