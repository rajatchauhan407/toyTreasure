import './index.scss';
import DonorHeader from '../../components/donor-header';
import DonorFooter from '../../components/donor-footer';
import DonorCharityProfileVideo from '../../components/donor-charity-profile-video';
import DonorCharityProfileInformation from '../../components/donor-charity-profile-information';
import DonorCharityProfileWishlistBanner from '../../components/donor-charity-profile-wishlist-banner';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
export default function DonorDonationToysPage(){
    return(<>
        <DonorHeader/>
        <DonorCharityProfileInformation/>
        <DonorCharityProfileVideo/>

        <DonorCharityProfileWishlistBanner/>
        <DonationCategoryCardWrapper/>
        <DonorFooter/>
    </>);
};