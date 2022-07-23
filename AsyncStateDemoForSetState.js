//Conditional Operators
//SignIn vs Signout
/** Key Learning
 * setState() is usually asynchronous, which means that at the time you console.log the state, 
 * it's not updated yet. Try putting the log in the callback of the setState() method. 
 * It is executed after the state change is complete:
 * this.setState({isLoggedIn : !this.state.isLoggedIn},() => { console.log(this.state);}); 
*/
function WelcomeSpeakers(props){
    return <div>Guest Speakers</div>;
}
function WelcomeGuests(props){
    return <div>Guests Attendees</div>;
}

class Greetings extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false}
        this.toggleUser = this.toggleUser.bind(this);
    }

    toggleUser(){
        this.setState({isLoggedIn : !this.state.isLoggedIn},() => { console.log(this.state);}); 
        
    }
    render(){
        if(this.state.isLoggedIn){
            return <><WelcomeSpeakers></WelcomeSpeakers><button onClick={ this.toggleUser }>Toggle User</button></>
        }
    
        return <><WelcomeGuests></WelcomeGuests><button onClick={ this.toggleUser }>Toggle User</button></>
    }
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings isLoggedIn={false}></Greetings>);

