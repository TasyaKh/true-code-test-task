import React, {FC} from 'react';
import './Vacancies.scss';
import {Cards} from "./Cards/Cards";
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";

interface Props {
}

export const Vacancies: FC<Props> = () => {

    return (
        <div className={""}>
            <Navbar/>
            <div className={"container"}>
                <div className="main-page">
                    {/* upper section */}
                    <div className={"row"}>

                        <div className={"col open-gather"}>
                            <h3 className={"mt-0"}>Мы открываем набор на наши огненные стажировки!</h3>
                            <h6>Присоединяйся к нашей дружной команде и начни свой путь в мире digital.</h6>
                        </div>

                        <div className={"col-auto mobile-hide "} style={{marginRight: "112px"}}>
                            <img src={"/img/img.png"} className={"img-resizable"}
                                 style={{width: "363px", height: "406px", transform: "translate(0px, -37px)"}}
                                 alt={""}/>
                        </div>
                        <div className={"col-auto  mobile-hide"}>
                            {/*<div className={""} style={{position: "relative", overflow:"hide"}}>*/}
                            <div className={"d-flex img-live"}
                                 style={{position: "absolute", top: "161px", right: "-268px"}}>
                                <img src={"/gif/peack_with_us.gif"} style={{width: "536px"}}
                                     className={"img-resizable"} alt={""}/>

                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <div className={"flex-column d-flex align-items-center"}>
                        {/* cards section */}
                        <div className={""}>
                            <Cards/>
                        </div>

                        <div className={"pc-hide img-above-form"}>
                            <img className={"img-resizable"} src={"/img/img.png"} alt={""}/>
                        </div>

                        <div className={""}>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

};

