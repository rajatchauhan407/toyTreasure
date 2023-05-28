import './index.css';
export default function Button(props){
    console.log(props);
    let nameOfBtn= "Logout";
    function greeting(){
        console.log("Heyyyyyyy! How are you????");
    }
    return(
        <button className="Btn" onClick={greeting}>
           {props.children}
        </button>
    );
}