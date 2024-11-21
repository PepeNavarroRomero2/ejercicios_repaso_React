import React, { useState } from 'react';

export default function LoginControl() {
    const iniciar = "Iniciar Sesion";
    const cerrar = "Cerrar Sesion";
    const [state, setState] = useState(iniciar);

    return (
        <>
            <button onClick={() => {
                if(state===iniciar){
                    setState(cerrar)
                }else{
                    setState(iniciar)
                }
            }

            }>{state}</button>
        </>
    );
}