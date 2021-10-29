const Obtener=async function(){
    let nombre= document.querySelector("#nombre-txt").value.trim();
   
    let res= await getAdmin();
    if (nombre==0 || nombre>0)
        await Swal.fire("Error","Debe ingresar un nombre  ","warning")
    if(nombre!=res){
        await Swal.fire("Error","Debe ingresar un nombre registrado ","warning")
    }else{    
        await Swal.fire("info","ta bien ","warning")
    }

}
document.querySelector("#ingresar-btn").addEventListener("click", async()=>{
    Obtener();
});




const cargarMarcas=async()=>{
    let filtroCbx=document.querySelector("#filtro-cbx");
    let marcas=await getMarcas();
    marcas.forEach(m=>{
        let option=document.createElement("option");
        option.innerText=m;
        option.value=m;
        filtroCbx.appendChild(option);
    });
};
    


