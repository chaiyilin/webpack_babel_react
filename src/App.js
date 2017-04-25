import React from 'react';
//https://medium.com/@zamarrowski/how-to-avoid-react-proptypes-warning-d7ef577ff7fb
//http://stackoverflow.com/questions/43302963/how-to-fix-react-15-5-3-proptypes-deprecated-warning-when-using-create-react-app
import SearchTree from './tree/SearchTree';
import Examples from './examples/Examples';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ReactGridLayout from 'react-grid-layout';

const App = () => {
    var layout = [
        {i: 'left', x: 0, y: 0, w: 3, h: 20, static: true},
        {i: 'right', x: 4, y: 0, w: 9, h: 20, static: true}
    ];

    return (
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key={'left'}>
                <SearchTree/>
            </div>
            <div key={'right'}>
                <Examples/>
            </div>
        </ReactGridLayout>
    );
};

export default App;