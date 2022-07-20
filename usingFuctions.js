function formatName(firstName, lastName){
    return firstName+ " "+lastName; 
}

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<div> { formatName("Gyanendu", "Shekhar") }</div>);
