import React, { Fragment, useState, useContext } from 'react'
import { signInWithGooglePopup, signInUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button';
import FormInput from '../formInput/formInput';
import './signInForm.styles.scss'
import { UserContext } from '../../contexts/context';


const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            alert('User Signed In Successfully');
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
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        await createUserDocumentFromAuth(user);

    }
    return (
        <Fragment>
            <div className="sign-up-container">
                <h2>Already have an Account?</h2>
                <span>SignIn with you Email and Password</span>
                <form onSubmit={handleSubmit} >
                    <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
                    <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                    <div className="btn-container">
                        <Button type='submit'>Sign In</Button>
                        <Button buttonType='google' onClick={LogGoogleUser} >Google Sign In</Button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default SignInForm