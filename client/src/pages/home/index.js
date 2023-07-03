import './index.scss';
import HomeDashboardBadgeHistory from '../../components/donor-home-rewards-badge-history-Wrapper'

export default function Home(){
    
    return(<>
         <h1>Home</h1>   
         <div className='rewardsProfile'>
            <div className='rewardsProfileHeader'>
            <div>
            <h4>Rewards Profile</h4>
            </div>
            <div>
            <p>Your Points: 400</p>
            </div>
        </div>
         
         <HomeDashboardBadgeHistory/>
         </div>
         
    </>);
};

