import {FC} from 'react';
import './ProjectCards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {BtnsCards} from "../../../components/elements/buttons/BtnsCards/BtnsCards";
import {BtnArrowDown} from "../../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {

}

export const ProjectCards: FC<Props> = () => {

    const cards = [
        {id: 1, src: "img/who-we/projects/img.png", name: "Гранд Байкал", link: ""},
        {id: 2, src: "img/who-we/projects/img_1.png", name: "Гора Соболиная", link: ""},
        {id: 3, src: "img/who-we/projects/img_2.png", name: "Мой Бизнес", link: ""},
    ]

    const cardFooter = (link: string) => (
        <div className={"d-flex justify-content-center"}>
            <Link to={link}>
                <button className={"btn light"}>Подробнее</button>
            </Link>
        </div>
    )

    return (
        <div className={"project-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {cards && cards.map((el) => (

                    <div className={"col-auto"}>
                        <Card footerChild={cardFooter(el.link)} title={el.name} imgSrc={el.src}/>
                    </div>
                ))}
            </div>

            {/*buttons*/}
            <div className={"row justify-content-center"}>
                <div className={"buttons-forward mobile-hide"}>
                    <BtnsCards onBackClick={()=>{}} onForwardClick={()=>{}}/>
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

