import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import HeadBar from './headbar';
import Login from './login';
import Products from './Products';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        const app = (
            <div>
                {/*<HeadBar/>*/}
                <Products/>
            </div>
        );

        return (
            currentUser ? app : (<Login/>)
        )
    }
}

const mapStateToProps = state => {
    const { currentUser } =  state;
    return {
        currentUser
    }
};

/*App.propTypes = {
    authentication: PropTypes.object.isRequired
};*/

export default connect(mapStateToProps)(App);
