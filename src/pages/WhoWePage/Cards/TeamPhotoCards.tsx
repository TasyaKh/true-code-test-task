import React, {FC} from 'react';
import './TeamPhotoCards.scss';
import Carousel from "../../../components/elements/Carousel/Carousel";

interface Props {
    teamCardsLarge:any
}

export const TeamPhotoCards: FC<Props> = ({teamCardsLarge}) => {

    return (
        <div className={"team-photo-cards"}>
            <div className={"cards-wrapper"}>
                <Carousel show={1} persentScroll={50}>
                    {teamCardsLarge && Object.keys(teamCardsLarge).map((key) => (

                        <div className={"team-p-card"}>
                            <div className={"card-img"}>
                                <img src={teamCardsLarge[key].img} className={"img-resizable"} alt={""}/>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    )

};

