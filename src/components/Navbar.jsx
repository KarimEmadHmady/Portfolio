import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import './index.css'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <span className='blue-gradient_text drop-shadow font-semibold font-semibold-logo '>
          KE
        </span>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium header-nav-a-container'>
        <NavLink to='/about' className={ (  { isActive }) => isActive ? "blue-gradient_text a-fucase  "   : "text-gray-100  bg-blue-500"   } >
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "blue-gradient_text a-fucase" : "text-gray-100 bg-cyan-400"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "blue-gradient_text a-fucase"  : "text-gray-100 bg-blue-400 "}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
