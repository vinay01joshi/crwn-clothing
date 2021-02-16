import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, TitleContainer } from './sign-up.styles'
import { signUpStart } from '../../redux/user/user.action';
const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password does not match. ');
            return;
        }


        signUpStart({ displayName, email, password });
        //const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //await CreateUserProfileDocument(user, { displayName });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <TitleContainer>I do not have account</TitleContainer>
            <span>Signup with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    label='Display Name'
                    value={displayName}
                    onChange={handleChange}
                    required />

                <FormInput
                    type='email'
                    name='email'
                    label='Eamil'
                    value={email}
                    onChange={handleChange}
                    required />

                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    value={password}
                    onChange={handleChange}
                    required />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    value={confirmPassword}
                    onChange={handleChange}
                    required />
                <CustomButton type='submit'>SignUp</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp);