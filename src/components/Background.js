import React from "react";
import Heading from "./Heading.js";
import CurrencyBox from "./CurrencyBox";
import CurrencySelector from "./CurrencySelector.js";
class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: null,
      value0: null,
      currency1: null,
      currency0: null,
    };
  }

  handleOnchange(e, idx) {
    if (idx == 0) this.setState({ value0: e.target.value });
    if (idx == 1) this.setState({ value1: e.target.value });
  }

  render() {
    return (
      <>
        <Heading />
        <div className="converterWrapper">
          <CurrencyBox
            onChange={(e) => {
              this.handleOnchange(e, 0);
            }}
            value={this.state.value0}
          />
          <CurrencySelector />
          {" = "}
          <CurrencyBox
            onChange={(e) => {
              this.handleOnchange(e, 1);
            }}
            value={this.state.value1}
          />
          <CurrencySelector />
        </div>
      </>
    );
  }
}

export default Background;
