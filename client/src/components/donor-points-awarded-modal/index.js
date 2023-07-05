import './index.scss';

export default function DonorPointsModal(props){
    return(
        <div className="modalPoints">
            <img src="https://picsum.photos/200/200?random=567" alt="" />
            <h2>Congratulations!</h2>
            <p>You have earned</p>
            <div className='points-donor'>
                <h3>200 points</h3>
                <p>Thank you for your contribution to the community.</p>
            </div>
                <button className="go-rewards">Go to Rewards</button> <br />
                <a href="#">Home</a>
        </div>
    )
}