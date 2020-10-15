import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #2B2B3F;
    height: 80px;
    border-radius: 5px;
    border: none;
    width: 70%;
    color: #FBECCC;
    font-size: 2rem;
`;

function Button({type, label}) {
    return (
        <>
            <StyledButton type={type}> {label} </StyledButton>
        </>
    );
}

export default Button;
