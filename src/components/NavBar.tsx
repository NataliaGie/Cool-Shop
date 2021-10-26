import { NavLink } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { useAppSelector } from '../hooks';
import './NavBar.scss';

const NavBar = () => {
    const itemsInCart = useAppSelector((state) => state.itemsInCart);

    return (
        <nav className='navbar'>
        <ul className='navItems'>
            <NavLink className='navLink logo' to="/" exact>Cool Shop</NavLink>
            <NavLink className='navLink on-hover' to="/shop">Shop</NavLink>
            <NavLink className='navLink on-hover' to="/my-cart">My cart</NavLink>
            <NavLink className='navLink cart-icon' to="/my-cart"><BsCart4 /></NavLink>
            <span className='nav-counter-circle'>{itemsInCart}</span>
        </ul>
        </nav>
    );
}

export default NavBar;