import React from "react";
import styled from "styled-components";
import { authMenuDB } from "../mocks/AuthMenuData.js";
import { StyledSmallButton } from "./SmallButton";

const AuthMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
`;

const AuthMenuItem = styled.li`
  display: flex;
  min-height: 3.8rem;
  min-width: 100%;
`;

const AuthMenuItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  cursor: pointer;
`;

const AuthMenuItemLinkWrapper = styled.p`
  width: 11rem;
  color: var(--light-clr);
  font-weight: 600;
`;

const AuthMenuItemIcon = styled.img`
  height: 1.3rem;
  width: 1.3rem;
  margin-right: 1.7rem;
`;

const AuthMenuItemSpan = styled.span``;

const CreateProjectButton = styled(StyledSmallButton)`
  width: 11rem;
  margin-top: 2em;
  padding: 1em 2em;
  background-color: var(--light-clr);
  color: var(--dark-clr);
`;

const AuthMenuListElement = () => {
  const authMenuData = authMenuDB;

  const AuthMenuDataComponents = authMenuData.map(({ label, icon }) => {
    return (
      <AuthMenuItem key={label}>
        <AuthMenuItemLink key={label}>
          <AuthMenuItemLinkWrapper>
            <AuthMenuItemIcon src={icon} />
            <AuthMenuItemSpan>{label}</AuthMenuItemSpan>
          </AuthMenuItemLinkWrapper>
        </AuthMenuItemLink>
      </AuthMenuItem>
    );
  });

  return <>{AuthMenuDataComponents}</>;
};

const AuthNavigationTemplate = () => {
  return (
    <AuthMenuList>
      <AuthMenuListElement />
      <CreateProjectButton>Stwórz projekt</CreateProjectButton>
    </AuthMenuList>
  );
};

export default AuthNavigationTemplate;
