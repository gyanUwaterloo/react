//Form Cotrollers

const contacts = [
    {
    "id": 1,
    "name": "Elma Herring",
    "email": "elmaherring@unq.com",
    "phone": "+1 (913) 497-2020",
    "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
    },
    {
    "id": 2,
    "name": "Knapp Berry",
    "email": "knappberry@unq.com",
    "phone": "+1 (951) 472-2967",
    "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
    },
    {
    "id": 3,
    "name": "Bell Burgess",
    "email": "bellburgess@unq.com",
    "phone": "+1 (887) 478-2693",
    "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
    },
    {
        "id": 5,
        "name": "Marylou Medina",
        "email": "maryloumedina@unq.com",
        "phone": "+1 (996) 520-2967",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 6,
        "name": "Larson Guerra",
        "email": "larsonguerra@unq.com",
        "phone": "+1 (972) 566-2684",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 7,
        "name": "Shelby Ballard",
        "email": "shelbyballard@unq.com",
        "phone": "+1 (824) 467-3579",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 8,
        "name": "Lea Faulkner",
        "email": "leafaulkner@unq.com",
        "phone": "+1 (899) 528-3402",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 9,
        "name": "Cecelia Wolf",
        "email": "ceceliawolf@unq.com",
        "phone": "+1 (862) 507-3140",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 10,
        "name": "Melva Nixon",
        "email": "melvanixon@unq.com",
        "phone": "+1 (901) 444-3081",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 11,
        "name": "Bernard Chambers",
        "email": "bernardchambers@unq.com",
        "phone": "+1 (831) 539-3366",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 12,
        "name": "Wendi Bender",
        "email": "wendibender@unq.com",
        "phone": "+1 (868) 414-2720",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 13,
        "name": "Wall Stewart",
        "email": "wallstewart@unq.com",
        "phone": "+1 (814) 558-3191",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        },
        {
        "id": 14,
        "name": "Howell Gilbert",
        "email": "howellgilbert@unq.com",
        "phone": "+1 (926) 512-3631",
        "chats":[{"mine":false,"text":"Hello how are you?", date:"25 July 7:58 pm"},{"mine":false,"text":"Tell me when you are online..",  date:"25 July 7:59 pm"}]
        }
    ];

class Contacts extends React.Component {
    render() {
      return (
        <div style={{textAlign:"center", backgroundColor:"#ECF87F"}}>
          {
            this.props.myContacts.map( 
                (item,index) => <button value={index} onClick={this.props.onClick} key={item.id} style={{margin:".25em",width:"90%",borderRadius:".5em"}}> {item.name} : {item.phone} </button>
            )
          }
        </div>
      );
    }
  }

function TextArea(props){
    return <> <label style={{marginLeft:"100px"}}>  
        <input onChange={props.onChangeChat} type="text" value={props.currentChatText} key={props.id} style={{marginLeft:"20px",marginTop:"300px",width:"700px"}}/>
        </label> 
        <button onClick={props.onClick}>Submit</button>
        </>
}

class ChatList extends React.Component{
    constructor(props) {
        super(props);
        //selectedContact={this.props.selectedContact}
    }
    render() {
    return <>
        { 
            this.props.selectedContact.chats.map(item=>(<div key={item.date} style={ item.mine ? {"textAlign":"left"}:{"textAlign":"right"}}>{ [item.text] }</div>))
        }   
        
        </>
    }
}
  
class Chat extends React.Component {
constructor(props) {
    super(props);
    //onChatSubmit={this.onChatSubmit} selectedContact={this.state.selectedContact}>
}   
render() {
        return (
            <div style={{textAlign:"center", backgroundColor:"#81B622"}}>Chat with {this.props.selectedContact.name}
                <ChatList selectedContact={this.props.selectedContact}>Previous Chats</ChatList>
                <TextArea onChangeChat={this.props.onChangeChat} currentChatText={this.props.currentChatText} onClick={this.props.onChatSubmit}></TextArea>
            </div>
        )
    }
}

class ChatApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myContacts: contacts, selectedContact:contacts[0], currentChatText:"" }
        this.onContactClick = this.onContactClick.bind(this);
        this.onChatSubmit = this.onChatSubmit.bind(this);
        this.onChangeChat = this.onChangeChat.bind(this);
    }


    onChangeChat(event){
        console.log(event.target.value)
        this.setState({currentChatText: event.target.value},()=> {console.log(this.state.currentChatText)});
    }
    onChatSubmit(event){
       var contactNew =  this.state.selectedContact;
       contactNew.chats.push({"text":this.state.currentChatText,date: new Date(), mine:true});
       this.setState({selectedContact: contactNew },()=> {console.log(this.state)});
       this.setState({currentChatText: "" },()=> {console.log(this.state)});
    }
    onContactClick(event){
        this.setState({selectedContact : contacts[event.target.value]  },()=>{console.log(this.state.selectedContact)})
    }

    render() {
            return (
                <>
                <div style={{display:"grid", gridTemplateColumns:"30% 70%", minHeight:"600px"}}>
                    <Contacts myContacts={this.state.myContacts} onClick={this.onContactClick}></Contacts>
                    <Chat onChangeChat={this.onChangeChat} currentChatText={this.state.currentChatText} onChatSubmit={this.onChatSubmit} selectedContact={this.state.selectedContact}></Chat>
                </div>
                </>
            )
        }
    }
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
            <ChatApplication></ChatApplication>
            </>);

