import React, { Component } from 'react';

const withActions = (ACTION_HANDLERS) => (ComposedComponent) => {
  class WithActions extends Component {
    getState = () => ({ ...this.props, ...this.state });

    handleAction = (action) => {
      const funcToExec = ACTION_HANDLERS[action.type];
      funcToExec(action, { getState: this.getState, setState: this.setState.bind(this) });
    }

    render() {
      return <ComposedComponent {...this.getState()} onAction={this.handleAction} />;
    }
  }
  return WithActions;
};

export default withActions;
