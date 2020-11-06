import React from "react"
import styles from "./BasicToggle.module.css"

const BasicToggle = () => {
    const Colors = ["blue", "pink"];
    return (
        <React.Fragment>

        <input type="checkbox" id="toggle" />
        <label for="toggle"/>
        </React.Fragment>
    )
}
export default BasicToggle;