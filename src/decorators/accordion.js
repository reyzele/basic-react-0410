//HOC === Higher Order Component == Decorator
import React, { Component } from 'react';

const accordionDecorator = (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    };

    toggleOpenItem = (openItemId) => {
      this.state.openItemId !== openItemId
        ? this.setState({ openItemId })
        : this.setState({ openItemId: null });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      );
    }
  };

export default accordionDecorator;
