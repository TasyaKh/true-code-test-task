import React, {FC} from 'react';
import './EventsCards.scss';
import {BtnsCards} from "../../../components/elements/buttons/BtnsCards/BtnsCards";
import {BtnArrowDown} from "../../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {
    cardsEvents:any
}

export const EventsCards: FC<Props> = ({cardsEvents}) => {

    // const cards = [
    //     {id: 1, src: "img/who-we/events/img.png", name: "Новый Год"},
    //     {id: 2, src: "img/who-we/events/img_1.png", name: "8 Марта"},
    //     {id: 3, src: "img/who-we/events/img_2.png", name: "23 Февраля"},
    //     {id: 4, src: "img/who-we/events/img_3.png", name: "Корпоратив"},
    // ]

    return (
        <div className={"event-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {cardsEvents && Object.keys(cardsEvents).map((key) => (
                    <div className={"col-auto"}>
                        <div className={"event-card"}>
                            <div className={"card-img"}>
                                <img src={cardsEvents[key].img} className={"img-resizable"} alt={""}/>
                            </div>
                            <div className={"card-title"}>
                                    <h4 className={" m-0"}>{cardsEvents[key].name}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*buttons*/}
            <div className={"row justify-content-center"}>
                <div className={"buttons-forward mobile-hide"}>
                    <BtnsCards onBackClick={() => {
                    }} onForwardClick={() => {
                    }}/>
                </div>
                <div className={"pc-hide"}>
                    <div className={" d-flex justify-content-center"}>
                        <BtnArrowDown/>
                    </div>
                </div>
            </div>
        </div>
    )

};

