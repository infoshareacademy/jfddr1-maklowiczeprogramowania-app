import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import Input from "../../components/Input";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import { LabelDesktop } from "../../components/Label";
import {
  SlideItem,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
  Title,
  InputsAndLabelsContainer,
  CenterRowButtonContainer,
} from "../../components/SignInUpElements";
import MediumButton from "../../components/buttons/MediumButton";

const SignUpFull1Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Podaj podstawowe dane</Title>
        <InputsAndLabelsContainer>
          <LabelDesktop htmlFor="Imię">{"Imię"}</LabelDesktop>
          <Input name="Imię" type="text" />
          <LabelDesktop htmlFor="Nazwisko">{"Nazwisko"}</LabelDesktop>
          <Input name="Nazwisko" type="text" />
          <LabelDesktop htmlFor="Email">{"Email"}</LabelDesktop>
          <Input name="Email" type="text" />
          <LabelDesktop htmlFor="Hasło">{"Hasło"}</LabelDesktop>
          <Input name="Hasło" type="text" />
        </InputsAndLabelsContainer>
        <CenterRowButtonContainer>
          <MediumButton type="submit" label="Dalej" />
        </CenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <SlideItemActive>1</SlideItemActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <SlideItem>2</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <SlideItem>3</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <SlideItem>4</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Desktop"
        >
          <SlideItem>5</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull6Desktop"
        >
          <SlideItem>6</SlideItem>
        </Link>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull1Desktop;
