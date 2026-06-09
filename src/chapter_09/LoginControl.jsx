import React, { useState } from "react";

function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props){
    return <h1>회원가입을 해주세요</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>login</button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>logout</button>
    );
}

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // let button;
    // if(isLoggedIn){
    //     button = <LogoutButton onClick={handleLogoutClick}/>
    // }

    // else {
    //     button = <LoginButton onClick={handleLoginClick}/>
    // }

    return (
        <div>
            {/* <Greeting isLoggedIn = {isLoggedIn}/>
            {button} */}

            <Greeting isLoggedIn = {isLoggedIn}/>
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/>
            : <LoginButton onClick={handleLoginClick}/>}
        </div>
    )
}

export default LoginControl;