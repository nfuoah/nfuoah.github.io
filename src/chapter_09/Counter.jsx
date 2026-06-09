import React from "react";

function Counter(props) {
    const count = 0;

    return (
        <div>
            {count && <h1>현재 카운트: {count} </h1>}
        </div>
    );
}

// function UseStatus(props){
    
//     return(
//         <div>
//             이 사용자는 현재 <b> {props.isLoggedIn ? '로그인':"로그인하지 않은"}</b> 상태입니다.
//         </div>
//     );
// }

export default Counter