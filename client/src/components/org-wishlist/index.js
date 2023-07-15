import "./index.scss";
import { useState,useEffect, useContext } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import AuthContext from "../../services/auth-context";
export default function OrgWishlist(){
    const authCtx = useContext(AuthContext);
    const [orgWishList, setOrgWishList] = useState([]); 
    const [toysReceived] = useState(0);
    useEffect(()=>{        
        async function getOrgWishListData()
        {    const usersCollectionRef = collection(database, "organization_wishlist");
             const q = query(usersCollectionRef, where("profile_id", ">", authCtx.uid));
             const data = await getDocs(q);
             console.log(data.docs)
        let array = data.docs.map((el)=>{return el.data()});
        console.log(array)
            //  let array = data;       
            setOrgWishList(array);       
        }
        getOrgWishListData();
    },[]);
    // let orgWishlistData = [
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     },
    //     {
    //         org_toy_category:"Stuffed Animal",
    //         org_qty_required:38,
    //         org_qty_received:45,
    //         org_toy_pending:8
    //     }
    // ]
    async function deleteToyFromWishlist(id){
        try{
            await FireBaseFirestoreService.deleteDocumentById('organization_wishlist',id);
            console.log("Deleted From WishList");

        }catch(error){
            console.log(error);
        }
       
    }
    return (<div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>Category</td>
                            <td>Required</td>
                            {/* Yet to decide on data for Qty Received*/}
                            <td>Received</td>
                            {/* <td>Pending</td> */}
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {orgWishList.map((el)=>{
                            return <tr>
                            <td>{el.org_w_toy_name}</td>
                            <td>{el.org_w_toys_required}</td>
                            <td>{toysReceived}</td> 
                            {/* <td>08</td> */}
                            <td onClick={()=>{deleteToyFromWishlist(el.id)}}><i className="fa-solid fa-trash"></i></td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>);
}