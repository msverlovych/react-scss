import { FC, ReactElement } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import './navbar.scss';

const Navbar: FC = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to='/' aria-label='logo' className='navbar__logo-link'>SCSS</Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <Link to='/' className="navbar__menu-item-link">Home</Link>
        </li>
        <li className="navbar__menu-item">
          <Link to='/about' className="navbar__menu-item-link">About</Link>
        </li>
      </ul>
      <div className="navbar__mode-switcher">
        <button
          className="navbar__mode-switcher-button"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <AiFillMoon /> : <AiFillSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;