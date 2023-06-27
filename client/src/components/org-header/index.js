import "./index.scss";


function OrgHeader() {
    return (
      <header className="orgHeader">
        <div className="orgHeaderProfile">
            <h2 className="orgHeaderProfileName">Account User</h2>
          <img className="orgHeaderProfilePhoto" src="https://picsum.photos/200" alt="Profile of the Organization"/>
        </div>
      </header>
    );
  }
  
  export default OrgHeader;