import './index.scss';
import { useRef } from "react";
import LoginSignupForm from '../../components/loginsignupform';
export default function LoginSignUp() {
  const loginSignUpRef = useRef(null);
    function handleSignUp(){

    }
    return (
      <div className='loginsignupwrapper' ref={loginSignUpRef}>
        <img
          className='loginsignupimage'
          src='https://picsum.photos/500/1000'
          alt=''
        />
        <LoginSignupForm getSignupInfo={handleSignUp}/>
      </div>
    );
  }