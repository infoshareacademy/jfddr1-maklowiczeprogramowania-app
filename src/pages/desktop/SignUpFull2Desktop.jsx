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

const SignUpFull2Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Pozwól się odnaleźć</Title>
        <InputsAndLabelsContainer>
          <LabelDesktop htmlFor={"Portfolio"}>{"Portfolio"}</LabelDesktop>
          <Input name={"Portfolio"} type={"text"} />
          <LabelDesktop htmlFor={"Github"}>{"Github"}</LabelDesktop>
          <Input name={"Github"} type={"text"} />
          <LabelDesktop htmlFor={"Linkedin"}>{"Linkedin"}</LabelDesktop>
          <Input name={"Linkedin"} type={"text"} />
          <LabelDesktop htmlFor={"Dodaj"}>{"Dodaj zdjęcie"}</LabelDesktop>
          <Input name={"Dodaj"} type={"text"} />
        </InputsAndLabelsContainer>
        <CenterRowButtonContainer>
          <MediumButton type={"submit"} label={"Dalej"} />
        </CenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <SlideItemActive>2</SlideItemActive>
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
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull2Desktop;
