import "./index.scss"
export default function CardOrgTT13(props){
    return(
        <div className="cardWrapper">
            <div className="orderNumber"><li>{props.orderNumber}</li></div>
            <div className="listInfo">
                <ul>
                    <li>{props.method}</li>
                    <li>{props.date}</li>
                    <li>{props.Qty}</li>
                    <li>{props.donationStatus}</li>
                </ul>
            </div>
        </div>
    )}