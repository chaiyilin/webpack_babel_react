import React from 'react';
import HelloWorldList from './HelloWorldList';
import Dock from 'react-dock';
import SearchTree from './SearchTree';

const App = () => {
    return (
        <Dock position='left'>
            <SearchTree></SearchTree>
        </Dock>
    );
};

export default App;