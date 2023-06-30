import "./index.scss";

export default function OrgAddWishlist(){
    return (
        <div className="modalWishlist">
            <h2>Add a New Toy to Wishlist</h2>
            <form>
                <label htmlFor="toyName">Toy Name</label><br />
                <input type="text" id="toyName" name="toyName" required /><br />

                <label htmlFor="categories">Select Categories</label><br />
                        <select id="categories" name="categories" required>
                            <option value="cg1">Category 1</option>
                            <option value="cg2">Category 2</option>
                </select><br />

                <label htmlFor="qty">Enter Qty of Toys Required</label><br />
                <input type="number" id="qty" name="qty" required /><br />

                <label htmlFor="toyUpload">Upload Image</label><br />
                <input type="file" id="toyUpload" name="toyUpload" accept="image/*" className="toy-input" required/><br />       
            </form>
            <div className="btn">
                <button className="cancel">Cancel</button>
                <button className="save">Add to Wishlist</button>
            </div>
        </div>
        
    );
}