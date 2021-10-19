import React from "react"
import styles from "./DropDown.module.css"

class DropDown extends React.Component {
    render() {
        const index = this.props.index;
        return (
            <select
                value = { this.props.value }
                className = { styles.select }
                onChange = {
                    (e) => {
                        this.props.handleChange(e, index)
                    }
                }

            >
                <option value="">Please select a currency</option>
                <option value={this.props.rates.USD}>USD</option>
                <option value={this.props.rates.INR}>INR</option>
            </select>
            // option value={this.props.curr2} ></option>
        );
    }
}

export default DropDown
