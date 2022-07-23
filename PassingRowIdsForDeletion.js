//Event Handlers : Pasing row id's when rendering multiple rows
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

class DisplayListWithModify extends React.Component{
    constructor(props){
        super(props);
        this.state = {list : props.list};
        // this.listDeleted = this.listDeleted.bind();
    }

    listDeleted = (elem) =>{
        console.log(this.state.list);
        this.setState({ list : arrayRemove(this.state.list,elem)})
    }
    render(){
        return <>
            <ul>
                 {this.state.list.map(elem => <><li key={elem}> {elem} <button type="btn" onClick={ this.listDeleted.bind(this,elem) }> Delete</button></li> </> )}
            </ul>
            <button>Add Fruit</button>
        </>
    }
}

const fruitList = ["Mango","Banana","Apple","Oranges"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisplayListWithModify list={fruitList}></DisplayListWithModify>);