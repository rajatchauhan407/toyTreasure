import './index.scss';
import arrowBack from './back_arrow.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DonationCategoryCardWrapper from '../../components/donor-donation-category-card-wrapper';
import DonationWishListCardWrapper from '../../components/donor-donation-wishList-card-wrapper';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { useState,useEffect } from 'react';

export default function DonorDonationToysPage(){
    const {id} = useParams();
    // const [isLoading, setIsLoading] = useState(true);
    const [orgName, setOrgName] = useState('');
    
    const [categoriesData, setCategoriesData] = useState([]);
    useEffect(()=>{
        async function fetchOrg(){
            const res = await FireBaseFirestoreService.getDocumentById('organization_profile',id);
            console.log(res.data().profileDetails.org_name);
            setOrgName(res.data().profileDetails.org_name);
            // setIsLoading(false);
        }
        fetchOrg();
    },[]);
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
            <div className="btn">
                <Link to={`/charity/profile/${id}`}>
                    <button>
                    <img src={arrowBack} alt="back-arrow"/>
                    </button>
                </Link>
            </div>
            <h2>{orgName}</h2>
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