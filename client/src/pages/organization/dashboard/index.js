import GeneralModalWrapper from "../../../components/general-modal-wrapper";
import OrgDashBoard from "../../../components/organization-dashboard";
// import OrgWishlistConfirmModal from "../../../components/org-wishlist-confirmation-modal";
import OrgAddWishlist from "../../../components/org-addwishlist-modal";
// import UserRewardsModal from "../../../components/user-rewards-modal";
import { useState } from "react";
export default function OrgDashboard(props){
    const [isShown,setIshown] = useState(false);
    function handleWishlist(state){
        setIshown(state);
    }
    return(<>
        
        <OrgDashBoard
            onWishlistClicked = {handleWishlist}
        />
        
        { isShown && <GeneralModalWrapper onCloseModal = {handleWishlist}>
            <OrgAddWishlist/>
        </GeneralModalWrapper>}
        {/* <GeneralModalWrapper> */}
                {/* <OrgWishlistConfirmModal/> */}
                
                {/* <UserRewardsModal/> */}
        {/* </GeneralModalWrapper> */}
    </>)
}
