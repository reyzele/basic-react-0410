import React, { Component } from 'react';
import Select from 'react-select';
import ArticleList from './article-list';
import ArticleChart from './articles-chart';
import UserForm from './user-form';
import articles from '../fixtures';

class App extends Component {
  state = {
    selected: null
  };
  render() {
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectionChange}
          isMulti
        />
        <ArticleList articles={articles} />
        <ArticleChart articles={articles} />
      </div>
    );
  }

  handleSelectionChange = (selected) => this.setState({ selected });

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }));
  }
}

export default App;
