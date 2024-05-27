import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import user from '../../../assets/icons/user.svg';
import search from '../../../assets/icons/search.svg';
import { useUser } from '../../context/UserContext';
import ProfilePage from '../profiledropdown/ProfilePage';
import SliderWrapper from '../profiledropdown/sliderWrapper';

export default function Navbar({
  isSliderHidden,
  setIsSliderHidden,
  toggleFormWrapper,
}) {
  const { isAdmin, token } = useUser();

  console.log({ token });
  console.log({ isAdmin });
  return (
    <header className='fixed w-screen'>
      <nav className='font-encode font-medium  h-20 max-w-[100vw]'>
        <section className='flex justify-between items-center text-[1.2rem] text-primary-dark-gray h-full px-20'>
          <div className='flex mx-auto gap-8 pl-14'>
            <Link to='/'>HOME</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/about'}>ABOUT</Link>

            {isAdmin && <Link to='/admin/dashboard'>DASHBOARD</Link>}
          </div>
          <div className='flex gap-8 h-5 pt-2'>
            <img src={search} alt='Search' className='h-[1.1rem]' />

            <img
              src={user}
              alt='User'
              className='h-[1.1rem]'
              onClick={() => setIsSliderHidden(!isSliderHidden)}
            />
            {!isSliderHidden &&
              (token ? (
                <ProfilePage />
              ) : (
                <SliderWrapper toggleFormWrapper={toggleFormWrapper} />
              ))}
          </div>
        </section>
        <Logo />
      </nav>
    </header>
  );
}
