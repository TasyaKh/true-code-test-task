import React, {FC} from 'react';
import './Comment.scss';

interface Props {
    text: string
    author: string
    avatar: string
    isAuthorLeftSide: boolean
}

export const Comment: FC<Props> = ({
                                       text,
                                       author,
                                       avatar,
                                       isAuthorLeftSide
                                   }) => {

    const position = (
        <div className={'pc-hide col-auto d-flex align-items-center'}>
            <div className={`p1 position`} style={{textAlign: !isAuthorLeftSide ? "end" : "start"}}>
                {author}
            </div>
        </div>
    )

    const avatarComponent = (
        <div>
            <div className={`row avatar-wrapper ${!isAuthorLeftSide ? "justify-content-end" : ""}`}>
                {/* put position text on the right side of avatar*/}
                {!isAuthorLeftSide && position}

                <div className={`col-auto d-flex `}>
                    <div className={"avatar"}>
                        <img src={avatar} alt={"avatar"}/>
                    </div>
                </div>

                {isAuthorLeftSide && position}

            </div>
        </div>
    )

    return (
        <div className="comment">
            <div className={`row comment-wrapper ${!isAuthorLeftSide ? "justify-content-end" : ""}`}>
                {/*avatar*/}
                <div className={"mobile-hide col-sm-auto col-12"}>
                    {isAuthorLeftSide && avatarComponent}
                </div>

                <div className={"pc-hide col-sm-auto col-12"}>
                    {avatarComponent}
                </div>

                {/*text*/}
                <div className={"col-sm-auto  col-12"}>
                    <div className={"comment-text-wrapper"}>
                        <div className={"comment-text"}>
                            <div className={"p1"} dangerouslySetInnerHTML={{__html: text}}>

                            </div>
                            <div className={"p6 author mobile-hide"}>
                                <div className={"author-text"}>
                                    {author}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-hide col-sm-auto col-12"}>
                    {!isAuthorLeftSide && avatarComponent}
                </div>

            </div>

        </div>
    )
};

