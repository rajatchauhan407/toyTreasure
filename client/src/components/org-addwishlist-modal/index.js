import "./index.scss";
import { useState,useEffect, useContext } from "react";
import { ref } from "firebase/storage";
import FireBaseFirestoreService from "../../services/Firebasefirestoreservice";
import FirebaseStorageService from "../../services/FirebaseStorageService";
import { MdCancel } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../services/auth-context";
export default function OrgAddWishlist({onClickCancel, onClickCancelButton, onAddedToy}){
    // const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [orgToyCategories, setOrgToyCategories] = useState([]); 
    async function getOrgToyCategories()
    {
        const data = await FireBaseFirestoreService.getDocumentsInArray("organization_profile"); 
        data.forEach((el)=>{
            console.log(el.uid);
            console.log(authCtx.uid);
            if(el.uid === authCtx.uid){
                
                setOrgToyCategories(el.categories); 
                console.log(el.categories);
            }
        }); 
             
    }
    useEffect(()=>{
        getOrgToyCategories();
    },[]);


    let [toyName,setToyName]=useState("");
    let [toyCategory,setToyCategory]=useState("");
    let [toysRequired,setToysRequired]=useState("");
    let [image,setImage]=useState("");

    // orgToyCategories.map((el)=>{       
    //     toyCategoryDefault=el.org_categories[0];        
    //    return toyCategoryDefault;
    // })
    // if(toyCategory==='')
    // {
    //     toyCategory=toyCategoryDefault;
    // }       
    async function saveOrgWishListData(e)
    {
        e.preventDefault();       
        try{
            let toyPicturePath = 'org_logos/'+image.name.split('.')[0];
        let toyRef = ref(FirebaseStorageService.storage,toyPicturePath);
        let toyUrl = await FirebaseStorageService.uploadFileAndGetUrl(image,toyRef);
        const addWishlistFormObject ={
            org_w_toy_name:toyName,
            org_w_toy_category:toyCategory,
            org_w_toys_required:toysRequired,
            org_w_toy_picture:toyUrl,
            org_w_toy_points:50
        }
        console.log(addWishlistFormObject);
        await FireBaseFirestoreService.createDocument("organization_wishlist",addWishlistFormObject);
        onClickCancel(false);
        onAddedToy(true);
    }catch(error){
        console.log(error);
    }
        
    }
    return (
        <div className="modalWishlist">
            <h2>Add a New Toy to Wishlist</h2>
            <MdCancel className='cancelIcon' onClick={()=>{onClickCancelButton(false)}}/>
            <form>
                <label htmlFor="toyName">Toy Name</label><br />
                <input type="text" id="toyName" onChange={(e)=>{setToyName(e.target.value)}} name="toyName" required /><br />

                <label htmlFor="categories~">Select Categories</label><br />
                        <select id="categories" onChange={(e)=>{setToyCategory(e.target.value)}} name="categories" required>
                        {orgToyCategories && orgToyCategories.map((el)=>{                          
                                return <option value={el.category_name}>{el.category_name}</option>
                                                      
                        })}                           
                        </select><br />

                <label htmlFor="qty">Enter Qty of Toys Required</label><br />
                <input type="number" id="qty" onChange={(e)=>{setToysRequired(e.target.value)}} name="qty" required /><br />

                <label htmlFor="toyUpload">Upload Image</label><br />
                <input type="file" id="toyUpload" onChange={(e)=>{setImage(e.target.files[0])}} name="toyUpload" accept="image/*" className="toy-input" required/><br />       
            </form>
            <div className="btn">
                <button className="cancel" onClick={()=>{console.log("Hey");onClickCancel(false)}}>Cancel</button>
                <button className="save" onClick={saveOrgWishListData}>Add to Wishlist</button>
            </div>
        </div>
        
    );
}