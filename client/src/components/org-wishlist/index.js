import "./index.scss";
import { useState,useEffect } from 'react';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';

export default function OrgWishlist(){
    const [orgWishList, setOrgWishList] = useState([]); 
    async function getOrgWishListData()
    {
        const data = await FireBaseFirestoreService.getDocumentsInArray("organization_wishlist");
        let array = data;       
        setOrgWishList(array);       
    }
    useEffect(()=>{
        getOrgWishListData();
    },[]);
    let orgWishlistData = [
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        },
        {
            org_toy_category:"Stuffed Animal",
            org_qty_required:38,
            org_qty_received:45,
            org_toy_pending:8
        }
    ]
    return (<div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>Tag Category</td>
                            <td>Qty Required</td>
                            {/* Yet to decide on data for Qty Received*/}
                            <td>Qty Received</td>
                            {/* <td>Pending</td> */}
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {orgWishList.map((el)=>{
                            return <tr>
                            <td>{el.org_w_toy_name}</td>
                            <td>{el.org_w_toys_required}</td>
                            <td>26</td> 
                            {/* <td>08</td> */}
                            <td><i className="fa-solid fa-trash"></i></td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>);
}