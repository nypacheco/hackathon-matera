import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../../actions';
import TextFieldGroup from '../common/TextFieldGroup';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        this.props.login(this.state).then(
            (res) => console.log(res),
            (err) => browserHistory.push("/logged")
        );
    }
    render() {
        return (
            <div className="login-dark">
                <form onSubmit={this.onSubmit}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group">
                        <TextFieldGroup
                            label="Username"
                            value={this.state.username}
                            onChange={this.onChange}
                            type="text"
                            field="username"/>
                    </div>
                    <div className="form-group">
                        <TextFieldGroup
                            label="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            field="password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Logar</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default connect(null, {login})(LoginForm);