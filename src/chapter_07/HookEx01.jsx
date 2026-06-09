import React, {useState} from "react";

const btnStyle1 ={
    marginRight: "10px",
    fontWeight:"bold",
    borderRadius:"10px",
    width:"50px",
    height:"30px",
};

const btnStyle2 ={
    fontWeight:"bold",
    borderRadius:"10px",
    width:"50px",
    height:"30px",
};

function HookEx01 (props) {
    const[count, setCount] = useState(0);

    return (
        <div style={{padding:16, fontWeight:"bold"}}>
            <p>{`현재 카운터 값은 ${count} 입니다.`}</p>

            <button style={btnStyle1} onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button style={btnStyle2} onClick={() => setCount(count -1)}>
                -1
            </button>
        </div>
    );
}

export default HookEx01;