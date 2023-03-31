import './WordCard.css'
import React, { useState } from "react";

export default function WordCard(props) {
    console.log(props);

    const [isVisible, setVisible] = useState(false);

    const handleShow = () => {
        setVisible(!isVisible);
    };

    return (
        <div className="card">
            <div className="word">{props.engVersion}</div>
            <div className="transcription">{props.transcription}</div>
            <button className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow}>
                {isVisible ? props.rusVersion : "Проверить"}
            </button>
        </div >
    );
};

