// State : Parent: Counter , child: FormattedCounter
function FormattedCount(props) {
    return <h1>Props of child getting updated by parent {props.count}</h1>
}

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {  counter : 1};
    }
    componentDidMount(){
        // this.props set up by react, this.state can be set by user to store a state 
        this.timerId = setInterval(()=> this.tick1(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    tick1() {
        // this.props.increment = Number(this.props.increment);
        // console.log(this.props.increment );
        this.setState(
            {
          counter : this.state.counter+1
        });
        
        // this.props.count =  this.props.count +1 ;
        // this.props.increment = Number(this.props.increment) + 1 ;
    }
    render(){
        return(
            [<h1> Updates in States and Props: </h1>,
            <em>Counter of State for Parent: {this.state.counter}</em>,
            <FormattedCount  count={this.state.counter}></FormattedCount>
            ]);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Counter></Counter>);