import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth, CreateUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss'

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

        const { displayName, email, password, confirmPassword } = this.state;
        console.log(this.state);
        if (password !== confirmPassword) {
            alert('Password does not match. ');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log('Error occur while creating user', err)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have account</h2>
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
            </div>
        )
    }
}

export default SignUp;