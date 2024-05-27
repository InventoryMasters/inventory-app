import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
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
            <div>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Search products...'
                    className='h-6'
                />
            </div>
        </>
    )

}