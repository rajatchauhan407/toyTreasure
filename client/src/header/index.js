import Button from "../components/button";
import NavMenu from "./nav";

export default function Header(){
    return(
        <div>
        <NavMenu/>
            <Button>
                Logout
            </Button>
        </div>
    )
}