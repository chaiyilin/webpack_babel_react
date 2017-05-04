import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {login} from '../actions/actions';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    });
    this.validateRequired('username', event.target.value);
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
    this.validateRequired('password', event.target.value);
  }

  validateRequired(fieldName, value) {
    const errorMessage = `Please enter ${fieldName}`;
/*    let field = '';
    if (!_.isNil(value)) {
      field = value;
    } else {
      field = this.state[fieldName];
    }*/
    let error = {};
    error[`${fieldName}Error`] = value.length > 0 ? false : errorMessage;
    this.setState(error);
    return value.length > 0;
  }

  validateForm() {
    if (this.validateRequired('username') && this.validateRequired('password')) {
      this.props.login();
    }
  }

  onSubmit(e) {
    if (e.key === 'Enter') {
      this.validateForm()
    }
  }

  closeTimedOutMessage() {
    this.props.dispatch(toggleTimedOutMessage(false));
  }

  render() {
    const { ui, authentication, loginFormContainerStyle, loginFormStyle, fieldsContainerStyle, buttonStyle } = this.props;
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
        <Snackbar
          message={'Your session has timed out.'}
          open={authentication.showTimedOutMessage}
          autoHideDuration={4000}
          onRequestClose={this.closeTimedOutMessage.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { ui, authentication } = state;
  return {
    ui,
    authentication
  }
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ui: PropTypes.object.isRequired,
  authentication: PropTypes.object.isRequired
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

export default connect(mapStateToProps,{login})(Login);
