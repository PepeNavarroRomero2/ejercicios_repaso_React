import UserCard from "./userCard.js";
function App2(){
    const arrayUsers = [
        {nombre: 'Pepe', apellido: 'Navarro', sexo:'M'},
        {nombre: 'Paco', apellido: 'Doblado', sexo:'M'},
        {nombre: 'Manuel', apellido: 'Garcia', sexo:'M'}
    ];
    return(
        <>
            {arrayUsers.map((user, index) => (
                <div key={index}>
                <UserCard nombre ={user.nombre} apellido ={user.apellido} sexo ={user.sexo} />
                </div>
            ))} 
        </>
    );
}
export default App2;