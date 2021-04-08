import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="main-footer">
                        <h4>
                            <Link to=""><img src="https://i.postimg.cc/Lsph52hd/Copy-of-Facebookwhiteicon.png"></img></Link>
                            <Link to=""><img src="https://i.postimg.cc/Wb0dvdbm/Copy-of-Instawhiteicon.png"></img></Link>
                            <Link to=""><img src="https://i.postimg.cc/tg4JWDdD/Copy-of-twitter-icon-white-png-23.png"></img></Link>
                            <Link to=""><img className="youtubeImg"  src="https://i.postimg.cc/X7YPMCgm/Pngtree-youtube-white-icon-3570413.png"></img></Link>
                        </h4>
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <Link className="link" to=""><li>Audio en ondertiteling</li></Link>
                            <Link className="link" to=""><li>Mediacenter</li></Link>
                            <Link className="link" to=""><li>Privacy</li></Link>
                            <Link className="link" to=""><li>Contact opnemen</li></Link>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col1">
                        <ul className="list-unstyled">
                        <Link className="link" to=""><li>Audiodescriptie</li></Link>
                        <Link className="link" to=""><li>Relaties met investeerders</li></Link>
                        <Link className="link" to=""><li>Wettelijke bepalingen</li></Link>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col1">
                        <ul className="list-unstyled">
                        <Link className="link" to=""><li>Helpcentrum</li></Link>
                        <Link className="link" to=""><li>Vacatures</li></Link>
                        <Link className="link" to=""><li>Cookievoorkeuren</li></Link>
                        </ul>
                    </div>
                   {/* Column4 */}
                   <div className="col1">
                        <ul className="list-unstyled">
                        <Link className="link" to=""><li>Cadeaubonnen</li></Link>
                        <Link className="link" to=""><li>Gebruiksvoorwaarden</li></Link>
                        <Link className="link" to=""><li>Bedrijfsgegevens </li></Link>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer
