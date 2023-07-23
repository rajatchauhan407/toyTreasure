import './index.scss';
import HomeDashboardRewards from '../donor-home-dashboard-rewards-card';

import { useState,useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import React, { useContext } from "react";
import AuthContext from '../../services/auth-context';

import GeneralMultipleSlider from '../containers/general-multiple-slider';

function HomeDashboardRewardsCard(props) {
  const [donorRewardsList, setDonorRewardsList] = useState([]);
  const { user_points } = useContext(AuthContext); // Access the user_points value from AuthContext

  async function getDonorRewardsList() {
    const data = await FireBaseFirestoreService.getDocumentsInArray('user_rewards');
    let array = data;
    setDonorRewardsList(array);
  }

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
        status={el.reward_points <= user_points ? false : true}
        onClickRedeem={() => {props.onClickRedeem(true)}}
      />
    );
  });

  return <GeneralMultipleSlider cards={rewardsList} />;
}

export default HomeDashboardRewardsCard;
