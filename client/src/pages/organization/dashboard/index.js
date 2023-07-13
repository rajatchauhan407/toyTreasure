import GeneralModalWrapper from "../../../components/general-modal-wrapper";
import OrgDashBoard from "../../../components/organization-dashboard";
// import OrgWishlistConfirmModal from "../../../components/org-wishlist-confirmation-modal";
import OrgAddWishlist from "../../../components/org-addwishlist-modal";
// import UserRewardsModal from "../../../components/user-rewards-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrgWishlistConfirmModal from "../../../components/org-wishlist-confirmation-modal";
export default function OrgDashboard(props){
    const navigate = useNavigate();
    const [isShown,setIshown] = useState(false);
    const [isShowConfirmationModal, setIsShowConfirmationModal] = useState(false)
    function handleWishlist(state){
        console.log(state);
        setIshown(state);
    }
    function getAddedToyState(state){
        setIsShowConfirmationModal(state)
    }
    function goToDashBoard(){
        setIsShowConfirmationModal(false);
        navigate('/organization/dashboard')
    }
    return(<>
        
        <OrgDashBoard
            onWishlistClicked = {handleWishlist}
        />
        
        { isShown && <GeneralModalWrapper onCloseModal = {handleWishlist}>
            <OrgAddWishlist
                onClickCancel={handleWishlist}
                onClickCancelButton={handleWishlist}
                onAddedToy = {getAddedToyState}
            />
        </GeneralModalWrapper>}
        {
            isShowConfirmationModal && <GeneralModalWrapper onCloseModal={handleWishlist}>
                <OrgWishlistConfirmModal
                    onReturnToDashboard={goToDashBoard}
                    // onAddNewToy = {addNewToy}
                />
            </GeneralModalWrapper>
        }
        {/* <GeneralModalWrapper> */}
                {/* <OrgWishlistConfirmModal/> */}
                
                {/* <UserRewardsModal/> */}
        {/* </GeneralModalWrapper> */}
    </>)
}
