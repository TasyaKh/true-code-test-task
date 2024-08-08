import React, {FC, useEffect, useState} from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";
import {Dropdown} from "../elements/Dropdown";
import {getHeaderContent} from "../../api/pages";

interface Props {

}

export const Navbar: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getHeader()
    }, []);

    const getHeader = async () => {
        const d = await getHeaderContent()
        setData(d)
    }


    // const dropdownVacancy = [
    //     {id: 1, name: "Веб-дизайнер", redirect: "/vacancy1"},
    //     {id: 2, name: "Разработчик", redirect: "/vacancy2"},
    //     {id: 3, name: "Менеджер проектов", redirect: "/vacancy3"},
    // ]
    // const menu = [
    //     {id: 1, name: "Вакансии", redirect: "/", dropdown: vacancies},
    //     {id: 2, name: "Кто мы?", redirect: "/who-we", dropdown: null},
    //     {id: 3, name: "Что мы предлагаем?", redirect: "/we-offers", dropdown: null},
    //     {id: 4, name: "Отзывы", redirect: "reviews", dropdown: null},
    //     {id: 4, name: "Правила", redirect: "/rules", dropdown: null},
    // ]

    return (
        <div className={"container"}>
            <nav className={"navbar"}>
                <div className={"row"}>
                    <div className={"d-lg-none col"} style={{marginBottom: "23px"}}>
                        <Link to={"/"} className={""}>
                            <div className={"logo-header "}>
                                <img src={"/img/logo-full.png"} className={"img-contain"}
                                     alt={"logo"}/>
                            </div>
                        </Link>
                    </div>
                    <div className={"col-auto"}>
                        <label htmlFor="collapse">
                            <img src={"img/hamburger.svg"} alt="hamburger"/>
                        </label>
                    </div>
                </div>

                <div className={"d-lg-none row"}>
                    <div className={"col"}>
                        <div className={"col-auto contacts"}>
                            <div className={" phone-number phone-top"}>
                                <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                    {data?.phone?.number}
                                </a>
                            </div>
                            <a className={""} href={`mailto:${data?.mail}`}>{data?.mail}</a>
                        </div>
                    </div>
                    <div className={"col-auto d-flex justify-content-center"}>
                        <Link to={"/form"}>
                            <button className={"btn light btn-send-request"}>{data?.button_request}</button>
                        </Link>
                    </div>
                </div>
                <input type="checkbox" id="collapse"/>
                <div className="collapsible">
                    <div className={"row collapsible-wrapper"}>
                        {/*logo*/}
                        <div className={"d-none d-lg-block col-auto logo-wrapper"} style={{paddingRight: "125px"}}>
                            <Link to={"/"}>
                                <img src={"/img/logo-full.png"} style={{width: "174px", height: "56px"}}
                                     alt={"logo"}/>
                            </Link>
                        </div>
                        <div className={"d-none d-lg-flex col-auto d-flex align-items-center phone-number"}>
                            <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                {data?.phone?.number}
                            </a>
                        </div>

                        <div className={"col-auto d-flex align-items-center justify-content-center"}>
                            <div className={"row menu-wrapper"}>
                                {data?.links && Object.keys(data?.links).map((key, index) =>
                                    <div className={"col-12 col-lg-auto p-0 d-flex justify-content-center"}>
                                        {/* dropdown */}

                                        {key === "vacancies" &&
                                            <div className={"d-lg-none d-block"}>
                                                <Dropdown child={
                                                    <div className={"row sub-menu-wrapper"}>

                                                        {data?.vacancies && Object.keys(data?.vacancies).map((key2,index) => (

                                                            <div
                                                                className={"col-12 col-lg-auto p-0 d-flex justify-content-center " +
                                                                    ""}>
                                                                <Link to={`/vacancy?key=${key2}`}>
                                                                    <div
                                                                        className={"sub-link link"}> {data?.vacancies[key2]?.header}</div>
                                                                </Link>

                                                            </div>

                                                        ))}
                                                    </div>
                                                } title={data?.links[key]}/>
                                            </div>}

                                        <div className={`${key === "vacancies" ? "d-lg-block d-none" : ""} `}>
                                            <Link to={key}>
                                                <div className={"link"}> {data?.links[key]}</div>
                                            </Link>
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className={"col-12 col-lg d-flex justify-content-center align-items-center"}>
                            <Link to={"/form"}>
                                <button className={"btn light btn-send-request"}>{data?.button_request}</button>
                            </Link>
                        </div>
                        <div className={"contacts-mobile row d-lg-none d-flex"}>

                            <div className={"col-12 d-flex justify-content-center phone-number"}>
                                <a className={"phone "} href={`tel:${data?.phone?.number_link}`}>
                                    {data?.phone?.number}
                                </a>
                            </div>

                            <div className={"col-12 d-flex justify-content-center "}
                                 style={{gap: "11.7px"}}>
                                <div className={"navbar-icon icon-vk"}></div>
                                <div className={"navbar-icon icon-facebook"}></div>
                                <div className={"navbar-icon icon-instagram"}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}
