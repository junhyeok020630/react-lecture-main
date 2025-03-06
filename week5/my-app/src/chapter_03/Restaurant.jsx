import React from "react";
import Menu from "./Menu";

function Restaurant(props) {
    return(
        // 메뉴명과 가격
        <div>
            <Menu name = "떡볶이" price = {10000}></Menu>
            <Menu name = "순대" price = {5000}></Menu>
            <Menu name = "튀김" price = {3000}></Menu>
        </div>
    )
}
export default Restaurant;