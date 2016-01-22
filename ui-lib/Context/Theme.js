import React from 'react';

export default class Theme extends React.Component {

  static childContextTypes = {
    theme: React.PropTypes.object,
  };

  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return <div>{ this.props.children }</div>;
  }
}
