// import React, {useState} from "react";

// class Toggle extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {isToggleOn: true};
//         //callback에서 this를 사용하기 위해서는 바인딩을 필수적으로 해야한다.
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? '켜짐' : '꺼짐'}
//             </button>
//         );
//     }
// }
// export default Toggle
import React, {useState} from "react";
function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    //방법1. 함수 안의 함수로 정의
    function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    //방법2. arrow function을 사용하여 정의
    // const handleClick = () => {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }
    return(
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    );
}

export default Toggle