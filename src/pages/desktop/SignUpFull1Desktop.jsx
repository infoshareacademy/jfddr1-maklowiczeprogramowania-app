import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
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
  DesktopButton,
} from "../../components/SignInUpElements";
import { StyledInput } from "../../components/Input";

const SignUpFull1Desktop = () => {
  const history = useHistory();
  const { currentUserData, setCurrentUserData } = useAuth();
  const firstNameRef = React.createRef();
  const secondNameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const secondName = secondNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setCurrentUserData({
      firstName,
      secondName,
      email,
      password,
    });
    history.push("/pages/SignUpFull2Desktop");
  };

  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper onSubmit={handleSubmit}>
        <Title>Podaj podstawowe dane</Title>
        <InputsAndLabelsContainer>
          <LabelDesktop htmlFor="Imię">{"Imię"}</LabelDesktop>
          <StyledInput ref={firstNameRef} name="Imię" type="text" required />
          <LabelDesktop htmlFor="Nazwisko">{"Nazwisko"}</LabelDesktop>
          <StyledInput
            ref={secondNameRef}
            name="Nazwisko"
            type="text"
            required
          />
          <LabelDesktop htmlFor="Email">{"Email"}</LabelDesktop>
          <StyledInput ref={emailRef} name="Email" type="email" required />
          <LabelDesktop htmlFor="Hasło">{"Hasło"}</LabelDesktop>
          <StyledInput
            ref={passwordRef}
            name="Hasło"
            type="password"
            required
          />
          <DesktopCenterRowButtonContainer>
            <DesktopButton type="submit">Dalej</DesktopButton>
          </DesktopCenterRowButtonContainer>
        </InputsAndLabelsContainer>
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
