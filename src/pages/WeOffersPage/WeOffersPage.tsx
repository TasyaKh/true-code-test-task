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
            <div className={"container"}>
                <h3 className={""} style={{textAlign: "center"}}>
                    Что мы предлагаем
                </h3>

                <p className={"p1 pc-hide"}>
                    У нас имеется целый ряд преимуществ.
                </p>

                <h4>ОБУЧЕНИЕ</h4>
                <p className={"p1"}>
                    Составляя программы стажировки и таблицу скиллов для роста, мы основывались на собственном опыте
                    работы и использовали опыт других компаний.
                </p>

                <h4>УСЛОВИЯ</h4>
                <p className={"p1"}>
                    Работа в офисе в Иркутске;
                    Дружный коллектив: научим, поможем, поддержим;
                    Регулярные внутренние и внешние формальные и неформальные мероприятия;
                    Срок стажировки 3 месяца, мощная программа обучения в этот период.
                    Если мы друг другу понравимся, то трудоустройство и простроенная система карьерного роста
                    График работы: 5 дней в неделю с 09.00 - 18.00 (ну или с 10 до 19);
                    Удаленную работу не рассматриваем;
                </p>

                <h4>ПРЕИМУЩЕСТВА</h4>
                <p className={"p1"}>
                    Сертификат и рекомендательное письмо по окончании стажировки
                    Возможность дальнейшего трудоустройства в компании

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

