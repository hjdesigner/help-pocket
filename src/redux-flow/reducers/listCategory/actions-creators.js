'use strict'
import { ADD_CATEGORY } from './actions'


export const addCategory = ({ id, name }) => ({
  type: ADD_CATEGORY,
  payload: { id, name }
})

