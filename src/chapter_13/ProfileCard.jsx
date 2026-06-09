
import React from "react";
import Card from "./Card";

const profiles = [
    {
        id: 1,
        title: "MIYEON",
        color: "lightpink",
        intro: "저의 생일은 1997년 1월 31일 입니다.",
        src: "https://tse2.mm.bing.net/th/id/OIP.3X4y65nUYIo7EGEqZ08FogHaGE?pid=Api&h=220&P=0",
    },
    {
        id: 1,
        title: "hi",
        color: "green",
        intro: "저의 생일은 1997년 1월 31일 입니다.",
        src: "",
    },


];

function ProfileCard(props) {
    return (
        <div style={{display:"flex"}}>
            {profiles.map((li) => {
                return (
                    <Card key={li.id} title={li.title} backgroundColor={li.color}>
                        <p>안녕하세요, {li.title}입니다.</p>
                        <p>{li.intro}</p>
                        <img src={li.src} style={{width:"300px"}}></img>
                    </Card>
                );
            })}
        </div>
    );
}

export default ProfileCard;