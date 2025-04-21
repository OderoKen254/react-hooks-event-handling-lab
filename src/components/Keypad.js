// Code Keypad Component Here
import React, { useState } from "react";


function Keypad (){
    const [password, setPassword] = useState("");
    const handleChange = () => {

        console.log("Entering password...");
    };

    return (
        <div>
            <input
                type="password" // Correct type for password input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value); // Update state with input value
                  handleChange(); // Trigger the event handler
                }}
            />
        </div>
    )
}

export default Keypad;