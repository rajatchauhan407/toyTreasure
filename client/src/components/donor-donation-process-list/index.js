import "./index.scss";
import { Link } from "react-router-dom";

export default function DonorDonationProcessList(props)
{
    let tt80data=0;
   //creation of increment function
function increment() {
    tt80data = document.getElementById("counting").value + 1;
    alert(tt80data);
    document.getElementById("counting").innerText = tt80data;
}
//creation of decrement function
function decrement() {
    tt80data = document.getElementById("counting").value - 1;
    document.getElementById("counting").innerText = tt80data;
}
   
    let tt80sumOfAmt=0;
    let tt80sumOfPoints=0;
    let tt80wishListIcon="";
    const tt80donationList = [
        {fromWishlist:"y",imageUrl:"https://i5.walmartimages.com/asr/5d5541cd-d9cc-4b47-b7de-ebc107b74d82_1.9f14f307142cfd730852e875760b90bc.jpeg", name:"Teddy Bear", donateTo:"Children Hospital", amount:1,points:50},
        {fromWishlist:"n",imageUrl:"https://i5.walmartimages.com/asr/c7ac4a19-da16-4974-93a6-68ae43b358cd.7255957a3ac34d02b9cc9719ddbf361d.jpeg", name:"Stuffed Animals", donateTo:"Children Hospital", amount:1,points:50},
        {fromWishlist:"n",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81R3A90l4iS._SL1500_.jpg", name:"Construction Toys", donateTo:"Children Hospital", amount:1,points:25}
    ]
    return( 
        <form className="tt-80-donationProcessListForm">   
            <div className="tt-80-donationProcessListWrapper">               
                <h1>Donation Details</h1>                  
                    <div className="tt-80-toy-list"> 
                        <div className="tt-80-toy-list-header">
                            <h3>Toy List</h3>   
                            <Link to="#">Reset</Link>
                        </div>                                      
                    <table>
                    <tbody>
                    {              
                        tt80donationList.map((el,index)=>{                
                        tt80sumOfAmt=tt80sumOfAmt+el.amount;
                        tt80sumOfPoints=tt80sumOfPoints+el.points;                
                        if(el.fromWishlist==="y")
                        {
                            tt80wishListIcon=<i className="fa-solid fa-crown"></i>;                   
                        }
                        else
                        {
                            tt80wishListIcon="";
                        }
              
                        return <tr>   
                        <td>
                            <div className="tt-80-imgandquantity">
                                <img src={el.imageUrl} alt={el.name}></img>
                                <p className="tt-80-amount">{el.amount}</p>
                            </div>
                        </td>     
                       
                        <td>
                            <div class="tt-80-nameandwishlist">  
                                <div>                        
                                    {el.name}  {tt80wishListIcon}
                                </div> 
                                {el.donateTo}
                            </div>
                        </td>
                        {/* <td>{el.amount}</td>  */}
                        <td>
                            <div className="tt-80-amount-change">                              
                                <button onClick={increment}>+</button>
                                    <h2 id="counting">{el.amount}</h2>
                                <button onClick={decrement}>-</button>
                            </div>
                        </td>
                        <td>
                            <div className="tt-80-pointsandclose">
                                {el.points}pts
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>
                        </td>
                        </tr>
                        }) 
                    }
                        <tr className="tt-80-totalPoints">
                        <td className="tt-80-crownIcon"></td>
                        <td>Total Points</td>
                        <td>{tt80sumOfAmt}</td>
                        <td>{tt80sumOfPoints}pts</td>
                        </tr>
                    </tbody>
                </table>
                </div> 
            </div>
        </form>  
    )
}

