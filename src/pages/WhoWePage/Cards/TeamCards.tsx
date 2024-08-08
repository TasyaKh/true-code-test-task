import React, {FC} from 'react';
import './TeamCards.scss';

interface Props {
    teamCards: any
}

export const TeamCards: FC<Props> = ({teamCards}) => {

    // const cards = [
    //     {id: 1, src: "img/who-we/team/img.png", name: "Артем", role: "Директор"},
    //     {
    //         id: 2, src: "img/who-we/team/img_1.png", name: "Руслан", role: "Руководитель\n" +
    //             "отдела продаж"
    //     },
    //     {
    //         id: 3, src: "img/who-we/team/img_2.png", name: "Екатерина", role: "Руководитель\n" +
    //             "отдела разработки"
    //     },
    //     {
    //         id: 4, src: "img/who-we/team/img_3.png", name: "Анна", role: "Руководитель\n" +
    //             "отдела рекламы"
    //     },
    // ]

    return (
        <div className={"team-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {teamCards && Object.keys(teamCards).map((key) => (

                    <div className={"col-auto"}>
                        <div className={"team-card"}>
                            <div className={"card-img"}>
                                <img src={teamCards[key].img} className={"img-resizable"} alt={""}/>
                            </div>
                            <div className={"card-text-wrapper"}>
                            <div className={"card-text"}>
                                <div className={"card-name"}>
                                    <div className={"h4-h1 m-0"}>{teamCards[key].name}</div>
                                </div>
                                <div className={"card-role"}>
                                    <div className={"h6-h6 m-0"}>{teamCards[key].role}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

};

