import './index.scss';


export default function GeneralModalWrapper(props){

    return (
        <>
            <div id="backdrop" onClick={()=>{props.onCloseModal(false)}}></div>
            <div className="container">
                
            {props.children}</div> 
                
        </>
        
    );
}