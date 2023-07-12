import "./index.scss";
import AuthContext from "../../services/auth-context";
import { useContext } from "react";
function OrgHeader() {
  let authCtx = useContext(AuthContext);
    return (
      <header className="orgHeader">
        <div className="orgHeaderProfile">
            <h2 className="orgHeaderProfileName">{authCtx.displayName}</h2>
          <img className="orgHeaderProfilePhoto" src={authCtx.profilePic} alt="Profile of the Organization"/>
        </div>
      </header>
    );
  }
  
  export default OrgHeader;