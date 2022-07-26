//Shifting focus to specific elemnts via Element handlers: react.createRef()

    
function ListItem({ item }) {
    return (
      <React.Fragment>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
      </React.Fragment>
    );
  }
  
  function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </dl>
    );
  }

function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
        <button onClick={props.focusOnTextItem}>Focus on Text</button>
      </div>
    );
  }
  
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.inputElement = React.createRef();
      this.focusOnTextItem = this.focusOnTextItem.bind(this);
    }

    focusOnTextItem(){
        console.log(this.inputElement);
        this.inputElement.current.focus();
    }

    render() {
      return (
        <CustomTextInput focusOnTextItem={this.focusOnTextItem} inputRef={this.inputElement} />
      );
    }
  }
  
  // Now you can set focus when required.


  


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
            <Glossary items={[{"term":"Grapes","description":"Grape Fruit", id:1},{"term":"Oranges","description":"Orange Fruit",id:2}]}></Glossary>
            <Parent></Parent>
            </>);


