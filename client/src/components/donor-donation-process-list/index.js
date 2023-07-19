import "./index.scss";
import { Link } from "react-router-dom";
import crown from "./crown.svg";
import React, { useState,useContext, useEffect } from 'react';
import AuthContext from "../../services/auth-context";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
export default function DonorDonationProcessList(props)
{    
    let authCtx = useContext(AuthContext);
    const [categories, setCategories] = useState(authCtx.userCartData.categories);
    const [wishlist, setWishlist] = useState(authCtx.userCartData.wishlist);
    const [totalPoints, setTotalPoints] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [tt80sumOfPoints, setTT80SumOfPoints] = useState(0);
    console.log(wishlist)
    let tt80data=0;  
    let tt80totalpoints=0;
    let tt80pId="";
    let tt80pId2="";   
    let tt80sumOfAmt=0;
    
   function calucateQuantity(wishlist,category){
        let count = 0;
        wishlist.forEach((el)=>{
            count += el.quantity; 
        });
        category.forEach((el)=>{
            count += el.quantity
        });
        setTotalQuantity(count);
        authCtx.setToysQuantity(count);
   }
   useEffect(()=>{
    calucateQuantity(wishlist,categories);
    calculatePoints(wishlist,categories);
   },[])
   
   async function calculatePoints(wishlist, categories){
    let totalPoints = 0;   
    wishlist.forEach((el)=>{
        totalPoints+= +el.org_w_toy_points * el.quantity;
    });
    categories.forEach((el)=>{
        totalPoints += +el.category_points * el.quantity;
    });
    setTotalPoints(totalPoints);
    try{
        await FireBaseFirestoreService.updateDocumentById('user',authCtx.uid,{user_points:totalPoints});
    }catch(error){
        console.log(error);
    }
    // authCtx.setUserPoints(totalPoints);
   }
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
    // const tt80donationList = [
    //     {fromWishlist:"y",imageUrl:"https://i5.walmartimages.com/asr/5d5541cd-d9cc-4b47-b7de-ebc107b74d82_1.9f14f307142cfd730852e875760b90bc.jpeg", name:"Teddy Bear", donateTo:"Children Hospital", amount:1,points:50},
    //     {fromWishlist:"n",imageUrl:"https://i5.walmartimages.com/asr/c7ac4a19-da16-4974-93a6-68ae43b358cd.7255957a3ac34d02b9cc9719ddbf361d.jpeg", name:"Stuffed Animals", donateTo:"Children Hospital", amount:1,points:50},
    //     {fromWishlist:"n",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81R3A90l4iS._SL1500_.jpg", name:"Construction Toys", donateTo:"Children Hospital", amount:1,points:25}
    // ]  
    
    return( 
        <form className="tt-80-donationProcessListForm"> 
          <h1>Donation Details</h1>     
            <div className="tt-80-donationProcessListWrapper">                            
                    <div className="tt-80-toy-list"> 
                        <div className="tt-80-toy-list-header">
                            <h3>Toy List</h3>   
                            <h4><Link onClick={refresh}>Reset</Link></h4>                          
                        </div>                                      
                    <table id="tt-80-table">
                    {/* <tbody> */}
                    {              
                        categories.map((el,index)=>{                
                        tt80sumOfAmt=tt80sumOfAmt+el.amount;
                        {/* setTT80SumOfPoints(tt80sumOfPoints+el.category_points);  */}
                        {/* tt80sumOfPoints = tt80sumOfPoints + */}
                        tt80pId=`tt-80-amount${index}`;                             
                        tt80pId2=`tt-80-points${index}`;                              
                      
                        return <tr className={index} id={el.category_name}>    
                        <td>
                            <div className="tt-80-imgandquantity">
                                <img src={el.category_picture} alt={el.category_name}></img>                               
                                {/* <p className="tt-80-amount" id={tt80pId}>{el.quantity}</p> */}
                            </div>
                        </td>     
                       

                        <td>
                            <div class="tt-80-nameandwishlist">  
                                <div>                        
                                    <p>{el.category_name}</p>
                                </div> 
                                {/* {el.donateTo} */}
                            </div>
                        </td>                      
                        <td>
                            <div className="tt-80-amount-change">                              
                                <button onClick={(e) => addRemove(index,e,"remove",el.category_points)}>-</button>
                                <input type="text" id={index} value={el.quantity} ></input>                                                          
                                <button onClick={(e) => addRemove(index,e,"add",el.category_points)}>+</button>                                
                            </div>
                        </td>
                        <td>
                            <div className="tt-80-pointsandclose">
                            <p className="tt-80-points" id={tt80pId2}>{el.category_points * el.quantity}</p><p>pts</p>                              
                                <Link onClick={(e) => removeRow(el.category_name,index,e)}> <i className="fa fa-times" aria-hidden="true"></i></Link>                               
                            </div>                        
                        </td>                            
                        </tr>                    
                        })                       
                    } 
                    {              
                        wishlist.map((el,index)=>{                
                        tt80sumOfAmt=tt80sumOfAmt+el.amount;
                        {/* setTT80SumOfPoints(tt80sumOfPoints+el.org_w_toy_points);  */}
                        tt80pId=`tt-80-amount${index}`;                             
                        tt80pId2=`tt-80-points${index}`;                              
                        
                            tt80wishListIcon=<img className="donor-donation-processlist-crownIcon" src={crown} alt={"crown"}/> ;                   
                        
              
                        return <tr className={index} id={el.name}>    
                        <td>
                            <div className="tt-80-imgandquantity">
                                <img src={el.org_w_toy_picture} alt={el.org_w_toy_name}></img>                               
                                {/* <p className="tt-80-amount" id={tt80pId}>{el.quantity}</p> */}
                            </div>
                        </td>     
                       

                        <td>
                            <div class="tt-80-nameandwishlist">  
                                <div className="tt-80-wishlisticon">                        
                                    {el.org_w_toy_name}  <div className="crownIcon-tt-80">{tt80wishListIcon}</div>
                                </div> 
                                {/* {el.donateTo} */}
                            </div>
                        </td>                      
                        <td>
                            <div className="tt-80-amount-change">                              
                                <button className="tt-80-removebtn" onClick={(e) => addRemove(index,e,"remove",el.org_w_toy_points)}>-</button>
                                <input type="text" id={index} value={el.quantity} disabled></input>                                                          
                                <button className="tt-80-addbtn" onClick={(e) => addRemove(index,e,"add",el.org_w_toy_points)}>+</button>                                
                            </div>
                        </td>
                        <td>
                            <div className="tt-80-pointsandclose">
                            <p className="tt-80-points" id={tt80pId2}>{el.org_w_toy_points * el.quantity}</p><p>pts</p>                              
                                <Link onClick={(e) => removeRow(el.org_w_toy_name,index,e)}> <i className="fa fa-times" aria-hidden="true"></i></Link>                               
                            </div>                        
                        </td>                            
                        </tr>                    
                        })                       
                    }                      
                        <tr className="tt-80-tt80totalpoints" >
                        <td className="tt-80-crownIcon"></td>
                        <td>Total</td>
                        <td id="totalToystt80">{totalQuantity}</td>
                        <td id="totalPointstt80">{totalPoints}pts</td>
                        </tr>
                    {/* </tbody> */}
                </table>
                </div> 
            </div>
        </form>  
    );

               
}

