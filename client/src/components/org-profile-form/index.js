export default function OrgProfileForm(props) {
    return (
      <div className="OrgProfile">
        <h1>Organization Profile</h1>
        
        <div className="wrapper-left">
            <form className="Details">
                <label htmlFor="orgName">Organization Name</label><br />
                <input type="text" id="orgName" name="orgName" required /><br />
    
                <label htmlFor="orgDescription">Organization Description</label><br />
                <textarea id="orgDescription" name="orgDescription" rows="4" cols="50" maxLength="250" required></textarea><br />
    
                <label htmlFor="orgCRA">CRA Registered Charity</label><br />
                <input type="text" id="orgCRA" name="orgCRA" pattern="[a-zA-Z0-9]{1,15}" required /><br />
    
                <div className="one-line">
                    <label htmlFor="orgAddress1">Address Line 1</label><br />
                    <input type="text" id="orgAddress1" name="orgAddress1" required /><br />
        
                    <label htmlFor="orgAddress2">Address Line 2</label><br />
                    <input type="text" id="orgAddress2" name="orgAddress2" required /><br />
        
                    <label htmlFor="orgCity">City</label><br />
                    <input type="text" id="orgCity" name="orgCity" required /><br />
        
                    <label htmlFor="orgZip">Zip Code</label><br />
                    <input type="text" id="orgZip" name="orgZip" required /><br />
        
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
        
                    <label htmlFor="orgCountry">Country</label><br />
                    <input type="text" id="orgCountry" name="orgCountry" value="Canada" disabled /><br />
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
                
                <div className="Section1">
                    <label htmlFor="yearFounded">Year Founded</label> <br />
                    <input type="number" id="yearFounded" name="yearFounded" min="1900" max="2023" required /> <br />

                    <label htmlFor="numDonors">Number of Donors</label> <br />
                    <input type="number" id="numDonors" name="numDonors" min="0" required /> <br />
                </div>

                <div className="Section2">
                    <label htmlFor="numToysReceived">Number of Toys Received</label><br />
                    <input type="number" id="numToysReceived" name="numToysReceived" min="0" required /> <br />

                    <label htmlFor="numKidsSupported">Number of Kids Being Supported</label><br />
                    <input type="number" id="numKidsSupported" name="numKidsSupported" min="0" required />
                </div>
            </form>




        </div>
      </div>
    );
} 