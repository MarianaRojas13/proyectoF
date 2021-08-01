  
//obtiene los datos ,todos los datos de los clientes
const getClientes = async()=>{
    let resp= await axios.get("api/clientes/get");
    return resp.data;
}


const crearClientes =async(cliente)=>{
    let resp =await axios.post("api/clientes/post",cliente,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarClientes =async(id)=>{
    try{
        let resp =await axios.post("api/clientes/delete",{id},{
            //estructura de peticiones post, siempre va
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};