import React, {FC} from 'react';
import './ReviewsPage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {Comment} from "./Comment/Comment";
import {BtnArrowDown} from "../../components/elements/buttons/BtnArrowDown/BtnArrowDown";

interface Props {
}

export const ReviewsPage: FC<Props> = () => {

    const comments = [
        {
            id: 1,
            avatar: "img/reviews/img_1.png",
            author: "Олег Комаров\n" +
                "front-end разработчик",
            text:
                `Стажировка в true.code погрузила меня в настоящую рабочую атмосферу — благодаря опытным наставникам я быстро изучил работу с современными инструментами,
                 новыми стандартами JavaScript 
                и методологией написания кода, как правильно подобрать ту или иную технологию для решения конкретной задачи.\n\n
                Кроме того, достаточно скоро я усвоил, что такое работа в команде и написание кода, который не просто работает, но и понятен другим специалистам.`,
            isAuthorLeftSide: true

        },
        {
            id: 2,
            avatar: "img/reviews/img.png",
            author: "Екатерина Иванова \n " +
                "менеджер проектов",
            text:
                `В декабре 2019 увидела пост о наборе стажеров. Прошла собеседование, сделала тестовое, и меня пригласили на стажировку. Стажировка длилась 3 месяца. Практически с самого начала давали боевые реальные задачи, сначала небольшие и попроще, постепенно всё более ответственные. Ещё было много теории: менеджерский курс, статьи и лекции по основным понятиям дизайна, верстки и разработки, курсы Битрикс. Особенно понравилось, 
                что до карантина каждую неделю кто-нибудь из ребят читал лекцию. Например, было несколько маркетинговых и дизайнерских.
Адаптация в коллективе прошла довольно легко, все ребята очень открытые и отзывчивые.

Стажировка закончилась в конце марта, и в апреле мне предложили продолжить работу уже полноценным проджект-менеджером.`,
            isAuthorLeftSide: false
        },

    ]
    return (
        <div className="reviews-page">
            <div className={"container-full"}>
                <Navbar/>
                <div className={"reviews-wrapper container"}>
                    <h3 style={{textAlign: "center"}}>
                        Наши отзывы
                    </h3>

                    <div className={"reviews"}>
                        <div className={"row comments"}>
                            {comments && comments.map((el) => (
                                <div className={"col-12"}>
                                    <Comment text={el.text} author={el.author} avatar={el.avatar}
                                             isAuthorLeftSide={el.isAuthorLeftSide}/>
                                </div>
                            ))}
                        </div>

                        {/*buttons*/}
                        <div className={"row justify-content-center"}>
                            <div className={"arrow-down"}>
                                <div className={" d-flex justify-content-center"}>
                                    <BtnArrowDown/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    )
};

