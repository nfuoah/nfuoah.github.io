import React from "react";
import Comment from "./comment";

// const comments = [
//     {
//         name: "제니",
//         comment: "리액트 재미있어요~!",
//     },
    
//     {
//         name: "로제",
//         comment: "저도 리액트 배워보고 싶어요!",
//     },

//     {
//         name: "리사",
//         comment: "안녕하세요! 블랙핑크입니다",
//     },

//     {
//         name: "지수",
//         comment: "안녕하세요 좋은 하루 되세요~",
//     }
// ];

// function CommentList(props) {
//     return (
//         <div>
//             {comments.map((comment) => {
//                 return (<Comment 
//                     name={comment.name} 
//                     comment={comment.comment }/>
//                 );
//             })}
//         </div>
//     );
// }

const comments = [
    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/2/26/AdorableCutieChiikawa.jpg/revision/latest?cb=20241001071203&path-prefix=ko",
        name: "치이카와",
        comment: "안녕하세요~ 치이카와예요",
    },
    
    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/6/61/SweetBabyHachiware2.png/revision/latest?cb=20241009115500&path-prefix=ko",
        name: "하치와레",
        comment: "리액트 같이 배워요 화이팅~",
    },

    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/4/43/YahaUsagi.png/revision/latest/scale-to-width-down/185?cb=20241006050446&path-prefix=ko",
        name: "우사기",
        comment: "어려운 거 있으면 내가 도와줄게!",
    },

    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/6/63/FightOnRakko.png/revision/latest/scale-to-width-down/185?cb=20241009082404&path-prefix=ko",
        name: "랏코",
        comment: "나는야 리액트의 신",
    },

    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/9/93/TastyKurimanju.png/revision/latest/scale-to-width-down/185?cb=20241009083145&path-prefix=ko",
        name: "쿠리만쥬",
        comment: "저도 리액트 배우고 싶어요!",
    },

    {
        image: "https://static.wikia.nocookie.net/chiikawa/images/1/12/RamenPleaseShisa.png/revision/latest?cb=20241020040532&path-prefix=ko",
        name: "시사",
        comment: "저는 너무 어려워요ㅠ",
    }

    
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (<Comment 
                    name={comment.name} 
                    comment={comment.comment}
                    image={comment.image}/>
                );
            })}
        </div>
    );
}


export default CommentList;