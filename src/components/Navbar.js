import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, MenuIcon } from '../icons';
import profileIcon from '../images/profile-icon.png';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState('');
  return (
    <nav>
      <h1>
        <NavLink to="/">
          Bookstore CMS
        </NavLink>
      </h1>
      <button className="show-menu" type="button" onClick={() => setShowMenu('flex')}>
        <MenuIcon />
      </button>
      <ul className="menu" style={{ display: showMenu }}>
        <button className="close-menu" type="button" onClick={() => setShowMenu('none')}>
          <CloseIcon />
        </button>
        {links.map((link) => (
          <li className="page-link" key={link.text}>
            <button
              className="invisible-btn"
              type="button"
              onClick={() => {
                if (window.innerWidth < 800) {
                  setShowMenu('none');
                }
              }}
            >
              <NavLink
                to={link.path}
              >
                {link.text}
              </NavLink>
            </button>
          </li>
        ))}
      </ul>
      <img className="profile-icon" alt="Profile" src={profileIcon} />
    </nav>
  );
};
export default Navbar;
