import React, { useState } from "react";
import TipList from "./TipList";
import TipCard from "./TipCard";
import "./styles.css";

function FruitTip() {

    return (
        <div className="FruitTip">
            <h1 className="FruitTipTitle">과일 깨알 상식</h1>
            {TipList.map((tip,index) => (
                <TipCard className="tipText" key={index} title={tip.title} content={tip.content} emoji={tip.emoji}/>
            ))}
        </div>
    );
}

export default FruitTip;