import react from "react";

function FruitModal({ fruit, onClose }) {
    // fruit가 없으면 모달을 렌더링하지 않음
    if (!fruit) return null;
 
    return (
        <div className="modalBackground" onClick={onClose}>

            <div className="modalContent" style={{border: `2px solid ${fruit.color}` }} onClick={(e) => e.stopPropagation()}>

                <div>
                    <h2 className="modalEmoji">{fruit.emoji}</h2>
                    <h2>{fruit.name}</h2>
                    <div className="modalText">
                        <p>고르는 팁: {fruit.tip}</p>
                        <p>영양 정보: {fruit.nut}</p>
                        <p>추천 메뉴: {fruit.menu}</p>
                    </div>
                <button className="modalButton"onClick={onClose} style={{border: `2px solid ${fruit.color}` }}>
                    닫기
                </button>
            </div>

            </div>
        </div>
    );
}
 
export default FruitModal;
 