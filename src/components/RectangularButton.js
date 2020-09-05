import React from "react";

const RectangularButton = props => {
    return (
        <div
            className="rect-btn"
            onClick={props.onClick}
            style={{
                backgroundColor: props.backgroundColor,
                color: props.fontColor,
                width: props.width,
                height: props.height,
            }}>
            {props.text}
        </div>
    );
};

export default RectangularButton;
