import React from 'react';
import Dock from 'react-dock';
//https://medium.com/@zamarrowski/how-to-avoid-react-proptypes-warning-d7ef577ff7fb
//http://stackoverflow.com/questions/43302963/how-to-fix-react-15-5-3-proptypes-deprecated-warning-when-using-create-react-app
import SearchTree from './SearchTree';

const App = () => {
    return (
        <Dock position='left'>
            <SearchTree></SearchTree>
        </Dock>
    );
};

export default App;