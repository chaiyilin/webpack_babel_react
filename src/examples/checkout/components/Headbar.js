import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home.js';
import Popover from 'material-ui/Popover/Popover';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey50} from 'material-ui/styles/colors';
import {logoutRequest} from '../actions/authentication';
import UserProfileCard from './UserProfileCard'

export class HeadBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    }
  }

  logout() {
    const {dispatch} = this.props;
    dispatch(logoutRequest()).then(this.goToDashboard.bind(this));
  }

  goToDashboard() {
    hashHistory.push('/');
  }

  openPopover(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      popoverOpen: true,
      anchorEl: event.currentTarget
    })
  }

  closePopover() {
    this.setState({
      ...this.state,
      popoverOpen: false
    })
  }

  render() {
    const { authentication } = this.props;
    const { popoverOpen, anchorEl } = this.state;

    return (
      <div>
        <AppBar
          style={{position: 'fixed'}}
          title={'Checkout'}
          zDepth={1}
          iconElementLeft={<IconButton onTouchTap={this.goToDashboard.bind(this)}><ActionHome/></IconButton>}
          iconElementRight={this.props.authentication.authenticated ? <IconButton onTouchTap={this.openPopover}><MoreVertIcon color={grey50}/></IconButton> : null}/>
        <Popover
          open={popoverOpen}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.closePopover}
        >
          <UserProfileCard logout={this.logout} username={authentication.currentUserName}/>
        </Popover>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {authentication} = state;
  return {
    authentication
  }
};

HeadBar.propTypes = {
  authentication: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(HeadBar);
