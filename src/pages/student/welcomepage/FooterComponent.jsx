import React, { useState, useRef, useEffect } from 'react';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Function to handle clicks outside the popover
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverOpen(false);
    }
  };

  // Add event listener for clicks outside the popover
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href=""
              src=""
              alt=""
              name=""
            />
            <FooterLinkGroup>
              <Link to="/about" className="text-blue-500 hover:underline px-2"><FooterLink>About</FooterLink></Link>
              <Link to="/privacy-policy" className="text-blue-500 hover:underline px-2">
        Privacy Policy
      </Link>
              
              <div className="relative inline-block text-left">
                <FooterLink onClick={() => setPopoverOpen(!popoverOpen)}><Link className="text-blue-500 hover:underline px-2">Contact</Link></FooterLink>
                {popoverOpen && (
                  <div
                    ref={popoverRef}
                    className="absolute right-0 bottom-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 "
                  >
                    <div className="border-b border-gray-200 bg-gray-100 px-3 py-2">
                      <h3 id="contact-popover" className="font-semibold text-gray-900">Contact Us</h3>
                    </div>
                    <div className="px-3 py-2">
                      <p>If you have any queries or issues with the code, please contact us at:</p>
                      <p className="font-semibold text-gray-900">labguide100@gmail.com</p>
                    </div>
                  </div>
                )}
              </div>

            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterLink>GLOBE-Protocols</FooterLink>
        </div>
      </Footer>
      
    </footer>
  );
};

export default FooterComponent;
