import React from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, TitleContainer } from './sign-up.styles'
import { signUpStart } from '../../redux/user/user.action';
class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        console.log(this.state);
        if (password !== confirmPassword) {
            alert('Password does not match. ');
            return;
        }


        signUpStart({ displayName, email, password });
        //const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //await CreateUserProfileDocument(user, { displayName });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>I do not have account</TitleContainer>
                <span>Signup with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Display Name'
                        value={displayName}
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type='email'
                        name='email'
                        label='Eamil'
                        value={email}
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required />
                    <CustomButton type='submit'>SignUp</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp);