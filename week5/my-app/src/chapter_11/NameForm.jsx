import { useState } from "react";
import React from "react";

function NameForm(props){
    const[value,setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value); // .toUpperCase와 같은 함수를 활용할 수도 있다.
        console.log(event.target.value); // 콘솔에서 입력값 확인
    }
    const handleSubmit = (event) => {
        alert('입력한 이름:' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : &nbsp;
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default NameForm;