import React from "react"
import styles from "./ResultLabel.module.css"

class ResultLabel extends React.Component {
    render() {
        return(
            <div className={styles.result}>
                <button
                    className={styles.convert}
                    onClick={this.handleChange}
                >
                    Convert
                </button>
                <label className={styles.label}>
                    Amount: {this.props.result}
                </label>
            </div>
        );
    }
}

export default ResultLabel
