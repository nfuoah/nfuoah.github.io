import React, { useState } from "react";

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {isToggleOn:true};
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? '켜짐':'꺼짐'}
//             </button>
//         );
//     }
// }

class Mybutton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                클릭
            </button>
        );
    }
}

function Toggle (props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick =() => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐':'꺼짐'}
        </button>
    );
}

export default Toggle;