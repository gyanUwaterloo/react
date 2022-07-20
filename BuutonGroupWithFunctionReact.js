//BuutonList component that renders Buttons

function ButtonGroup(props){
    const buttonHtml = [];
    props.buttonList.map( item => {
         buttonHtml.push(<div key={item} className="btn" style={props.style}>{item}</div>)   
    });
    return buttonHtml;
        
    
}

const buttonNames = ["Red","Blue","Green"];
const root  =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<ButtonGroup buttonList={buttonNames}  style={{width:"200px",backgroundColor:"green"}}></ButtonGroup>)
