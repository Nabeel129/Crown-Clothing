import React, { Fragment, useState } from 'react'
// import { UserContext } from '../../contexts/context';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button';
import FormInput from '../formInput/formInput';
import './signUpForm.styles.scss'



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm Password fields are not the same");
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        }
        catch (error) {
            if (error.code === 400) {
                alert("Email and Password already exists", error.message);
            }

            console.log('Could not Sign Up with this email and password', error.message);
        }
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    return (
        <Fragment>
            <div className="sign-up-container">
                <h2>Don't have an Account?</h2>
                <span>SignUp with you Email and Password</span>
                <form onSubmit={handleSubmit} >
                    <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName} />
                    <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
                    <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                    <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </Fragment>
    )
}

export default SignUpForm