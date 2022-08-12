import { NavLink } from 'react-router-dom';
import { userProfileMenuLinks as links } from '../utils/links'

const NavLinks = ({ toggleMenu, setToggleMenu }) => {
  return (
    <nav className='side-menu'
      style={toggleMenu ? { "display": "block" } : null}
    >
      <div className='nav-links'>
        {
          links.map((link) => {
            const { text, path, id } = link;
            return (
              <NavLink
                to={path}
                end
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                key={id}
              >
                {text}
              </NavLink>
            )
          })
        }
      </div>
    </nav>
  );
};
export default NavLinks;