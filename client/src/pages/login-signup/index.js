import './index.scss';
import {useState } from "react";
import LoginSignupForm from '../../components/loginsignupform';
import CreateAccountDonor from '../../components/donor-create-account';
import CreateAccountOrg from '../../components/org-create-account';
export default function LoginSignUp() {
 
  const [user,setUser] = useState(null);
    function handleSignUp(selectedUser){
        setUser(selectedUser); 
    }
    return (
      <div className='loginsignupwrapper'>
        <img
          className='loginsignupimage'
          src='https://picsum.photos/500/1000'
          alt=''
        />
        {
          !user?<LoginSignupForm getSignupInfo={handleSignUp}/>:user==="donor"?<CreateAccountDonor/>:user==="org"?<CreateAccountOrg/>:"No Data"
        }
      </div>
    );
  }