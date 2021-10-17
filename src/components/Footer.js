import React from "react"
import GitHub from "./images/github.png"
import Haktober from "./images/haktober.png"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="left">
                     <span id="hackFooter">Hacktoberfest 2021</span>
                    <a href="https://hacktoberfest.digitalocean.com" target="_blank" rel="noopener noreferrer">
                    <img className="pic"src={Haktober} alt="Haktoberfest Logo" />
                    </a>
                </div>

                <div className="right">
                    <a href="https://github.com/Ranjana-Kambhammettu/currency-converter" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub Logo" />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer
