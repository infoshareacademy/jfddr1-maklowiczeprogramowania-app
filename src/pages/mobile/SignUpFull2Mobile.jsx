import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { LabelMobile } from "../../components/Label";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  CenterRowButtonContainer,
  Title,
  MobileSlideContainer,
  SlideItem,
  SlideItemActive,
} from "../../components/SignInUpElements";

const SignUpFull2Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Podstawowe Dane</Title>
        <LabelMobile htmlFor={"firstName"}>{"Imię"}</LabelMobile>
        <Input id={"firstName"} name={"firstName"} type={"text"} />
        <LabelMobile htmlFor={"secondName"}>{"Nazwisko"}</LabelMobile>
        <Input id={"secondName"} name={"secondName"} type={"text"} />
        <LabelMobile htmlFor={"email"}>{"Email"}</LabelMobile>
        <Input id={"email"} name={"email"} type={"email"} />
        <LabelMobile htmlFor={"password"}>{"Hasło"}</LabelMobile>
        <Input id={"password"} name={"password"} type={"password"} />
        <CenterRowButtonContainer>
          <SmallButton type={"submit"} label={"Dalej"} />
        </CenterRowButtonContainer>
      </MobileFormWrapper>
      <MobileSlideContainer>
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
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull2Mobile;
