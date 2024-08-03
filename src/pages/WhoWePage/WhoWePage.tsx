import React, {FC} from 'react';
import './WhoWePage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";

interface Props {
}

export const WhoWePage: FC<Props> = () => {

    const achievements = [
        {year: "2020", place: "3 место", site: "Сайт Гора Соболиная"},
        {year: "2019", place: "Лучший сайт гостиницы/отеля", site: "Сайт Гора Соболиная"},
        {year: "", place: "3 место", site: "Сайт EASY School"},
        {year: "2018", place: "Лучший сайт образовательного учреждения", site: "Сайт EASY School"}
    ]

    return (
        <div className="who-we-page">
            <Navbar/>
            <div className="content">
                <div className={"container"}>
                    {/*top */}
                    <div className={"row"}>
                        <div className={"col text-1"}>
                            <div className={"logo"}>
                                <img src={"/img/logo-short.svg"} alt={""}/>
                            </div>
                            <h6 className={"m-0"}>
                                Мы диджитал-агентство полного цикла.
                                Самостоятельно готовим концепцию будущего сайта или сервиса, разрабатываем дизайн и
                                фирменный стиль, программируем, запускаем проект и не только.
                            </h6>
                        </div>
                        <div className={"col mobile-hide"}>
                            <div className={"true-gif"}>
                                <div className={"img-gif"}>
                                    <img className={""} src={"/gif/true.gif"} alt={"true gif"}/>
                                </div>
                                <div className={"img-gauss1"}>
                                    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* rewards */}
                    <div className={"achievement"}>
                        <div className={"text-achievement"}>
                            <div className={"p1 m-0"}>
                                Клиенты обращаются к нам за экспертизой и за производственными мощностями. Они просят
                                помочь в создании нового или серьезной переработке существующего крупного мобильного или
                                веб-продукта. К нам обращаются, когда нуждаются
                                в команде, которая переосмыслит проект, ориентируясь на историю взаимодействия
                                пользователей с ним и на задачах бизнеса. Нас выбирают, когда нужно запустить проект,
                                объемы которого не под силу основной массе подрядчиков.
                            </div>
                        </div>

                        <div className={"img-3d-wrapper "}>
                            <img src={"/img/who-we/achievement.png"} alt={""}/>
                        </div>

                        <h3 className={""}>
                            Золотой сайт
                        </h3>

                        <table className={"table-achievements"}>
                            {achievements && achievements.map(((el) => (
                                <tr>
                                    <td className={"year"}>{el.year}</td>
                                    <td className={"place"}> {el.place}</td>
                                    <td className={"site"}>{el.site}</td>
                                </tr>
                            )))}
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>

            {/*<div className={"img-gauss"}>*/}
            {/*    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>*/}
            {/*</div>*/}
        </div>
    )
};

