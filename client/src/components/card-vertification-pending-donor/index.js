import "./index.css"
export default function Card(props){
    return(
        <div className="cardWrapper">
            <div className="orderNumber"></div>
            <div className="listInfo">
                <ul>
                    <li>Name</li>
                    <li>Method</li>
                    <li>Date</li>
                    <li>Qty</li>
                    <li>Donation Status</li>
                </ul>
            </div>
        </div>
    )}