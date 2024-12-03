import React, { useState, useEffect } from 'react';
import NavList from './NavList'; 
import { gsap } from 'gsap';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0); 
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    // GSAP animation for nav items when opening/closing the drawer
    if (!isOpen) {
      gsap.to('.nav-item', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to('.nav-item', {
        opacity: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  };

  // Close the drawer when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false);
    gsap.to('.nav-item', {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <nav
      className={`${
        scrollY > 50 ? 'fixed top-0 left-0 right-0 bg-[#ffffff09] backdrop-blur-lg ' : ''
      } flex justify-between items-center w-full min-h-[8vh] px-2 md:px-7 transition-all duration-300 z-50`}
    >
      {/* Logo */}
      <div>
        <a href="/" className="cursor-pointer font-normal text-xl font-serif">
          Artfolio
        </a>
      </div>

      {/* Hamburger Icon for Mobile (Hidden on large screens) */}
      <div className="block lg:hidden">
        <button onClick={toggleDrawer} className="text-2xl focus:outline-none">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Navbar Links for Desktop (Visible on large screens) */}
      <div className="hidden lg:block bg-nav-bg p-2 rounded-xl">
        <ul className="flex justify-center items-center gap-2">
          <NavList href="home" />
          <NavList href="about" />
          <NavList href="portfolio" />
        </ul>
      </div>

      {/* Contact Button for Desktop (Visible on large screens) */}
      <div className="hidden lg:block">
        <a href="#contact" className="bg-primary-color rounded-full py-2 px-3">
          Contact
        </a>
      </div>

      {/* Offcanvas Drawer for Mobile (Visible on small screens) */}
      <div
        className={`fixed top-0 left-0 w-full h-64 bg-nav-bg transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-5">
          <ul className="flex flex-col items-start gap-4">
            <NavList href="home" className="nav-item" onClick={handleNavLinkClick} />
            <NavList href="about" className="nav-item" onClick={handleNavLinkClick} />
            <NavList href="portfolio" className="nav-item" onClick={handleNavLinkClick} />
          </ul>
          <a
            href="#contact"
            className="bg-primary-color rounded-full py-2 px-3 mt-5 block"
            onClick={handleNavLinkClick} // Close offcanvas on click
          >
            Contact
          </a>
        </div>
      </div>

      {/* Offcanvas Overlay (Dark background overlay to close the drawer) */}
      <div
        className={`fixed inset-0 bg-transparent  z-40 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleDrawer}
        role="presentation"
      ></div>
    </nav>
  );
};

export default Navbar;
