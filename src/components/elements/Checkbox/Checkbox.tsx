import "./Checkbox.scss"
import React, {FC, useState} from "react";

interface Props {
    onChecked: (event: any) => void
    name: string
}

export const Checkbox: FC<Props> = ({onChecked, name}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: any) => {
        onChecked(event)
        setIsChecked(event.target.checked);
    };

    return (
        <div className={"checkbox"}>

            <label className="custom-checkbox">
                <div className={"row"} style={{gap: "10px"}}>
                    <div className={"col-auto"}>
                        <input type="checkbox" id="checkbox" checked={isChecked}
                               onChange={handleCheckboxChange}/>
                        <div className="checkbox-image">
                            <img src={"img/assets/icons/checkbox-checked.svg"} alt="checkbox"/>
                        </div>
                    </div>

                    <div className={"col "}>
                        <div className={"wrapper-label"}>
                            <span className="checkbox-label p1 p-0">{name}</span> {/* Add label text here */}
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}
