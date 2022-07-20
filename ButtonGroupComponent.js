//Two ways of reprenting Components

class ButtonGroupComponent extends React.Component{
    render(){
            var itemList = [];
            this.props.items.map(item => (
                
                itemList.push(<div key={item} className="btn"  style={this.props.style}  >{item}</div>)
            ));
        return itemList;            
    }
    
}


const buttonList = ["Red","Green", "blue", "orange"];
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<ButtonGroupComponent items={buttonList} style={{width:"200px",backgroundColor:"green"}}></ButtonGroupComponent>);

