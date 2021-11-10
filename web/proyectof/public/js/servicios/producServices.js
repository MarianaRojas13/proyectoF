const getProd =async ()=>{
    let resultado=await axios.get("api/productos/get");
    return resultado.data;
}