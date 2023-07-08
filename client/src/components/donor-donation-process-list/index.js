import "./index.scss";
import { Link } from "react-router-dom";
import React, { setState } from 'react';

export default function DonorDonationProcessList(props)
{    
    let tt80data=0;  
    let tt80totalpoints=0;
    let tt80pId="";
    let tt80pId2="";   
    let tt80sumOfAmt=0;
    let tt80sumOfPoints=0;
   
    function refresh()
    {     
        window.location.reload();     
    }

    function removeRow(name,index,e)
    {
        e.preventDefault();   
        tt80pId2=`tt-80-points${index}`; 
        tt80sumOfAmt=tt80sumOfAmt-Number(document.getElementById(index).value);
        tt80sumOfPoints=tt80sumOfPoints-Number(document.getElementById(tt80pId2).innerText);
        document.getElementById("totalToystt80").innerText=tt80sumOfAmt;
        document.getElementById("totalPointstt80").innerText=tt80sumOfPoints+"pts";
        document.getElementById(name).remove();    
    }

 
    function addRemove(index,e,action,points)
    {
        e.preventDefault();    
        tt80pId=`tt-80-amount${index}`;
        tt80pId2=`tt-80-points${index}`;     
    
        if(action==='add')
        {
            tt80data = Number(document.getElementById(index).value)+1;    
            tt80sumOfAmt=tt80sumOfAmt+1; 
            tt80sumOfPoints=tt80sumOfPoints+points;         
        }
        if(action==='remove')
        {         
            tt80data = Number(document.getElementById(index).value)-1;   
            tt80sumOfAmt=tt80sumOfAmt-1;  
            tt80sumOfPoints=tt80sumOfPoints-points;  
            if(tt80data<1)
            {
                tt80data=1;
                tt80sumOfAmt=tt80sumOfAmt+1;   
                tt80sumOfPoints=tt80sumOfPoints+points; 
            }           
        }    
        document.getElementById("totalToystt80").innerText=tt80sumOfAmt;        
        tt80totalpoints=points*tt80data;        
        document.getElementById("totalPointstt80").innerText=tt80sumOfPoints+"pts";
        document.getElementById(index).value = tt80data;
        document.getElementById(tt80pId).innerText=tt80data;  
        document.getElementById(tt80pId2).innerText=tt80totalpoints;    
    }
   
    let tt80wishListIcon="";  
    const tt80donationList = [
        {fromWishlist:"y",imageUrl:"https://i5.walmartimages.com/asr/5d5541cd-d9cc-4b47-b7de-ebc107b74d82_1.9f14f307142cfd730852e875760b90bc.jpeg", name:"Teddy Bear", donateTo:"Children Hospital", amount:1,points:50},
        {fromWishlist:"n",imageUrl:"https://i5.walmartimages.com/asr/c7ac4a19-da16-4974-93a6-68ae43b358cd.7255957a3ac34d02b9cc9719ddbf361d.jpeg", name:"Stuffed Animals", donateTo:"Children Hospital", amount:1,points:50},
        {fromWishlist:"n",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81R3A90l4iS._SL1500_.jpg", name:"Construction Toys", donateTo:"Children Hospital", amount:1,points:25}
    ]  
    
    return( 
        <form className="tt-80-donationProcessListForm"> 
          <h1>Donation Details</h1>     
            <div className="tt-80-donationProcessListWrapper">                            
                    <div className="tt-80-toy-list"> 
                        <div className="tt-80-toy-list-header">
                            <h3>Toy List</h3>   
                            <Link onClick={refresh}>Reset</Link>                          
                        </div>                                      
                    <table id="tt-80-table">
                    {/* <tbody> */}
                    {              
                        tt80donationList.map((el,index)=>{                
                        tt80sumOfAmt=tt80sumOfAmt+el.amount;
                        tt80sumOfPoints=tt80sumOfPoints+el.points; 
                        tt80pId=`tt-80-amount${index}`;                             
                        tt80pId2=`tt-80-points${index}`;                              
                        if(el.fromWishlist==="y")
                        {
                            tt80wishListIcon=<i className="fa-solid fa-crown"></i>;                   
                        }
                        else
                        {
                            tt80wishListIcon="";
                        }
              
                        return <tr className={index} id={el.name}>    
                        <td>
                            <div className="tt-80-imgandquantity">
                                <img src={el.imageUrl} alt={el.name}></img>                               
                                <p className="tt-80-amount" id={tt80pId}>{el.amount}</p>
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
                        <td>
                            <div className="tt-80-amount-change">                              
                                <button onClick={(e) => addRemove(index,e,"remove",el.points)}>-</button>
                                <input type="text" id={index} value={el.amount} disabled></input>                                                          
                                <button onClick={(e) => addRemove(index,e,"add",el.points)}>+</button>                                
                            </div>
                        </td>
                        <td>
                            <div className="tt-80-pointsandclose">
                            <p className="tt-80-points" id={tt80pId2}>{el.points}</p><p>pts</p>                              
                                <Link onClick={(e) => removeRow(el.name,index,e)}> <i className="fa fa-times" aria-hidden="true"></i></Link>                               
                            </div>                        
                        </td>                            
                        </tr>                    
                        })                       
                    }                      
                        <tr className="tt-80-tt80totalpoints" >
                        <td className="tt-80-crownIcon"></td>
                        <td>Total</td>
                        <td id="totalToystt80">{tt80sumOfAmt}</td>
                        <td id="totalPointstt80">{tt80sumOfPoints}pts</td>
                        </tr>
                    {/* </tbody> */}
                </table>
                </div> 
            </div>
        </form>  
    );

               
}

