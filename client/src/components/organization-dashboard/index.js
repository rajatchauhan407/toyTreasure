import OrgVerificationCard from '../org-verification-card';
import OrgDataCard from '../org-data-card';
import OrgWishlist from '../org-wishlist';
import crown from "./crown.svg"
import './index.scss';
import {Link} from "react-router-dom";
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { useContext } from 'react';
import { database } from '../../FirebaseConfig';
import AuthContext from '../../services/auth-context';

export default function OrgDashBoard({onWishlistClicked}){
    let authCtx=useContext(AuthContext);
    // console.log("authContext"+authContext);
    const {id} = useParams();
    const [orgData, setOrgData] = useState(null);
   
    useEffect(()=>{
        async function fetchData(){
            const orgsCollectionRef = collection(database,'organization_profile');
            const res = await getDocs(orgsCollectionRef,where('uid','==',authCtx.uid));
            // console.log(res.foreac);
            console.log(res.docs[0].data());
            setOrgData(res.docs[0].data().impactDetails);
        }
        fetchData();
    },[setOrgData,id]);

    // console.log("orgdata >>>>>>>>>> "+id);
    return (
        <div className='org-wrapper'>
            <div className="org-list-wrapper">
            <div className="org-list-header">
                <h2>DashBoard</h2>
                <button onClick={()=>{onWishlistClicked(true)}}>                
                    <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Toy to Wishlist
                </button>
            </div>
            <div className="org-wishlist-crown">
                <h5>Wishlist <img className="crown" src={crown} alt={"crownicon"}/></h5>                
            </div>
           
            <OrgWishlist/>
        </div>
        <div className="side-container">
            <OrgDataCard displayMode="two-columns"  details={orgData}/>
           <div className="org-pending-verification">
                <div className="org-pending-verification-header">
                    <h4>Pending Verification</h4>
                    <h6><Link to="/organization/verification">See All</Link></h6>
                </div>
                <OrgVerificationCard/>  
           </div>
        </div>
        </div>
    )
}