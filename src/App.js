import React from 'react';
import Dock from 'react-dock';
//https://medium.com/@zamarrowski/how-to-avoid-react-proptypes-warning-d7ef577ff7fb
//http://stackoverflow.com/questions/43302963/how-to-fix-react-15-5-3-proptypes-deprecated-warning-when-using-create-react-app
import SearchTree from './SearchTree';
import RouterDemo from './RouterDemo';
import Examples from './Examples';

import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

const App = () => {
    return (
        <div>
{/*            <div>
                <Dock position='left' isVisible={true}>
                    <SearchTree/>

                </Dock>
            </div>*/}
            {/*<SearchTree/>*/}
            <Examples/>
        </div>
    );
};

export default App;