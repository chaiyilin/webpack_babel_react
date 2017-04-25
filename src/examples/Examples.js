import {Switch, Route} from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';

const Examples = () => (
    <Switch>
        <Route exact path='/HelloWorld' component={() => <HelloWorldList/>}/>


    </Switch>
);

export default Examples;