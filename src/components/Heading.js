import React from "react"

class Heading extends React.Component {

    render() {
        return(
            <>
                <header className="title">
                    <h1>Currency Converter</h1>
                </header>
                <div class="byline">
                    <h2>This is a web app that helps you convert currencies.</h2>
                </div>
            </>
        )
    }
}

export default Heading
