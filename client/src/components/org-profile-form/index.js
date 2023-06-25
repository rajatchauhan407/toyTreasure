// import MultiSelector from "../multi-selector";
import "./index.scss"
import {useState, useEffect} from "react";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function OrgProfileForm() {
// managing states for org profile form
    const [orgName, setOrgName] = useState("");
// send the document to firestore
    async function handleSubmit(event){
        event.preventDefault();
        let formValues = {
            org_name:orgName
        };
        const ref = await FireBaseFirestoreService.createDocument("organization_profile",formValues);
        console.log(ref);
        // return ref;
    }

// retrieve the documents from an array
   async function retrieveDocuments(collectionName){
        const querySnapshot = await FireBaseFirestoreService.getDocumentsInArray(collectionName);
        console.log(querySnapshot);
    }

// retrieve document by ID
    async function retrieveDocumentById(collectionName,docId){
        const doc = await FireBaseFirestoreService.getDocumentById(collectionName,docId);
        console.log(doc.data());
    }

// updateDocument via update 
// async function updateDocument(collectionName,docId, updatedData){
//     const docRef = await FireBaseFirestoreService.updateDocumentById(collectionName, docId, updatedData);
//     console.log(docRef);
// }
// retrieving form values, runs on first render
    useEffect(()=>{
        retrieveDocuments("organization_profile");
        retrieveDocumentById("organization_profile","7M8DPzm1JWeDPSJiSsOb");
    },[]);

    
return (
    <div className="OrgProfile">
        <h1>Organization Profile</h1>
        
        <div className="wrapper-left">
            <form className="Details">
                <label htmlFor="orgName">Organization Name</label><br />
                <input 
                    type="text" 
                    id="orgName" 
                    name="orgName"
                    onChange={(e)=>{setOrgName(e.target.value)}}
                    required /><br />
    
                <label htmlFor="orgDescription">Organization Description</label><br />
                <textarea id="orgDescription" name="orgDescription" rows="4" cols="50" maxLength="250" required></textarea><br />
    
                <label htmlFor="orgCRA">CRA Registered Charity</label><br />
                <input type="text" id="orgCRA" name="orgCRA" pattern="[a-zA-Z0-9]{1,15}" required /><br />
    
                <div className="one-line">
                    <div className="sect-1">
                        <label htmlFor="orgAddress1">Address Line 1</label><br />
                        <input type="text" id="orgAddress1" name="orgAddress1" required /><br />

                        <label htmlFor="orgCity">City</label><br />
                        <input type="text" id="orgCity" name="orgCity" required /><br />

                        <label htmlFor="orgProvince">Province</label><br />
                        <select id="orgProvince" name="orgProvince" required>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Yukon">Yukon</option>
                        </select><br />
                    </div>
                    <div className="sect-2">
                        <label htmlFor="orgAddress2">Address Line 2</label><br />
                        <input type="text" id="orgAddress2" name="orgAddress2" required /><br />
            
                        <label htmlFor="orgZip">Zip Code</label><br />
                        <input type="text" id="orgZip" name="orgZip" required /><br />
            
                        <label htmlFor="orgCountry">Country</label><br />
                        <input type="text" id="orgCountry" name="orgCountry" value="Canada" disabled /><br />
                    </div>
                </div>
        
                <label htmlFor="orgEmail">Email</label><br />
                <input type="email" id="orgEmail" name="orgEmail" required /><br />
    
                <label htmlFor="contactNumber">Contact Number</label><br />
                <div className="phone-input">
                    <input type="text" id="countryCode" name="countryCode" value="+1" disabled />
                    <input type="number" id="phoneNumber" name="phoneNumber" required />
                </div>
            </form>
        
            <form className= "Impact">
                <h2>Impact of Organization</h2>
                <p>Add the numbers of impact in your organization</p>

                <div className="statistics">
                    <div className="Section1">
                        <label htmlFor="yearFounded">Year Founded</label> <br />
                        <input type="number" id="yearFounded" name="yearFounded" min="1900" max="2023" required /> <br />

                        <label htmlFor="numDonors">Donors</label> <br />
                        <input type="number" id="numDonors" name="numDonors" min="0" required /> <br />

                        <label htmlFor="autoUpdate">Auto-update Numbers</label>
                        <input type="checkbox" id="autoUpdate" name="autoUpdate" />
                    </div>

                    <div className="Section2">
                        <label htmlFor="numToysReceived">Toys Received</label><br />
                        <input type="number" id="numToysReceived" name="numToysReceived" min="0" required /> <br />

                        <label htmlFor="numKidsSupported">Kids Being Supported</label><br />
                        <input type="number" id="numKidsSupported" name="numKidsSupported" min="0" required /> <br />
                    </div>
                </div>
            </form>

            <button type="submit" onClick={handleSubmit}>Save</button>
            <button type="reset">Reset</button>
        </div>

        {/* RIGHT COLUMN ================ */}
        <div className="wrapper-right">
            <form className="Upload">
                <label htmlFor="logoUpload">Upload Logo</label><br />
                <input type="file" id="logoUpload" name="logoUpload" accept="image/*" className="logo-input" required/><br />       

                <label htmlFor="photoUpload">Upload Main Photo</label> <br />
                <input type="file" id="photoUpload" name="photoUpload" accept="image/*" className="photo-input" required/><br />       

                <label htmlFor="videoUpload">Upload Video</label><br />
                <input type="file" id="videoUpload" name="videoUpload" accept="video/*" className="video-input" required/><br />      
            </form>

        
            <form className="ExtraDetails">
                <h2>Additional Details</h2>
                <label htmlFor="deliveryMethod">Donation Delivery Method</label><br />

                <label htmlFor="avaliableTime">Avaliable Time</label><br />

                <label htmlFor="avaliableDays">Avaliable Days</label><br />
                {/* <MultiSelector /> */}
            </form>

            <form className="Categories">
                    <h2>Select the categories of toys you accept</h2>
                    <div className="Kids">
                        <h3>Kids Toys</h3>
                            <input type="checkbox" id="plushAnimals" name="category" value="Plush and Stuffed Animals"/>
                            <label for="plushAnimals">Plush and Stuffed Animals</label> <br />

                            <input type="checkbox" id="educationalToys" name="category" value="Educational Toys"/>
                            <label for="educationalToys">Educational Toys</label> <br />

                            <input type="checkbox" id="boardGames" name="category" value="Board Games and Puzzles"/>
                            <label for="boardGames">Board Games and Puzzles</label> <br />

                            <input type="checkbox" id="artsCrafts" name="category" value="Arts and Crafts"/>
                            <label for="artsCrafts">Arts and Crafts</label> <br />

                            <input type="checkbox" id="sportsEquipment" name="category" value="Sports Equipment"/>
                            <label for="sportsEquipment">Sports Equipment</label> <br />

                            <input type="checkbox" id="dollsActionFigures" name="category" value="Dolls and Action Figures"/>
                            <label for="dollsActionFigures">Dolls and Action Figures</label> <br />

                            <input type="checkbox" id="buildingBlocks" name="category" value="Building Blocks and Construction Sets"/>
                            <label for="buildingBlocks">Building Blocks and Construction Sets</label> <br />

                            <input type="checkbox" id="musicalInstruments" name="category" value="Musical Instruments"/>
                            <label for="musicalInstruments">Musical Instruments</label> <br />

                            <input type="checkbox" id="outdoorPlay" name="category" value="Outdoor Play Equipment"/>
                            <label for="outdoorPlay">Outdoor Play Equipment</label> <br />

                            <input type="checkbox" id="books" name="category" value="Books and Reading Materials"/>
                            <label for="books">Books and Reading Materials</label> <br />
                    </div>

                    <div className="Baby">
                        <h3>Baby Toys</h3>
                            <input type="checkbox" id="softPlushToys" name="category" value="Soft Plush Toys"/>
                            <label for="softPlushToys">Soft Plush Toys</label><br />

                            <input type="checkbox" id="rattlesTeethers" name="category" value="Rattles and Teethers"/>
                            <label for="rattlesTeethers">Rattles and Teethers</label> <br />

                            <input type="checkbox" id="activityGyms" name="category" value="Activity Gyms"/>
                            <label for="activityGyms">Activity Gyms</label><br />

                            <input type="checkbox" id="stackingNestingToys" name="category" value="Stacking and Nesting Toys"/>
                            <label for="stackingNestingToys">Stacking and Nesting Toys</label><br />

                            <input type="checkbox" id="bathToys" name="category" value="Bath Toys"/>
                            <label for="bathToys">Bath Toys</label><br />

                            <input type="checkbox" id="musicalMobiles" name="category" value="Musical Mobiles"/>
                            <label for="musicalMobiles">Musical Mobiles</label><br />

                            <input type="checkbox" id="sensoryToys" name="category" value="Sensory Balls and Textured Toys"/>
                            <label for="sensoryToys">Sensory Balls and Textured Toys</label><br />
                    </div>
            </form>
        </div>
    </div>
);
} 