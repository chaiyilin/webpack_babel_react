import {Switch, Route} from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';
import TodoApp from './todo';
import Asyn from './reddit_async';
import ContactPage from './reduxForm';

const Examples = () => (
    <Switch>
        <Route exact path='/helloWorld' component={() => <HelloWorldList/>}/>
        <Route exact path='/todo' component={() => <TodoApp/>}/>
        <Route exact path='/reduxAsyn' component={() => <Asyn/>}/>
        <Route exact path='/reduxForm' component={() => <ContactPage/>}/>
    </Switch>
);

export default Examples;