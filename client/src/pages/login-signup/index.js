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

    function handleSignUp(selectedUser){
        setUser(selectedUser); 
        if(selectedUser === "donor"){
          setClassUsed('loginsignupimageDonor');
          setClassUsedforbgc('loginSignupformInnerWrapperCreateAccount');
        }
        else if(selectedUser === "org"){
          setClassUsed('loginsignupimageOrg');
          setClassUsedforbgc('loginSignupformInnerWrapperCreateAccount');
        }
        else{
          setClassUsed('loginsignupimage');
          setClassUsed('loginSignupformInnerWrapper');
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
<div className='divToAddTechTribeLogo'>
        <div className={classUsedforbgc}>
        {
          !user?<LoginSignupForm getSignupInfo={handleSignUp}/>:user==="donor"?<CreateAccountDonor/>:user==="org"?<CreateAccountOrg/>:"No Data"
        }
        </div>
        <div className="techTribeLogo">
<p>Powered by</p> <img src={techTribeLogo} alt="Tech Tribe"/>
</div>
</div>
      </div>
    );
  }