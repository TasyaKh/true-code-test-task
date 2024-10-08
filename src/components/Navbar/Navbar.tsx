import React, {FC} from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";
import {Dropdown} from "../elements/Dropdown";

interface Props {

}

export const Navbar: FC<Props> = () => {

    const dropdownVacancy = [
        {id: 1, name: "Веб-дизайнер", redirect: "/vacancy-1"},
        {id: 2, name: "Разработчик", redirect: "/vacancy-2"},
        {id: 3, name: "Менеджер проектов", redirect: "/vacancy-3"},
    ]
    const menu = [
        {id: 1, name: "Вакансии", redirect: "/", dropdown: dropdownVacancy},
        {id: 2, name: "Кто мы?", redirect: "/who-we", dropdown: null},
        {id: 3, name: "Что предлагаем?", redirect: "/we-offers", dropdown: null},
        {id: 4, name: "Отзывы", redirect: "reviews", dropdown: null},
        {id: 4, name: "Правила", redirect: "/rules", dropdown: null},
    ]

    return (
        <div className={"container"}>
            <nav className={"navbar"}>
                <div className={"row"}>
                    <div className={"d-lg-none col"} style={{marginBottom: "23px"}}>
                        <Link to={"/"}>
                            <img src={"/img/logo-full.png"} style={{width: "174px", height: "56px"}}
                                 alt={"logo"}/>
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
                        <div className={"col-auto"}>
                            <div className={" phone-number"} style={{marginBottom: "12px"}}>
                                +7 (3952) 26-12-60
                            </div>
                            <a className={""}>support@t-code.ru</a>
                        </div>
                    </div>
                    <div className={"col-auto d-flex justify-content-center"}>
                        <button className={"btn light btn-send-request"}>Подать заявку</button>
                    </div>
                </div>
                <input type="checkbox" id="collapse"/>
                <div className="collapsible">
                    <div className={"row"}>
                        {/*logo*/}
                        <div className={"d-none d-lg-block col-auto logo-wrapper"} style={{paddingRight: "125px"}}>
                            <Link to={"/"}>
                                <img src={"/img/logo-full.png"} style={{width: "174px", height: "56px"}}
                                     alt={"logo"}/>
                            </Link>
                        </div>
                        <div className={"d-none d-lg-flex col-auto d-flex align-items-center phone-number"}>
                            +7 (3952) 26-12-60
                        </div>
                        <div className={"col-auto d-flex align-items-center"} >
                            <div className={"row menu-wrapper"}>
                                {menu && menu.map((el) =>
                                    <div className={"col-12 col-lg-auto p-0 d-flex justify-content-center"}>
                                        {/* dropdown */}

                                        {el.dropdown &&
                                            <div className={"d-lg-none d-block"}>
                                                <Dropdown child={
                                                    <div className={"row sub-menu-wrapper"}>

                                                        {el.dropdown && el.dropdown.map((el) => (

                                                            <div
                                                                className={"col-12 col-lg-auto p-0 d-flex justify-content-center " +
                                                                    ""}>
                                                                <Link to={el.redirect}>
                                                                    <div className={"sub-link link"}> {el.name}</div>
                                                                </Link>

                                                            </div>

                                                        ))}
                                                    </div>
                                                } title={el.name}/>
                                            </div>}

                                        <div className={`${el.dropdown ? "d-lg-block d-none" : ""} `}>
                                            <Link to={el.redirect}>
                                                <div className={"link"}> {el.name}</div>
                                            </Link>
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className={"col d-flex justify-content-center align-items-center"}>
                            <button className={"btn light btn-send-request"}>Подать заявку</button>
                        </div>
                        <div className={"contacts-mobile row d-lg-none d-flex"}>
                            <div className={"col-12 d-flex justify-content-center phone-number"}>
                                +7 (3952) 26-12-60
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
