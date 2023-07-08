import './index.scss';
import DonorHeader from '../../components/donor-header';
import DonorFooter from '../../components/donor-footer';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
import DonationWishListCardWrapper from '../../components/donor-donation-wishList-card-wrapper';

export default function DonorDonationToysPage(){
    return(<>
    <div className='donorDonationToysPageWrapper'>
        <DonorHeader/>
        <DonationWishListCardWrapper/>

        <DonationCategoryCardWrapper/>

        <DonorFooter/>

    </div>
    </>);
};