import React from "react";
import Mailbox from "./Mailbox";

function WarningBanner(props){
    if (!props.warning){
        return null;
    }

    return (
        <div>경고</div>
    );
    

}

export default WarningBanner;