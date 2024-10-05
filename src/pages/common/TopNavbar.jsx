import React, { useState, useEffect, useRef } from 'react';
import { Button, MegaMenu, Navbar } from 'flowbite-react';
import { AiOutlineBars } from "react-icons/ai";

const TopNavbar = () => {
  // State to manage the mobile navbar toggle
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref to reference the navbar
  const navbarRef = useRef(null);

  // Function to toggle the navbar open/closed
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the navbar
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MegaMenu>
      <div ref={navbarRef} className="bg-gray-100 w-full flex items-center justify-end p-4 shadow-md relative">
        {/* Uncomment and adjust your Brand Logo as needed */}
        {/* <Navbar.Brand href="/">
          <img alt="Logo" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </Navbar.Brand> */}

        {/* Navbar Toggle Button for mobile */}
        {!isOpen && (
          <button onClick={toggleNavbar} className="md:hidden">
            <AiOutlineBars />
          </button>
        )}

        {/* Mobile Navbar Close Button */}
        {isOpen && (
          <button
            onClick={toggleNavbar}
            className="absolute top-4 right-4 text-gray-600 focus:outline-none"
          >
            <span className="text-2xl">&times;</span> {/* Close icon */}
          </button>
        )}

        {/* Navbar Links and Mega Menu */}
        <Navbar.Collapse className={`transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"} md:flex`}>
          <Navbar.Link href="#" className="hover:text-primary-600">Home</Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>Company</>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Library</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Resources</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Pro Version</a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600">Contact Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Support Center</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Terms</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Blog</a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600">Newsletter</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">Playground</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600">License</a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#" className="hover:text-primary-600">Team</Navbar.Link>
          <Navbar.Link href="#" className="hover:text-primary-600">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
};

export default TopNavbar;
