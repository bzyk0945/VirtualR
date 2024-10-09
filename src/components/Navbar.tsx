import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";


export const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar: React.MouseEventHandler = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  
  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <a className="flex items-center flex-shrink-0 cursor-pointer" onClick={handleScrollToTop}>
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo VirutalR" />
            <span className="text-xl ">VirtualR</span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map(
              (item: { href: string; label: string }, index: number) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            )}
           
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a href="" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href=""
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed right-0 z-20 w-full bg-neutral-900 flex flex-col justify-center items-center p-12">
            <ul>
              {navItems.map(
                (item: { href: string; label: string }, index: number) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                )
              )}
            </ul>
            <div className="flex space-x-6">
                <a href="" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
