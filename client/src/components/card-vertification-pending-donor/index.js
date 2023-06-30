import "./index.scss";
import { useNavigate } from 'react-router-dom';

export default function CardOrgTT13(props){
    const navigate = useNavigate();
        return(
                <div className="listInfoCardOrgTT13">
                    <ul> 
                        <li>{props.orderNumber}</li>
                        <li>{props.name}</li>
                        <li>{props.method}</li>
                        <li>{props.date}</li>
                        <li>{props.Qty}</li>
                        <li>{props.donationStatus}</li>
                        <li><button onClick={()=>{navigate('/organization/verification/3')}}>Verify</button></li>
                    </ul>
                </div>
        )}