import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render (<Provider store={store}>
            <Root />
        </Provider>, document.getElementById('app'));

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextApp = require('./components/Root').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>, document.getElementById('app')
        );
    });
}