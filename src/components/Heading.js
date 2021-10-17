import React from "react"

class Heading extends React.Component {

    render() {
        return(
            <div className="top">
                <header className="title">
                    <h1>Currency Converter</h1>
                </header>
                <div className="byline">
                    <h2>This is a web app that helps you convert currencies</h2>
                </div>
            </div>
        )
    }
}

export default Heading
