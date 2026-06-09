import React from "react";

const students = [
    {
        name:"Sookyong",
    },
    
    {
        name:"Steve",
    },
    {
        name:"Bill",
    },
    {
        name:"Jeff",
    },

];

function AttendanceBook(props) {
    return(
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;