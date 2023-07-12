import './index.scss';
import { MdCancel } from 'react-icons/md';

export default function GeneralModalWrapper(props){

    return (
        <>
            <div id="backdrop" onClick={()=>{props.onCloseModal(false)}}></div>
            <div className="container">
                <MdCancel className='cancelIcon'/>
            {props.children}</div> 
                
        </>
        
    );
}