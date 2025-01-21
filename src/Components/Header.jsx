import LightLogo from "../assets/LightLogo.png"
function Header()
{
    return(
        <section>
            <div className="Image">
                <img src={LightLogo} alt="logo" className="logo"/>
            </div>
            <h1 className="res-logo">Little Lemon</h1>
        </section>
    );
}
export default Header