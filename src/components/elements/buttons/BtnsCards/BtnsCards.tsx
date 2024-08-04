import React, {FC} from 'react';
import './BtnsCards.scss';


interface Props {
    onForwardClick: () => void;
    onBackClick: () => void;
}

export const BtnsCards: FC<Props> = ({onForwardClick, onBackClick}) => {


    return (
        <div className={"btns-cards"}>
            <div className={"row buttons"}>
                <div className={"col-auto"}>
                    <div className={"btn-icon"} onClick={onBackClick}>
                        <img src={"img/assets/icons/arrow-back.svg"} alt={"back"}/>
                    </div>
                </div>
                <div className={"col-auto"}  onClick={onForwardClick}>
                    <div className={"btn-icon"}>
                    <img src={"img/assets/icons/arrow-forward.svg"} alt={"forward"}/>
                </div>
                </div>
            </div>
        </div>
    )

};

