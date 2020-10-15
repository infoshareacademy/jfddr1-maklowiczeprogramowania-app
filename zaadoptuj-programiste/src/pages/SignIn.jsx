import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";
import {SignInForm, SignInTitle, StyledParagraph, StyledAnchor} from '../components/SignIn.styled'

function SignIn() {
  return (
      <SignInForm>
          <SignInTitle>Zaloguj się</SignInTitle>
          <Label>{'Email'}</Label>
          <Input type={'email'}/>
          <Label>{'Hasło'}</Label>
          <Input type={'password'}/>
          <Label>
              <StyledParagraph>Nie masz konta? Założ je</StyledParagraph>
              <StyledAnchor href="/">tutaj</StyledAnchor>
          </Label>
          <Button type={'submit'} label={'Zaloguj'} />
      </SignInForm>
  );
}

export default SignIn;
