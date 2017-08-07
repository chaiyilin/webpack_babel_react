import { Switch, Route } from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';
import TodoApp from './todo';
import RedditAsyn from './reddit_async';
import ContactPage from './reduxForm';
import RefDom from './RefDom';
import RefClass from './RefClass';
import Asyn from './asyn';

const Examples = () => (
    <Switch>
        <Route exact path='/helloWorld' component={() => <HelloWorldList />} />
        <Route exact path='/todo' component={() => <TodoApp />} />
        <Route exact path='/reduxAsyn' component={() => <RedditAsyn />} />
        <Route exact path='/reduxForm' component={() => <ContactPage />} />
        <Route exact path='/refDom' component={() => <RefDom />} />
        <Route exact path='/RefClass' component={() => <RefClass />} />
        <Route exact path='/asyn' component={() => <Asyn />} />
    </Switch>
);

export default Examples;