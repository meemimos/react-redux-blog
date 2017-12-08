import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <div style={{paddingBottom: "10px"}}>
                    <div className="ui two column centered grid">
                        <div className="column" style={{textAlign: "center", marginTop: "100px"}}>
                            <a href="http://github.com/meemimos">@meemimos</a> | © 2017
                        </div>
                    </div>
            </div>
        );
    }
}