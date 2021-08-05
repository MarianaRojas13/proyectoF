const getPedidos = async()=>{
    let resp= await axios.get("api/datospedido/get");
    return resp.data;
}
const crearPedidos =async(producto)=>{
    let resp =await axios.post("api/pedido/post",producto,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarPedido =async(id)=>{
    try{
        let resp =await axios.post("api/pedido/delete",{id},{
           
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};