import React from "react";
export default function ProductStock({inStock}){
    const disponible = inStock ? "Producto en inventario" : "Producto agotado";

    return(
        <>
        <p>{disponible}</p>
        </>
    );
}