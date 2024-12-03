

import { useState } from "react";
import './card.css';

export default function Card({ personaje }) {
    let [ocultar, setOcultar] = useState(true); // Estado para controlar la visibilidad

    return (
        <div className='' id="tarjeta">
            <div id="contenido">
                <img src={personaje.image} alt="personaje" />
                <h2 id="titulo">{personaje.name}</h2>
                <button id="boton" onClick={() => setOcultar(!ocultar)}>Know More</button>  {/* Alternamos el estado de 'ocultar' */}
            </div>

            { !ocultar && <div></div> }
        </div>
    );
}