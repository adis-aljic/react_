import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundry;
