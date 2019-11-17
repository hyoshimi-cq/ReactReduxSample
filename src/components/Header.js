import './../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="cp_bgpattern07" >
                <div className="navbar_container">
                    <Link to="/" className="navbar_app" >
                        { this.props.appName }
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Header;