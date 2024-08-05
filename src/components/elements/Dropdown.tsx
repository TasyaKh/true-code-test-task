import "./Dropdown.scss"
import React, {FC, useState} from "react";

interface Props {
    title: string,
    child: React.ReactNode,
}

export const Dropdown: FC<Props> = ({title, child}) => {
    const [expand, setExpand] = useState(false)
    const onExpand = () => {
        setExpand(!expand)
    }

    return (
        <div className={"dropdown"}>
            <div className={`title ${expand ? "selected" : ""}`} onClick={onExpand}>
                {title}
            </div>
            {expand && <div className={"elems"}>
                {child}
            </div>}
        </div>
    )
}
