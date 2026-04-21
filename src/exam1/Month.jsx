import React, { useState} from "react";
import FruitList from "./FruitList";
 
function Month() {
    // Date().getMonth활용해 현재 달 계산 및 출력. 0월부터 카운트되기 때문에 +1
    const currentMonth = new Date().getMonth() + 1;
 
    // 현재 달에 해당하는 제철 과일 필터링 코드
    const seasonFruits = FruitList.filter((fruit) =>
        fruit.month.includes(currentMonth)
    );

    const monthRandomFruit = Math.floor(Math.random() * seasonFruits.length);
    
 
    return (
        <div>
            {/* 이달 제철 과일 문구 */}
            <h2 className="monthTitle">
                {currentMonth}월의 제철 과일은 (
                    {seasonFruits.map((fruit)=> (
                        <span key={fruit.emoji} className="monthEmoji">{fruit.emoji}</span>
                    ))}
                ) 입니다
            </h2>
 
            {/* 이달 제철 과일 이모티콘 */}
            <ul className="monthList">
                {seasonFruits.map((fruit) => (
                    <li 
                    className="monthListFruit"
                    style={{ "--fruitColor": fruit.color}}
                    key={fruit.name}>
                        <div className="monthName">{fruit.name}</div>
                    </li>
                ))}
            </ul>

        </div>
    );
}
 
export default Month;
 