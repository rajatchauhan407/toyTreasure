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
                <h3>{`${props.points} points`}</h3>                
            </div>
            <p>Thank you for your contribution to the community.</p>
                <button className="go-rewards"><Link to="/rewards">Go to Rewards</Link></button> <br />
                <Link to="/home">Home</Link>
        </div>
    )
}