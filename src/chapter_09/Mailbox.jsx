import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
                </h2>
            }
        </div>
    );
}

// function Counter(props) {
//     const count = 0;

//     return (
//         <div>
//             {count && <h1>현재 카운트: {count} </h1>}
//         </div>
//     );
// }

// function UseStatus(props){
    
//     return(
//         <div>
//             이 사용자는 현재 <b> {props.isLoggedIn ? '로그인':"로그인하지 않은"}</b> 상태입니다.
//         </div>
//     );
// }

export default Mailbox;