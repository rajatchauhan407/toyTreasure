import "./index.scss";
import { useState,useEffect, useCallback } from "react";

export default function OrgAddWishlist(){

    const [toyName,setToyName]=useState("");
    const [toyCategory,setToyCategory]=useState("");
    const [toysRequired,setToysRequired]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    function saveOrgWishListData()
    {
        console.log("clicked")
        const addWishlistFormObject ={
            org_w_toy_name:toyName,
            org_w_toy_category:toyCategory,
            org_w_toys_required:toysRequired,
            org_w_toy_picture:imageUrl
        }
        console.log(addWishlistFormObject);
    }
    return (
        <div className="modalWishlist">
            <h2>Add a New Toy to Wishlist</h2>
            <form>
                <label htmlFor="toyName">Toy Name</label><br />
                <input type="text" id="toyName" onChange={(e)=>{setToyName(e.target.value)}} name="toyName" required /><br />

                <label htmlFor="categories">Select Categories</label><br />
                        <select id="categories" onChange={(e)=>{setToyCategory(e.target.value)}} name="categories" required>
                            <option value="cg1">Category 1</option>
                            <option value="cg2">Category 2</option>
                </select><br />

                <label htmlFor="qty">Enter Qty of Toys Required</label><br />
                <input type="number" id="qty" onChange={(e)=>{setToysRequired(e.target.value)}} name="qty" required /><br />

                <label htmlFor="toyUpload">Upload Image</label><br />
                <input type="file" id="toyUpload" onChange={(e)=>{setImageUrl(e.target.value)}} name="toyUpload" accept="image/*" className="toy-input" required/><br />       
            </form>
            <div className="btn">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={saveOrgWishListData}>Add to Wishlist</button>
            </div>
        </div>
        
    );
}