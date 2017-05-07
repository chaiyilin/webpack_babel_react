import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import 'antd/dist/antd.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware));

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    }
});

const Index = () => (
    <div>
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </div>
)

export default Index
