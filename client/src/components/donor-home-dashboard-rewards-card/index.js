import "./index.scss";
export default function HomeDashboardRewards(props){   
    console.log(props)
        
    let state = props.status?.toString();
    
    return (
            <div className="homeDashboardRewardsCardWrapper" id={state}>
                
                <div className="homeDashboardRewardsPoints">
                    <p className="rewardsPoints">{props.points}</p>
                    <p>points</p>
                </div>
                <div className="homeDashboardRewardsCardImgWrapper">
                    <img src={props.imageUrl} alt=""/>                  
                </div>
                
                {props.status}
                <button className="redeemRewards" onClick={(data,points)=>{props.onClickRedeem(true,points)}}>Redeem now</button>
            </div>
              
    )
}