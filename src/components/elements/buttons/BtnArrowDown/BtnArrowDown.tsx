import React, {FC} from 'react';
import './BtnArrowDown.scss';


interface Props {
    onExpand?:()=>void
}

export const BtnArrowDown: FC<Props> = ({onExpand}) => {

    return (
        <div className={"btn-arrow-down"}>
            <div className={"btn-icon"} onClick={onExpand}>
                <img src={"img/assets/icons/arrow-down.svg"} alt={"arrow-down"}/>
            </div>
        </div>
    )

};

