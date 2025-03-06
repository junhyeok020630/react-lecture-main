import React from "react";
import Comment from "./Comment";

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"제니"} comment={"안녕하세요, 블랙핑크입니다."}/>
//             <Comment name={"로제"} comment={"리액트 재미있어요."}/>
//         </div>
//     );
// }
const comments = [
    {
        id: 1,
        name: "제니",
        comment: "안녕하세요, 블랙핑크입니다.",
    },
    {
        id: 2,
        name: "로제",
        comment: "리액트 재미있어요~!",
    },
    {
        id: 3,
        name: "리사",
        comment: "저도 리액트 배워보고 싶어요!!",
    }
];
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                //map() : 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만든다.
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                    // <Comment name={comment.name} comment={comment.comment}/>
                    // 키 값 미 설정 시 should have unique key 에러 발생 - 개발자 도구 창 같이 캡처
                );
            })}
        </div>
    );
}
export default CommentList;