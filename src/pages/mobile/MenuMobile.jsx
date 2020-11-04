import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import { menuMobileTabsDB } from "../../mocks/MenuMobileTabs.js";

const StyledMenuMobileTab = styled(Link)`
  color: var(--dark-clr);
  padding: 0.94rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`;

const MenuMobile = () => {
  const searchedMenuMobileTab = menuMobileTabsDB.map(({ tabName, path }) => {
    return (
      <StyledMenuMobileTab to={path} key={tabName}>
        {tabName}
      </StyledMenuMobileTab>
    );
  });

  return (
    // <MobTemplate anotherNestedComponent={<ExampleComp/>} >
    <MobileViewTemplate>
      <MobileCommonWrapper>{searchedMenuMobileTab}</MobileCommonWrapper>
    </MobileViewTemplate>
  );
};

export default MenuMobile;
