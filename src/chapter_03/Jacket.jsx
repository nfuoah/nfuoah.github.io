import React from "react";

    function Jacket(props) {
        return React.createElement(
            'div',
            null,
            [
                React.createElement(
                    'h1',
                    null,
                    `이 자켓의 이름은 ${props.name}입니다.`
                ),
                React.createElement(
                    'h2',
                    null,
                    `이 자켓의 가격은 ${props.Price}$ 입니다.`
                )
            ]
        )
    }

    export default Jacket;