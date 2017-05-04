import React,{Component} from 'react'
import PropTypes from 'prop-types';
import HeadBar from './headbar';
import Login from './login';

class App extends Component {

    componentWillMount() {
        this.props.dispatch(checkAuth());
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { authentication } = this.props;
        const app = (
            <div>
                <HeadBar/>
                {this.props.children}
            </div>
        );

        return (
            authentication.authenticated ? app : (<Login/>)
        )
    }
}

const mapStateToProps = state => {
    const { authentication } = state;
    return {
        authentication
    }
};

App.propTypes = {
    authentication: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
