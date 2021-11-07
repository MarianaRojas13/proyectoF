const getAjustes = async()=>{
    let resp= await axios.get("api/ajuste/get");
    return resp.data;
}

const save =async(ajuste)=>{
    let resp =await axios.post("api/ajuste/post",ajuste,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};