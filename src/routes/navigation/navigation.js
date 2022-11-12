import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';
import { NavigationDiv, LogoContainer, NavLinks, NavLinksContainer } from './navigation.style.js';
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
            <NavigationDiv>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLinks to='/shop' >Shop</NavLinks>
                    <NavLinks to='/contact' >Contact</NavLinks>
                    {currentUser ?
                        (<NavLinks as='span' onClick={signOutUser}>Sign Out</NavLinks>) :
                        (<NavLinks to='/auth' >Sign In</NavLinks>)
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationDiv>
            <Outlet />
        </Fragment >
    );
}

export default Navigation;
