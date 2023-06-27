export default function OrgProfileMedia(){
    return(
    <div className="OrgProfileMedia">
        <form className="Upload">
                <label htmlFor="logoUpload">Upload Logo</label><br />
                <input type="file" id="logoUpload" name="logoUpload" accept="image/*" className="logo-input" required/><br />       

                <label htmlFor="photoUpload">Upload Main Photo</label> <br />
                <input type="file" id="photoUpload" name="photoUpload" accept="image/*" className="photo-input" required/><br />       

                <label htmlFor="videoUpload">Upload Video</label><br />
                <input type="file" id="videoUpload" name="videoUpload" accept="video/*" className="video-input" required/><br />      
        </form>
    </div>
) 
}