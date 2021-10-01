import React from "react";


class CurrencyBox extends React.Component {
    render() {
        return (
            <>
            <input type="number" placeholder="type..." value={this.props.value} onChange={this.props.onChange}></input>
            </>
        )
    }
}

export default CurrencyBox
