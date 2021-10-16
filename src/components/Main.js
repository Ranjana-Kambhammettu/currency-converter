import React from "react"
import DropDown from "./DropDown.js"
import ResultLabel from "./ResultLabel.js"
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
                <div className={styles.input}>
                    <label className={styles.label}>Enter your amount here:</label>
                    <input className={styles.input_amt}type="text" />
                </div>
                <br />
                <div className={styles.dropdown}>
                    <DropDown
                        state={this.state}
                        handleChange={this.handleChange}/>
                    <div className={styles.text}>to</div>
                    <DropDown
                        state={this.state}
                        handleChange={this.handleChange}/>
                </div>
                <div className={styles.result}>
                    <ResultLabel />
                </div>
            </form>
        );
    }
}

export default Main
