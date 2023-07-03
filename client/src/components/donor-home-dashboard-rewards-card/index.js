import "./index.scss";
export default function HomeDashboardRewards(props){
    return (
            <div className="homeDashboardRewardsCardWrapper">
                <p className="homeDashboardRewardsPoints">
                       {props.points}
                    </p>
                    <div className="homeDashboardRewardsCardImgWrapper">
                        <img src={props.imageUrl} alt=""/>
                    </div>
                    <button>Redeem now</button>
            </div>
    )
}