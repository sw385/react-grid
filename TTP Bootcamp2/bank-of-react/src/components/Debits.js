import React, {Component} from 'react';

class Debits extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        document.title = "Debits Page";     
    }

    render(){
        return(
        <div>
            <h1>Debits Page</h1>
        </div>
        )   
    }
}

export default Debits