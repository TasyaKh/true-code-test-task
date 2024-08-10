import React, {FC} from 'react';
import './TeamCards.scss';

interface Props {
    teamCards: any
}

export const TeamCards: FC<Props> = ({teamCards}) => {

    return (
        <div className={"team-cards"}>
            <div className={"row cards-wrapper justify-content-center"}>
                {teamCards && Object.keys(teamCards).map((key) => (

                    <div className={"col-auto"}>
                        <div className={"team-card"}>
                            <div className={"card-img"}>
                                <img src={teamCards[key].img} className={"img-resizable"} alt={""}/>
                            </div>
                            <div className={"card-text-wrapper"}>
                            <div className={"card-text"}>
                                <div className={"card-name"}>
                                    <div className={"h4-h1 m-0"}>{teamCards[key].name}</div>
                                </div>
                                <div className={"card-role"}>
                                    <div className={"h6-h6 m-0"}>{teamCards[key].role}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

};

