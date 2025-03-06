// import React from "react";

// class ConfirmButton extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             isConfirmed:false,
//         };
//         this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     handleConfirm(){
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }
//     //클래스 필드 문법 사용
//     // handleConfirm = () => {
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed,
//     //     }));
//     // }

//     render() {
//         return(
//             <button
//             onClick={this.handleConfirm}
//             disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         )
//     }
// }
// export default ConfirmButton;

import React,{useState} from "react";

function ConfirmButton(props) {
    // useState - 초기 상태 지정
    const[isConfirmed,setIsConfirmed] = useState(false);

    // useState내 set함수로 초기 상태 변경 
    const handleClick = () => {
        setIsConfirmed ((prevIsConfirmed) => !prevIsConfirmed);
    }

    return(
        // onClick으로 handleClick 함수 호출, disabled로 한번 확인되면 재클릭 불가
        <button onClick = {handleClick} disabled = {isConfirmed} >  
            {isConfirmed ? '확인됨' : '확인하기'}
        </button>
    );
}
export default ConfirmButton;
