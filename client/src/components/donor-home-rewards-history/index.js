import './index.scss';

export default function HistoryOfDonations(props){
        return(
                <div className="historyOfDonations">
                    <ul> 
                        <li>{props.toyType}</li>
                        <li>{props.points}</li>
                    </ul>
                </div>
        )}