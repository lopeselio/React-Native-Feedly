// import { registerRootComponent } from 'expo';
// import React from 'react';
// import App from './src/App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux'
// import promiseMiddleware from 'redux-promise';
// import reducers from './src/store/reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(promiseMiddleware))
// )

// const reduxApp = () => (
//     <Provider store={createStoreWithMiddleware}>
//         <App/>
//     </Provider>
// )

// // registerRootComponent calls AppRegistry.registerComponent('main', () => reduxApp);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// registerRootComponent(reduxApp);

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './src/store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
)
const appRedux = () => {
    return(
        <Provider store={createStoreWithMiddleware}>
            <App />
        </Provider>
    )
    
}

AppRegistry.registerComponent(appName, () => appRedux);