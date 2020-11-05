import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
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
  DesktopCenterRowButtonContainer,
  DesktopLinkButton,
} from "../../components/SignInUpElements";
import { StyledButton } from "../../components/buttons/Button";
import { StyledInput } from "../../components/Input";

const SubmitFormButton = styled(StyledButton)`
  margin-top: 2em;
`;
const SignUpFull2Desktop = () => {
  const { currentUserData, setCurrentUserData } = useAuth();
  const history = useHistory();
  const portfolioRef = React.createRef();
  const githubRef = React.createRef();
  const linkedInRef = React.createRef();
  //  const ImageSrc = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolio = portfolioRef.current.value;
    const github = githubRef.current.value;
    const linkedIn = linkedInRef.current.value;
    //  const ImageSrc = passwordRef.current.value;
    const socialMedia = [
      {
        portfolio,
        github,
        linkedIn,
      },
    ];
    setCurrentUserData({ ...currentUserData, socialMedia });
    history.push("/pages/SignUpFull3Desktop");
  };

  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper onSubmit={handleSubmit}>
        <Title>Pozwól się odnaleźć</Title>
        <InputsAndLabelsContainer>
          <LabelDesktop htmlFor="Portfolio">{"Portfolio"}</LabelDesktop>
          <StyledInput
            ref={portfolioRef}
            name="Portfolio"
            type="text"
            required
          />
          <LabelDesktop htmlFor="Github">{"Github"}</LabelDesktop>
          <StyledInput ref={githubRef} name="Github" type="text" required />
          <LabelDesktop htmlFor="Linkedin">{"Linkedin"}</LabelDesktop>
          <StyledInput ref={linkedInRef} name="Linkedin" type="text" required />
          <LabelDesktop htmlFor="Dodaj">{"Dodaj zdjęcie"}</LabelDesktop>
          <StyledInput name="Dodaj" type="file" />
          <SubmitFormButton type="submit">Dalej</SubmitFormButton>
        </InputsAndLabelsContainer>
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

export default SignUpFull2Desktop;
