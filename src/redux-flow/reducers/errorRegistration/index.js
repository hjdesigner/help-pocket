'use strict'
import createReducer from '../create-reducer'
import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD } from './actions'

const initialState = {
  name: false,
  email: false,
  password: false
}

const ErrorRegistration = createReducer(initialState, {
  [CHANGE_NAME]: (state, action) => ({
    ...state,
    name: action.payload.name
  }),
  [CHANGE_EMAIL]: (state, action) => ({
    ...state,
    email: action.payload.email
  }),
  [CHANGE_PASSWORD]: (state, action) => ({
    ...state,
    password: action.payload.password
  })
})

export default ErrorRegistration
