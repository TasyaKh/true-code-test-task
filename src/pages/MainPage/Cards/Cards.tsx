import {FC} from 'react';
import './Cards.scss';
import {Link} from "react-router-dom";
import {Card} from "../../../components/Card/CardTemplate";
import {BtnsCards} from "../../../components/elements/buttons/BtnsCards/BtnsCards";
import {BtnArrowDown} from "../../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {

}

export const Cards: FC<Props> = () => {

    const cards = [
        {id: 1, src: "img/main-page/design.png", name: "Веб-дизайнер", link: "/vacancy-1"},
        {id: 2, src: "img/main-page/developer.png", name: "Разработчик", link: "/vacancy-2"},
        {id: 3, src: "img/main-page/manager.png", name: "Менеджер проектов", link: "/vacancy-3"},
    ]

    const cardFooter = (link: string) => (
        <div className={"row buttons"}>
            <div className={"col"}>
                <Link to={link}>
                    <button className={"btn light"}>Подробнее</button>
                </Link>
            </div>
            <div className={"col"}>
                <button className={"btn dark"}>Подать заявку</button>
            </div>
        </div>
    )

    return (
        <div className={"cards"}>
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

