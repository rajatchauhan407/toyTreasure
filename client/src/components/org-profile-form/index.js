// import MultiSelector from "../multi-selector";
import "./index.scss";
import {useState} from "react";
import OrgProfileDetails from "../org-profile-form-details";
import OrgProfileImpact from "../org-profile-form-impact";
import OrgProfileMedia from "../org-profile-form-media";
import OrgProfileExtraD from "../org-profile-form-extradetails";
import OrgProfileCategories from "../org-profile-form-categories";

// import {useState, useEffect} from "react";
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function OrgProfileForm() {
    const [profileDetails, setProfileDetails] = useState({});
    const [getData, setGetData] = useState(false);
    const [impactDetails,setImpactDetails] = useState({});
    const [logo,setLogo] = useState();
    const [profile, setProfile] = useState();
    const [video, setVideo] = useState();


    async function handleSubmit(event){
        event.preventDefault();
        
        console.log(profileDetails);
        console.log(impactDetails);
        console.log(logo);
        console.log(profile);
        console.log(video);
    }
function onProfileDetails(details){
    setProfileDetails(details);
}
function getProfileImpact(details){
    console.log(details);   
    setImpactDetails(details);
}
function getLogo(file){
    console.log(file);
    setLogo(file);
}
function getProfile(file){
    console.log(file);
    setProfile(file);
}
function getVideo(file){
    console.log(file);
    setVideo(file);
}
function getSelectedData(){
    
}
return (
    <div className="OrgProfile">
        <div className="wrapper-left">
            <h1>Organization Profile</h1>
            <OrgProfileDetails
                getFormData = {onProfileDetails}
                getDataState = {getData}
            />    
            <OrgProfileImpact
                onProfileImpact = {getProfileImpact}
            />
            <button type="submit" onClick={(e)=>{ setGetData(true); handleSubmit(e);}}>Save</button>
            <button type="reset">Reset</button>
        </div>

        <div className="wrapper-right">
            <OrgProfileMedia
                onLogoSelected = {getLogo}
                onProfileSelected={getProfile}
                onVideoSelected={getVideo}
            />
            <OrgProfileExtraD
                onSelectedData = {getSelectedData}
            />
            <OrgProfileCategories/>
        </div>
    </div>
);
} 

