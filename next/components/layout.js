import React from "react"
import Nav from "./nav"

const Layout =({children})=>{
    return(
        <div className="container">
            <Nav />
            <main>{children}</main>
            <footer>
                Build by Farida
            </footer>
        </div>
    )
}
export default Layout