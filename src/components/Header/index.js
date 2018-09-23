import React from 'react'
import styled from 'styled-components'
import LogoImage from './analytics.png'

const Header = () => (
  <HeaderContainer>
    <Logo>
      <Imagem src={LogoImage} />
    </Logo>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  margin-bottom: 20px;
  display: flex;
  align-items:center;
  justify-content: center;
  border-bottom: 1px solid rgba(0,0,0,.0625);
  text-align: center;
  background-color: #FFF;
`
const Logo = styled.figure`
  width: 40px;
  margin: 0;
  padding: 0;
`
const Imagem = styled.img`
  width: 100%;
`

export default Header
