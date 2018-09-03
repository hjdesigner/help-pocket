import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD } from './actions'
import ErrorRegistration from './index'

it('Should change the initial state of the name from false to true', () => {
  const before = deepFreeze({
    name: false,
    email: false,
    password: false
  })
  const action = deepFreeze({
    type: CHANGE_NAME,
    payload: {
      name: true
    }
  })
  const after = {
    name: true,
    email: false,
    password: false
  }
  expect(ErrorRegistration(before, action)).to.be.deep.equal(after)
})

it('Should change the initial state of the email from false to true', () => {
  const before = deepFreeze({
    name: true,
    email: false,
    password: false
  })
  const action = deepFreeze({
    type: CHANGE_EMAIL,
    payload: {
      email: true
    }
  })
  const after = {
    name: true,
    email: true,
    password: false
  }
  expect(ErrorRegistration(before, action)).to.be.deep.equal(after)
})

it('Should change the initial state of the password from false to true', () => {
  const before = deepFreeze({
    name: true,
    email: true,
    password: false
  })
  const action = deepFreeze({
    type: CHANGE_PASSWORD,
    payload: {
      password: true
    }
  })
  const after = {
    name: true,
    email: true,
    password: true
  }
  expect(ErrorRegistration(before, action)).to.be.deep.equal(after)
})
