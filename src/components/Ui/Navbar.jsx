import React from "react";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 py-5 items-center px-3 flex justify-between bg-slate-100'>
      <header className='font-semibold text-base'>
        <h4>
          Responsive <span className='text-blue-400'>Navbar</span>
        </h4>
      </header>

      <ul className='flex gap-5 items-center text-xs font-light'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <input
        type='text'
        placeholder='Search'
        className='py-2 w-[200px] border px-2 text-xs rounded'
      />
    </nav>
  );
};

export default Navbar;
