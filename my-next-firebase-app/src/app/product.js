/*
Ejercicio 4: Crear un componente Product que reciba props como nombre, precio y
descripción de un producto. Renderiza una lista de productos en un componente
ProductList.
*/
function Product({nombre, precio, descripcion}){
    return(
    <>
        <ul>
            <li>{nombre}</li>
            <li>{precio}</li>
            <li>{descripcion}</li>
        </ul>
    </>
    );
}
export default Product;