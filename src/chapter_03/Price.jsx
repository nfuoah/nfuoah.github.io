import React from "react";
import Jacket from "./Jacket";

function Price(props) {
    return(
        <div>
            <Jacket name="자켓" Price={123}></Jacket>
            <Jacket name='좋은 자켓' Price={456}></Jacket>
            <Jacket name='더 좋은 자켓' Price={789}></Jacket>
            <Jacket name='더더 좋은 자켓' Price={1234}></Jacket>
            <Jacket name='제일 좋은 자켓' Price={5678}></Jacket>
        </div>
    )
}

export default Price