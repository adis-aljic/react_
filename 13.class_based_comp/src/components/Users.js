import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';




// dodamo handlere kao metode
// state mora uvijek biti objekat i mora biti state ime propertija
// moramo dodati super da bi pristupili kontruktoru od Comp

/* 
componentDidMount - zove se kada se komponente prvi put renderuje ---useefekt bez dep
componentDidUpdate - zove se kad se komp updejtuje npr state se promjeni i kad se
komponenta re renderuje --- useefekt sa dependecijima
componentWillUnmount  - zove se kad se komponena mice iz Doma -- cleanup fuja u useeffectu



*/

class Users extends Component {
  constructor(){
    super()
    this.state = {
      showUsers : true,

    }
  }

componentDidUpdate() {
  if (this.props.users.length === 0) {
    throw new Error('no user');
  }
}
  
  toggleUsersHandler(){
this.setState (curState =>  {
  return {showUsers : !curState.showUsers}

  })
  }
  render(){
    
    const usersList = (
      <ul>
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
        ))}
    </ul>
  );
  
  return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


 

export default Users;
