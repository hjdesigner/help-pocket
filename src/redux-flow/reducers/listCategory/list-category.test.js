import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { ADD_CATEGORY } from './actions'
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