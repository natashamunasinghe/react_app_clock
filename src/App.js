import React, { Component } from 'react';
import Clock from "./Clock";

class App extends Component {
    state = { latitude: null, errorMessage: "", value: 1 }; 

    // constructor(props) {
    //     super(props); //this is calling Constructor function from Component to App parent
    //     // this.state={ latitude: null, errorMessage: "" }; //this initialises State
//put State inside constructor
       

//     setInterval(() => {
//             this.setState((state, props) => {
//                 return { value: state.value + 1 };
//             });
//         }, 1000);
//     }
// }


//this replaces constructor method
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({latitude:position.coords.latitude}) },
            error =>{this.setState({errorMessage: error.message}) }
        );
    }


    isItWarm = () => {
        const { latitude } = this.state;

        if (latitude) {
            const month = new Date().getMonth();

            if(
                (month >= 4 && month <= 9 && latitude > 0)
                ||
                ((month >= 9 || month <= 4) && latitude < 0)
                ||
                (latitude === 0)
            ){
                // console.log("true");
                return true
            }
        
        }

        // console.log("false");
        return false;

    }

    getClockIcon =() => {
        if (this.isItWarm()) {
            return "./snowflake.svg";
        }

        return "./sun.svg"; 
    }

    render() {
        // const { latitude } = this.state
        const { latitude, errorMessage } = this.state;


        return (
            <div>
                {errorMessage || <Clock
                    icon={ latitude !== null ? this.getClockIcon() : null}
                    timezone={"Sydney/Australia"} 
                    date={new Date()} 
                />}
            </div>
        );
    }
}



export default App;
