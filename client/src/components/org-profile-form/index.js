// import MultiSelector from "../multi-selector";
import "./index.scss";
import {useContext, useState} from "react";
import OrgProfileDetails from "../org-profile-form-details";
import OrgProfileImpact from "../org-profile-form-impact";
import OrgProfileMedia from "../org-profile-form-media";
import OrgProfileExtraD from "../org-profile-form-extradetails";
import OrgProfileCategories from "../org-profile-form-categories";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import { ref} from "firebase/storage";
// import app from "../../FirebaseConfig";
// import {useState, useEffect} from "react";
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import AuthContext from "../../services/auth-context";
import FirebaseStorageService from "../../services/FirebaseStorageService";

export default function OrgProfileForm() {
    let authCtx = useContext(AuthContext)

    const [profileDetails, setProfileDetails] = useState({});
    const [getData, setGetData] = useState(false);
    const [impactDetails,setImpactDetails] = useState({});
    const [logo,setLogo] = useState();
    const [profile, setProfile] = useState();
    const [video, setVideo] = useState();
    const [categories,setCategories] = useState([]);
    const [extraDetails, setExtraDetails] = useState([]);


    async function handleSubmit(event){
        event.preventDefault();
        console.log(logo);
        console.log(profile);
        console.log(video);
        console.log(extraDetails);
        let logoPath = 'org_logos/'+logo.name.split('.')[0];
        let logoRef = ref(FirebaseStorageService.storage,logoPath)
        console.log(logoRef);
        let profilePath = "profile/"+profile.name.split('.')[0];
        let profileRef = ref(FirebaseStorageService.storage,profilePath)
        console.log(logoRef);
        let logoUrl = await FirebaseStorageService.uploadFileAndGetUrl(logo,logoRef);
        let profileUrl = await FirebaseStorageService.uploadFileAndGetUrl(profile,profileRef);
        
        console.log();
        let result = await FireBaseFirestoreService.createDocument('organization_profile',{
            profileDetails:profileDetails,
            impactDetails:impactDetails,
            categories:categories,
            extraDetails:extraDetails,
            uid:authCtx.uid,
            logoUrl,
            profileUrl,
            videoUrl:video
        });
        if(result){
            console.log("data uploadeded");
        }
        // console.log(profileDetails);
        // console.log(impactDetails);
        
        // console.log(categories);
        // console.log(extraDetails);
    }
    function getCategories(cat){
        setCategories(cat);
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
function getSelectedData(data){
    setExtraDetails(data);
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
            <div class="profile-form-buttons">               
                <button className="profile-form-reset" type="reset">Reset</button>
                <button className="profile-form-submit" type="submit" onClick={(e)=>{ setGetData(true); handleSubmit(e);}}>Save</button>
            </div>
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
            <OrgProfileCategories
                onGetCategories={getCategories}
            />
        </div>
    </div>
);
} 

