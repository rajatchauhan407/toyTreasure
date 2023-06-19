import "./index.scss";


export default function OrgVerificationDetails(props)
{
    let sumOfAmt=0;
    let sumOfPoints=0;
    let toyName="";
    const verToyList = [
        {name:"Teddy Bear 1", amount:1,points:50},
        {name:"Teddy Bear 2", amount:1,points:50},
        {name:"Barbie Doll 1", amount:1,points:25}
    ]
    const donorDetails = [
        {donationId:"#45634", donorName:"Greg Thomas",donorPhone:"+1 673 564 7823",dateAndTime:"May 30, 2023, 11:30pm"}       
    ]
    return(
      
        <div className="OrgVerDetailsCardWrapper">
            <div className="org-ver-details-card">
                <div className="detailsHeader">
                    <h2>Verification Details</h2>
                    <h3>Donation:  {donorDetails[0].donationId}</h3>
                </div>
                <div className="details">
                    <img src="" alt="img"></img>
                    <div className="donorInfo">
                        <div className="displayDonorInfo">
                        <p>Donor Name</p>
                        <p>{donorDetails[0].donorName}</p>
                        </div>
                        <div className="displayDonorInfo">
                        <p>Donor Phone</p>
                        <p>{donorDetails[0].donorPhone}</p>
                        </div>
                        <div className="displayDonorInfo">
                        <p>Date and Time</p>
                        <p>{donorDetails[0].dateAndTime}</p>
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Amount</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
            {
              
               verToyList.map((el,index)=>{                
                sumOfAmt=sumOfAmt+el.amount;
                sumOfPoints=sumOfPoints+el.points;
                // console.log(`Sum of Amt:${sumOfAmt}`);
                // console.log(`Sum of Points:${sumOfPoints}`);
                if(index==0)
                {
                 toyName=`<td><i class="fa-solid fa-crown">${el.name}</i></td>`;
                }
                else
                {
                 toyName=el.name;
                }
             
                return <tr>               
                    <td>{el.name}</td>
                    <td>{el.amount}</td> 
                    <td>{el.points}</td>
                    </tr>
            })

           

            }
            <tr className="totalPoints">
                <td>Total Points</td>
                <td>{sumOfAmt}</td>
                <td>{sumOfPoints}</td>
            </tr>
            </tbody>
            </table>
            <label>
                <input type="checkbox" id="toysChecked"  name="toysChecked"  />
                Donated toys has been thoroughly checked before 
                proceeding for the donation.
            </label>
            <div className="buttons">
                <input type="Button" value="Cancel Donation"  id="cancelDonation"  className="buttonCancel"/>
                <input type="Button" value="Accept"  id="acceptDonation"  className="buttonAccept"/>
            </div> 
                
            </div>  
            <div className="org-ver-qr-card">
                <h3>Code will be generated after verification</h3>
            </div>                  
               
        </div>
    )
}

