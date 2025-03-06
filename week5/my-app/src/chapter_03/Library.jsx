import React from "react";
import Book from "./Book"; //export한 Book 컴포넌트를 사용
function Library(props){
    // 파일명과 컴포넌트 명은 같아야 한다.
    return(
        //name과 numOfPage를 바꿔서 렌더링해준다.
        <div>
            <Book name = "처음 만난 파이썬" numOfPage = {300}></Book>
            <Book name = "처음 만난 AWS" numOfPage = {400}></Book>
            <Book name = "처음 만난 리액트" numOfPage = {500}></Book>
        </div>
    )
}

export default Library;