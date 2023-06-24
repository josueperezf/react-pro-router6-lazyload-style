import { NavLink } from 'react-router-dom';
import logo from '../../assets/react.svg';

export const SideBar = () => {
  return (
    <nav>
        <img src={logo} alt='React Logo' />
        <ul>
            <li>
                <NavLink to={'/'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
                <NavLink to={'/users'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
        </ul>
    </nav>
  )
}
