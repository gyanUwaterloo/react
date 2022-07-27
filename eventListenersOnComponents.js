// Add event listners to components
class TextInputComponent extends React.Component{
    constructor(props){
        super(props);
    }
    displayFocus = () => 
    {
        if (this.props.isFocussed){
            return <div>{this.props.focusMessage}</div>
        }else{
            return "";
        }
    }
                
    render(){
        return <><input 
                        onBlur={this.props.onBlur} 
                        value={this.props.value} 
                        onFocus={this.props.onFocus} 
                        onChange={this.props.onChange}
                />
                {
                    this.displayFocus()
                }   
        
        </>   
    }
}

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = { inputTextValue : "", isFocussed:false} ;
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onChange = this.onChange.bind(this);
        this.focusMessage = "Displas when focus is on this element";
    }


    onChange(event){
        this.setState({ inputTextValue :event.target.value},()=>{console.log(this.state);})
    }
    onFocus(event){
        this.setState({ inputTextValue : "Focussed", isFocussed:true},()=>{console.log(this.state);})
    }
    onBlur(event){
        this.setState({ inputTextValue : "Blurred", isFocussed:false},()=>{console.log(this.state);})
    }

    render(){
        return <>
                <TextInputComponent 
                    isFocussed={this.state.isFocussed} 
                    onChange={this.onChange} 
                    onFocus={this.onFocus} 
                    onBlur={this.onBlur} 
                    value={this.state.inputTextValue}
                    focusMessage={this.focusMessage}
                    >
                </TextInputComponent> 
            </>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
            <Parent ></Parent>
            </>);
