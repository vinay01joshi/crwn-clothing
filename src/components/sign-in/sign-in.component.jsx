import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, TitleContainer, ButtonContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }



    return (
        <SignInContainer>
            <TitleContainer>I already have an Account</TitleContainer>
            <span>Sign-In with your email and passwrod</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='password'
                    required
                    handleChange={handleChange}
                />
                <ButtonContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>Sign In with Google</CustomButton>
                </ButtonContainer>
            </form>
        </SignInContainer >
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);