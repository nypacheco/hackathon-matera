import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand navbar-link" to="/">Maujor</Link>
                        <button className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Acessar minha conta</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavigationBar;