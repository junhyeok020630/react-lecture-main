import React from "react";

class Mybutton extends React.Component {
    handleClick = () =>{
        console.log('this is:', this);
    }

    
    // handleClick (){
    //     console.log('this is:', this);
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                클릭
            </button>
        );
    }

    // 이렇게 하면 `this`가 바운드 된다.
    // render() {
    //     return(
    //         <button onClick={() => this.handleClick()}>
    //             클릭
    //         </button>
    //     )
    // }
}

export default Mybutton