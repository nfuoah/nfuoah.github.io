import React, { useState } from "react";
import FruitList from "./FruitList";
import FruitModal from "./FruitModal";
import { Link } from "react-router-dom";

function Winter () {

    console.log('전체데이터', FruitList)

    const [selectedFruit, setSelectedFruit] = useState(null);

    const seasonFruits = FruitList.filter((fruit) =>
            fruit.month.some(m => [12,1,2].includes(m))
        );

    return (
        <div className="weatherPage">
            <h1 className="WiTitle">겨울 제철 과일</h1>
            <h3>추운 겨울에 가장 맛있는 과일들이에요</h3>
        
            <ul className="wiFruit">
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
                <Link to="/Autumn">◁</Link>
                <Link to="/Spring">▷</Link>                
            </div>

            <FruitModal fruit={selectedFruit} onClose={() => setSelectedFruit(null)}/>
        </div>
    )
}


export default Winter;