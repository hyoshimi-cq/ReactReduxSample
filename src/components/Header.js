import './../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="cp_bgpattern07">
                <Link to="/" >
                    {this.props.appName.toLowerCase()}
                </Link>
            </nav>
        );
    }
}

export default Header;
