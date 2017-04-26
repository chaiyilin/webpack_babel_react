import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
//http://stackoverflow.com/questions/35442174/javascript-import-from-folder-with-index-js
import reducer from './reducers'

const store = createStore(reducer)

const Index = ()=>(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
)

export default Index
