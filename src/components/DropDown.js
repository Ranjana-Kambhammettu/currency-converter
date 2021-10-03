import React from "react"
import styles from "./DropDown.module.css"

class DropDown extends React.Component {
    render() {
        return(
            <select
                value={this.props.value}
                className={styles.select}
                onChange={(e) => {
                    this.props.handleChange(e)
                }}
            >
                <option value="INR">Indian Rupees</option>
                <option value="dollar">USD</option>
            </select>
        );
    }
}

export default DropDown
