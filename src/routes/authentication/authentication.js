import { Fragment } from 'react';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm/signUpForm';
import { AuthenticationContainer } from './authentication.styles.js';

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


const Authentication = () => {

    return (
        <Fragment>
            <AuthenticationContainer>
                <SignInForm />
                <SignUpForm />
            </AuthenticationContainer>
        </Fragment>
    );
}

export default Authentication;