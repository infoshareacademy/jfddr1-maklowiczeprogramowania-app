import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  ButtonContainer,
  Title,
  SlideContainer,
  SlideItem,
  SlideItemActive,
} from "../../components/SignInUpElements";

const SignUpFull2Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Podstawowe Dane</Title>
        <Label htmlFor={"firstName"}>{"Imię"}</Label>
        <Input id={"firstName"} name={"firstName"} type={"text"} />
        <Label htmlFor={"secondName"}>{"Nazwisko"}</Label>
        <Input id={"secondName"} name={"secondName"} type={"text"} />
        <Label htmlFor={"email"}>{"Email"}</Label>
        <Input id={"email"} name={"email"} type={"email"} />
        <Label htmlFor={"password"}>{"Hasło"}</Label>
        <Input id={"password"} name={"password"} type={"password"} />
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Dalej"} />
        </ButtonContainer>
      </MobileFormWrapper>
      <SlideContainer>
        <SlideItemActive>•</SlideItemActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull6Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
      </SlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull2Mobile;
