import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import './index.css'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        <span className='blue-gradient_text drop-shadow font-semibold font-semibold-logo '>
          KE
        </span>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium header-nav-a-container'>
        <NavLink to='/about' className={ (  { isActive }) => isActive ? "text-white "   : "text-gray-600 "   } >
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-white" : "text-gray-600"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-white"  : "text-gray-600 "}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
