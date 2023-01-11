import { useState } from "react";

export const ViewToggle = ({label, toggled, onClick}) => {
    // set the state using a hook: 
    const [isToggled, toggle] = useState(toggled);

    // Function to run when clicked

    const toggleView = () => {
        toggle(!isToggled)
        onClick(!isToggled)
        console.log(togggled);
    }

    return(
        <label>
            <input type={"checkbox"} defaultChecked={isToggled} onClick={toggleView}/>
            <span />
            {label}
        </label>
    )
}