import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
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
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        label='password'
                        required />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }

}

export default SignIn;