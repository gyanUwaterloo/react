//Event Handlers
//Other forms of calling EVentHandlers
//The problem with this syntax is that a different callback is created each time the LoggingButton renders. 
class ToggleClass extends React.Component{
    constructor(props){
        super(props);
    }

    clickHandler = (event) =>{
        console.log(event);
    }

    handleClick = () =>{
        console.log(this);    
    }
    render(){
        return <>
                <button onClick={()=>this.clickHandler(this)}> Click Passing this</button>
                <button onClick={this.handleClick}> Click Passing None</button>
            </>
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToggleClass></ToggleClass>)

