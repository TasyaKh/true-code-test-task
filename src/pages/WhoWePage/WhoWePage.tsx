import React, {FC, useEffect, useState} from 'react';
import './WhoWePage.scss';
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {ProjectCards} from "./Cards/ProjectCards";
import {TeamCards} from "./Cards/TeamCards";
import {TeamPhotoCards} from "./Cards/TeamPhotoCards";
import {EventsCards} from "./Cards/EventsCards";
import {getWhoWePage} from "../../api/pages";
import gauss from "assets/gauss.png"
import {SplineContacts} from "../../components/elements/SplineContacts/SplineContacts";

interface Props {
}

export const WhoWePage: FC<Props> = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        getWhoWe()
    }, []);

    const getWhoWe = async () => {
        const d = await getWhoWePage()
        setData(d)
    }

    const [playVideo, setPlayVideo] = useState(false)

    const onPlay = (play: boolean) => {
        setPlayVideo(play)
    }

    return (
        <div className="who-we-page">
            <Navbar/>
            <div className="content">
                <div className={"container"}>
                    {/*top */}
                    <div className={"row top"}>
                        <div className={"col text-1"}>
                            <div className={"logo"}>
                                <img src={data?.logo_short} alt={""}/>
                            </div>
                            <h6 >
                                {data?.text_top}
                            </h6>
                        </div>
                        <div className={"col mobile-hide"}>
                            <div className={"true-gif"}>
                                <div className={"animate-circle"}>
                                    <img className={""} src={data?.img_live} alt={""}/>
                                </div>

                                <div className={"img-gauss1"}>
                                    <img className={"img-resizable"} src={gauss} alt={""}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* rewards */}
                    <div className={"achievement"}>
                        <div className={"text-achievement"}>
                            <div className={"p1 m-0"}>
                                {data?.text_under_top}
                            </div>
                        </div>

                        <div className={"img-3d-wrapper "}>
                            <img className={"img-ring"} src={data?.img_rewards} alt={"achievement"}/>
                        </div>

                        <h3 className={""}>
                            {data?.header_table_sites}
                        </h3>

                        <div className={"table-wrapper"}>
                            <div className={"table-achievements"}>
                                {data?.table_sites && Object.keys(data?.table_sites).map(((key) => (
                                    <div className={`row ${!data.table_sites[key].year ? 'table_wrapper-empty' : ""}`}>
                                        <div className={`col-sm-auto col-12 year ${!data.table_sites[key].year ? 'empty-year' :"" }` }>{data.table_sites[key].year}</div>
                                        <div className={"col-sm-auto col-12 place"}> {data.table_sites[key].place}</div>
                                        <div className={"col-sm col-12 site"}>{data.table_sites[key].site_name}</div>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>

                    {/* projects*/}
                    <div className={"projects"}>
                        <div className={"img-3d-wrapper "}>
                            <img className={"img-ring"} src={data?.img_projects} alt={"projects"}/>
                        </div>

                        <ProjectCards cardsProjects={data?.cards_projects} buttonName={data?.cards_projects_btn}/>

                        {/* video*/}
                        <div className={"video-wrapper"}>
                            <div className={"video"}>
                                {!playVideo ? <div className={""} style={{width:"100%", height:"100%"}}>
                                    <img className={"img-resizable img-cover"} src={data?.video.img_cover} alt={"video"} style={{opacity:0.5}}/>
                                    <div className={"text-video"}>
                                        {data?.video.title}
                                    </div>
                                    <div className={"play"} onClick={() => onPlay(true)}>
                                        <img className={"img-resizable"} src={data?.video?.img_button} alt={"play"}/>
                                    </div>

                                </div> : <video controls style={{width: "100%"}}>
                                    <source src={data?.video?.video_link} type="video/webm"/>
                                    video.
                                </video>
                                }
                            </div>
                        </div>
                    </div>

                    {/* team*/}
                    <div className={"team"}>
                        <div className={"img-3d-wrapper"}>
                            <img className={"img-ring"} src={data?.img_teams} alt={"projects"}/>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <div className={"h6-p1 m-0"}>
                                {data?.text_team}
                            </div>
                        </div>
                        <div>
                            <TeamCards teamCards={data?.cards_team}/>
                        </div>
                    </div>

                    {/* team photo */}
                    <div className={"team-photo"}>
                        <div className={"header"}>
                            {data?.header_cards_team_large}
                        </div>
                        <TeamPhotoCards teamCardsLarge={data?.cards_team_large}/>
                    </div>

                    {/*events*/}
                    <div className={"team-events"}>
                        <div className={"img-3d-wrapper"}>
                            <img className={"img-ring"} src={data?.img_events} alt={"projects"}/>
                        </div>
                        <EventsCards cardsEvents={data?.cards_events}/>
                    </div>

                    <div className={"who-we-footer"}>
                        <h3>{data?.header_bottom}</h3>
                        <div className={"text"}>
                            <h6>
                                {data?.text_bottom}
                                <a className={"link-decoration"}
                                   href={data?.site.link}> {data?.site.name}</a>
                            </h6>
                        </div>

                        <div className={"row contacts-wrapper justify-content-center"}>
                            <div className={"col-xl-auto col-12 d-flex align-items-center justify-content-center"}>
                                <a className={"phone "} href={`tel:${data?.phone?.phone_link}`}>
                                    <div className={"p4"}>{data?.phone?.number}</div>
                                </a>
                            </div>
                            <div className={"col-sm-auto col-12"}>
                                <div className={"row spline-wrapper"}>
                                    <SplineContacts widthIcon={36} heightIcon={36} radius={5} data={data?.socials} gap={"25.8px"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={"img-gauss pc-hide"}>
                <img className={"img-resizable"} src={gauss} alt={""}/>
            </div>

            <div className={"img-gauss2 mobile-hide"}>
                <img className={"img-resizable"} src={gauss} alt={""}/>
            </div>

            <div className={"img-gauss3 mobile-hide"}>
                <img className={"img-resizable"} src={gauss} alt={""}/>
            </div>

            <Footer/>

        </div>
    )
};

