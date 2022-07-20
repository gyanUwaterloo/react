//Fuction to update Count or time
const root = ReactDOM.createRoot(document.getElementById("root"));

function updateTime(){
    const time  = new Date().toTimeString();
    const name_ = "Gyanendu"; 
    root.render(<h1>Hey  {name_}, the time now is {time} </h1>)
}

setInterval(updateTime,1000);