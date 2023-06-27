import './index.scss';
import LoginForm from '../../components/login';
import LoginSidebar from '../../components/login-sidebar'
export default function Login(){
    
return (
    <>
    <div className='loginWrapper'>
    <LoginSidebar/>
        <div className='loginFormWrapper'>
        <LoginForm/>
        </div>
    </div>
   </>
   
    
)
}