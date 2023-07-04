import './index.scss';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper'

export default function Home(){
    
    return(<>
         <h1>Home</h1>   
         <h1>Categories</h1>
         <p>Choose the category to donate if you can not find in wishlist.</p>
         <DonationCategoryCardWrapper/>
    </>);
};

