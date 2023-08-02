import './index.scss';
import {useState } from "react";
import techTribeLogo from './techTribeLogo.svg';
// import posterImage from './posterImage.png';
import LoginSignupForm from '../../components/loginsignupform';
import CreateAccountDonor from '../../components/donor-create-account';
import CreateAccountOrg from '../../components/org-create-account';
export default function LoginSignUp() {
 
  const [user,setUser] = useState(null);
  const [classUsed, setClassUsed] = useState("loginsignupimage");
  const [classUsedforbgc, setClassUsedforbgc] = useState("loginSignupformInnerWrapper");
  const [showTechTribe, setShowTechTribe]=useState(true)
    function handleSignUp(selectedUser){
        setUser(selectedUser); 
        if(selectedUser === "donor"){
          setClassUsed('loginsignupimageDonor');
          setClassUsedforbgc('loginSignupformInnerWrapperCreateAccount');
          setShowTechTribe(false);
        }
        else if(selectedUser === "org"){
          setClassUsed('loginsignupimageOrg');
          setClassUsedforbgc('loginSignupformInnerWrapperCreateAccount');
          setShowTechTribe(false);
        }
        else{
          setClassUsed('loginsignupimage');
          setClassUsed('loginSignupformInnerWrapper');
          setShowTechTribe(true);
        }
    }
    return (
      <div className='loginsignupwrapper'>
        
        <div className={classUsed}>
{/* <p>{classUsed}</p> */}
              {/* <img
             className='loginsignupimage'
             src={posterImage}
             alt='a happy kid'
              /> */}

        </div>
<div className={showTechTribe?'divToAddTechTribeLogo ':'logoBackground divToAddTechTribeLogo'}>
        <div className={classUsedforbgc}>
        {
          !user?<LoginSignupForm getSignupInfo={handleSignUp}/>:user==="donor"?<CreateAccountDonor/>:user==="org"?<CreateAccountOrg/>:"No Data"
        }
        </div>
        {showTechTribe && <div className="techTribeLogo">
<p>Powered by</p> <img src={techTribeLogo} alt="Tech Tribe"/>
</div>}
</div>
      </div>
    );
  }