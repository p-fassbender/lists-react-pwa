import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import portraitTemp from './portrait-temp.png';

const Footer = () => {

    return (
        <div>
            <a href="https://github.com/p-fassbender/lists-react-pwa" target={"_blank"} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                Repo
            </a>
            Meet the Author
            <img
                src={portraitTemp}
                alt="portrait of the author, Preston Fassbender"
            />
            <a href="https://github.com/p-fassbender/" target={"_blank"} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
            </a>
            <a href="https://twitter.com/fassbendev" target={"_blank"} rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
            </a>
        </div>
    )
}

export default Footer;