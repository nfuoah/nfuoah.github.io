import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        img:"https://cdn-icons-png.flaticon.com/512/12114/12114042.png",
        name:"출발",
        message:"목적지까지 안내 시작합니다.",
    },
    
    {
        id:2,
        img:"https://cdn-icons-png.flaticon.com/512/608/608336.png",
        name:"직진",
        message:"쭉 직진하세요. 약 100m 앞에서 좌회전입니다.",
    },

    {
        id:3,
        img:"https://cdn-icons-png.flaticon.com/512/507/507257.png",
        name:"좌회전",
        message:"좌회전하세요. 약 800m 앞에서 우회전입니다.",
    },

    {
        id:4,
        img:"https://cdn-icons-png.flaticon.com/512/271/271226.png",
        name:"우회전",
        message:"곧 우회전입니다. 목적지까지 200m ",
    },
    
    {
        id:5,
        img:"https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
        name:"도착",
        message:"목적지에 도착했습니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            notifications:[],
        };
    }

    componentDidMount(){
    const {notifications}=this.state;
    timer = setInterval(() => {
        if(notifications.length < reservedNotifications.length){
            const index = notifications.length;
            notifications.push(reservedNotifications[index]);
            this.setState({
                notifications: notifications,
            });
        }

        else {
            clearInterval(timer);
        }
    }, 1000);
    }

    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                    key={notification.id}

                    id={notification.id}
                    img={notification.img}
                    name={notification.name}
                    message={notification.message}/>;
                })}
            </div>
        );
    }
}



export default NotificationList;


