import {Switch, Route} from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';
import TodoApp from './todo';
import Asyn from './reddit_async';

const Examples = () => (
    <Switch>
        <Route exact path='/helloWorld' component={() => <HelloWorldList/>}/>
        <Route exact path='/todo' component={() => <TodoApp/>}/>
        <Route exact path='/reduxAsyn' component={() => <Asyn/>}/>

    </Switch>
);

export default Examples;