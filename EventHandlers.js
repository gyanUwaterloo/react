//Event Handlers

function colorChanged(event){
    event.preventDefault();
    colorSelected = event.target.value;
    root.render(<ColorPallet></ColorPallet>);
}

class ColorPallet extends React.Component{
    render(){
        return (
        <>
            <input type="color" onChange={colorChanged }></input> 
            <p style={{color:colorSelected}}>Red paragraph text</p>
        </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
var colorSelected = "#fff";
root.render(<ColorPallet></ColorPallet>);