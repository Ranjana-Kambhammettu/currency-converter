import React from "react";

let options = ["US Dollar","Euro"];

class CurrencySelector extends React.Component {
    
    render() {
        return (
            <>
            <div className="currencySelectorWrapper" >
                <select name="currency" >
                {
                    options.map((val)=>{
                        return( <option value={val}>{val}</option>)
                    })
                }
                   
                    
                </select> 
            </div>
            </>
        )
    }
}

export default CurrencySelector
