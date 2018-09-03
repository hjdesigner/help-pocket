import React from 'react'
import styled from 'styled-components'

const FieldButton = ({ typeButton, textButton }) => (
  <Button type={typeButton}>{textButton}</Button>
)

const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  background-color: #2196f3;
  cursor: pointer;
  color: #FFF;
  transition: all .25s ease-in-out;
  &:hover {
    background-color: #0c83e2;
  }
`

export default FieldButton
