'use strict'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchCategories } from 'reducers/listCategory/actions-creators'
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
          <NewCategory>
            <NewCategoryTitle>Cadastrar Categoria</NewCategoryTitle>
            <NewCategoryForm>
              <NewCategoryLabel htmlFor='name' >Nome da categoria</NewCategoryLabel>
              <NewCategoryInput type='text' name='name' />
              <NewCategoryButton>Cadastrar</NewCategoryButton>
            </NewCategoryForm>
          </NewCategory>
          <ListCategory>
            <ListCategoryHeader>
              <ListCategoryTitle>Categorias</ListCategoryTitle>
            </ListCategoryHeader>
            <ListCategories>
              {this.props.listCategories.map((item, index) =>
                <ListCategoryText key={index}>{item.name}</ListCategoryText>
              )}
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
  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
  }
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
const NewCategory = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #e6e6e6;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    width: 63%
    margin-top: 0;
  }
`
const NewCategoryTitle = styled.h2`
  font-size: 1em;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
  }
`
const NewCategoryForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`
const NewCategoryLabel = styled.label`
  width: 100%;
  margin-bottom: 10px;
`
const NewCategoryInput = styled.input`
  width: 100%;
  padding: 15px 10px;
  border: 1px solid #e4e2e2;
  font-size: 1em;
`
const NewCategoryButton = styled.button`
  margin-top: 20px;
  padding: 15px 20px;
  border: 0;
  background-color: #4664d3;
  color: #FFF;
  text-transform: uppercase;
  cursor: pointer;
`

const mapStateToProps = (state) => ({
  listCategories: state.ListCategory
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategory: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
