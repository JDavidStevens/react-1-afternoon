import React, {Component} from 'react';


export default class FilterObject extends Component{

    constructor(){
        super();

        this.state={
            dirtBikes:[
            {
                make: "Yamaha",
                type: "Cross-Country",
                ccs: 250
            },
            {
                make: "Suzuki",
                model: "PE/b",
                year: 1979
            },
            {
                make: "Honda",
                model: "XL/S",
                ccs: 100
            }
            ],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val });
    }

    solveToyProblem(prop){
        var dirtBikes = this.state.dirtBikes;
        var filteredArray = [];

        for(var i= 0; i < dirtBikes.length; i++){
            if(dirtBikes[i].hasOwnProperty(prop)){
            filteredArray.push(+dirtBikes[i]);
        }
    }

    this.setState({ filteredArray: filteredArray});
}
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
            <h4>"Filter Object"</h4>
            <span className="puzzleText"> Original: {JSON.stringify(this.state.dirtBikes,null,10) }</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => {this.solveToyProblem(this.state.userInput)}}>Filter</button>
            <span className="resultBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray,null,10) }</span>
            
        </div>
        )
    }
}
