import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeName, changeEmail, changePassword } from 'reducers/errorRegistration/actions-creators'
import FieldInput from 'components/FieldInput'
import FieldButton from 'components/FieldButton'

const cadastro = ({ handleRegister, error }) => (
  <CadastroContainer>
    <Title>Cadastre-se</Title>
    <FormContainer onSubmit={handleRegister}>
      <Fields>
        <NameContianer>
          <FieldInput
            nameField='name'
            labelText='Nome'
            typeField='text'
            textPlaceholder='Morpheus' />
          {error.name === true && <ErrorContainer>Digite seu nome</ErrorContainer>}
        </NameContianer>
        <EmailSenhaContianer>
          <FieldInput
            nameField='email'
            labelText='E-mail'
            typeField='text'
            textPlaceholder='Morpheus@matrix.com.br' />
          {error.email === true && <ErrorContainer>Digite um e-mail valído</ErrorContainer>}
        </EmailSenhaContianer>
        <EmailSenhaContianer>
          <FieldInput
            nameField='password'
            labelText='Senha'
            typeField='password' />
          {error.password === true && <ErrorContainer>Digite uma senha</ErrorContainer>}
        </EmailSenhaContianer>
      </Fields>
      <ButtonContainer>
        <FieldButton
          typeButton='submit'
          textButton='Cadastrar' />
      </ButtonContainer>
    </FormContainer>
  </CadastroContainer>
)

const CadastroContainer = styled.section`
  width: 600px;
  height: auto;
  min-height: 300px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 300px);
  background-color: #FFF;
  border: 1px solid rgba(0,0,0,.0625);
  box-sizing: border-box;
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2em;
  color: #007bff;
  font-weight: 400;
`
const FormContainer = styled.form`
  margin-top: 20px;  
`
const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const NameContianer = styled.div`
  width: 100%
  margin-bottom: 20px;
`
const EmailSenhaContianer = styled.div`
  width: 48%;
  margin-bottom: 10px;
`
const ButtonContainer = styled.div`
  margin-top: 20px;
  float: right;
`
const ErrorContainer = styled.p`
  margin: 5px 0;
  font-size: .8em;
  color: #bd0000;
`

const mapStateToProps = (state) => ({
  error: state.ErrorRegistration
})

function validaEmail (email) {
  const str = email
  const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  if (filtro.test(str)) {
    return true
  } else {
    return false
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleRegister: (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const formValues = { name, email, password }
    name.length === 0 ? dispatch(changeName(true)) : dispatch(changeName(false))
    email.length === 0 ? dispatch(changeEmail(true)) : dispatch(changeEmail(false))
    validaEmail(email) === false ? dispatch(changeEmail(true)) : dispatch(changeEmail(false))
    password.length === 0 ? dispatch(changePassword(true)) : dispatch(changePassword(false))

    if (formValues.name !== '' && validaEmail(email) === true && formValues.password !== '') {
      console.log('passou')
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(cadastro)
