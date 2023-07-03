import "./index.scss";
export default function HomeDashboardRewards(props){
    return (
            <div className="homeDashboardRewardsCardWrapper">
                    <div className="homeDashboardRewardsCardImgWrapper">
                        <img src={props.imageUrl} alt=""/>
                    </div>
                    <p>
                       {props.points}
                    </p>
            </div>
    )
}