import ComponentDropdown from "../component-dropdown-selection";
import "./index.scss";
import {useState,useEffect} from "react";

export default function OrgProfileExtraD({onSelectedData}){
    let test = [
        {id:1,day:"Sunday"},{id:2,day:"Monday"},{id:3,day:"Tuesday"},{id:4,day:"Wednesday"},{id:5,day:"Thursday"},{id:6,day:"Friday"},{id:7,day:"Saturday"}
    ];
    let timing = [
        {id:1,time:"9:00 - 10:00"},
        {id:2,time:"10:00 - 11:00"},
        {id:3,time:"11:00 - 12:00"},
        {id:4, time:"12:00 - 13:00"},
        {id:5, time:"13:00 - 14:00"},
        {id:6, time:"14:00 - 15:00"},
        {id:7, time:"15:00 - 16:00"},
        {id:8, time:"16:00 - 17:00"},
        {id:9, time:"17:00 - 18:00"}
    ];
    let deliveryMethod = [
        {id:1, method:"pick-up"},
        {id:2, method:"drop-off"}
    ];
    const [time,setTime] = useState([]);
    const [deliveryM, setDelivery] = useState([]);
    const [workingDays, setWorkingDays] = useState([]);
    
    function getTiming(data){
        setTime(data)
    }
    function getDays(data){
        console.log(data); 
        setWorkingDays(data); 
        
    }
    function getDeliveryMethod(data){
        console.log(data);
        setDelivery(data);
    }
    useEffect(()=>{
        console.log("called");
        onSelectedData({
            time:time.map((el)=>{return el.time}),
            deliveryM:deliveryM.map((el)=>{return el.method}),
            workingDays:workingDays.map((el)=>{return el.day})
        });
    },[time,deliveryM, workingDays]);
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
                        name="Select Method"
                    />
                </div>
                <div className="tt-38-item-container">
                    <label htmlFor="avaliableTime">Donation Time</label>
                    <ComponentDropdown
                        options={timing}
                        field="time"
                        onSelectedOptions={getTiming}
                        name="Select Time"
                    />
                </div>
                <div className="tt-38-item-container">
                    <label htmlFor="avaliableDays">Donation Days</label>
                    <ComponentDropdown
                        options={test}
                        field="day"
                        onSelectedOptions={getDays}
                        name="Select Day"
                    />
                </div>
                {/* <MultiSelector /> */}
        </form>
    </div>
) 
}


        