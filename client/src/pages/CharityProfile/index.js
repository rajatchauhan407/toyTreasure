import './index.scss';
import { useEffect,useState } from 'react';
import DonorCharityProfileVideo from '../../components/donor-charity-profile-video';
import DonorCharityProfileInformation from '../../components/donor-charity-profile-information';
import DonorCharityProfileWishlistBanner from '../../components/donor-charity-profile-wishlist-banner';
import CharityProfileCategoryCardWrapper from '../../components/donor-charity-profile-categories-wrapper';
import HomeDashBoardStories from '../../components/home-dashboard-stories';
import { useParams } from 'react-router-dom';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

import OrgDataCard from '../../components/org-data-card';
import ToyLoader from '../../components/loaders_all/toyLoader';
// import LegoLoader from '../../components/loaders_all/legoLoader';


export default function DonorCharityProfilePage(){
    const {id} = useParams();
    const [orgData, setOrgData] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            const res = await FireBaseFirestoreService.getDocumentById('organization_profile',id);
            console.log(res.data());
            setOrgData(res.data());
        }
        fetchData();
    },[setOrgData,id]);

    function getSelectedCategories(data){
        console.log(data);
    }
    return((orgData ? <>
    <div className='DonorCharityProfileWrapper'>
        <div className='charity_profile'>
            <DonorCharityProfileInformation
                info = {orgData.profileDetails}
                logo={orgData.logoUrl}
                main={orgData.profileUrl}
            />
        </div>
        <div className='charity_video'>
            <DonorCharityProfileVideo
                video={orgData.videoUrl}
            />
        </div>
        <div className="card-wrapper">
            <h1>Impacts</h1>
            <OrgDataCard
                details = {orgData.impactDetails}
            />
        </div>
        <div className='charity_wishlist'>
            <DonorCharityProfileWishlistBanner
            id={id}
            />
        </div>
        <div className='charity_categories'>
            <CharityProfileCategoryCardWrapper
                categories = {orgData.categories}
            />
        </div>

        <div className="charity_stories">
            <HomeDashBoardStories/>
            </div>
    </div>
    </>:<ToyLoader/>));
};