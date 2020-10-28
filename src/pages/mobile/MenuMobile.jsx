import React from "react";
import styled from "styled-components";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import { getMenuMobileTabsDB } from "../../mocks/MenuMobileTabs.js";

const StyledMobileMenuTab = styled.a`
  padding: 15px;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
`;

const MobileMenuTab = ({ text }) => {
  return <StyledMobileMenuTab>{text}</StyledMobileMenuTab>;
};

// const ExampleComp = () =>{
//   return <div>Cześć</div>
// }

const MenuMobile = () => {
  const searchedMenuMobileTabsDB = getMenuMobileTabsDB();
  const searchedMenuMobileTabsComponents = searchedMenuMobileTabsDB.map(
    ({ tabName }) => {
      return <MobileMenuTab key={tabName} text={tabName} />;
    }
  );

  return (
    // <MobTemplate anotherNestedComponent={<ExampleComp/>} >
    <MobileViewTemplate>
      <MobileCommonWrapper>
        {searchedMenuMobileTabsComponents}
      </MobileCommonWrapper>
    </MobileViewTemplate>
  );
};

export default MenuMobile;
