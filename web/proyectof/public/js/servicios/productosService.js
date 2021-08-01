const getDatosProductos = async()=>{
    let resp= await axios.get("api/datosproductos/get");
    return resp.data;
}
//crearProductos
const crearProductos =async(producto)=>{
    let resp =await axios.post("api/productos/post",producto,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarProducto =async(id)=>{
    try{
        let resp =await axios.post("api/productos/delete",{id},{
           
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};
const actualizarProducto =async(id)=>{
    try{
        let resp =await axios.post("api/productos/update",{id},{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};