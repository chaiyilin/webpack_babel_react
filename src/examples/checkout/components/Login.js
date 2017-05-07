import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {login} from '../actions';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import productsWithPricingRuleSelector from '../selectors'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    getChildContext = () => {
        return {muiTheme: getMuiTheme(baseTheme)};
    };

    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
        this.validateRequired('username', event.target.value);
    };

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
        this.validateRequired('password', event.target.value);
    };

    validateRequired = (fieldName, value) => {
        const errorMessage = `Please enter ${fieldName}`;
        let field = '';
        if (!_.isNil(value)) {
            field = value;
        } else {
            field = this.state[fieldName];
        }
        let error = {};
        error[`${fieldName}Error`] = value.length > 0 ? false : errorMessage;
        this.setState(error);
        return value.length > 0;
    };

    validateForm = () => {
        let valid = true;
        valid = this.validateRequired('username', this.state.username) && valid;
        valid = this.validateRequired('password', this.state.password) && valid;
        if (valid) {
            this.props.login(this.state.username, this.state.password);
        }
    }

    onSubmit = (e) => {
        if (e.key === 'Enter') {
            this.validateForm()
        }
    }

    render() {
        const {loginFormContainerStyle, loginFormStyle, fieldsContainerStyle, buttonStyle} = this.props;
        return (
            <div style={loginFormContainerStyle}>
                <Paper style={loginFormStyle} zDepth={3}>
                    <div style={fieldsContainerStyle}>
                        <TextField floatingLabelText="User Name"
                                   value={this.state.username}
                                   onChange={this.usernameChange}
                                   onKeyDown={this.onSubmit}
                                   errorText={this.state.usernameError}/>
                        <TextField floatingLabelText="Password" type="password"
                                   value={this.state.password}
                                   onChange={this.passwordChange}
                                   onKeyDown={this.onSubmit}
                                   errorText={this.state.passwordError}/>
                        <RaisedButton label='Login'
                                      labelPosition={'before'}
                                      fullWidth={true}
                                      primary={true}
                                      style={buttonStyle}
                                      onTouchTap={this.validateForm}/>
                    </div>
                </Paper>

            </div>
        )
    }
}

Login.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Login.defaultProps = {
    loginFormContainerStyle: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginFormStyle: {
        width: 'auto',
        marginTop: '-30vh'
    },
    fieldsContainerStyle: {
        padding: '0 20px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonStyle: {
        marginTop: '25px'
    }
};

export default connect(null, {login})(Login);
