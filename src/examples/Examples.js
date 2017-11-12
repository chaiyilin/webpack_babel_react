import { Switch, Route } from 'react-router-dom'
import React from 'react';
import HelloWorldList from './helloWorld/HelloWorldList';
import TodoApp from './todo';
import RedditAsyn from './reddit_async';
import ContactPage from './reduxForm';
import RefDom from './RefDom';
import RefClass from './RefClass';
import Asyn from './asyn';

import {
    NoPropsAtAll,
    PassingObject,
    PassingOnlyRequiredProperties,
    PassingMapOrArrayOfProperties
} from './passingProps'

// import {
//     AbstractingState,
//     AccessingTheInstanceViaRefs,
//     ManipulatingProps,
//     WrappingTheWrappedComponentWithOtherElements
// } from './hoc/Props_Proxy'


const expense = {
    description: "description",
    category: "category",
    amount: 111,
    doneAt: 222
}
const Examples = () => (
    <Switch>
        <Route exact path='/helloWorld' component={() => <HelloWorldList />} />
        <Route exact path='/todo' component={() => <TodoApp />} />
        <Route exact path='/reduxAsyn' component={() => <RedditAsyn />} />
        <Route exact path='/reduxForm' component={() => <ContactPage />} />
        <Route exact path='/refDom' component={() => <RefDom />} />
        <Route exact path='/RefClass' component={() => <RefClass />} />
        <Route exact path='/asyn' component={() => <Asyn />} />

        <Route exact path='/NoPropsAtAll' component={() => <NoPropsAtAll />} />
        <Route exact path='/PassingObject' component={() => <PassingObject expense={expense} />} />
        <Route exact path='/PassingOnlyRequiredProperties' component={() => <PassingOnlyRequiredProperties expense={expense} />} />
        <Route exact path='/PassingMapOrArrayOfProperties' component={() => <PassingMapOrArrayOfProperties expense={expense} />} />

        {/* <Route exact path='/ManipulatingProps' component={() => <ManipulatingProps />} />
        <Route exact path='/AccessingTheInstanceViaRefs' component={() => <PassingObject />} />
        <Route exact path='/AbstractingState' component={() => <AbstractingState />} />
        <Route exact path='/WrappingTheWrappedComponentWithOtherElements' component={() => <WrappingTheWrappedComponentWithOtherElements />} /> */}

    </Switch>
);

export default Examples;