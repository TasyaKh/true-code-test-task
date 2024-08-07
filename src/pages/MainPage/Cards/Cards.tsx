import React, {FC, useEffect, useState} from 'react';
import './Cards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {CarouselBasic} from "../../../components/elements/CarouselBasic/CarouselBasic";
import {ExpandableElem} from "../../../components/elements/ExpandableElem/ExpandableElem";

interface Props {
    cards: any
}

export const Cards: FC<Props> = ({cards}) => {
    const [cardsElems, setCardsElems] = useState<React.ReactNode[]>()

    useEffect(() => {
        getCommentsElements()
    }, [cards]);


    const getCommentsElements = () => {

        if (cards) {
            const c = Object.keys(cards).map((key) => (
                <div className={"col-auto"}>
                    <Card footerChild={cardFooter(cards[key].vacancy_key)} title={cards[key].title}
                          imgSrc={cards[key]?.img}/>
                </div>
            ))
            setCardsElems(c)
        }

    }

    const cardFooter = (link: string) => (
        <div className={"row buttons"}>
            <div className={"col"}>
                <Link to={`vacancy?key=${link}`}>
                    <button className={"btn light"}>Подробнее</button>
                </Link>
            </div>
            <div className={"col"}>
                <Link to={"/form"}>
                    <button className={"btn dark"}>Подать заявку</button>
                </Link>
            </div>
        </div>
    )

    return (
        <div className={"cards"}>
            <div className={"mobile-hide"}>
                <CarouselBasic childs={cardsElems ?? []} expandCount={3} visibleCount={3} cardsStyle={"cards-wrapper"}/>
            </div>

            <div className={"pc-hide"}>
                <ExpandableElem childs={cardsElems ?? []} expandCount={3} visibleCount={3}
                                cardsStyle={"cards-wrapper"}/>
            </div>
        </div>
    )

};

