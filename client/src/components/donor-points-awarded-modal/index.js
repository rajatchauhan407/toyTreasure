import './index.scss';
import threeCoins from "./coins-congrats.svg"
import {Link} from "react-router-dom";

export default function DonorPointsModal(props){
    return(
        <div className="modalPoints">                  
            <img className="threeCoins" src={threeCoins} alt={"threeCoins"}/>
            <h2>Congratulations!</h2>
            <h4>You have earned</h4>
            <div className='points-donor'>
                <h3>200 points</h3>                
            </div>
            <p>Thank you for your contribution to the community.</p>
                <button className="go-rewards">Go to Rewards</button> <br />
                <Link to="#">Home</Link>
        </div>
    )
}