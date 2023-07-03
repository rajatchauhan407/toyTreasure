import './index.scss';
import HomeDashboardRewardsCard from '../../components/donor-home-dashboard-rewards-card-wrapper';


export default function Home(){
    return(<>
         <h1>Home</h1>

         <div className='homeDashboardRewards'>
            <h1>Rewards</h1>
            
          <HomeDashboardRewardsCard/>
         </div>
    </>);
};

