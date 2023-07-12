import './index.scss';
import DonorCharityProfileVideo from '../../components/donor-charity-profile-video';
import DonorCharityProfileInformation from '../../components/donor-charity-profile-information';
import DonorCharityProfileWishlistBanner from '../../components/donor-charity-profile-wishlist-banner';
import CharityProfileCategoryCardWrapper from '../../components/donor-charity-profile-categories-wrapper';
import HomeDashBoardStories from '../../components/home-dashboard-stories';
import OrgDataCard from '../../components/org-data-card';


export default function DonorCharityProfilePage(){
    return(<>
    <div className='DonorCharityProfileWrapper'>
        <DonorCharityProfileInformation/>
        <DonorCharityProfileVideo/>
        <div className="card-wrapper">
            <OrgDataCard/>
        </div>
        <DonorCharityProfileWishlistBanner/>
        <CharityProfileCategoryCardWrapper/>
        <HomeDashBoardStories/>
        </div>
    </>);
};