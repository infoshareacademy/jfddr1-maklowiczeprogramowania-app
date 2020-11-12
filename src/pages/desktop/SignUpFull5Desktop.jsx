import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
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
} from "../../components/SignInUpElements";
import { StyledButton } from "../../components/buttons/Button";
import { toolsDB } from "../../mocks/ToolsData";
const StyledSelect = styled(Select)`
  width: 20em;
  font-size: 1.5rem;
`;
const SignUpFull5Desktop = () => {
  const [state, setState] = useState();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const { currentUserData, setCurrentUserData } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    const tools = Object.values(state).map((el) => el.label);
    setState(tools);
    setDisabled(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled === false) {
      alert("You must choose at least one tool!");
      return;
    }
    const tools = state;
    setCurrentUserData({ ...currentUserData, tools });
    history.push("/pages/SignUpFull6Desktop");
  };
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz narzędzia</Title>
        <OptionContainer>
          <StyledSelect
            isMulti={true}
            placeholder="Dodaj narzędzia, które opanowałeś"
            options={toolsDB}
            onChange={setState}
            isDisabled={disabled}
          />
          <StyledButton onClick={handleClick}>Zatwierdź</StyledButton>
        </OptionContainer>

        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton
            onClick={handleSubmit}
            to="/pages/SignUpFull6Desktop"
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <SlideItem>4</SlideItem>
        </Link>
        <SlideItemActive>5</SlideItemActive>
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

export default SignUpFull5Desktop;
