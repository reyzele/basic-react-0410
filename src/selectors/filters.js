export default (state) => {
  const { articles, filters } = state
  let result

  const filterDate = date => {
    const { from } = filters.date
    const { to } = filters.date
    let _date

    _date = new Date(date)

    return (
      (from ? _date >= filters.date.from : true) &&
      (to ? _date <= filters.date.to : true)
    )
  }

  if (!filters.entities.length && (!filters.date.from && !filters.date.to))
    return articles

  if (!filters.entities.length) {
    result = articles.filter(({ date }) => filterDate(date))
  } else {
    const entities = filters.entities

    result = articles
      .filter(({ id }) => entities.some(({ value }) => id === value))
      .filter(({ date }) => filterDate(date))
  }

  return result
}
