import React from 'react'

import './Auth.styles.scss';

import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

const Auth = props => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <Signup />
        </div>
    )
}


export default Auth
