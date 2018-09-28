'use strict'
import axios from 'axios'
import { ADD_CATEGORY, FETCH_CATEGORY } from './actions'

export const addCategory = (id, name) => ({
  type: ADD_CATEGORY,
  payload: { id, name }
})

export const allFetchCategory = (item) => ({
  type: FETCH_CATEGORY,
  payload: item
})

export const fetchCategories = () => (dispatch) => {
  axios.get('http://localhost:4002/categories')
    .then(response => {
      const newItem = []
      response.data.items.forEach(item => {
        newItem.push({id: item._id, name: item.name})
      })
      dispatch(allFetchCategory(newItem))
    })
    .catch(error => {
      console.log(error)
    })
}
