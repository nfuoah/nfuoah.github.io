import React from "react";
import Month from "./Month";
import "./styles.css"
 
function Main() {
    return (
        <div className="main">
            <div className="mainTitle">
                {/* 타이틀, 서브타이틀 텍스트 */}
                <h1 className="Title">FRUITING</h1>
                <h2 className="subTitle">Fruit + ~ing</h2>
                <h3 className="subText">:4계절 내내 과일을 맛있게 즐기기 위한 제철 과일 도감</h3>
            </div>
 

            <div className="mainList">
                {/* Month.jsx 컴포넌트 불러오기(이달의 제철 과일 리스트) */}
                <Month />
            </div>
        </div>
    );
}
 
export default Main;