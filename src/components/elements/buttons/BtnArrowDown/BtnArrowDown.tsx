import React, {FC} from 'react';
import './BtnArrowDown.scss';


interface Props {

}

export const BtnArrowDown: FC<Props> = () => {

    return (
        <div className={"btn-arrow-down"}>
            <div className={"btn-icon"}>
                <img src={"img/assets/icons/arrow-down.svg"} alt={"arrow-down"}/>
            </div>
        </div>
    )

};

