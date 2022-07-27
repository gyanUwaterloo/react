//Simple Calculator with styling
function DisplayCalculatorComponent(props){

    function result(){
        if(props.operation == "sum"){
            return <p>The sum is: {parseInt(props.a)+parseInt(props.b)} </p>
        }
        if(props.operation == "multiply"){
            return <p>The product is: {props.a* props.b} </p>
        }else return ""
    }

    return <> 
        <button style={props.operation=="sum"? {backgroundColor:"green"}:{backgroundColor:"yellow"}} onClick={props.onClick} value="sum">Sum</button>
        <button style={props.operation=="multiply"? {backgroundColor:"green"}:{backgroundColor:"yellow"}} onClick={props.onClick} value="multiply">Product</button>
       Num1: <input value={props.a} onChange={props.onChangeA}/>
       Num2: <input value={props.b} onChange={props.onChangeB}/>
       <br/>Result: {result()}
        </>
}

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {a:0, b:0, operation:"sum"}
        this.onChangeB= this.onChangeB.bind(this);
        this.onChangeA= this.onChangeA.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChangeA(event){
        this.setState({a: event.target.value},()=>{console.log(event.target.value)})
    }
    onChangeB(event){
        this.setState({b: event.target.value},()=>{console.log(event.target.value)})
    }
    onClick(event){
        this.setState({operation: event.target.value},()=>{console.log(event.target.value)})
    }
    

    render(){
        return <><DisplayCalculatorComponent
                    onClick={this.onClick}
                    onChangeA={this.onChangeA}
                    onChangeB={this.onChangeB}
                    a={this.state.a}
                    b={this.state.b}
                    operation={this.state.operation}
        ></DisplayCalculatorComponent>
        </>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
            <Parent ></Parent>
            </>);


