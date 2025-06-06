import React,{useEffect,USeState}from'react'

const UserList=()=>{
    cosnt[UserList,setUsers]=useState([]);

    useEffect(()=>{
        //llamar a la funcion para oobtener la lista de usuarios 
        fetchUsers();
    },[]);

    const response=async()=>{
        try{
            const response=await fetch('/api/v1/')
            const data=await response.json();
            setUser(data);
        }catch(error){
            console.error('Error en la solcicitud:',error);
        }
    
};
return( 
<div>
    <h1>Lista de Usuarios</h1>
    {/*Mostrar lista de usuarios*/}
    <ul>
        {UserList.map((user)=>(
            <li key={user.id}>{use.name}-{user.email}</li>
        ))}
    </ul>
</div>
);
};
export default USerList;