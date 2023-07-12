import './index.scss';
import DonorCharityProfileVideo from '../../components/donor-charity-profile-video';
import DonorCharityProfileInformation from '../../components/donor-charity-profile-information';
import DonorCharityProfileWishlistBanner from '../../components/donor-charity-profile-wishlist-banner';
import CharityProfileCategoryCardWrapper from '../../components/donor-charity-profile-categories-wrapper';
import HomeDashBoardStories from '../../components/home-dashboard-stories';
export default function DonorCharityProfilePage(){
    return(<>
    <div className='DonorCharityProfileWrapper'>
        <DonorCharityProfileInformation/>
        <DonorCharityProfileVideo/>
        <h1>!!!!!!!Impact
            <br></br>
            Can not Find the Task
        </h1>
        <DonorCharityProfileWishlistBanner/>
        <CharityProfileCategoryCardWrapper/>
        <HomeDashBoardStories/>
        </div>
    </>);
};