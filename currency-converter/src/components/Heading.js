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
                    <h2>This is a web app that helps you convert currencies</h2>
                </div>
                <footer>
                    <div class="left">
                        Hacktoberfest 2021
                        <img src={Haktober} alt="Haktoberfest Logo" />
                    </div>

                    <div class="right">
                        <img src={GitHub} alt="GitHub Logo" />
                    </div>
                </footer>
            </>
        )
    }
}

export default Heading
