import React from "react";

const students = [
    {
        id:1,
        name: "Sookyong",
    },
    {
        id:2,
        name: "Steve",
    },
    {
        id:3,
        name:"Bill",
    },
    {
        id:4,
        name:"Jeff",
    },
];

function AttendanceBook(props){
    return(
        // id를 키 값으로 사용
        // <ul>
        //     {students.map((student) => {
        //         return <li key={student.id}>{student.name}</li>
        //     })}
        // </ul>
        // 포맷팅 된 문자열을 키 값으로 사용
        // <ul>
        //     {students.map((student) => {
        //         return <li key={`student-id-${student.id}`}>{student.name}</li>
        //     })}
        // </ul>
        // 배열의 인덱스를 키 값으로 사용
        <ul>
            {students.map((student,index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;