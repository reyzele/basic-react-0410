import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import CSSTransition from 'react-addons-css-transition-group'
import toggleOpen from '../decorators/toggleOpen'
import './comment.css'

export class CommentList extends Component {
  /*  static defaultProps = {
    comments: []
  } */

  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'

    return (
      <div>
        <button className="test--comment__btn" onClick={toggleOpen}>
          {text}
        </button>
        <CSSTransition
          transitionName="example"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={600}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="test--comment__list">
        {comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
