import { Fragment } from 'react';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm/signUpForm';
import './authentication.styles.scss';

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


const Authentication = () => {

    return (
        <Fragment>
            <div className="authentication-container">
                <SignInForm />
                <SignUpForm />
            </div>
        </Fragment>
    );
}

export default Authentication;