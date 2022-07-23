//Event Handlers
//Managing Click events inside component


class TwoDividedBoxes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{display:"grid", gridTemplateColumns: "repeat(3,auto)", backgroundColor:"orange"}}> 
            <div>{this.props.columns[0]}</div>
            <div>{this.props.columns[1]}</div>
            <div>{this.props.columns[2]}</div>
        </div>
    }
}


class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggleOn: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      render(){
          return <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
      }

}


class ProfileInput extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return  (
            
               <Toggle></Toggle>
                
        )
    }
}

class ProfileDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggledOn : false}
    }
    render(){
        return <h1> Profile Display Section</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TwoDividedBoxes columns={
    [
        <ProfileInput></ProfileInput>,
        <ProfileDisplay ></ProfileDisplay>,
        "C"
    ]
}>
</TwoDividedBoxes>);