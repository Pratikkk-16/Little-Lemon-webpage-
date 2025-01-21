import LightLogo from "../assets/LightLogo.png"
import Nav from "./Nav";
function Header()
{
    return(
        <section className="header">
            <div className="image">
                <img src={LightLogo} alt="logo" className="logo" width="50px"/>
            </div>
            <h1 className="res-logo">Little Lemon</h1>
            <Nav/>
        </section>
    );
}
export default Header