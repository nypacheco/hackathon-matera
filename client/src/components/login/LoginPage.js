import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{
    render() {
        return (
            <div className="row page-login">
                <LoginForm />
            </div>
        )
    }
};

export default LoginPage;