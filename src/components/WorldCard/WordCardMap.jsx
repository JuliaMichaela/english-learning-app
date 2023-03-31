import React from "react";
import WordCard from "./WordCard"
import data from "..//../assets/data.json"

export default function WordCardMap() {
    return (
        <div className="card" id="game">
            {data.map((item) =>
                <WordCard
                    isEdited={false}
                    key={item.id}
                    engVersion={item.english}
                    rusVersion={item.russian}
                    transcription={item.transcription}>
                </WordCard>
            )
            }

        </div>
    );
};