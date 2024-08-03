import React, {FC} from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";

interface Props {

}

export const Navbar: FC<Props> = () => {

    const menu = [
        {id: 1, name: "Вакансии", redirect: "/"},
        {id: 2, name: "Кто мы?", redirect: "/who-we"},
        {id: 3, name: "Что предлагаем?", redirect: "/we-offers"},
        {id: 4, name: "Отзывы", redirect: "reviews"},
        {id: 4, name: "Правила", redirect: "/rules"},
    ]

    return (
        <div className={"container"}>
            <div className={"navbar"}>
                <div className={"row"}>
                    <div className={"col-auto"} style={{paddingRight: "125px"}}>
                        <Link to={"/"}>
                            <img src={"/img/logo-full.png"} style={{width: "174px", height: "56px"}} alt={"logo"}/>
                        </Link>
                    </div>
                    <div className={"col-auto d-flex align-items-center phone-number"}>
                        +7 (3952) 26-12-60
                    </div>
                    <div className={"col-auto d-flex align-items-center"} style={{padding: "0px 82px"}}>
                        <div className={"row"} style={{gap: '25px'}}>
                            {menu && menu.map((el) =>
                                <div className={"col-auto p-0"}>
                                    <Link to={el.redirect}>
                                        <div className={"link"}> {el.name}</div>
                                    </Link>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className={"col d-flex align-items-center"}>
                        <button className={"btn light"}>Подать заявку</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
