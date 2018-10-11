import React, { Component, Fragment } from 'react';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <Fragment>
        <div className="comment__name">Name: {comment.user}</div>
        <div className="comment__text">Comment: {comment.text}</div>
      </Fragment>
    );
  }
}

export default Comment;
