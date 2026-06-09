import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border : 1px solid black;

`;

function Sample(props) {
    return (
        <div>
            <button> Normal </button>
            <button dark> Dark </button>
        </div>
    )
}

export default Sample;