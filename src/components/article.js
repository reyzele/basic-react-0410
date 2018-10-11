import React, { PureComponent, Fragment } from 'react';
import CommentsList from './comments-list';
import openCloseDecorator from '../decorators/openCloseDecorator';

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props;
    const text = isOpen ? 'close' : 'open';

    return (
      <div>
        <h3 className="article__title">{article.title}</h3>
        <button onClick={this.handleOpenBody}>{text}</button>
        {this.body}
      </div>
    );
  }

  handleOpenBody = () => {
    const { article, toggleOpenItem } = this.props;

    toggleOpenItem(article.id);
  };

  handleOpenComments = () => {
    const { toggleItem } = this.props;

    toggleItem();
  };

  get body() {
    const { isOpen, article, openItem } = this.props;
    const buttonText = openItem ? 'Close comments' : 'Open comments';

    if (!isOpen) return null;
    return (
      <Fragment>
        <section className="article__body">
          <div>{article.text}</div>
          <button onClick={this.handleOpenComments}>{buttonText}</button>
          {openItem && <CommentsList article={article} />}
        </section>
      </Fragment>
    );
  }
}

export default openCloseDecorator(Article);
