// import MultiSelector from "../multi-selector";
import "./index.scss"
import OrgProfileDetails from "../org-profile-form-details";
import OrgProfileImpact from "../org-profile-form-impact";
import OrgProfileMedia from "../org-profile-form-media";
import OrgProfileExtraD from "../org-profile-form-extradetails";
import OrgProfileCategories from "../org-profile-form-categories";

// import {useState, useEffect} from "react";
// import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function OrgProfileForm() {
// // managing states for org profile form
//     const [orgName, setOrgName] = useState("");
// // send the document to firestore
//     async function handleSubmit(event){
//         event.preventDefault();
//         let formValues = {
//             org_name:orgName
//         };
//         const ref = await FireBaseFirestoreService.createDocument("organization_profile",formValues);
//         console.log(ref);
//         // return ref;
//     }

// // retrieve the documents from an array
//    async function retrieveDocuments(collectionName){
//         const querySnapshot = await FireBaseFirestoreService.getDocumentsInArray(collectionName);
//         console.log(querySnapshot);
//     }

// // retrieve document by ID
//     async function retrieveDocumentById(collectionName,docId){
//         const doc = await FireBaseFirestoreService.getDocumentById(collectionName,docId);
//         console.log(doc.data());
//     }

// // updateDocument via update 
// // async function updateDocument(collectionName,docId, updatedData){
// //     const docRef = await FireBaseFirestoreService.updateDocumentById(collectionName, docId, updatedData);
// //     console.log(docRef);
// // }
// // retrieving form values, runs on first render
//     useEffect(()=>{
//         retrieveDocuments("organization_profile");
//         retrieveDocumentById("organization_profile","7M8DPzm1JWeDPSJiSsOb");
//     },[]);

return (
    <div className="OrgProfile">
        <div className="wrapper-left">
            <h1>Organization Profile</h1>
            <OrgProfileDetails/>    
            <OrgProfileImpact/>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
        </div>

        <div className="wrapper-right">
            <OrgProfileMedia/>
            <OrgProfileExtraD/>
            <OrgProfileCategories/>
        </div>
    </div>
);
} 

