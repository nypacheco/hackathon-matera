import React from 'react';
import { Link, browserHistory } from 'react-router';

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        localStorage.removeItem("username");
        browserHistory.push("/");
    }
    render() {
        const user = localStorage.getItem('username');

        const logged = (<li onClick={this.onClick}><a>Sair</a></li>);
        const notLogged = (<li><Link to="/login">Acessar minha conta</Link></li>);

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand navbar-link logo-text" to="/">Maujor</Link>
                        <button className="navbar-toggle collapsed">
                            <Link to="/login">Acessar minha conta</Link>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav navbar-right">
                            {user ? logged : notLogged}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavigationBar;