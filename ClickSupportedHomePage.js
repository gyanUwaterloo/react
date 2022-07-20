// App with Header, Side paneal and main page
var pageSelected;
function printMe(element){
    pageSelected = <h1> {element.target.textContent}</h1>;
    root.render(<App></App>);
}
function App(){
    const homePage = ["Home","Blog","Products","Contact US"];
    const sideBar = ["1s","2s","3s","4 US"];
    return [
            <CompanyBrand></CompanyBrand>,
            <Header key="header" buttonList={homePage}  style={{width:"150px",backgroundColor:"green",margin:"5px"}} ></Header>,
            <div className="main-segment" style={{display:"grid", gridTemplateColumns:"10em auto"}}>
                <div>                
                    <SidePanel className="sidePanel" buttonList={sideBar}  style={{width:"150px",backgroundColor:"green", margin:'10px' }} ></SidePanel>
                </div>

                <div className="mainPage" style={{width:"100%",backgroundColor:"yellow", "marginRight":'1em' }}>
                    {pageSelected}
                   
                </div>       
            </div>,
            
        ]
}

function CompanyBrand(){
    return <img src="./lw.jpg" width="100px" height="50px" key="logo" style={{"marginRight":"100px"}}></img>
}

function Header(props){
    const buttonHtml = [];
    props.buttonList.map( item => {
         buttonHtml.push(<div key={item} className="btn" style={props.style} onClick={printMe}>{item}</div>)   
    });
    return buttonHtml;
}

function SidePanel(props){
    const buttonHtml1 = [];
    props.buttonList.map( item => {
         buttonHtml1.push(<div className={item}  style={props.style}>{item}</div>)   
    });
    return buttonHtml1;
}


const root  =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
