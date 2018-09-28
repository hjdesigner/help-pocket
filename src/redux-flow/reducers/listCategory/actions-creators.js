'use strict'
import axios from 'axios'
import { ADD_CATEGORY } from './actions'

export const addCategory = (id, name) => ({
  type: ADD_CATEGORY,
  payload: { id, name }
})

export const fetchCategories = () => (dispatch) => {
  axios.get('http://localhost:4002/categories')
    .then(response => {
      response.data.items.forEach(item => {
        dispatch(addCategory(item._id, item.name))
      })
    })
    .catch(error => {
      console.log(error)
    })
}
