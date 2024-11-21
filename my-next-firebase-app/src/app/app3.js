import ProductStock from "./ProductStock";

export default function App3(){
    return(
    <>
        <h3>Inventario</h3>
        <p>Producto 1</p>
        <ProductStock inStock={true}/>
        <p>Producto 2</p>
        <ProductStock inStock={false}/>
    </>
    );
}