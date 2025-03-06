import React from "react";

const scaleNames = {
    korea: "대한민국",
    usa: "미국",
    canada: "캐나다",
    japan: "일본",
    china: "중국"
};

const images = {
    korea: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/150px-Flag_of_South_Korea.svg.png",
    usa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    canada: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/250px-Flag_of_Canada.svg.png",
    japan: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png",
    china: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png"
}

function MoneyInput(props) {

    const handleChange = (event) => {
        props.onMoneyChange(event.target.value);
    }

    return(
        <fieldset style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <legend>금액을 입력해 주세요(국가:{scaleNames[props.scale]}):</legend>
            <img src={images[props.scale]} alt={`${scaleNames[props.scale]}의 국기`}
                style={{ width: "140px", height: "80px", objectFit: "cover", marginBottom: "10px" }}/>
            <input 
                placeholder="금액 입력"
                style={{margin : "10px", verticalAlign: "middle"}}
                value={props.money} onChange={handleChange} />
        </fieldset>
    );
}

export default MoneyInput;