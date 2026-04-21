import React, { useState } from "react";
import TipList from "./TipList";
import "./styles.css";

function TipCard({title, content, emoji}) {
    
    const[openTip, setOpenTip] = useState(false);

    return (
        
        <div
        className="tipCard"
        onClick={() => setOpenTip(!openTip)}
        >
            <div className="tipTitle">
                <h3>{title}</h3>
                <p className="tipTitleEmoji">{emoji}</p>
            </div>

            {openTip && <p>{content}</p>}

        </div>
    );
}

export default TipCard;