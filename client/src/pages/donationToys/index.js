import './index.scss';
import arrowBack from './back_arrow.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
import DonationWishListCardWrapper from '../../components/donor-donation-wishList-card-wrapper';
import { useState,useEffect } from 'react';

export default function DonorDonationToysPage(){
    const {id} = useParams();
    
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
        <div className='backButton'>
    <Link to="/charity/profile/${id}">

        <button>
        <img src={arrowBack} alt="back-arrow"/>
        </button>
    </Link>
    </div>

        <DonationWishListCardWrapper
            requiredCategories = {categoriesData}
        />

        <DonationCategoryCardWrapper
            onGetCat = {getSelectedCategories}
        />
    </div>
    </>);
};