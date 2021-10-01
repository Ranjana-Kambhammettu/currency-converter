import React from "react"
import GitHub from "./images/github.png"
import Haktober from "./images/haktober.png"

class Heading extends React.Component {

    render() {
        return(
            <>
                <header class="title">
                    <h1>Currency Converter</h1>
                </header>
                <div class="byline">
                    <h2>This is a web app that helps you convert currencies.</h2>
                </div>
                <footer>
                    <div class="left">
                         Hacktoberfest 2021
                        <a href="https://hacktoberfest.digitalocean.com" target="_blank" rel="noopener noreferrer">
                        <img class="pic"src={Haktober} alt="Haktoberfest Logo" />
                        </a>
                    </div>

                    <div class="right">
                        <a href="https://github.com/Ranjana-Kambhammettu/currency-converter" target="_blank" rel="noopener noreferrer">
                        <img src={GitHub} alt="GitHub Logo" />
                        </a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Heading
