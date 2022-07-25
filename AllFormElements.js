//Form Cotrollers
//button, <label> input : [chekbox, text, img, file: [read-only, uncontrolled], color, calender, month, year] <label>,
// select : multiple, options, textarea,
class DisplayFormElements extends React.Component{
    constructor(props){
        super(props);
    }
    renderElement(){
        if (typeof this.props.stateValues.imageInput.objectUrl == 'string'){
            return <img type="image" width="100px" src={this.props.stateValues.imageInput.objectUrl}></img>
        }else{
            return <div> No Image Selected </div>
        }
    }

    render(){

        return <> <div id="name">Name: {this.props.stateValues.textAreaInput}</div>
                    <div id="optionSelected">Selected Option: {this.props.stateValues.selectedOption}</div>
                    <span>Image: </span>
                    { this.renderElement() }
                    
                    {
              this.props.stateValues.checkBoxes.map((box) =>
                  box.isChecked ? <div key={box.id}>{box.id}</div> : <div key={box.id}></div> 
              )  
        }
        </>
    }
}


function SelectOption(props){
    return <> <label>
                Pick your favorite flavor:
                    <select value={props.selectedOption} onChange={props.onChange}>
                        {props.optionList.map((opt)=> <option key={opt.value} value={opt.value}>{opt.name}</option> )}
                    </select>
                </label>
    </>
}

function Image(props){
    return <>
        <label style={{marginLeft:"50px"}}> {props.id}
            <input  onChange={props.onChange ? props.onChange: ""} src={props.src} type="file"  acccept="image/*"  key={props.id} style={{marginLeft:"20px"}}/>
        </label>
        </>
}


function CheckBox(props){
    return <>
        <label style={{marginLeft:"50px"}}> {props.value}
            <input checked= {props.isChecked} type="checkbox" value={props.value} key={props.id} onClick={props.onClick ? props.onClick: ""} style={{marginLeft:"20px"}}/>
        </label>
        </>
}


function TextArea(props){
    return <> <label style={{marginLeft:"100px"}}> {props.label}:  
        <input type="text" value={props.value} key={props.id} onChange={props.onChange ? props.onChange: ""} style={{marginLeft:"20px"}}/>
        </label> 
        </>
}

function Button(props){
    return <button key={props.id} onClick={props.onClick ? props.onClick: ""} style={{marginLeft:"50px"}}>{props.value}</button>
}


//This class is to distribute state among form elemnts
class GetFormElements extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textAreaInput : "",
            checkBoxes : [{ "id":"Apple",isChecked : false},{ "id":"Grapes",isChecked : false},
                            { "id":"Banana",isChecked : false}],
            imageInput : {"id": "profilePic", objectUrl : {},width: "100px", height:"100px",src:"profile.jpg", files:[]},
            optionList : [{"name":"Select one",value:"select one" },{"name":"CEO",value:"ceo"},{"name":"CFO",value:"cfo"},{"name":"CTO",value:"cto"}] ,
            selectedOption: "select one"
        }
        this.onClickButton =  this.onClickButton.bind(this);
        this.onChangeText =  this.onChangeText.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
    }

    onChangeImage = (event) =>{
        var newImageState = this.state.imageInput;
        console.log(event.target.files[0].name);
        newImageState.src = event.target.files[0].name;
        newImageState.objectUrl = URL.createObjectURL(event.target.files[0]); 
        newImageState.files = event.target.files;
        this.setState({ imageInput: newImageState},()=>{
            console.log( this.state);
        })
    }

    onChangeOption = (event) =>{
        
        this.setState({selectedOption : event.target.value},()=>{console.log(this.state)});
    }
    onClickCheckBox = (event) =>{
        var newCheknboxes = this.state.checkBoxes.map(el => el.id == event.target.value ? { ...el, isChecked : !el.isChecked }: el) 
        this.setState({"checkBoxes": newCheknboxes},()=>{
                // console.log(this.state);
            })
        // this.setState(()=>({
        //       ...this.state,
        //       ["checkBoxes"] : newCheknboxes 
        // }),()=>{ console.log(this.state); } )
        
    }
    onChangeText = (event) =>{
        this.setState({textAreaInput : event.target.value});
    }

    onClickButton = (event) =>{
        console.log("Value of Input submitted is: "+this.state.textAreaInput);
    } 

    render(){
        return <>
                <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
                    <div key="form-elements">
                        <TextArea id="text-area" label="Name" value={this.state.textAreaInput} onChange={this.onChangeText}></TextArea>
                        <div>CheckBox Group:</div>
                        {
                        this.state.checkBoxes.map(chkbox=>
                            <CheckBox checked={chkbox.isChecked} key={chkbox.id} id={chkbox.id} value={chkbox.id} onClick={this.onClickCheckBox}></CheckBox>
                        )}
                        <Image onChange={this.onChangeImage} files={this.state.imageInput.files} width={this.state.imageInput.width} key={this.state.imageInput.id} id={this.state.imageInput.id} src={this.state.imageInput.src}></Image> 
                        <br/>
                        <SelectOption selectedOption = {this.state.selectedOption} onChange={this.onChangeOption} optionList={this.state.optionList}></SelectOption>
                        <br/>
                        <span>Submit the form:</span>
                        <Button id="test-btn" value="Submit" onClick={this.onClickButton}></Button>
                    </div>
                    <div key="form-display-elements"> All display Elements: 
                        <DisplayFormElements stateValues={this.state}></DisplayFormElements>
                    </div>
                </div>
            </>
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
            <GetFormElements isLoggedIn={false}></GetFormElements>
            </>);

