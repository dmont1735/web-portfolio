import DMlogoWhite from "/src/assets/logos/DM/logo-white.svg";
import DMlogoDark from "/src/assets/logos/DM/logo-dark.svg";
import darkModeLogo from "/src/assets/logos/dark-mode/dark-mode.svg";
import lightModeLogo from "/src/assets/logos/dark-mode/light-mode.svg";


export default function Header({isDarkMode, onDarkMode}){
    function handleChangeDarkMode(){
        onDarkMode();
    }
    const dmLogo = isDarkMode? DMlogoDark : DMlogoWhite;
    const modeLogo = isDarkMode?  lightModeLogo : darkModeLogo;

    return (
        <div className="header">
            <div className="logo">
                <a href="https://www.danielmonteiro.dev"><img src={dmLogo} alt="Daniel Monteiro Logo"/></a>
            </div>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/">About Me</a>
                    <a href="/">Services</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                </div>
            </nav>
            <button className="dark-theme-button" onClick={handleChangeDarkMode}>{isDarkMode? "Light Mode":"Dark Mode"}<img src={modeLogo}></img></button>
        </div>
    );
}
