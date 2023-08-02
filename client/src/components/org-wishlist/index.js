import "./index.scss";
import { useState,useEffect, useContext } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import AuthContext from "../../services/auth-context";
// import LoaderRocket from "../loader";
// import Loader from '../../sass/images/block-loop.svg'; 
// import GeneralModalWrapper from "../general-modal-wrapper";
// import LoaderBox from "../loaders_all/LoaderBox";
import LoaderToysTreasure from "../loader";
// import LoaderRocket from "../loader";
export default function OrgWishlist(){
    const authCtx = useContext(AuthContext);
    const [orgWishList, setOrgWishList] = useState([]); 
    const [toysReceived] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    async function getOrgWishListData()
        {    setIsLoad(true);
            const profiles = await FireBaseFirestoreService.getDocumentsInArray("organization_profile");
            if(profiles.length>0){
            const orgId = profiles.find((profile) => profile.uid === authCtx.uid).id;
            const usersCollectionRef = collection(database, "organization_wishlist");
             const q = query(usersCollectionRef, where("profile_id", "==", orgId));
             
             const unsubscribe = onSnapshot(q, async (snapshot) => {
                const updatedData = await snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                setOrgWishList(updatedData);
                setIsLoad(false);
              });
             
              return () => unsubscribe(); }      
            }
    useEffect(()=>{        
            getOrgWishListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            console.log(id)
            await FireBaseFirestoreService.deleteDocumentById('organization_wishlist',id);
            console.log("Deleted From WishList");
            getOrgWishListData();

        }catch(error){
            console.log(error);
        }
       
    }
    return isLoad?<div className="loaderContainer"><LoaderToysTreasure/></div>:(<div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>Toy Name</td>
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
                
            </div>)
            ;
}
