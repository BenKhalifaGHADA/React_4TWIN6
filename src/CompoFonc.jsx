import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import ChildComponent from "./ChildComponent";



function CompoFonc() {
    const [{color, background}, setColor] = useState({color: "red", background: "purple"});
    
    const changeColor = () => {
        setColor({color: "blue", background: "yellow"});
    };

    useEffect(() => {
        console.log('Cette fonction sera exécutée la première fois et à chaque modification de la variable color');
        return () => {
            console.log('Cette partie sera exécutée pour nettoyer et lors de l\'unmounting');
        }
    }, [color]);

    useEffect(() => {
        console.log('Cette fonction sera exécutée une fois seulement');
        return () => {
            console.log('Cette partie sera exécutée seulement lors de l\'unmounting');
        }
    }, []);

    useEffect(() => {
        console.log('Cette fonction sera exécutée à chaque re-render');
    });

    return (
        <ThemeContext.Provider value={{ color, background }}>
            <h1>Exemple d'utilisation des hooks useEffect et useContext</h1>
            <p>Color: {color}</p>
            <p>Background: {background}</p>
            <button onClick={changeColor}>Changer la couleur</button>
            <ChildComponent />
        </ThemeContext.Provider>
    );
}

export default CompoFonc;
