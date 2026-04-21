import React, { useState }from "react";
import FruitList from "./FruitList";

function Random () {

    // 현재 달 계산
    const currentMonth = new Date().getMonth() + 1;
 
    // 현재 달에 해당하는 제철 과일만 고르는 코드
    const seasonFruits = FruitList.filter((fruit) =>
        fruit.month.includes(currentMonth)
    );

    const [randomFruit, randomOneFruit] = useState(null);

    function buttonClick() {
        const randomIndex = Math.floor(Math.random() * seasonFruits.length);
        randomOneFruit(seasonFruits[randomIndex]);
    }
 
    return (
        <div className="random">
            {/* 현재 달 제철 과일 문구 */}
            <h2 className="randomTitle">{currentMonth}월 제철 과일 랜덤 뽑기!</h2>

            <div className="randomBox">

                {randomFruit && (
                <div className="randomItem">
                    <p className="randomEmoji">{randomFruit.emoji}</p>
                    <p className="randomName">{randomFruit.name}</p>
                </div>
                )}
            </div>

            <button className="randomButton" onClick={buttonClick}>과일 뽑기</button>
        </div>
    );
}

export default Random;