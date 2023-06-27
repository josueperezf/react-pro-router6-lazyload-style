import { NavLink } from 'react-router-dom';
import logo from '../../assets/react.svg';

export const SideBar = () => {
  return (
    <nav>
        <img src={logo} alt='React Logo' />
        <ul>
            <li>
                <NavLink to={'/lazyLayout'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Modulo perezoso lazyLayout</NavLink>
            </li>
            <li>
                <NavLink to={'/sin-lazy'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>componente sin-lazy</NavLink>
            </li>

            {/* <li>
                <NavLink to={'/lazyLayout/lazy2'} className={ ({isActive}) => isActive ? 'nav-active' : '' }>lazyLayout lazy2</NavLink>
            </li> */}
            
        </ul>
    </nav>
  )
}
