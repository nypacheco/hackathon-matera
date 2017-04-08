import React from 'react';
import { Link } from 'react-router';
import BalancePage from '../balance/BalancePage';

class LoggedPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            detail: false
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.setState({detail: true});
    }
    render() {
        const logged = (
            <div className="boxes">
                <div className="box-link">
                    <button onClick={this.onClick} className="text-box" to="/balance">
                        <i className="fa fa-balance-scale icon-welcome" aria-hidden="true"></i>
                        <h4>Saldo</h4>
                    </button>
                </div>
                <div className="box-link">
                    <Link className="text-box" to="/extract">
                        <i className="fa fa-sticky-note-o icon-welcome" aria-hidden="true"></i>
                        <h4>Extrato</h4>
                    </Link>
                </div>
                <div className="box-link">
                    <Link className="text-box" to="/">
                        <i className="fa fa-money icon-welcome" aria-hidden="true"></i>
                        <h4>Pagamento</h4>
                    </Link>
                </div>
                <div className="box-link">
                    <Link className="text-box" to="/">
                        <i className="fa fa-archive icon-welcome" aria-hidden="true"></i>
                        <h4>Poupança</h4>
                    </Link>
                </div>
            </div>
        );

        return (
            <div className="logged">
                <div className="container">
                    <div className="row welcome">
                        <h3 className="welcome">Seja bem vindo, {this.state.username}</h3>
                            {!this.state.detail ? logged : <BalancePage />}
                    </div>
                </div>
            </div>
        )
    }
};

export default LoggedPage;