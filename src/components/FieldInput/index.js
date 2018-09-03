import React from 'react'
import styled from 'styled-components'

const FieldInput = ({ nameField, labelText, typeField, textPlaceholder }) => (
  <FieldContainer>
    <Label htmlFor={nameField}>{labelText}</Label>
    <Input type={typeField} name={nameField} id={nameField} placeholder={textPlaceholder} />
  </FieldContainer>
)

const FieldContainer = styled.div`
  width: 100%;
  display: inline-block;
`
const Label = styled.label`
  width: 100%;
  display: inline-block;
  margin: 0 0 10px;
  color: #72777a;
  font-size: .9em;
`
const Input = styled.input`
  width: 100%;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  padding: 10px 5px;
  border-bottom: 1px solid #ced4da;
  background-color: #FFF;
  outline: 0;
  color: #000;
  &:focus {
    border-bottom: 1px solid #007bff;
  }
  &::-webkit-input-placeholder {
    color: #adb1b3;
  }
  &::-moz-placeholder {
    color: #adb1b3;
  }
  &:-ms-input-placeholder {
    color: #adb1b3;
  }
  &:-moz-placeholder {
    color: #adb1b3;
  }
`

export default FieldInput
