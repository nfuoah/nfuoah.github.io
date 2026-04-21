import React, { useState } from "react";
import FruitList from "./FruitList";
import FruitModal from "./FruitModal";
import { Link } from "react-router-dom";

function Autumn () {

    console.log('전체데이터', FruitList)

    const [selectedFruit, setSelectedFruit] = useState(null);

    const seasonFruits = FruitList.filter((fruit) =>
            fruit.month.some(m => [9, 10, 11].includes(m))
        );

    return (
        <div className="weatherPage">
            <h1 className="AuTitle">가을 제철 과일</h1>
            <h3>시원한 가을에 가장 맛있는 과일들이에요</h3>
        
            <ul className="auFruit">
                {seasonFruits.map((fruit) => (
                    <li 
                    className="fruitCard"
                    style={{ "--hoverColor": fruit.color }}
                    key={fruit.name} 
                    onClick={() => setSelectedFruit(fruit)}>
                        <div className="fruitEmoji">{fruit.emoji}</div>
                        <div className="fruitName">{fruit.name}</div>
                    </li>
                ))}
            </ul>

            <div className="weatherBtn">
                <Link to="/Summer">◁</Link>
                <Link to="/Winter">▷</Link>                
            </div>

            <FruitModal fruit={selectedFruit} onClose={() => setSelectedFruit(null)}/>
        </div>
    )
}


export default Autumn;