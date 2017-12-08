import React from 'react';
import { Link } from 'react-router';

export default class Navigationbar extends React.Component {
    render() {
        return(
            <div className="ui container">
                <div className="ui menu">
                    <div className="header item">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className="right menu">
                        <Link to="signup" className="ui item">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}