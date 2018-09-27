'use strict'
import { combineReducers } from 'redux'
import ErrorRegistration from './errorRegistration'
import ListCategory from './listCategory'

export default combineReducers({
  ErrorRegistration,
  ListCategory
})
