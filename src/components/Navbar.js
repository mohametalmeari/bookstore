import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];
const Navbar = () => (
  <nav>
    <h1>
      <NavLink to="/">
        Bookstore
      </NavLink>
    </h1>
    <ul className="menu">
      {links.map((link) => (
        <li className="page-link" key={link.text}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
