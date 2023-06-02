import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';

const links = ['Features', 'Pricing', 'Resources'];

const Nav = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-10 font-Poppins">
      <img src={logo} alt="Shortly logo" />
      <div className="relative md:hidden">
        <AiOutlineMenu
          aria-label="Open menu"
          aria-expanded={openMobileNav}
          onClick={() => setOpenMobileNav((prev) => !prev)}
          className="aspect-square h-full w-7 cursor-pointer text-Neutral-grayViolet"
        />
        {openMobileNav && (
          <div className="absolute bottom-0 right-0 flex w-[90vw] translate-y-[450px] flex-col gap-8 rounded-2xl bg-Primary-violet px-6 py-12 text-center text-xl font-medium tracking-wide text-slate-50 sm:w-[50vw]">
            <ul className="space-y-8">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div
              aria-hidden="true"
              className="h-0.5 w-full bg-Neutral-grayViolet"
            />
            <a href="#" onClick={(e) => e.preventDefault()}>
              Login
            </a>
            <button className="rounded-full bg-Primary-cyan py-2.5">
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div className="hidden flex-1 items-center justify-between font-medium md:flex">
        <nav className="ml-14">
          <ul className="flex space-x-10 text-Neutral-grayViolet">
            {links.map((link) => (
              <li key={link}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a
            href="#"
            className="text-Neutral-grayViolet"
            onClick={(e) => e.preventDefault()}
          >
            Login
          </a>
          <button className="ml-8 rounded-full bg-Primary-cyan px-4 py-1.5 text-slate-50">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
