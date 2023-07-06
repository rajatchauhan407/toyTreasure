import './index.scss';
import InteractiveMap from '../../components/imap';
export default function Map(){

    const SideWrapper = ()=>{
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
            <SideWrapper/>
            <div className='tt-62-right-map'>
            <InteractiveMap/>
            </div>
           
    </div>

        );
}