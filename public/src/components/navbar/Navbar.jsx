import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import user from '../../../assets/icons/user.svg';
import search from '../../../assets/icons/search.svg';
import { useUser } from '../../context/UserContext';
import ProfilePage from '../profiledropdown/ProfilePage';
import SliderWrapper from '../profiledropdown/sliderWrapper';
import SearchBar from '../products/search-bar/SearchBar';
import apiURL from '../../api';

export default function Navbar({
  isSliderHidden,
  setIsSliderHidden,
  toggleFormWrapper,
}) {
  const { token } = useUser();
  const handleSearch = (searchQuery) => {
    const urlSearchParams = new URLSearchParams({ name: searchQuery });
    const queryString = urlSearchParams.toString();
    const url = `http://localhost:1234/products?${queryString}`;
    window.location.href = url;
  }

  return (
    <header className='fixed w-screen'>
      <nav className='font-encode font-medium  h-20 max-w-[100vw]'>
        <section className='flex justify-between items-center text-[1.2rem] text-primary-dark-gray h-full px-20'>
          <div className='flex mx-auto gap-8 pl-14'>
            <Link to='/'>HOME</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Link to={'/profile'}>PROFILE</Link>
          </div>
          <div className='flex gap-8 h-5 pt-2'>
            <img src={search} alt='Search' className='h-[1.1rem]' />
            <SearchBar onSearch={handleSearch} />
            {/**<Link to={'/login'} onClick={toggleFormWrapper}>*/}
            <img
              src={user}
              alt='User'
              className='h-[1.1rem]'
              onClick={() => setIsSliderHidden(!isSliderHidden)}
            />
            {!isSliderHidden && (token ? <ProfilePage /> : <SliderWrapper toggleFormWrapper={toggleFormWrapper} />)}
            {/**  </Link>*/}
          </div>
        </section>
        <Logo />
      </nav>
    </header>
  );
}
