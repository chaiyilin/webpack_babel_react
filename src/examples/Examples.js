import {Switch, Route} from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';
import TodoApp from './todo';

const Examples = () => (
    <Switch>
        <Route exact path='/HelloWorld' component={() => <HelloWorldList/>}/>
        <Route exact path='/Todo' component={() => <TodoApp/>}/>

    </Switch>
);

export default Examples;