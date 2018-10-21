import { createStore, compose } from 'redux'
import reducer from '../reducer'

const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
)

export default store
