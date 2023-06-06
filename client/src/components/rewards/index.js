import './index.css';

function Rewards(props){
    return(
<>
<div>
    <p>
        {props.name}
    </p>

    <p>
        {props.rewardPoints}
    </p>

    <p><a href="#">Click here</a> to reedem the points</p>
</div>
</>
    );
}
export default Rewards;