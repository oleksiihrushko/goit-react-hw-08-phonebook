import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: 'https://img.icons8.com/officel/2x/avatar.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
