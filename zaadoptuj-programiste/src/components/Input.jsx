import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    margin-bottom: 50px;
    background-color: #2B2B3F;
    height: 50px;
    border-radius: 5px;
    border: none;
    width: 70%;
`

function Input({type}) {
    return (
        <StyledInput  type={type}/>
    );
}

export default Input;
