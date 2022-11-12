import React, { Fragment, useState } from 'react'
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import FormInput from '../formInput/formInput';
import { SignInContainer, H2, BtnContainer } from './signInForm.styles.js'
// import { UserContext } from '../../contexts/context';


const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            alert('User Signed In Successfully', user);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User Not Found', error.code);
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect Password', error.code);
                    break;
                default:
                    console.log('Could not Sign In with this email and password', error.message);
            }
            resetFormFields();
        }
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    //Logging In using Google Authenticaion
    const LogGoogleUser = async () => {
        // const { user } = await signInWithGooglePopup();
        await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user);
        // setCurrentUser(user);

    }
    return (
        <Fragment>
            <SignInContainer>
                <H2>Already have an Account?</H2>
                <span>SignIn with you Email and Password</span>
                <form onSubmit={handleSubmit} >
                    <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
                    <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                    <BtnContainer>
                        <Button type='submit'>Sign In</Button>
                        <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={LogGoogleUser} >Google Sign In</Button>
                    </BtnContainer>
                </form>
            </SignInContainer>
        </Fragment>
    )
}

export default SignInForm