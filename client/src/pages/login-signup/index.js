import './index.scss';
import LoginSignupForm from '../../components/loginsignupform';
export default function LoginSignUp() {
    return (
      <div className='loginsignupwrapper'>
        <img
          className='loginsignupimage'
          src='https://picsum.photos/500/1000'
          alt=''
        />
  
        <LoginSignupForm />
      </div>
    );
  }