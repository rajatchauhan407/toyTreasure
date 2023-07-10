import "./index.scss";
export default function HomeDashboardRewards(props){   
        
    let state = props.status.toString();
       
    return (
            <div className="homeDashboardRewardsCardWrapper" id={state}>
              
                <p className="homeDashboardRewardsPoints">
                       {props.points}
                    </p>
                    <div className="homeDashboardRewardsCardImgWrapper">
                        <img src={props.imageUrl} alt=""/>                       
                    </div>
                    {props.status}
                    <button>Redeem now</button>
            </div>
    )
}