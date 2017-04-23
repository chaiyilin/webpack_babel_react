import {Switch, Route} from 'react-router-dom'
import React from 'react';
import HelloWorld from './HelloWorld';

const Examples = () => (
    <Switch>
        <Route exact path='/HelloWorld' component={() => <HelloWorld name='a'/>}/>


    </Switch>
);

export default Examples;