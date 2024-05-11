import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {

  const scrollToTop = () => {
    // Smoothly scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Karim Emad</strong>. Don't forget to contact me.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
          <div className="to-up" onClick={scrollToTop} >🔝</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
