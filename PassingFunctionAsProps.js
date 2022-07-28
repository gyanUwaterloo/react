//Pasiing functionas props
function sum(a,b){return <p>Hello {a+b}</p>}
function subs(a,b){return <p>Hello {a-b}</p>}
function Parent(props){
    function result(){
        return <><div> { props.sum(2,3) }</div></>
       
    }

    return <> 

       <br/>Result: {result()}
        </>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
            <Parent sum={subs}></Parent>
            </>);