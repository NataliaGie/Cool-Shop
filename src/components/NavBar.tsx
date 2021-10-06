import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
    <nav className='navbar'>
        <ul className='navItems'>
            <NavLink className='navLink logo' to="/" exact>Cool Shop</NavLink>
            <NavLink className='navLink on-hover' to="/shop">Shop</NavLink>
            <NavLink className='navLink on-hover' to="/my-cart">My cart</NavLink>
        </ul>
    </nav>
)

export default NavBar;