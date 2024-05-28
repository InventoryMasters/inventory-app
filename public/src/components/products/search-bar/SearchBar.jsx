import React, { useState } from 'react';

export default function SearchBar({ onSearch, isSearchHidden }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    }
    return (
        <>
            <div className='relative'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='search products...'
                    className={!isSearchHidden ? 'h-6 text-primary-dark-gray text-sm font-encode absolute  top-0 right-6 -translate-y-1 -translate-x-4 rounded-full py-2 px-2 border border-black' : 'hidden'}
                />
            </div>
        </>
    )

}