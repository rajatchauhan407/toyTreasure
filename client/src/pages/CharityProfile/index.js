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
    return((orgData && <>
    <div className='DonorCharityProfileWrapper'>
        <DonorCharityProfileInformation
            info = {orgData.profileDetails}
            logo={orgData.logoUrl}
            main={orgData.profileUrl}
        />
        <DonorCharityProfileVideo
            video={orgData.videoUrl}
        />
        <div className="card-wrapper">
            <OrgDataCard
                details = {orgData.impactDetails}
            />
        </div>
        <DonorCharityProfileWishlistBanner
        id={id}
        />
        <CharityProfileCategoryCardWrapper
            categories = {orgData.categories}
        />

        <HomeDashBoardStories/>
        </div>
    </>));
};