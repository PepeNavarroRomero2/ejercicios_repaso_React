import { useState } from "react";

export default function Boton() {
    const [interruptor, setInterruptor] = useState(false);

    const toggleSwitch = () => {
        setInterruptor((prevState) => !prevState);
    };

    return (
        <>
            <button onClick={toggleSwitch}>
                {interruptor ? "Verdadero" : "Falso"}
            </button>
        </>
    );
}
