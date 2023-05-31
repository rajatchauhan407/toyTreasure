import './index.css';
export default function Button(props){
console.log(props.children);
    function hi(){
        console.log("Hi")
    }
    return(
        <button className="submit" onClick={hi}>
           {props.children}
        </button>
    )
}