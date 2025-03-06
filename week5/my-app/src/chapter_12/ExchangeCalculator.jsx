import React,{useState} from "react";
import MoneyInput from "./MoneyInput";

const exchangeRates = {
    usa : 0.00072,
    canada: 0.001,
    china: 0.0052,
    japan: 0.11
}

const reverseRates = {
    usa : 1392.79,
    canada : 993.55,
    china : 192.27,
    japan : 9.01
}

function ExchangeCalculator(props) {
    const [money, setMoney] = useState('');
    const [foreignMoney, setForeignMoney] = useState('');
    const [scale, setScale] = useState("usa");

    const handleMoneyChange = (money) => {
        setMoney(money);
        setForeignMoney(tryConvert(money, exchange,exchangeRates[scale]));
    };

    const handleScaleChange = (event) => {
        setScale(event.target.value);
        setForeignMoney(tryConvert(money,exchange,exchangeRates[event.target.value]));
    }

    const handleForeignMoneyChange = (foreignMoney) => {
        setForeignMoney(foreignMoney)
        setMoney(tryConvert(foreignMoney,reverse,reverseRates[scale]));
    };


    function exchange(money, exchangeRates) {
        return money * exchangeRates;
    }

    function reverse(foreignMoney, reverseRates) {
        return foreignMoney * reverseRates
    }

    function tryConvert(money,convert, rate) {
        const input = parseFloat(money);
        if (Number.isNaN(input)){
            return "";
        }
        const output = convert(input, rate);
        const rounded = Math.round(output * 1000)/1000;
        return rounded.toString();
    }

    return (

        <div>
            <MoneyInput scale="korea" money={money} onMoneyChange={handleMoneyChange}/>
            <select value={scale} onChange={handleScaleChange}>
                    <option value="usa">미국 달러</option>
                    <option value="canada"> 캐나다 달러</option>
                    <option value="china"> 중국 위안화</option>
                    <option value="japan"> 일본 엔화</option>
            </select>
            <MoneyInput
                scale= {scale}
                money={foreignMoney}
                onMoneyChange={handleForeignMoneyChange}
            />
        </div>
    );
}

export default ExchangeCalculator;