import React, {FC, useEffect, useState} from 'react';
import './EventsCards.scss';
import {CarouselBasic} from "../../../components/elements/CarouselBasic/CarouselBasic";
import {ExpandableElem} from "../../../components/elements/ExpandableElem/ExpandableElem";

interface Props {
    cardsEvents:any
}

export const EventsCards: FC<Props> = ({cardsEvents}) => {

    const [cardsElems, setCardsElems] = useState<React.ReactNode[]>()

    useEffect(() => {
        getCommentsElements()
    }, [cardsEvents]);


    const getCommentsElements = () => {

        if (cardsEvents) {
            const c = Object.keys(cardsEvents).map((key) => (
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
            ))

            setCardsElems(c)
        }

    }

    return (
        <div className={"event-cards"}>

            <div className={"mobile-hide"}>
                <CarouselBasic childs={cardsElems ?? []} expandCount={4} visibleCount={4} cardsStyle={"cards-wrapper"}/>
            </div>

            <div className={"pc-hide"}>
                <ExpandableElem childs={cardsElems ?? []} expandCount={4} visibleCount={4}
                                cardsStyle={"cards-wrapper"}/>
            </div>

        </div>
    )

};

