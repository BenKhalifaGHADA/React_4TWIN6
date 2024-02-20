import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ChildComponent() {
    const { color, background } = useContext(ThemeContext);

    return (
        <div style={{ color, background }}>
            <p>Ce composant enfant utilise le context :</p>
            <p>Color: {color}</p>
            <p>Background: {background}</p>
        </div>
    );
}

export default ChildComponent;
