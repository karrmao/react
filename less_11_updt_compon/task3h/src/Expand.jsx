import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  handlClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { children, title } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.handlClick} className="expand__toggle-btn">
            <i
              className={isOpen ? 'fas fa-duotone fa-chevron-up' : 'fas fa-duotone fa-chevron-down'}
            ></i>
          </button>
        </div>
        <div className="expand__content">{isOpen ? children : null}</div>
      </div>
    );
  }
}
export default Expand;
