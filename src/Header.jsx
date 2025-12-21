
export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><img src="src/assets/logo-white.svg" alt="Daniel Monteiro Logo"/></a>
            </div>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="">Home</a>
                    <a href="">About Me</a>
                    <a href="">Services</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>
            </nav>
        </div>
    );
}
