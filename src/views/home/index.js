'use strict'
import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import Nav from 'components/nav'

const Home = () => {
  const items = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  }
  return (
    <HomeContainer>
      <Container>
        <Nav />
        <MonthlyValue>
          <Months>Janeiro</Months>
          <Graphic>
            <GraphicTitle>Despesas</GraphicTitle>
            <Doughnut
              data={items}
              options={{
                legend: {
                  position: 'bottom',
                  lineWidth: 10,
                  labels: {
                    boxWidth: 20
                  }
                }
              }} />
          </Graphic>
          <Graphic>
            <GraphicTitle>Receita</GraphicTitle>
            <Pie data={items} />
          </Graphic>
        </MonthlyValue>
        <YearValue>
          <Year>2018</Year>
          <Graphic>
            <GraphicTitle>Despesas</GraphicTitle>
            <Doughnut
              data={items}
              options={{
                legend: {
                  position: 'bottom',
                  lineWidth: 10,
                  labels: {
                    boxWidth: 20
                  }
                }
              }} />
          </Graphic>
          <Graphic>
            <GraphicTitle>Receita</GraphicTitle>
            <Pie data={items} />
          </Graphic>
        </YearValue>
        <AllCategories>
          <CategoryTitle>Categorias</CategoryTitle>
          <CategoryUl>
            <CategoryList>Alimentação</CategoryList>
            <CategoryList>Educação</CategoryList>
            <CategoryList>Moradia</CategoryList>
            <CategoryList>Transporte</CategoryList>
            <CategoryList>Lazer</CategoryList>
            <CategoryList>Desesas Pessoais</CategoryList>
            <CategoryList>Saúde</CategoryList>
          </CategoryUl>
        </AllCategories>
      </Container>
    </HomeContainer>
  )
}

const Graphic = styled.div`
  margin-bottom: 20px;
  position: relative;
  @media screen and (min-width: 1024px) {
    width: 49%;
  }
`
const GraphicTitle = styled.h2`
  text-align: center;
  margin: 20px 0 10px;
  font-size: 1em;
`
const HomeContainer = styled.main``
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

const MonthlyValue = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #e6e6e6;
  @media screen and (min-width: 768px) {
    width: 49%;
    margin-top: 0px;
  }
  @media screen and (min-width: 1024px) {
    width: 63%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:20px;
  }
`
const Months = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  color: #57d3ff;
  &:before,
  &:after {
    content: "";
    width: 7px;
    height: 7px;
    display: inline-block;
    border: 3px solid #CCC;
    border-right: 0;
    border-bottom: 0;
  }
  &:before {
    margin-right: 10px;
    transform: rotate(-45deg)
  }
  &:after {
    margin-left: 10px;
    transform: rotate(145deg)
  }
`
const YearValue = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #e6e6e6;
  @media screen and (min-width: 768px) {
    width: 49%;
    margin-top: 0px;
  }
  @media screen and (min-width: 1024px) {
    width: 63%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
const Year = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  color: #57d3ff;
  &:before,
  &:after {
    content: "";
    width: 7px;
    height: 7px;
    display: inline-block;
    border: 3px solid #CCC;
    border-right: 0;
    border-bottom: 0;
  }
  &:before {
    margin-right: 10px;
    transform: rotate(-45deg)
  }
  &:after {
    margin-left: 10px;
    transform: rotate(145deg)
  }
`
const AllCategories = styled.section`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #e6e6e6;
  @media screen and (min-width: 768px) {
    width: 49%;
  }
  @media screen and (min-width: 1024px) {
    width: 36%;
    margin-top: 0;
  }
`
const CategoryTitle = styled.h2`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  color: #57d3ff;
`
const CategoryUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CategoryList = styled.li`
  width: 48%;
  padding: 10px;
  color: #000;
`
export default Home
