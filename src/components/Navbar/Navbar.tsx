import { FC, ReactElement } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import './navbar.scss';

const Navbar: FC = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/public" className="navbar__logo-link">MyApp</a>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <a href="#home" className="navbar__menu-link">Home</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#about" className="navbar__menu-link">About</a>
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
    </header>
  );
};

export default Navbar;