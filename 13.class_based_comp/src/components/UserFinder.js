import { Fragment, Component } from 'react';
import ErrorBoundry from './ErrorBoundary';
import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from '../store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
class UserFinder extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }
  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </>
    );
  }
}

export default UserFinder;
