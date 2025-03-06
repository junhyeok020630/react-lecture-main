import React from "react";
import BlackAndWhite from "./BlackAndWhite"

const chefs = [
    {
        id: 1,
        imageUrl: "https://i.namu.wiki/i/g11ucO4b0zXuNyAzeal4vl1BN42KD37HTizm7z9fpLodh0YMKRVZ7jsr0rvbaMsRlZ7PdtQATP5viraafFWCgx-6_8HbdwuWqba4rS7pPpR7i66DknE5sFhSXZlbJibL8yLG_V5U2KotT0E3xIZ8QQ.webp",
        name: "에드워드 리",
        comment: "무.. 물코기",
    },
    {
        id: 2,
        imageUrl:"https://blog.kakaocdn.net/dn/b0gLJj/btsJIvP5v1j/LzmShBOEjHW2ZYYeK0Fbkk/img.webp",
        name: "최강록",
        comment: "나야. 들기름",
    },
    {
        id: 3,
        imageUrl: "https://img.etoday.co.kr/pto_db/2024/10/600/20241002164029_2084354_1200_674.jpg",
        name: "안성재",
        comment: "고기가 even하게 익지 않았어요.",
    },
    {
        id: 4,
        imageUrl: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/09/23/2d2d3b63-fb34-44e5-ba17-5891cbbca189.jpg",
        name: "유비빔",
        comment: "비비비빔 비빔비빔",
    },
    {
        id: 5,
        imageUrl: "https://i.namu.wiki/i/YqcJMjXD4cmrZrNQqjm0EG-JHlFBeuTOhsF9E9OeURk3R-2dex71tQbbXJCysxAHN1PslCZNGOpyNfhEss1KAjNtY52UdphVfrflmD6UHBAJjbGYG8KESWfP5hxM373FlBLs1CpcS9z7qS2GwKiZgA.webp",
        name: "이길여 총장님",
        comment: "학점은... 이제 A로 하겠습니다. 근데 이제 +를 곁들인"
    }
];
function ChefList(props) {
    return (
        <div>
            {chefs.map((chef) => {
                //map() : 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만든다.
                return (
                    <BlackAndWhite key = {chef.id} imageUrl = {chef.imageUrl} name={chef.name} comment={chef.comment}/>
                    // <Comment name={comment.name} comment={comment.comment}/>
                    // 키 값 미 설정 시 should have unique key 에러 발생 - 개발자 도구 창 같이 캡처
                );
            })}
        </div>
    );
}
export default ChefList;