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
import { techDB } from "../../mocks/TechData";

const SignUpFull4Desktop = () => {
  const [state, setState] = useState();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const { currentUserData, setCurrentUserData } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    const spec = Object.values(state).map((el) => el.label);
    setState(spec);
    setDisabled(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (disabled === false) {
      alert("You must choose at least one technology!");
      return;
    }

    const tech = state;
    setCurrentUserData({ ...currentUserData, tech });
    history.push("/pages/SignUpFull5Desktop");
  };
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz technologie</Title>
        <OptionContainer>
          <StyledSelect
            isMulti={true}
            placeholder="Dodaj technologie, które opanowałeś"
            options={techDB}
            onChange={setState}
            isDisabled={disabled}
          />
          <StyledAddButton onClick={handleClick}>Zatwierdź</StyledAddButton>

          {/* Same story as before, needed to change that button */}
          {/* <AddButton type="submit" label="Zatwierdź" />
           */}
        </OptionContainer>
        {/* <ChosenOptionContainer>
          <ChosenOption type="" label="Python" />
          <ChosenOption type="" label="JavaScript" />
          <ChosenOption type="" label="Java" />
        </ChosenOptionContainer> */}
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton
            onClick={handleSubmit}
            to="/pages/SignUpFull5Desktop"
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <SlideItem>3</SlideItem>
        </Link>
        <SlideItemActive>4</SlideItemActive>
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

export default SignUpFull4Desktop;
