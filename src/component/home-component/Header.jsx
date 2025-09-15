import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../../index.css'

const Header = () => {
   const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  return (
    <div className={`fixed top-0 w-full flex sm:justify-between justify-between  sm:flex-row h-15 sm:h-10 z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`} id="head-container" >
     <div className="flex items-center">
        <h1 className="font-bold text-2xl sm:text-3xl ml-2 ">Oldhandz</h1>
      </div>
      <div  className='flex items-center justify-end font-medium text-gray-800 text-sm sm:text-sm'>
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
