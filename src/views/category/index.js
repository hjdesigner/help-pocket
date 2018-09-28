'use strict'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchCategories } from 'reducers/listCategory/actions-creators'
import ConfigStylus from '../../configStylus'
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
            <ListCategories borderBlue>
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
  max-width: ${ConfigStylus.maxWidthContainer};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: ${ConfigStylus.spaceContainer};
  padding-left: ${ConfigStylus.spaceContainer};
  margin-right: auto;
  margin-left: auto;
`
const ListCategory = styled.section`
  width: 100%;
  margin-top: ${ConfigStylus.spaceLarge};
  background-color: ${ConfigStylus.backgroundClear};
  border: ${ConfigStylus.borderDefault};
  ${props => props.borderBlue ? '' : `border-right-color: ${ConfigStylus.borderColorLightBlue};`}
  ${props => props.borderBlue ? '' : `border-right-width: 2px;`}
  padding: ${ConfigStylus.spaceInner};
`
const ListCategoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${ConfigStylus.space};
`
const ListCategoryTitle = styled.h2`
  font-size: ${ConfigStylus.sizeLittleH2};
  font-weight: 300;
  @media screen and (min-width: ${ConfigStylus.breakPointBig}) {
    font-size: ${ConfigStylus.sizeMediumH2};
  }
`
const ListCategories = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
const ListCategoryText = styled.li`
  padding-top: ${ConfigStylus.spaceInner};
  padding-bottom: ${ConfigStylus.spaceInner};
  border-bottom: ${ConfigStylus.borderDefault};
  &:last-child {
    border-bottom: 0;
  }
`
const NewCategory = styled.section`
  width: 100%;
  margin-top: ${ConfigStylus.spaceLarge};
  background-color: ${ConfigStylus.backgroundClear};
  border: ${ConfigStylus.borderDefault};
  padding: ${ConfigStylus.spaceInner};

  @media screen and (min-width: ${ConfigStylus.breakPointBig}) {
    width: 63%
    margin-top: 0;
  }
`
const NewCategoryTitle = styled.h2`
  font-size: ${ConfigStylus.sizeLittleH2};
  font-weight: 300;
  margin-bottom: ${ConfigStylus.spaceLarge};
  @media screen and (min-width: ${ConfigStylus.breakPointBig}) {
    font-size: ${ConfigStylus.sizeMediumH2};
  }
`
const NewCategoryForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`
const NewCategoryLabel = styled.label`
  width: 100%;
  margin-bottom: ${ConfigStylus.space};
`
const NewCategoryInput = styled.input`
  width: 100%;
  padding: ${ConfigStylus.spaceForms};
  border: ${ConfigStylus.borderDefault};
  font-size: ${ConfigStylus.sizeInput};
`
const NewCategoryButton = styled.button`
  margin-top: ${ConfigStylus.spaceLarge};
  padding: ${ConfigStylus.spaceForms};
  border: 0;
  background-color: ${ConfigStylus.backgroundBlue};
  color: ${ConfigStylus.backgroundClear};
  text-transform: uppercase;
  font-size: ${ConfigStylus.sizeButton};
  cursor: pointer;
`

const mapStateToProps = (state) => ({
  listCategories: state.ListCategory
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategory: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
