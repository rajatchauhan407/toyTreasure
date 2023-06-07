import './index.css';

function Rewards(props){
    return(
        <>
            <div className="rewards">
                <p>{props.name}</p>
                <p>{props.rewardPoints}</p>
                <p><a href="#">click here</a> to redeem the points</p>
            </div>
        </>
    );
}

export default Rewards;