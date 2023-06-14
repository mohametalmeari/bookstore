import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, MenuIcon } from '../icons';

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
          Bookstore
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
    </nav>
  );
};
export default Navbar;
