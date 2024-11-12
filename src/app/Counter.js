/*
Ejercicio 3: Crear un componente Counter con un botón para incrementar un
contador cada vez que se haga clic.
*/
"use client"
import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>Pulsado: {count}</button>
        </>
    );
}

export default Counter;