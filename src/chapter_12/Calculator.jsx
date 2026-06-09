// import React, { useState } from "react";
// import TemperaturInput from "./TemperatureInput";

// function BoilingVerdict(props){
//     if(props.celsius >= 100) {
//         return <p>물이 끓습니다.</p>
//     }
//     return <p>물이 끓지 않습니다.</p>
// }

// function toCelsius(fahrenheit) {
//     return((fahrenheit - 32)*5)/9;
// }

// function toFahrenheit(celsius) {
//     return((celsius*9)/5 + 32);
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if(NumberisNaN(input)) {
//         return "",
//     }

//     const output = convert(input);
//     const rounded = Math.round(output * 1000)/1000;
//     return rounded.toString();
// }


// function Calculator(props) {
//     const [temperature, setTemperature] = useState("");
//     const [scale, setScale] = useState("c");

//     const handleCelsiusChange(temperature) {
//         setTemperature(temperature)
//         setScale("c");
//     };

//     const handleFahrenheitChange = (temperature) => {
//         setTemperature(temperature);
//         setScale("f");
//     };

//     const celsius =
//         scale === "f" ? tryConvert(temperature, tonCelsius) : temperature
//     const fahrenheit = 
//         scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature

//     return (
//         <div>
//             <TemperaturInput/>
//             scale = {'c'}
//             temperature={fahrenheit}
//             on
//         </div>
//     )
// }

