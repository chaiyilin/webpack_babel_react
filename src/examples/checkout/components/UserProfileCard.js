import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class UserProfileCard extends Component {

  render() {
    const {cardStyle, cardContainerStyle, logout,username} = this.props;
    return (
      <Card style={cardStyle} containerStyle={cardContainerStyle}>
        <CardHeader
          title={`Hello, ${username}`}
        />
        <CardActions>
          <FlatButton primary={true} label="Log out" onTouchTap={() => {logout()}}/>
        </CardActions>
      </Card>
    )
  }
}

UserProfileCard.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  version: PropTypes.object
};

UserProfileCard.defaultProps = {
  cardStyle: {
    boxShadow: 'none'
  },
  cardContainerStyle: {
    maxWidth: '335px'
  },
  version: {ui: '', mw: ''},
  username:''
};

export default UserProfileCard;
