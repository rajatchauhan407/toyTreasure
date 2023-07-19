import './index.scss';
import {useState } from "react";
import posterImage from './posterImage.png';
import LoginSignupForm from '../../components/loginsignupform';
import CreateAccountDonor from '../../components/donor-create-account';
import CreateAccountOrg from '../../components/org-create-account';
export default function LoginSignUp() {
 
  const [user,setUser] = useState(null);
  const [classUsed, setClassUsed] = useState("loginsignupimage");

    function handleSignUp(selectedUser){
        setUser(selectedUser); 
        if(selectedUser === "donor"){
          setClassUsed('loginsignupimageDonor');
        }
        else if(selectedUser === "org"){
          setClassUsed('loginsignupimageOrg');
        }
        else{
          setClassUsed('loginsignupimage');
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

        <div className='loginSignupformInnerWrapper'>
        {
          !user?<LoginSignupForm getSignupInfo={handleSignUp}/>:user==="donor"?<CreateAccountDonor/>:user==="org"?<CreateAccountOrg/>:"No Data"
        }
        </div>
      </div>
    );
  }