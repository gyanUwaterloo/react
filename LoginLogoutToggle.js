//Conditional Operators
//SignIn vs Signout

class LoginLogoutToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = { isLoggedIn: this.props.isLoggedIn}
    }

    changeState = (params) =>{
        console.log(params);
        this.setState({ isLoggedIn : !this.state.isLoggedIn});  
    }


    render(){
        return <>
                    { !this.state.isLoggedIn ? 
                         <div>Login Page <button onClick={this.changeState.bind(this)}>  Login</button> </div>: 
                         <div> Main Page <button onClick={this.changeState.bind(this)}> LogOut</button> </div>
                         }
            </>
    }
}

const fruitList = ["Mango","Banana","Apple","Oranges"];
const root = ReactDOM.createRoot(document.getElementById("root"));
var isLoggedIn = false;
root.render(<LoginLogoutToggle isLoggedIn={isLoggedIn}></LoginLogoutToggle>);