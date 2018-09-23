'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faArchive, faBalanceScale, faDollarSign, faMoneyCheckAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
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
    </Container>
  </HomeContainer>
)

const HomeContainer = styled.main``
const Container = styled.div`
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const Nav = styled.section`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
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
