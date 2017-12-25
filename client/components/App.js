import React from 'react';
import NavigationBar from './NavigationBar';
import { Footer } from './footer/Footer';
import FlashMessagesList from './flash/FlashMessagesList';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <NavigationBar />
                <FlashMessagesList />
                <div className="ui container" style={{marginTop: '50px'}}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}