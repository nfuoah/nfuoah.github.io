import React from "react";

const styles ={
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        border:"1px solid grey",
        borderRadius:16,
    },
    messageText:{
        color:"black",
        fontSize:16,
        display:"flex",
        flexDirection:"column",
        textAlign:"right",
        marginRight:"20px"
    },

    img:{
        width:50,
        height:50,
        borderRadius:25,
        border:"1px solid grey",
        background:"lightyellow"
    },

    name:{
        fontWeight:"bold"
    },

};

class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    }

    componentDidMount(){
        console.log(`${this.props.id}componentDidMount() called.`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id}componentDidUpdate() called.`);
    }

    componentWillUnmount(){
        console.log(`${this.props.id}componentWillUnmount() called.`);
    }

    render(){
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    <span style={styles.name}>{this.props.name}</span>
                    <span style={styles.message}>{this.props.message}</span>                    
                </span>
                <img alt="" src={this.props.img} style={styles.img}></img>
            </div>
        );
    }
}

export default Notification;

