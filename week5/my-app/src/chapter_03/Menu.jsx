import React from "react";

function Menu(props){
    return(
        <div>
            <h1>{`메뉴 : ${props.name}`}</h1>
            <h2>{`가격 : ${props.price}`}</h2>
        </div>
    )
}
export default Menu;