import React from "react"
import DropDown from "./DropDown.js"
import ResultLabel from "./ResultLabel.js"
import styles from "./Main.module.css"

function convert(props) {
    if (props.curr1 === '' || props.curr2 === '')
        return '';
    return "Convert";
}

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLabelChange = this.handleLabelChange.bind(this);

        this.state = {
            curr1: '',
            curr2: '',
            result: '',
        }
        this.currencies = {
            USD: 'USD',
            INR: 'INR'
        }
        this.conversion_rate = {
            USD: '1',
            INR: '70',
        }
    }

    handleChange() {
        console.log("Hello")
        // this.setState({result: "Hello"});
    }

    handleLabelChange(event, index) {
        const tmp = event.target.value;
        if (index === '1')
            this.setState({curr1: tmp});
        else
            this.setState({curr2: tmp});
    }

    render() {
        return(
            <div className={styles.form}>
                <div className={styles.input}>
                    <label className={styles.label}>Enter your amount here:</label>
                    <input className={styles.input_amt}type="text" />
                </div>
                <br />
                <div className={styles.dropdown}>
                    <DropDown
                        state={this.state}
                        handleChange={this.handleLabelChange}
                        index='1'
                        rates={this.currencies} />
                    <div className={styles.text}>to</div>
                    <DropDown
                        state={this.state}
                        handleChange={this.handleLabelChange}
                        index='2'
                        rates={this.currencies} />
                </div>
                <div className={styles.result}>
                    <ResultLabel
                        props={this.state}
                        handleChange={() => this.handleChange()}
                    />
                </div>
            </div>
        );
    }
}

export default Main
