import React from "react";
import './FancyBorder.css';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title"> 어서오세요 </h1>
            <p className="Dialog-message">
                우리 사이트에 방문 하신 것을 환영합니다.
            </p>
        </FancyBorder>
    );
}

export default FancyBorder;