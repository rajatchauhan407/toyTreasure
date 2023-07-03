import './index.scss';
import HomeDashboardRewards from '../donor-home-dashboard-rewards-card';

function HomeDashboardRewardsCard() {
  let rewardsData = [
    {
      imageUrl: 'https://picsum.photos/400/400?rand=431',
      points: 200,
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=432',
      points: 300,
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=433',
      points: 400,
    },
    {
      imageUrl: 'https://picsum.photos/400/400?rand=434',
      points: 600,
    },
  ];

  const rewardsList = rewardsData.map((el) => (
    <HomeDashboardRewards imageUrl={el.imageUrl} points={el.points} />
  ));
    console.log(rewardsList);
  return <div>{rewardsList}</div>;
}

export default HomeDashboardRewardsCard;
