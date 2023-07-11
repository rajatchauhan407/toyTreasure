import './index.scss';
export default function OrgProfileMedia({onLogoSelected,onProfileSelected, onVideoSelected}){
    function handleLogoChange(e){
        let file = e.target.files[0];
        if(file){
            onLogoSelected(file);
        }
        console.log(file);
    }   
    function handleProfileChange(e){
        let file = e.target.files[0];
        if(file){
            onProfileSelected(file);
        }
        console.log(file);
    }
    function handleVideoChange(e){
        let file = e.target.files[0];
        if(file){
            onVideoSelected(file);
        }
        console.log(file);
    }
    return(
    <div className="tt-90-OrgProfileMedia">
        <form className="tt-90-upload">
                <label htmlFor="logoUpload">Upload Logo</label>
                <input 
                    type="file" 
                    id="logoUpload" 
                    name="logoUpload" 
                    accept="image/*" 
                    className="logo-input" 
                    onChange={handleLogoChange}
                    required/>       

                <label htmlFor="photoUpload">Upload Main Photo</label> 
                <input 
                    type="file" 
                    id="photoUpload" 
                    name="photoUpload" 
                    accept="image/*" 
                    className="photo-input"
                    onChange={handleProfileChange}
                    required/>
                <label htmlFor="videoUpload">Upload Video</label>
                <input 
                    type="file" 
                    id="videoUpload" 
                    name="videoUpload" 
                    accept="video/*" 
                    className="video-input" 
                    onChange={handleVideoChange}
                    required/>   
        </form>
    </div>
) 
}