import ComponentDropdown from "../component-dropdown-selection";
import "./index.scss";
import {useState,useEffect} from "react";

export default function OrgProfileExtraD({onSelectedData}){
    let test = [
        {id:1,day:"sunday"},{id:2,day:"Monday"},{id:3,day:"Tuesday"},{id:4,day:"Wednesday"},{id:5,day:"Thursday"},{id:6,day:"Friday"},{id:7,day:"Saturday"}
    ];
    let timing = [
        {id:1,time:"9:00 - 10:00"},
        {id:2, time:"12:00 - 13:00"},
        {id:3, time:"15:00 - 16:00"},
        {id:4, time:"17:00 - 18:00"}
    ];
    let deliveryMethod = [
        {id:1, method:"pick-up"},
        {id:2, method:"drop-off"}
    ];
    const [time,setTime] = useState();
    const [deliveryM, setDelivery] = useState();
    const [workingDays, setWorkingDays] = useState();
    function getTiming(data){
        setTime(data)
    }
    function getDays(data){
        setDelivery(data);
    }
    function getDeliveryMethod(data){
        setWorkingDays(data);
    }
    // useEffect(()=>{
    //     onSelectedData({
    //         time,
    //         deliveryM,
    //         workingDays
    //     });
    // },[time,deliveryM, workingDays])
    return(
    <div className="OrgProfileExtraD">
        <form className="tt-38-extraDetails">
                <h2>Additional Details</h2>
                <div className="tt-38-item-container">
                    <label htmlFor="deliveryMethod">Donation Delivery Method</label>
                    <ComponentDropdown
                        options={deliveryMethod}
                        field="method"
                        onSelectedOptions={getDeliveryMethod}
                    />
                </div>
                <div className="tt-38-item-container">
                    <label htmlFor="avaliableTime">Avaliable Time</label>
                    <ComponentDropdown
                        options={timing}
                        field="time"
                        onSelectedOptions={getTiming}
                    />
                </div>
                <div className="tt-38-item-container">
                    <label htmlFor="avaliableDays">Avaliable Days</label>
                    <ComponentDropdown
                        options={test}
                        field="day"
                        onSelectedOptions={getDays}
                    />
                </div>
                {/* <MultiSelector /> */}
        </form>
    </div>
) 
}


        