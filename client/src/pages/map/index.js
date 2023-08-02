import './index.scss';
import arrowBack from './back_arrow.png';
import { Link } from 'react-router-dom';

import InteractiveMap from '../../components/imap';
import OrgMapCard from '../../components/org-map-card';
import {useState,useEffect } from 'react';
import OrgMapDescCard from '../../components/org-map-desc-card';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import LoaderToysTreasure from '../../components/loader';

export default function Map(){
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isOrgDescShown, setIsOrgDescShown] = useState(false);
    const [orgsData, setOrgsData] = useState([]);
    const [isLoad,setIsLoad] = useState(false);
    useEffect(()=>{
        setIsLoad(true);
        async function fetchData(){
            let res = await FireBaseFirestoreService.getDocumentsInArray('organization_profile');
            setOrgsData(res);
            // console.log(res)
            setIsLoad(false);
        }
        fetchData();
        
    },[setOrgsData])
    // let orgs = [
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     },
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     },
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     },
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     },
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     },
    //     {orgName:"Sharing Smiles",
    //      address:"123 very long street name North Vancouver BC V5V 8H8",
    //      days:"Monday-Friday",
    //      time:"9:00 - 18:00"
    //     }
    // ];

    const SideHeader = ()=>{
        return isLoad?<LoaderToysTreasure/>:<div className="tt-62-side-wrapper">

                <div className='mapHeader'>
                    <div className='mapSearch'>
                        <Link to="/home"><button><img src={arrowBack} alt="back-arrow"/></button></Link>
                        <h1>Find Charities</h1>  
                    </div>  

                    <div className="tt-62-wrapper-input">
                        <p className='body1'>Search the nearest charity to donate your toys</p>
                        <select id="selectedMethod">
                            <option disabled selected>
                            Toys Delivery Method
                            </option>
                            <option value="drop">
                                Drop-off
                            </option>
                            <option value="pick-up">
                                Pick-up
                            </option>
                        </select>
                </div>           

                </div>
                    
            </div>
    }
    return(<div className='tt-62-container'>
                <div className="tt-62-side-wrapper">
                    <SideHeader/>
                    <div className='tt-62-org-card-wrapper'
                    >
                    {orgsData.map((el,index)=>{
                        return <div 
                        onClick={()=>{setSelectedIndex(index); setIsOrgDescShown(true)}}
                        className={selectedIndex === index?'background':''}
                        >
                        <OrgMapCard
                        orgLogo={el.logoUrl}
                        orgName={el.profileDetails.org_name}
                        desc={el.profileDetails.org_description}
                        address={el?.profileDetails.org_address}
                        days={el?.extraDetails.workingDays}
                        time={el?.extraDetails.time}
                        key={index}
                        id={el.id}
                    />
                    </div>
                    })
                    }
                    </div>
                </div>
                <div className='tt-62-right-map'>
                    <InteractiveMap/>
                    {isOrgDescShown?<OrgMapDescCard
                        orgLogo={orgsData[selectedIndex].logoUrl}
                        orgName={orgsData[selectedIndex].profileDetails.org_name}
                        desc={orgsData[selectedIndex].profileDetails.org_description}
                        address={orgsData[selectedIndex].profileDetails.org_address}
                        days={orgsData[selectedIndex].extraDetails.workingDays}
                        time={orgsData[selectedIndex].extraDetails.time}
                        id={orgsData[selectedIndex].id}

                    />:""}
                    
                </div>   
        </div>

        );
}