import React, {FC, useEffect, useState} from 'react';
import './ProjectCards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {CarouselBasic} from "../../../components/elements/CarouselBasic/CarouselBasic";
import {ExpandableElem} from "../../../components/elements/ExpandableElem/ExpandableElem";

interface Props {
    cardsProjects: any
    buttonName:string
}

export const ProjectCards: FC<Props> = ({cardsProjects, buttonName}) => {

    useEffect(() => {
        getCommentsElements()
    }, [cardsProjects]);

    const cardFooter = (link: string) => (
        <div className={"d-flex justify-content-center"}>
            <Link to={link}>
                <button className={"btn light"}>{buttonName}</button>
            </Link>
        </div>
    )

    const [cardsElems, setCardsElems] = useState<React.ReactNode[]>()

    const getCommentsElements = () => {

        if (cardsProjects) {
            const c = Object.keys(cardsProjects).map((key) => (
                <div className={"col-auto"}>
                    <Card footerChild={cardFooter(cardsProjects[key]?.page)}
                          title={cardsProjects[key]?.title} imgSrc={cardsProjects[key]?.img}/>
                </div>
            ))

            setCardsElems(c)
        }

    }

    return (
        <div className={"project-cards"}>
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

