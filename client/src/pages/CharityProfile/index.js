import './index.scss';
import DonorHeader from '../../components/donor-header';
import DonorFooter from '../../components/donor-footer';
import DonorCharityProfileVideo from '../../components/donor-charity-profile-video';
import DonorCharityProfileInformation from '../../components/donor-charity-profile-information';
import DonorCharityProfileWishlistBanner from '../../components/donor-charity-profile-wishlist-banner';
import CharityProfileCategoryCardWrapper from '../../components/donor-charity-profile-categories-wrapper';
export default function DonorCharityProfilePage(){
    return(<>
    <div className='DonorCharityProfileWrapper'>
        <DonorHeader/>
        <DonorCharityProfileInformation/>
        <DonorCharityProfileVideo/>
        <h1>!!!!!!!Impact
            <br></br>
            Can not Find the Task
        </h1>
        <DonorCharityProfileWishlistBanner/>
        <CharityProfileCategoryCardWrapper/>
        <h1>!!!!!!!!Home Dashboard Stories Place
            <br></br> - TT-50</h1>
        <DonorFooter/>
        </div>
    </>);
};