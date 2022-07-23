//Event Handlers
//Component Handling events
//Checkbox agrre to terms
function buttonIsClicked(){
    console.log("Button was clicked!");
}

class ConfirmationCheckBox extends React.Component{
    constructor(props){
        super(props);
        this.state = { isConfirmedTrue : false}
        this.clickConfirmationBox = this.clickConfirmationBox.bind(this);
    }

    clickConfirmationBox(){
        this.setState({ isConfirmedTrue : !this.state.isConfirmedTrue})
    }
    render(){
        return <>
                 <p>
                    <input type="checkbox" onClick={this.clickConfirmationBox}/>
                    I Agree to the terms and Conditions.
                </p>
                <button type="btn" onClick={buttonIsClicked} className={this.state.isConfirmedTrue? "":"Disabled"}>Submit is {this.state.isConfirmedTrue ? "True":"False"}</button>
                </>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ConfirmationCheckBox></ConfirmationCheckBox>)