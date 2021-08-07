document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombre-txt").value.trim();
    let fono= document.querySelector("#fono-txt").value.trim();
    let direccion=document.querySelector("#direccion-txt").value.trim();
    let nomP=document.querySelector("#nomP-txt").value.trim();
    if(nombre==""){
        await Swal.fire("Error","Debe ingresar nombre ","warning");
    }if(direccion=="" || nomP==""){
        await Swal.fire("Error","Debe llenar los campos restantes ","warning");
    }if(fono==0 || fono<0){
        await Swal.fire("Error","Debe ingresar un numero valido ","warning");
    }else{
        let cliente={};
        cliente.nombre=nombre;
        cliente.fono=fono;
        cliente.direccion=direccion;
        cliente.nomP=nomP;
        let res= await crearClientes(cliente);
        await Swal.fire("Cliente creado","Cliente ingresado","info");
        window.location.href="ver_cliente";
    }
});