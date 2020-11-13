import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  OptionContainer,
  SlideItem,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
  Title,
  DesktopCenterRowButtonContainer,
  DesktopLinkButton,
  StyledAddButton,
  StyledSelect,
} from "../../components/SignInUpElements";
import { specDB } from "../../mocks/SpecializationsData";

const SignUpFull3Desktop = () => {
  const [state, setState] = useState();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const {
    currentUserData,
    setCurrentUserData,
    setProfileImage,
    profileImage,
  } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    const spec = Object.values(state).map((el) => el);
    const [specialization] = spec;
    setState(specialization);
    setDisabled(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled === false) {
      alert("You must choose at least one specialization!");
      return;
    }
    const specialization = state;
    setCurrentUserData({ ...currentUserData, specialization });
    history.push("/pages/SignUpFull4Desktop");
  };
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz specjalizację</Title>
        <OptionContainer>
          <StyledSelect
            placeholder="Kim jesteś?"
            options={specDB}
            onChange={setState}
            isDisabled={disabled}
          />
          {/* Needed to change AddButton to StyledButton cuz it was a functional component so I could not attach proper logic to it // WIP  */}
          <StyledAddButton onClick={handleClick}>Zatwierdź</StyledAddButton>
        </OptionContainer>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton
            onClick={handleSubmit}
            to="/pages/SignUpFull4Desktop"
          >
            Dalej
          </DesktopLinkButton>
        </DesktopCenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <SlideItem>2</SlideItem>
        </Link>
        <SlideItemActive>3</SlideItemActive>
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

export default SignUpFull3Desktop;
