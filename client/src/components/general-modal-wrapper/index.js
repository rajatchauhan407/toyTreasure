import './index.scss';

export default function GeneralModalWrapper(props){
    return (
        <>
            <div id="backdrop"></div>
            <div className="container">{props.children}</div>       
        </>
        
    );
}