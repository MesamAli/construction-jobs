import React, { useState } from "react";

const Contract = () => {
    const [showField, setShowField] = useState(false);

    return (
        <div id="Contract">
            {
                showField?
                    <div id="show">
                        <h1>Submited.</h1>
                    </div>
                :
                    <div id="contract-wraper">

                        <h1>Contract</h1>
                        <label>
                            Work Scope
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Permit
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Fees
                            <input className="input-field" type="email" />
                        </label>
                        <label>
                            Materials
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Termination
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Signature
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Date of contract
                            <input className="input-field" type="date" />
                        </label>
                        <div className="terms">
                            <input type="checkbox" />
                            <h4>Terms and Conditions</h4>
                        </div>

                        <div className="button-wraper">
                            <input className="submit-button" type="submit" value="Submit" onClick={ () => setShowField(!showField) } />
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default Contract;
