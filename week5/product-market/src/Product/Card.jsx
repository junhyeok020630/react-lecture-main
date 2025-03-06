import React from "react";
import "./ProductList.css"

function Card(props) {
    const {title, children} = props;

    return (
        <div className="card">
            {title && <h1>{title}</h1>} <br/>
            {children}
        </div>
    )
}

export default Card;