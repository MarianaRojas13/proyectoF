
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombre-txt").value.trim();
    let cod= document.querySelector("#cod-txt").value.trim();
    if(nombre=="" || cod==0){
        await Swal.fire("Error debe llenar los campos","vuelva a intentar","warning");
    }else{
        let admin={};
        admin.nombre=nombre;
        admin.cod=cod; 
        let res= await crearAdmin(admin);
        await Swal.fire("Admin exitoso","Admin ingresado","info");
        window.location.href="ver_admin";
    }
    
});