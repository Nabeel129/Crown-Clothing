import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assests/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop' >Shop</Link>
                    <Link className='nav-link' to='/contact' >Contact</Link>
                    <Link className='nav-link' to='/auth' >Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment >
    );
}

export default Navigation;