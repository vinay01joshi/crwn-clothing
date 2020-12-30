import React from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, TitleContainer, ButtonContainer } from './sign-in.styles'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <TitleContainer>I already have an Account</TitleContainer>
                <span>Sign-In with your email and passwrod</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        label='Email'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        label='password'
                        required
                        handleChange={this.handleChange}
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

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);