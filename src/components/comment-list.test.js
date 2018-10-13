import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { CommentList } from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comments', () => {
    const container = shallow(
      <CommentList comments={articles[0].comments} isOpen={true} />
    )

    expect(container.find('.test--comment-list__item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should all comments must be closed by default', () => {
    const container = render(<ArticleListWithAccordion isOpen={true} />)

    expect(container.find('.test--comment-list__item').length).not.toBeLessThan(
      0
    )
  })

  it('should open comment on click', () => {
    const container = mount(
      <ArticleListWithAccordion comments={articles[0].comments} />
    )

    expect(container.find('.test--comment__list').length).toEqual(0)

    container
      .find('.test--comment__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__list').length).toEqual(1)
  })
})
