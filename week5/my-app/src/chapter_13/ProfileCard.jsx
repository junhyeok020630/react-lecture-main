import React from "react";
import Card from "./Card";

const profiles = [
    {
        id: 1,
        title: "GDragon",
        color: "red",
        intro: "저의 생일은 1988년 8월 18일입니다.",
        src: "https://i.namu.wiki/i/wdCzmUr6mdm3wZ7inL31hXL3CZU46HU-UCzmXECkVH5pDFXBaEwxYACq5Wfd3btYn2MsVrgK04wtguj-Qe_5x6xOFNfL_x6Zp3JnlEFik6QDKxGjvxZLgFjdQGCKNxP2w94FwWF8ZM0X4wkPQ_aPkA.webp"
    },
    {
        id: 2,
        title: "Taeyang",
        color: "yellow",
        intro: "저의 생일은 1988년 5월 18일입니다.",
        src: "https://i.namu.wiki/i/Wx01p4JzSC-lvemCYgV2ezBPABGh5AiMekKYxFS_hV3kPdT3ufmamlDWqCvmYRb9r5GDPvmML7fslcQxyX2TkZbjroHJyFP7TKJMI15gsFbKcMtfTt8FOxYj-kN4PkgJiRx6TebDBF5kQftkg3BL8Q.webp"
    },
    {
        id: 3,
        title: "Daesung",
        color: "blue",
        intro: "저의 생일은 1989년 4월 26일입니다.",
        src: "https://i.namu.wiki/i/GV7muCtHsMFz_grCrNIhz-jKLuCg_57UFUHsxlHNyEwLboo9KLeSv6jFrgospkJLz4La-hPM414BQ8wLOl0XXjkkmuVH4rl2rV3PKL9RqEeO0srHv6Kjxmtw35tJkGA76I-pu2Dt7uS10NLVCn4i1g.webp"
    }
]

function ProfileCard(props) {
    // return (
    //     <Card title="Choi" backgroundColor="#4ea04e">
    //         <p>안녕하세요, 최준혁입니다.</p>
    //         <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    //     </Card>
    // );
    return (
        <div style={{ display : "flex" }}>
            {profiles.map((li) => {
                return (
                    <Card key={li.id} title= {li.title} backgroundColor={li.color}>
                        <p>안녕하세요, {li.title}입니다.</p>
                        <p>{li.intro}</p>
                        <img src={li.src} style={{width: "300px"}}></img>
                    </Card>
                );
            })}
        </div>
    );
}

export default ProfileCard;