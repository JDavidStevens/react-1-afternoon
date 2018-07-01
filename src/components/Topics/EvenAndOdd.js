import React, {Component} from 'react';



export default class EvenAndOdd extends Component{

    constructor(){
        super();

        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val){
        this.setState({userInput: val });
    }
    assignEvenAndOdds(userInput){
        if(userInput%2===0){
            var arrE = this.state.evenArray
            arrE.push(+userInput)
            this.setState({evenArray: arrE})
        }else{
            var arrO = this.state.oddArray
            arrO.push(+userInput)
            this.setState({oddArray: arrO})
        }
    }


    render(){
        return(
        <div className="puzzleBox evenAndOddPB">
            <h4>"Evens and Odds"</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
            <span className="resultBox">{ JSON.stringify(this.state.evenArray) }</span>
            <span className="resultBox">{ JSON.stringify(this.state.oddArray) }</span>
            
        </div>
        )
    }
}
