import React, {FC, useEffect, useState} from 'react';
import './WeOffersPage.scss';
import {Footer} from "../../components/Footer/Footer";
import {Navbar} from "../../components/Navbar/Navbar";
import {getWeOffers} from "../../api/pages";

interface Props {
}

export const WeOffersPage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getOffers()
    }, []);

    const getOffers = async () => {
        const d = await getWeOffers()
        setData(d)

        console.log("dddS", d.sections)

    }

    return (
        <div className="we-offers-page">
            <Navbar/>
            <div className={"container content-wrapper"}>
                <h3 className={""} style={{textAlign: "center"}}>
                    {data?.header_main}
                </h3>

                <p className={"p1 pc-hide"}>
                    {data?.subtext_header}
                </p>

                {/*<h4> {data?.sections?.section?.header}</h4>*/}
                {/*<p className={"p1 stydy"}>*/}
                {/*    {data?.sections?.section?.text}*/}
                {/*</p>*/}

                {data?.sections && Object.keys(data?.sections).map((key, index) => (
                    <>
                        <h4> {data?.sections[key]?.header}</h4>
                        <p className={`p1 ${index === 0 ? "stydy" : ""}`}
                           dangerouslySetInnerHTML= {{__html: data?.sections[key]?.text}}>
                        </p>
                    </>
                ))}

                {/*<h4>УСЛОВИЯ</h4>*/}
                {/*<p className={"p1"}>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            Работа в офисе в Иркутске;*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Дружный коллектив: научим, поможем, поддержим;*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Регулярные внутренние и внешние формальные и неформальные мероприятия;*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Срок стажировки 3 месяца, мощная программа обучения в этот период.*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Если мы друг другу понравимся, то трудоустройство и простроенная система карьерного*/}
                {/*            роста*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            График работы: 5 дней в неделю с 09.00 - 18.00 (ну или с 10 до 19);*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Удаленную работу не рассматриваем;*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</p>*/}

                {/*<h4>ПРЕИМУЩЕСТВА</h4>*/}
                {/*<p className={"p1"}>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            Сертификат и рекомендательное письмо по окончании стажировки*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Возможность дальнейшего трудоустройства в компании*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*</p>*/}

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

