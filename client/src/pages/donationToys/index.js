import './index.scss';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
import DonationWishListCardWrapper from '../../components/donor-donation-wishList-card-wrapper';
import { useState,useEffect } from 'react';

export default function DonorDonationToysPage(){

    const [categoriesData, setCategoriesData] = useState([]);
    function getSelectedCategories(data){
            let array = [];
            data.forEach((el)=>{
                if(el.quantity>0){
                    array.push(el);
                    setCategoriesData(array);
                }
            });
    }
    useEffect(() => {
        console.log(categoriesData);
      }, []);
    return(<>
    <div className='donorDonationToysPageWrapper'>
        <DonationWishListCardWrapper
            requiredCategories = {categoriesData}
        />

        <DonationCategoryCardWrapper
            onGetCat = {getSelectedCategories}
        />
    </div>
    </>);
};