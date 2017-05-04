import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import preloadedState from './preloadedState';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducers,preloadedState,applyMiddleware(...middleware));

const Index = ()=>(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
)

export default Index
