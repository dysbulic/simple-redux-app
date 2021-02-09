import { connect, Provider } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    nextPage: state => state + 1,
    previousPage: state => Math.min(1, state - 1)
  }
})

const store = configureStore({
  reducer: pageSlice.reducer
})

const ShowImpl = ({ page }) => {
  return <h1>{page}</h1>
}

const Show = connect(page => ({ page }))(ShowImpl)

const Next = () => (
  <button onClick={() => store.dispatch(pageSlice.actions.nextPage()) }>+</button>
)

export default () => (
  <Provider store={store}>
    <Show/>
    <Next/>
  </Provider>
)