'use strict'
import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD } from './actions'

export const changeName = (status) => ({
  type: CHANGE_NAME,
  payload: {
    name: status
  }
})

export const changeEmail = (status) => ({
  type: CHANGE_EMAIL,
  payload: {
    email: status
  }
})

export const changePassword = (status) => ({
  type: CHANGE_PASSWORD,
  payload: {
    password: status
  }
})
