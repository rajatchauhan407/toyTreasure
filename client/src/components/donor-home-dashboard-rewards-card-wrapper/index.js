import './index.scss';
import HomeDashboardRewards from '../donor-home-dashboard-rewards-card';

import { useState,useEffect,useContext } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import React from "react";
import AuthContext from '../../services/auth-context';
import MultipleSlider from '../containers/multiple-slider';
// import GeneralMultipleSlider from '../containers/general-multiple-slider';

function HomeDashboardRewardsCard(props) {
  const userNameAuth = useContext(AuthContext);
  const [donorRewardsList, setDonorRewardsList] = useState([]);
  const { user_points } = useContext(AuthContext); // Access the user_points value from AuthContext
  const [userPoints, setUserPoints] = useState(user_points); // Set the userPoints value to user_points value from AuthContext
  async function getDonorRewardsList() {
    const data = await FireBaseFirestoreService.getDocumentsInArray('user_rewards');
    let array = data;
    setDonorRewardsList(array);
  }
useEffect(()=>{
  async function getUserPoints(){
    const userData = await FireBaseFirestoreService.getDocumentById('user',userNameAuth.uid);
  setUserPoints(userData.data().user_points);
  }
  getUserPoints()
  
},[user_points])
  useEffect(() => {
    getDonorRewardsList();
  }, []);

  // Sort the rewardsList array based on the reward_points
  const sortedRewardsList = donorRewardsList.sort((a, b) => a.reward_points - b.reward_points);

  const rewardsList = sortedRewardsList.map((el) => {

    return (
      <HomeDashboardRewards
        imageUrl={el.reward_image}
        points={el.reward_points}
        status={el.reward_points >=  userPoints? false : true}
        onClickRedeem={() => {props.onClickRedeem(true,el.reward_points)}}
      />
    );
  });

  return <MultipleSlider cards={rewardsList} />;
}

export default HomeDashboardRewardsCard;
