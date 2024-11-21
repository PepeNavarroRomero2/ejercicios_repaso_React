/*
Ejercicio 5: Crear un componente UserCard que muestre información de un usuario.
En App, crea un array de objetos de usuarios y pásalo a UserCard para renderizar
cada uno.
*/
function UserCard({nombre, apellido, sexo}){
    return(
        <>
            <h1>{nombre}</h1>
            <h2>{apellido}</h2>
            <h3>{sexo}</h3>
        </>
    );
}
export default UserCard;