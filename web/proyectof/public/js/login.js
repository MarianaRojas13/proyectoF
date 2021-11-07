const Obtener=async function(){
    let nombre= document.querySelector("#nombre-txt").value.trim();
    let cod= document.querySelector("#cod-txt").value.trim();
    let res= await getAdmin();
   if (nombre==0 || nombre>0){
            await Swal.fire("Error","Debe ingresar un nombre  ","warning")
    }
 
    let i=0;
    t=true
    
    while(t){
        if (nombre==res[i].nombre && cod==res[i].cod){
            await Swal.fire("info","ta bien ","warning");
            window.location.href="agregar_producto";
            t=false;
        }else{
            if(i==1){      
                await Swal.fire("Error","No se ah encontrado los datos escritos ","warning");
                    
                t=false;
                
                
            }else{
                i=i+1;
            }
            
        }
    }
}
  

document.querySelector("#ingresar-btn").addEventListener("click", async()=>{
    Obtener();
});





    


