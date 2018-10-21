import { FILTER_ARTICLE, DELETE_ARTICLE, FILTER_DATE } from '../constants'
const initialState = {
  entities: [],
  date: {
    from: null,
    to: null
  }
}

export default (filtersState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLE:
      return {
        ...filtersState,
        entities: payload ? payload : initialState
      }
    case DELETE_ARTICLE:
      return {
        ...filtersState,
        entities: filtersState.entities.filter(
          (item) => item.value !== payload.id
        )
      }
    case FILTER_DATE:
      const date = payload.date

      return {
        ...filtersState,
        date: {
          from: date.from,
          to: date.to
        }
      }
    default:
      return filtersState
  }
}
