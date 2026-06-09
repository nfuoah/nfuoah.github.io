import React from "react";
import { useState, useEffect } from "react";

function HookEx02(props) {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log({name, nickname});
    }, [name, nickname]);

    return (
        <div>
            <input type="text"
            onChange={(e) => handleNameChange(e)}></input>
            <input type="text"
            onChange={(e) => handleNicknameChange(e)}></input>
            <div style={{fontWeight: "bold"}}>이름:{name}</div>
            <div style={{fontWeight: "bold"}}>닉네임:{nickname}</div>
        </div>
    );
}

export default HookEx02;