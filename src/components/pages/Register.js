import React, { useState } from "react";

const Register = () => {
    const [showField, setShowField] = useState(false);

    return (
        <div id="Register">
            {
                showField?
                    <div id="show">
                        <h1>Thanks for Applying</h1>
                    </div>
                :
                    <div id="register-wraper">

                        <h1>Fill out your details</h1>
                        <label>
                            First Name
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Last Name
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Email
                            <input className="input-field" type="email" />
                        </label>
                        <label>
                            Phone Number
                            <input className="input-field" type="text" />
                        </label>
                        <label>
                            Position
                            <input className="input-field" type="text" />
                        </label>

                        <input className="submit-button" type="submit" value="Apply" onClick={ () => setShowField(!showField) } />
                    </div>
            }
            
        </div>
    )
}

export default Register;
