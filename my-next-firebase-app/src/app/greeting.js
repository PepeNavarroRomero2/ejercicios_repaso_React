/*
Ejercicio 1: Crear un componente Greeting que tome un nombre como prop y
muestre un saludo personalizado. Por ejemplo, "Hello, Juan!".
*/
function Greeting ({name}){
    return(
        <>
            <h1>Hello, {name}</h1>
        </>
    );
}

export default Greeting;