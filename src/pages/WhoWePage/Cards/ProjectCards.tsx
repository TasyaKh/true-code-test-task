import {FC} from 'react';
import './ProjectCards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {BtnsCards} from "../../../components/elements/buttons/BtnsCards/BtnsCards";
import {BtnArrowDown} from "../../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {
    cardsProjects: any
    buttonName:string
}

export const ProjectCards: FC<Props> = ({cardsProjects, buttonName}) => {

    const cardFooter = (link: string) => (
        <div className={"d-flex justify-content-center"}>
            <Link to={link}>
                <button className={"btn light"}>{buttonName}</button>
            </Link>
        </div>
    )

    return (
        <div className={"project-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {cardsProjects && Object.keys(cardsProjects).map((key) => (

                    <div className={"col-auto"}>
                        <Card footerChild={cardFooter(cardsProjects[key]?.page)}
                              title={cardsProjects[key]?.title} imgSrc={cardsProjects[key]?.img}/>
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

