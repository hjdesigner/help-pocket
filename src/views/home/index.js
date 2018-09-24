'use strict'
import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faArchive, faBalanceScale, faDollarSign, faMoneyCheckAlt, faUser } from '@fortawesome/free-solid-svg-icons'

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
        <Nav>
          <NavUl>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faWallet} />Visão Geral</NavLink>
            </NavList>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faArchive} />Categoria</NavLink>
            </NavList>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faBalanceScale} />Despesa</NavLink>
            </NavList>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faDollarSign} />Receita</NavLink>
            </NavList>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faMoneyCheckAlt} />Investimento</NavLink>
            </NavList>
            <NavList>
              <NavLink to='/'><FontAwesomeIcon icon={faUser} />Minha Conta</NavLink>
            </NavList>
          </NavUl>
        </Nav>
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
  margin-bottom: 60px;
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

const Nav = styled.section`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 49%;
  }
  @media screen and (min-width: 1024px) {
    width: 36%;
  }
`
const NavUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`
const NavList = styled.li`
  width: 48%;
  margin-bottom: 2%;
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`
const NavLink = styled(Link)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFF;
  text-decoration: none;
  color: #000;
  border: 1px solid #e6e6e6;
  svg {
    margin-bottom: 5px;
    font-size: 1.5em;
    color: #544d4d;
  }
  @media screen and (min-width: 1024px) {
    transition: all .25s ease-in-out;
    &:hover {
      background-color: #52cfff;
      color: #FFF;
      svg {
        color: #FFF;
      }
    }
  }
`

export default Home
