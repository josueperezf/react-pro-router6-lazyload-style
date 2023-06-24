import { NavLink } from 'react-router-dom';
import logo from '../../assets/react.svg';

export const SideBar = () => {
  return (
    <nav>
        <img src={logo} alt='React Logo' />
        <ul>
            <li>
                <NavLink to={'/lazy1'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>lazy1</NavLink>
            </li>
            <li>
                <NavLink to={'/lazy2'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>lazy2</NavLink>
            </li>
            <li>
                <NavLink to={'/lazy3'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>lazy3</NavLink>
            </li>
        </ul>
    </nav>
  )
}
