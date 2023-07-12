import './index.scss';
import HomeDashboardRewards from '../donor-home-dashboard-rewards-card';
import { useState,useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

function HomeDashboardRewardsCard() {
  const [donorRewardsList, setDonorRewardsList] = useState([]); 
  async function getDonorRewardsList()
    {
        const data = await FireBaseFirestoreService.getDocumentsInArray("user_rewards");
        let array = data;       
        setDonorRewardsList(array);  
        
    }
    useEffect(()=>{
      getDonorRewardsList();
    },[]);
  // let rewardsData = [
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=431',
  //     points: 200,
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=432',
  //     points: 300,
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=433',
  //     points: 400,
  //   },
  //   {
  //     imageUrl: 'https://picsum.photos/400/400?rand=434',
  //     points: 600,
  //   },
  // ];

  const rewardsList = donorRewardsList.map((el) => (       
    <HomeDashboardRewards imageUrl='https://thumbs.dreamstime.com/b/toy-shop-discount-concept-banner-cartoon-style-toy-shop-discount-concept-banner-cartoon-banner-toy-shop-discount-vector-concept-134533190.jpg' points={el.reward_points} status={el.reward_state} />
  ));
    console.log(rewardsList);
  return <div className='homeDashboardRewardsCardwrapper'>{rewardsList}</div>;
}

export default HomeDashboardRewardsCard;
