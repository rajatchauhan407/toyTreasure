import './index.scss';
import InteractiveMap from '../../components/imap';
import OrgMapCard from '../../components/org-map-card';
import {useState,useEffect } from 'react';
import OrgMapDescCard from '../../components/org-map-desc-card';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
export default function Map(){
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isOrgDescShown, setIsOrgDescShown] = useState(false);
    const [orgsData, setOrgsData] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let res = await FireBaseFirestoreService.getDocumentsInArray('organization_profile');
            setOrgsData(res);
            console.log(res)
        }
        fetchData();
    },[setOrgsData])
    let orgs = [
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        },
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        },
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        },
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        },
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        },
        {orgName:"Sharing Smiles",
         address:"123 very long street name North Vancouver BC V5V 8H8",
         days:"Monday-Friday",
         time:"9:00 - 18:00"
        }
    ];

    const SideHeader = ()=>{
        return <div className="tt-62-side-wrapper">
                <h1>Search</h1>
                
                <div className="tt-62-wrapper-input">
                <p>Search nearby organization</p>
                <select id="selectedMethod">
                    <option disabled selected>
                        Delivery Method
                    </option>
                    <option value="drop">
                        drop-off
                    </option>
                    <option value="pick-up">
                        pick-up
                    </option>
                    <option>
                        none
                    </option>
                    </select>
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
                        orgName={el.profileDetails.org_name}
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
                        orgName={orgsData[selectedIndex].profileDetails.org_name}
                        address={orgsData[selectedIndex].profileDetails.org_address}
                        days={orgsData[selectedIndex].extraDetails.workingDays}
                        time={orgsData[selectedIndex].extraDetails.time}
                        id={orgsData[selectedIndex].id}

                    />:""}
                    
                </div>   
        </div>

        );
}