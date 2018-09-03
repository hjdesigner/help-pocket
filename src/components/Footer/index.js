import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <Text>2018 - Help Pocket Open-source</Text>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items:center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #FFF;
`
const Text = styled.p`
  margin: 0;
  color: #3a3030;
  font-size: .9em;
  font-weight: 400;
`

export default Footer
