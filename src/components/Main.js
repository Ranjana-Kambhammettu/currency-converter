import React from "react"
import DropDown from "./DropDown.js"
import styles from "./Main.module.css"

class Main extends React.Component {
    state = {
        value: "Choose currency denomination",
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return(
            <form className={styles.form}>
                <label>Enter your amount here:</label>
                <input type="text" />
                <br />
                <DropDown
                    state={this.state}
                    handleChange={this.handleChange}/>
                to
                <DropDown
                    state={this.state}
                    handleChange={this.handleChange}/>
            </form>
        );
    }
}

export default Main
