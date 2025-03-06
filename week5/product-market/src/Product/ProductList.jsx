import React, { useState } from "react";
import Card from "./Card";
import "./ProductList.css";

const profiles = [
    {
        id: 1,
        title: "팔 붕어빵",
        price: 500,
        intro: "달달한 팥 앙금으로 만든 맛있는 붕어빵",
        src: "https://img.bizthenaum.co.kr/img2022/bean_bread_01.jpg"
    },
    {
        id: 2,
        title: "슈크림 붕어빵",
        price: 500,
        intro: "어린 아이도 부담없이 먹기 좋은 붕어빵",
        src: "https://img.bizthenaum.co.kr/img2022/custard_bread_01.jpg"
    },
    {
        id: 3,
        title: "피자 붕어빵",
        price: 700,
        intro: "팥과 슈크림에 질린 사람들이 즐기기 좋은 붕어빵",
        src: "https://img.bakingschool.co.kr/data/recipe/recipe_main/1500/1411_recipe_main_d828"
    },
    {
        id: 4,
        title: "미니 붕어빵",
        price: 300,
        intro: "한입에 쏙 들어가는 간식거리로 좋은 붕어빵",
        src: "https://m.cafebbang.com/web/product/big/202306/716c4d77bb40242bf31fcb5f145b7ff1.jpg"
    },
    {
        id: 5,
        title: "거대 붕어빵",
        price: 10000,
        intro: "인플루언서들을 위한 관심끌이용 붕어빵",
        src: "https://i.ytimg.com/vi/kirGmadVRpA/sddefault.jpg"
    },
    {
        id: 6,
        title: "생 붕어빵",
        price: 2000,
        intro: "밀가루를 못먹는 사람들을 위한 진짜 붕어로 만든 붕어빵",
        src: "https://mblogthumb-phinf.pstatic.net/20150907_11/ddutti77_1441614936787xDmdH_JPEG/DSC03482.JPG?type=w420"
    }
];

function ProductList(props) {
    const [quantities, setQuantities] = useState(
        profiles.reduce((acc, profile) => {
            acc[profile.id] = 1; // 초기 개수: 1
            return acc;
        }, {})
    );

    // 개수 변경 핸들러
    const handleQuantityChange = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.max(1, value), // 최소값 1
        }));
    };

    return (
        <div className="container">
            {profiles.map((li) => {
                const totalPrice = li.price * quantities[li.id]; // 총액 계산
                return (
                    <Card key={li.id} title={li.title} backgroundColor={li.color}>
                        <p>{li.intro}</p>
                        <p>가격 : 개당 {li.price}원</p>
                        <img src={li.src} style={{ width: "300px" }} alt={li.title} />
                        <label>개수 : <input
                            type="number"
                            value={quantities[li.id]}
                            min="1"
                            onChange={(event) =>
                                handleQuantityChange(li.id, parseInt(event.target.value, 10) || 1)
                            }
                            style={{
                                width: "60px",
                                textAlign: "center",
                                marginBottom: "10px",
                            }}
                        /> </label>
                        
                        <button>구매하기 (총 {totalPrice.toLocaleString()}원)</button>
                    </Card>
                );
            })}
        </div>
    );
}

export default ProductList;
