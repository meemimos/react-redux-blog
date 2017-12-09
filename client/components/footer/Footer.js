import React from 'react';
import { Link } from 'react-router';

export class Footer extends React.Component {
    render() {
        return(
            <div style={{paddingBottom: "10px"}}>
                    <div className="ui two column centered grid">
                        <div className="column" style={{textAlign: "center", marginTop: "30px"}}>
                            <Link to="/">Blog</Link> by <a href="http://github.com/meemimos">@meemimos</a> | © 2017, Empresa
                        </div>
                    </div>
            </div>
        );
    }
}