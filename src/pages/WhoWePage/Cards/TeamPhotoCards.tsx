import React, {FC} from 'react';
import './TeamPhotoCards.scss';
import Carousel from "../../../components/elements/Carousel/Carousel";

interface Props {

}

export const TeamPhotoCards: FC<Props> = () => {

    const cards = [
        {id: 1, src: "img/who-we/team/img_4.png"},
        {id: 2, src: "img/who-we/team/img_5.jpg"},
        // {id: 1, src: "img/who-we/team/img.png"},
        // {id: 2, src: "img/who-we/team/img_5.jpg"},
    ]

    return (
        <div className={"team-photo-cards"}>
            <div className={"cards-wrapper"}>
                <Carousel show={1} persentScroll={50}>
                    {cards && cards.map((el) => (

                        <div className={"team-p-card"}>
                            <div className={"card-img"}>
                                <img src={el.src} className={"img-resizable"} alt={""}/>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/*<div className={"d-flex d-inline cards-wrapper justify-content-center"}>*/}
            {/*    {cards && cards.map((el) => (*/}


            {/*        <div className={"team-p-card"}>*/}
            {/*            <div className={"card-img"}>*/}
            {/*                <img src={el.src} className={"img-resizable"} alt={""}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    ))}*/}
            {/*</div>*/}

            {/*/!*buttons*!/*/}
            {/*<div className={"row justify-content-center"}>*/}
            {/*    <div className={"buttons-forward mobile-hide"}>*/}
            {/*        <BtnsCards onBackClick={() => {*/}
            {/*        }} onForwardClick={() => {*/}
            {/*        }}/>*/}
            {/*    </div>*/}
            {/*    <div className={"pc-hide"}>*/}
            {/*        <div className={" d-flex justify-content-center"}>*/}
            {/*            <BtnArrowDown/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    )

};

