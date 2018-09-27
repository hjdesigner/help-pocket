'use strict'
import createReducer from '../create-reducer'
import { ADD_CATEGORY } from './actions'

const initialState = []

const ListCategory = createReducer(initialState, {
  [ADD_CATEGORY]: (state, action) => state.concat({
    id: action.payload.id,
    name: action.payload.name
  })
})

export default ListCategory
