import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';
import './navigation.style.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-drop-down/cart-drop-down';


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop' >Shop</Link>
                    <Link className='nav-link' to='/contact' >Contact</Link>
                    {currentUser ?
                        (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) :
                        (<Link className='nav-link' to='/auth' >Sign In</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment >
    );
}

export default Navigation;
