import './index.scss';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
import DonationWishListCardWrapper from '../../components/donor-donation-wishList-card-wrapper';

export default function DonorDonationToysPage(){
    return(<>
    <div className='donorDonationToysPageWrapper'>
        <DonationWishListCardWrapper/>

        <DonationCategoryCardWrapper/>
    </div>
    </>);
};