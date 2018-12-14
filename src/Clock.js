import React from "react";
import "./Clock.css";

const Clock = (props) => {
    const current = props.date;
    const seconds = current.getSeconds();
    const minutes = current.getMinutes();
    const hours = current.getHours();
    
    return (
        <div className="container">
            <h3 className="label">{props.location}</h3>
            <article className="clock">
                <div className="hours-container">
                    <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
                </div>
                <div className="minutes-container">
                    <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
                </div>
                <div className="seconds-container">
                    <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
                </div>
            </article>
        </div>
    );
}

export default Clock;