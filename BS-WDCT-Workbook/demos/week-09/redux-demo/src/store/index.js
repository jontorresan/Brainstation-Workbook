import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// Actions
const Increment = 'INCREMENT'
const Decrement = 'DECREMENT'
const SetCounter = 'SET_COUNTER'
const FetchCounterLoading = 'FETCH_COUNTER_LOADING'
const FetchCounterSuccess = 'FETCH_COUNTER_SUCCESS'

export const increment = () => ({
  type: Increment
})

export const decrement = () => ({
  type: Decrement
})

export const setCounter = number => ({
  type: SetCounter,
  payload: {
    number
  }
})

export const fetchCounterLoading = () => ({
  type: FetchCounterLoading
})

export const fetchCounterSuccess = number => ({
  type: FetchCounterSuccess,
  payload: {
    number
  }
})

// Asynchronous Action. Uses regular actions
// to update the store when the data is received.
export const fetchCounter = () => {
  store.dispatch(fetchCounterLoading())
  setTimeout(() => {
    store.dispatch(fetchCounterSuccess(
      Math.floor(Math.random()*100) + 1
    ))
  }, 1000)
}

// Initial State
const initialCounterState = {
  loading: false,
  counter: 0
}

// Reducer
const counterReducer = (currentState = initialCounterState, action) => {
  switch(action.type) {
    case Increment:
      return { 
        ...currentState,
        counter: currentState.counter + 1
      }
    case Decrement:
      return { 
        ...currentState,
        counter: currentState.counter - 1
      }
    case SetCounter:
      return { 
        ...currentState,
        counter: action.payload.number
      }
    case FetchCounterLoading:
      return { 
        ...currentState,
        loading: true
      }
    case FetchCounterSuccess:
      return { 
        ...currentState,
        counter: action.payload.number,
        loading: false
      }
    default:
      return currentState
  }
}

// Store
const store = createStore(
  counterReducer,
  applyMiddleware(logger)
)

export default store