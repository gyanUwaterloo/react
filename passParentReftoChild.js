//Reference from parent is passed to child which is used in child
class ChildElement extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment><input ref={this.props.fr} value="Child"/> 
            <button onClick={this.props.onClick}>Shift focus to Child</button>
        </React.Fragment>
    }
}
  
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.cr = React.createRef();
        this.pr = React.createRef();
        this.sftParent =this.sftParent.bind(this);
        this.sftChild = this.sftChild.bind(this);
    }
    sftParent(){
        this.pr.current.focus();
    }
    sftChild(){
        this.cr.current.focus();
    }
    render(){
        return <> <input ref={this.pr} value="Parent"/> 
                    <button onClick={this.sftParent}>Shift focus to Parent</button>
                    <ChildElement onClick={this.sftChild} fr={this.cr}></ChildElement>
        </>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
            <Parent ></Parent>
            </>);


