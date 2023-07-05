import "./index.scss";

export default function OrgProfileImpact(){
    return(
    <div className="OrgProfileImpact">
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
    </div>
) 
}