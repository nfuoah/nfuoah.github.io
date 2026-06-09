import React from "react";

// function NumberList(props) {
//     const{numbers} = props;

//     const listItems = numbers.map((number) =>
//     <li>{number}</li>
//     );

//     return (
//         <ul>{listItems}</ul>
//     );
// }

//----------------------------------------------

// function NumberList(props) {
//     const{numbers} = props;

//     const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//         number
//     </li>
//     )

//     const todos = [1,2,3,4,5];
// }

function NumberList(props) {
    const todos = [1,2,3,4,5];
    const todoItems = todos.map((todo) =>
    
        <li key={todo}>
            {todo.text}
        </li>
    )

}
export default NumberList;

