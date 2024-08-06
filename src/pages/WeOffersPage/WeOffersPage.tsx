import React, {FC} from 'react';
import './WeOffersPage.scss';
import {Footer} from "../../components/Footer/Footer";
import {Navbar} from "../../components/Navbar/Navbar";

interface Props {
}

export const WeOffersPage: FC<Props> = () => {

    return (
        <div className="we-offers-page">
            <Navbar/>
            <div className={"container content-wrapper"}>
                <h3 className={""} style={{textAlign: "center"}}>
                    Что мы предлагаем
                </h3>

                <p className={"p1 pc-hide"}>
                    У нас имеется целый ряд преимуществ.
                </p>

                <h4>ОБУЧЕНИЕ</h4>
                <p className={"p1 stydy"}>
                    Составляя программы стажировки и таблицу скиллов для роста, мы основывались на собственном опыте
                    работы и использовали опыт других компаний.
                </p>

                <h4>УСЛОВИЯ</h4>
                <p className={"p1"}>
                    <ul>
                        <li>
                            Работа в офисе в Иркутске;
                        </li>
                        <li>
                            Дружный коллектив: научим, поможем, поддержим;
                        </li>
                        <li>
                            Регулярные внутренние и внешние формальные и неформальные мероприятия;
                        </li>
                        <li>
                            Срок стажировки 3 месяца, мощная программа обучения в этот период.
                        </li>
                        <li>
                            Если мы друг другу понравимся, то трудоустройство и простроенная система карьерного роста
                        </li>
                        <li>
                            График работы: 5 дней в неделю с 09.00 - 18.00 (ну или с 10 до 19);
                        </li>
                        <li>
                            Удаленную работу не рассматриваем;
                        </li>
                    </ul>
                </p>

                <h4>ПРЕИМУЩЕСТВА</h4>
                <p className={"p1"}>
                    <ul>
                        <li>
                            Сертификат и рекомендательное письмо по окончании стажировки
                        </li>
                        <li>
                            Возможность дальнейшего трудоустройства в компании
                        </li>
                    </ul>

                </p>

                <div className={"img-gauss mobile-hide"}>
                    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                </div>

                <div className={"img-gauss1 pc-hide"}>
                    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
};

