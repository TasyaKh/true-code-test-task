import React, {FC, useEffect, useState} from 'react';
import './Cards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {CarouselBasic} from "../../../components/elements/CarouselBasic/CarouselBasic";
import {ExpandableElem} from "../../../components/elements/ExpandableElem/ExpandableElem";

interface Props {
    cards: any
    data: any
}

export const Cards: FC<Props> = ({cards, data}) => {
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

    const btn1 = (link: string) => (
        <Link to={`vacancy?key=${link}`}>
            <button className={"btn light"}>{data?.button_more}</button>
        </Link>
    )

    const btn2 = () => (
        <Link to={"/form"}>
            <button className={"btn dark"}>{data?.button_request}</button>
        </Link>
    )


    const cardFooter = (link: string) => (
        <div>

            <div className={"mobile-hide"}>
                <div className={"row buttons"}>
                    <div className={"col"}>
                        {btn1(link)}
                    </div>
                    <div className={"col"}>
                        {btn2()}
                    </div>
                </div>
            </div>

            <div className={"pc-hide"}>
                <div className={"row buttons"}>
                    <div className={"col"}>
                        {btn2()}
                    </div>
                    <div className={"col"}>
                        {btn1(link)}
                    </div>
                </div>
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

