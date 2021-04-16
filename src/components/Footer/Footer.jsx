import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="main-footer">
                        <h4>
                            <Link to=""><img src="https://i.postimg.cc/Lsph52hd/Copy-of-Facebookwhiteicon.png" alt="facebook logo"></img></Link>
                            <Link to=""><img src="https://i.postimg.cc/Wb0dvdbm/Copy-of-Instawhiteicon.png" alt="instagram logo"></img></Link>
                            <Link to=""><img src="https://i.postimg.cc/tg4JWDdD/Copy-of-twitter-icon-white-png-23.png" alt="twitter logo"></img></Link>
                            <Link to=""><img className="youtubeImg"  src="https://i.postimg.cc/X7YPMCgm/Pngtree-youtube-white-icon-3570413.png" alt="youtube logo"></img></Link>
                        </h4>
                <div className="footerRow">
                    {/* Column1 */}
                    <div>
                        <ul>
                            <Link className="link" to="/blank"><li>Audio en ondertiteling</li></Link>
                            <Link className="link" to="/blank"><li>Mediacenter</li></Link>
                            <Link className="link" to="/blank"><li>Privacy</li></Link>
                            <Link className="link" to="/blank"><li>Contact opnemen</li></Link>
                        </ul>
                        <br/>
                    </div>
                    {/* Column2 */}
                    <div>
                        <ul>
                        <Link className="link" to="/blank"><li>Audiodescriptie</li></Link>
                        <Link className="link" to="/blank"><li>Relaties met investeerders</li></Link>
                        <Link className="link" to="/blank"><li>Wettelijke bepalingen</li></Link>
                        </ul>
                        <br/>
                    </div>
                    {/* Column3 */}
                    <div>
                        <ul>
                        <Link className="link" to="/blank"><li>Helpcentrum</li></Link>
                        <Link className="link" to="/blank"><li>Vacatures</li></Link>
                        <Link className="link" to="/blank"><li>Cookievoorkeuren</li></Link>
                        </ul>
                        <br/>
                    </div>
                   {/* Column4/ */}
                   <div>
                        <ul>
                        <Link className="link" to="/blank"><li>Cadeaubonnen</li></Link>
                        <Link className="link" to="/blank"><li>Gebruiksvoorwaarden</li></Link>
                        <Link className="link" to="/blank"><li>Bedrijfsgegevens </li></Link>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer
