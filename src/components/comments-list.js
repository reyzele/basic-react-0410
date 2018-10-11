import React, { Component } from 'react';
import Comment from './comment';

class CommentsList extends Component {
  render() {
    const { article } = this.props;

    return article.comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));
  }
}

export default CommentsList;
