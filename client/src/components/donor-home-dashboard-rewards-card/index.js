import "./index.scss";
export default function homeDashboardRewards(props){

    let rewardsData = [
        {
            imageUrl:"https://picsum.photos/400/400?rand=431",
            points: 200
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=432",
            points: 300
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=433",
            points: 400
        },
        {
            imageUrl:"https://picsum.photos/400/400?rand=434",
            points: 600
        }
    ]
    return (
        rewardsData.map((el) => 
            <div className="homeDashboardRewardsCardWrapper">
                    <div className="homeDashboardRewardsCardImgWrapper">
                        <img src={el.imageUrl} alt=""/>
                    </div>
                    <p>
                       {el.points}
                    </p>
            </div>)
    )
}