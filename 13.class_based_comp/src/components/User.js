import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// render method je specifican za reakt.. da bi reakt nasao
//sta treba da se renderuju

export default User;
