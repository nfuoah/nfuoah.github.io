import React, { useState }from "react";
import FruitList from "./FruitList";
import FruitModal from "./FruitModal";
import "./styles.css";
import { Link } from "react-router-dom";


function Spring () {

    // 선택된 과일 selectedFruit를 모달창에 띄우기 위한 코드
    // 처음에는 아무것도 선택되어 있지 않기 때문에 null 입력
    const [selectedFruit, setSelectedFruit] = useState(null);

    // FruitList에서 3,4,5월에 속한 과일만 가져오기 위해 filter 사용
    //fruit에 각각의 과일을 담아 해당 조건에 해당되는지 확인한다.
    const seasonFruits = FruitList.filter((fruit) =>
            // month배열 속 값(m)이 3,4,5 중 하나라도 해당되면 true로 저장한다.
            // true에 해당하는 과일만 seasonFruits에 포함시킨다.
            fruit.month.some(m => [3,4,5].includes(m))
        );

        

    return (
        <div className="weatherPage">
            <h1 className="spTitle">봄 제철 과일</h1>
            <h3> 파릇파릇한 봄에 가장 맛있는 과일들이에요</h3>

            <ul className="spFruit">
                {/* seasonFruits에 해당하는 과일 리스트를 li로 출력한다. */}
                {seasonFruits.map((fruit) => (
                    // onClick으로 과일 이름을 클릭하면 selectedFruit에 해당 과일을 저장한다.
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
                <Link to="/Winter">◁</Link>
                <Link to="/Summer">▷</Link>                
            </div>
 
            {/* selectedFruit가 있을 때만 모달 표시 */}
            <FruitModal fruit={selectedFruit} onClose={() => setSelectedFruit(null)} />
        </div>
    );
}

export default Spring;