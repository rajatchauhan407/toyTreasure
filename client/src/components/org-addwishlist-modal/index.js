import "./index.scss";
import { useState,useEffect } from "react";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";

export default function OrgAddWishlist(){
    let toyCategoryDefault="";
    const [orgToyCategories, setOrgToyCategories] = useState([]); 
    async function getOrgToyCategories()
    {
        const data = await FireBaseFirestoreService.getDocumentsInArray("organization_categories");
        let array = data;       
        setOrgToyCategories(array);        
    }
    useEffect(()=>{
        getOrgToyCategories();
    },[]);

  

    let [toyName,setToyName]=useState("");
    let [toyCategory,setToyCategory]=useState("");
    let [toysRequired,setToysRequired]=useState("");
    let [imageUrl,setImageUrl]=useState("");

    orgToyCategories.map((el)=>{       
        toyCategoryDefault=el.org_categories[0];        
       return toyCategoryDefault;
    })
    if(toyCategory==='')
    {
        toyCategory=toyCategoryDefault;
    }       
    async function saveOrgWishListData(e)
    {
        e.preventDefault();       
        const addWishlistFormObject ={
            org_w_toy_name:toyName,
            org_w_toy_category:toyCategory,
            org_w_toys_required:toysRequired,
            org_w_toy_picture:imageUrl
        }
        console.log(addWishlistFormObject);
        let refId = await FireBaseFirestoreService.createDocument("organization_wishlist",addWishlistFormObject);
        console.log("ref-id  "+refId);
    }
    return (
        <div className="modalWishlist">
            <h2>Add a New Toy to Wishlist</h2>
            <form>
                <label htmlFor="toyName">Toy Name</label><br />
                <input type="text" id="toyName" onChange={(e)=>{setToyName(e.target.value)}} name="toyName" required /><br />

                <label htmlFor="categories~">Select Categories</label><br />
                        <select id="categories" onChange={(e)=>{setToyCategory(e.target.value)}} name="categories" required>
                        {orgToyCategories.map((el)=>{
                            toyCategoryDefault=el.org_categories[0];
                           return el.org_categories.map((item)=>
                            {                              
                                return <option value={item}>{item}</option>
                            })                             
                        })}                           
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