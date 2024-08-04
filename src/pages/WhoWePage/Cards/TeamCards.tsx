import React, {FC} from 'react';
import './TeamCards.scss';
import {BtnsCards} from "../../../components/elements/buttons/BtnsCards/BtnsCards";
import {BtnArrowDown} from "../../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {

}

export const TeamCards: FC<Props> = () => {

    const cards = [
        {id: 1, src: "img/who-we/team/img.png", name: "Артем", role: "Директор"},
        {
            id: 2, src: "img/who-we/team/img_1.png", name: "Руслан", role: "Руководитель\n" +
                "отдела продаж"
        },
        {
            id: 3, src: "img/who-we/team/img_2.png", name: "Екатерина", role: "Руководитель\n" +
                "отдела разработки"
        },
        {
            id: 4, src: "img/who-we/team/img_3.png", name: "Анна", role: "Руководитель\n" +
                "отдела рекламы"
        },
    ]

    return (
        <div className={"team-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {cards && cards.map((el) => (

                    <div className={"col-auto"}>
                        <div className={"team-card"}>
                            <div className={"card-img"}>
                                <img src={el.src} className={"img-resizable"} alt={""}/>
                            </div>
                            <div className={"card-text"}>
                                <div className={"card-name"}><div className={"h4-h1 m-0"}>{el.name}</div></div>
                                <div className={"card-role"}><div className={"h6-h6 m-0"}>{el.role}</div></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

};

