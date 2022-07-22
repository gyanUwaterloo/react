// State : Making the props embedde on the component
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        // this.props set up by react, this.state can be set by user to store a state 
        this.timerId = setInterval(()=> this.tick1(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick1() {
        this.setState({
          date: new Date()
        });
      }
    render(){
        return(
            [<h1> Clock Based on State </h1>,
            <ul>
            <li>1. State is saved in constructor that was created with the class</li>
            <li>2. We have two lifecycle methods: componentDidlMount and componentWillUnmount</li>
            <li>3. After init = we create a handle to setInterval Function ans call local tick fuction in setInterval</li>
            <li>4. In tick Function we set State again</li>
            </ul>,
            <div>The Time is:</div>,
            <em>{this.state.date.toLocaleTimeString()}</em>
            ]);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock/>);