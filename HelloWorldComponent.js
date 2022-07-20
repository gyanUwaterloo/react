class HelloWorldComponent extends React.Component{
    render(){
        return <h1> Hello { this.props.name}</h1>
    }
}

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorldComponent name="Gyanendu"></HelloWorldComponent>);