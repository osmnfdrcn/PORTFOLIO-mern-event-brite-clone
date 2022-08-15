import { NavLink } from 'react-router-dom';
import { userProfileMenuLinks as links } from '../utils/links'
import { useSelector } from 'react-redux';

const NavLinks = () => {
  const { showUserProfileMobileMenu } = useSelector((store) => store.app)

  return (
    <nav className='side-menu'
      style={showUserProfileMobileMenu ? { "display": "block" } : null}
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