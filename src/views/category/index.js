'use strict'
import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addCategory } from 'reducers/listCategory/actions-creators'
import Nav from 'components/nav'

class Category extends PureComponent {
  componentDidMount () {
    this.props.fetchCategory()
  }
  render () {
    return (
      <CategoryContainer>
        <Container>
          <Nav />
          <ListCategory>
            <ListCategoryHeader>
              <ListCategoryTitle>Categorias</ListCategoryTitle>
              <ListCategoryAdd>Adicionar</ListCategoryAdd>
            </ListCategoryHeader>
            <ListCategories>
              <ListCategoryText>Transporte</ListCategoryText>
              <ListCategoryText>Casa</ListCategoryText>
              <ListCategoryText>Mercado</ListCategoryText>
            </ListCategories>
          </ListCategory>
        </Container>
      </CategoryContainer>
    )
  }
}

const CategoryContainer = styled.main``
const Container = styled.div`
  max-width: 1360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
const ListCategory = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #e6e6e6;
  padding: 10px;
`
const ListCategoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const ListCategoryTitle = styled.h2`
  font-size: 1em;
`
const ListCategoryAdd = styled.button`
  background-color: #4664d3;
  border: 0;
  color: #FFF;
  padding: 5px 10px;
`
const ListCategories = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
const ListCategoryText = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
  font-size: .8em;
  &:last-child {
    border-bottom: 0;
  }
`

const mapDispatchToProps = (dispatch) => ({
  fetchCategory: () => {
    axios.get('http://localhost:4002/categories')
    .then(response => {
      response.data.items.forEach(item => {
        const id = '01'
        const name = 'item.name';
        console.log(id + '   ' + name)
        dispatch(addCategory(id, name))
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
})

export default connect(null, mapDispatchToProps)(Category)
