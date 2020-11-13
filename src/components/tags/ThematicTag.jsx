import React from "react";
import styled from "styled-components";

export const SpeTagNameTemplate = styled.div`
  margin-right: 0.7em;
  padding: 0.5em 1.2em;
  background-color: #e9e9e9;
  color: #a7a7a7;
  border-radius: 5px;
`;

export const StyledThematicTagTemplate = styled(SpeTagNameTemplate)`
  display: flex;
  justify-content: center;
  background-color: #fbbb9a;
  color: #d17344;
`;

export const StyledThematicTagText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ThematicTagTemplate = ({ label }) => {
  return (
    <StyledThematicTagTemplate>
      <StyledThematicTagText>{label}</StyledThematicTagText>
    </StyledThematicTagTemplate>
  );
};
