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
            <p>Contador {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Incrementar</button>
            <button onClick={()=>{setCount(count-1)}}>Disminuir</button>
        </>
    );
}

export default Counter;