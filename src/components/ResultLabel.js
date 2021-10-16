import React from "react"
import styles from "./ResultLabel.module.css"

class ResultLabel extends React.Component {
    render() {
        return(
            <div className={styles.result}>
                <button className={styles.convert}>Convert</button>
                <label className={styles.label}>
                    Amount:
                </label>
            </div>
        );
    }
}

export default ResultLabel
