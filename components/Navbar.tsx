import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  return (
    <header className='fixed w-full z-[99999] blurred m-0 p-0 border-b border-yellow-400'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <Image src='/assets/icons/logo.svg' width={27} height={27} alt='logo' />
          <p className='nav-logo'>
            <span className="text-white-100">Price</span>
            <span className='text-yellow-400'>Pal</span>
          </p>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
