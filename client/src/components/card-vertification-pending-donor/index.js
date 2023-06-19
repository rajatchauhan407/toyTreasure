import "./index.scss"
export function CardOrgTT13(props){
    
        return(
                <div className="listInfoCardOrgTT13">
                    <ul> 
                        <li>{props.orderNumber}</li>
                        <li>{props.method}</li>
                        <li>{props.date}</li>
                        <li>{props.Qty}</li>
                        <li>{props.donationStatus}</li>
                    </ul>
                </div>
        )}