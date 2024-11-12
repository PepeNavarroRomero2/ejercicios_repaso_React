/*
Ejercicio 2: Crear una tarjeta de presentación (Card) que reciba props para un título,
descripción e imagen. Renderiza múltiples tarjetas en un componente principal App.
*/
function Card ({titulo, descripcion, imagen}){
    return(
        <>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <img src={imagen}/>
        </>
    );
}
export default Card;