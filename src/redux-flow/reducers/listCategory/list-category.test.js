import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { ADD_CATEGORY, FETCH_CATEGORY } from './actions'
import ListCategory from './index'

it('Should add category item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_CATEGORY,
    payload: {
      id: 'abc01',
      name: 'Transporte'
    }
  })
  const after = [
    {
      id: 'abc01',
      name: 'Transporte'
    }
  ]
  expect(ListCategory(before, action)).to.be.deep.equal(after)
})

it('Should add a new category item', () => {
  const before = deepFreeze([
    {
      id: 'abc01',
      name: 'Transporte'
    }
  ])
  const action = deepFreeze({
    type: ADD_CATEGORY,
    payload: {
      id: 'abc02',
      name: 'Casa'
    }
  })
  const after = [
    {
      id: 'abc01',
      name: 'Transporte'
    },
    {
      id: 'abc02',
      name: 'Casa'
    }
  ]
  expect(ListCategory(before, action)).to.be.deep.equal(after)
})

it('Should add fetch all category item', () => {
  const data = [
    {
      id: 'abc01',
      name: 'Transporte'
    },
    {
      id: 'abc02',
      name: 'Casa'
    }
  ]
  const before = deepFreeze([])
  const action = deepFreeze({
    type: FETCH_CATEGORY,
    payload: data
  })
  const after = [
    {
      id: 'abc01',
      name: 'Transporte'
    },
    {
      id: 'abc02',
      name: 'Casa'
    }
  ]
  expect(ListCategory(before, action)).to.be.deep.equal(after)
})