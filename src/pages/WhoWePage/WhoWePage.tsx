import React, {FC} from 'react';
import './WhoWePage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {ProjectCards} from "./Cards/ProjectCards";
import {TeamCards} from "./Cards/TeamCards";
import {TeamPhotoCards} from "./Cards/TeamPhotoCards";
import Carousel from "./Cards/Carousel";

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
                            <img className={"img-ring"} src={"/img/who-we/achievement.png"} alt={"achievement"}/>
                        </div>

                        <h3 className={""}>
                            Золотой сайт
                        </h3>

                        <div className={"table-wrapper"}>
                            <div className={"table-achievements"}>
                                {achievements && achievements.map(((el) => (
                                    <div className={"row"}>
                                        <div className={"col-sm-auto col-12 year"}>{el.year}</div>
                                        <div className={"col-sm-auto col-12 place"}> {el.place}</div>
                                        <div className={"col-sm col-12 site"}>{el.site}</div>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>

                    {/* projects*/}
                    <div className={"projects"}>
                        <div className={"img-3d-wrapper "}>
                            <img className={"img-ring"} src={"/img/who-we/keis.png"} alt={"projects"}/>
                        </div>

                        <ProjectCards/>

                        {/* video*/}
                        <div className={"video-wrapper"}>
                            <div className={"video"}>
                                <img className={"img-resizable"} src={"img/who-we/projects/img_3.png"} alt={"video"}/>
                                <div className={"text-video"}>
                                    showreel
                                </div>
                                <div className={"play"}>
                                    <img className={"img-resizable"} src={"img/who-we/projects/play.png"} alt={"play"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* team*/}
                    <div className={"team"}>
                        <div className={"img-3d-wrapper"}>
                            <img className={"img-ring"} src={"/img/who-we/team.png"} alt={"projects"}/>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <div className={"h6-p1 m-0"}>
                                Когда-то true.code состоял из маленькой команды друзей и единомышленников. Сегодня в
                                true.code работает 21 человек, но это все равно друзья и единомышленники или типа того,
                                как-то красиво надо будет написать.
                            </div>
                        </div>
                        <div>
                            <TeamCards/>
                        </div>
                    </div>

                    {/* team photo */}
                    <div className={"team-photo"}>
                        <div className={"header"}>
                            Фото команды
                        </div>
                        <TeamPhotoCards/>

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

