import './index.scss';
import InteractiveMap from '../../components/imap';
import OrgMapCard from '../../components/org-map-card';
export default function Map(){

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
                    <div className='tt-62-org-card-wrapper'>
                    <OrgMapCard
                        orgName="Sharing Smiles"
                        address="123 very long street name North Vancouver BC V5V 8H8"
                        days="Monday-Friday"
                        time="9:00 - 18:00"
                    />
                    <OrgMapCard
                        orgName="Sharing Smiles"
                        address="123 very long street name North Vancouver BC V5V 8H8"
                        days="Monday-Friday"
                        time="9:00 - 18:00"
                    />
                    <OrgMapCard
                        orgName="Sharing Smiles"
                        address="123 very long street name North Vancouver BC V5V 8H8"
                        days="Monday-Friday"
                        time="9:00 - 18:00"
                    />
                    <OrgMapCard
                        orgName="Sharing Smiles"
                        address="123 very long street name North Vancouver BC V5V 8H8"
                        days="Monday-Friday"
                        time="9:00 - 18:00"
                    />
                    </div>
                </div>
                <div className='tt-62-right-map'>
                    <InteractiveMap/>
                </div>   
        </div>

        );
}