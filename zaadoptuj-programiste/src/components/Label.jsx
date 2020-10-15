import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
    display: inline-block;
    width: 70%;
    font-size: 1.3rem;
    
    * {
        color: #2B2B3F;
        text-decoration: none;
    }
`;

function Label({children}) {
    return (
        <StyledLabel>
            {children}
        </StyledLabel>
    );
}

export default Label;
