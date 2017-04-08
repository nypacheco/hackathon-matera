import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">NYPACHECO</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/link1">Link1</Link></li>
                            <li><Link to="/link2">Link2</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavigationBar;