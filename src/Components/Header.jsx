import { NavLink } from "react-router-dom"

export default function Header() {

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Viaggi",
            path: "/viaggi"
        }
    ]

    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <NavLink className="nav-link" to="/viaggi">Prototipo</NavLink>
                       
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {links.map((link, index)=>{
                                    return (
                                        <>
                                        <NavLink className="nav-link" key={index} to={link.path}>{link.name}</NavLink> 
                                        </>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}