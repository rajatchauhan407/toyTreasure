import './index.scss';
import InteractiveMap from '../../components/imap';
import OrgMapCard from '../../components/org-map-card';
import { useRef } from 'react';
import OrgMapDescCard from '../../components/org-map-desc-card';
export default function Map(){
    const orgMapRefs = useRef([]);

    function handleRef(index){
        console.log(index);
        console.log(orgMapRefs.current);
        if(orgMapRefs.current[index].style.backgroundColor==="hotpink"){
            orgMapRefs.current[index].style.backgroundColor="unset";
        }else{
            orgMapRefs.current[index].style.backgroundColor="hotpink";
        }
    }
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
                <p>Search your nearby donor organization here</p>
                <div className="tt-62-wrapper-input">
                {/* search icon is supposed to be below */}
                    <input type="text" />  
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
                    {orgs.map((el,index)=>{
                        return <div onClick={()=>{handleRef(index)}}>
                        <OrgMapCard
                        orgName={el.orgName}
                        address={el.address}
                        days={el.days}
                        time={el.time}
                        key={index}
                        ref={(el)=>orgMapRefs.current.push(el)}  
                    />
                    </div>
                    })
                    }
                    </div>
                </div>
                <div className='tt-62-right-map'>
                    <InteractiveMap/>
                    <OrgMapDescCard/>
                </div>   
        </div>

        );
}