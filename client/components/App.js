import React from 'react';
import NavigationBar from './NavigationBar';
import { Footer } from './footer/Footer';
export default class App extends React.Component {
    render() {
        return(
            <div>
                <NavigationBar />
                <div className="ui container" style={{marginTop: '50px'}}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}