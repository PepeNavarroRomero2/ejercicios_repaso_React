/*
Ejercicio 6: Crear un componente Parent que pase información a un componente
Child usando props. En el Child, muestra esa información y añade un botón que
envíe un mensaje de vuelta al Parent (usando una función prop).
*/
import Child from "./Child";
function Parent(){
    return (
        <>
            <Child respuesta = "respNo"/>
        </>
    );
}
export default Parent;