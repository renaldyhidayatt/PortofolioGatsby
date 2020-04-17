import React from "react";
import { Link, Typography } from "@material-ui/core";


const Social = () => {
    return(
        <>
            <div className="center">
                <nav className="socials">
                    <li><Link href="#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                </nav>
            </div>
            <section class="scrool">
                <div className="center">
                    <Typography variant="h6" component="h6">Scroll More</Typography>
                    <i class="far fa-arrow-alt-circle-down"></i>
                </div>
            </section>
        </>
    )
}

export default Social;