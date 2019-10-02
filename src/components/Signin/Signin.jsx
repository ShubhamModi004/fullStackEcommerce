import React, { Component } from 'react'

import './Signin.styles.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

// firebase 
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={(e) => this.handleChange(e)}
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label='email'
                    />
                    <FormInput
                        handleChange={(e) => this.handleChange(e)}
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
