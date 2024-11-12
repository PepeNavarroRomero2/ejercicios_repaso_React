import Parent from "./Parent";
function devuelta(){
    onmessage("respSi");
}
function Child(respuesta){
    return(
        <>
            <h4>{respuesta}</h4>
            <button onClick={devuelta}>Clica</button>
        </>
    );
}
export default Child;