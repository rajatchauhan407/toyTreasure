import './index.scss';

export default function HistoryOfDonations(props){
        return(
                <div className="historyOfDonations">
                    <ul> 
                        <li><h4>{props.toyType}</h4></li>
                        <li><h4 className='toysPoints'>{props.points}</h4></li>
                    </ul>
                </div>
        )}