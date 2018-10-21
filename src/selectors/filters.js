export default (state) => {
  const { articles, filters } = state
  let result

  if (!filters.entities.length && (!filters.date.from && !filters.date.to))
    return articles

  if (!filters.entities.length) {
    result = articles.filter((article) => {
      let date = new Date(article.date)

      return (
        (filters.date.from ? date >= filters.date.from : true) &&
        (filters.date.to ? date <= filters.date.to : true)
      )
    })
  } else {
    result = articles
      .filter(({ id }) => filters.entities.some(({ value }) => id === value))
      .filter((article) => {
        let date = new Date(article.date)

        return (
          (filters.date.from ? date >= filters.date.from : true) &&
          (filters.date.to ? date <= filters.date.to : true)
        )
      })
  }

  return result
}
