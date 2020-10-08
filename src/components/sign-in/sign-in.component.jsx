import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an Account</h2>
                <span>Sign-In with your email and passwrod</span>
                <form>
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
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div >
        )
    }

}

export default SignIn;