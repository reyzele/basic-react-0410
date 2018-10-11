import React, { Component } from 'react';

const openCloseDecorator = (OriginalComponent) =>
  class Decorator extends Component {
    state = {
      openItem: false
    };

    toggleOpenItem = () => {
      this.setState({
        openItem: !this.state.openItem
      });
    };

    static getDerivedStateFromProps(nextProps) {
      const { isOpen } = nextProps;

      if (!isOpen) {
        return { openItem: false };
      } else {
        return null;
      }
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleItem={this.toggleOpenItem}
          openItem={this.state.openItem}
        />
      );
    }
  };

export default openCloseDecorator;
