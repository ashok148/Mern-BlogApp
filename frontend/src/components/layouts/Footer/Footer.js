import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-services-png-logo-3.png" alt="playstore" width="40px" height="40px" />
                <img src={"https://p.kindpng.com/picc/s/162-1628584_apple-store-button-just-do-it-nike-hd.png"} alt="Appstore" width="40px" height="40px"/>
            </div>

            <div className="midFooter">
                <h1>BlogApp</h1>
                <p>Get Quality Content</p>

                <p>Copyrights 2022 &copy; BlogApp</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a
                    href="https://www.linkedin.com/in/ashok-kumar-b58606195/"
                    target="blank"
                >
                    <LinkedInIcon className="LinkedInSvgIcon" />
                </a>

                <a href="https://www.instagram.com/ashok_kumar70/" target="blank">
                    <InstagramIcon className="instagramSvgIcon" />
                </a>
                <a href="https://www.facebook.com/ashokkumar.kumar.752861/" target="blank">
                    <FacebookIcon className="FacebookSvgIcon" />
                </a>
            </div>

        </div>
    );
};

export default Footer;