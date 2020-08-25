import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }
    

    
    render() {
        return (
            <div className='sign-in'>
                <h2>すでにアカウントを持っている場合</h2>
                <span>登録したEメールとパスワードでログインしてください</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="email"
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Signin Google</CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn
