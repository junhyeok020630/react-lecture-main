import React from "react"; // 리액트 import

function Book(props){ 
    // 대소문자 구분 
    // 대문자 function은 component;
    // file 명과 component 명은 같아야 한다.
    return(
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}
//jsx를 사용하지 않을 때
// function Book(props) {
//     return React.createElement(
//         'div',
//         null,
//         [
//             React.createElement(
//                 'h1',
//                 null,
//                 `이 책의 이름은 ${props.name}입니다.`
//             ),
//             React.createElement(
//                 'h2',
//                 null,
//                 `이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`
//             )
//         ]
//     )
// }
export default Book;