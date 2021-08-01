document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombre-txt").value;
    let fono= document.querySelector("#fono-txt").value;
    let direccion=document.querySelector("#direccion-txt").value;
    let nomP=document.querySelector("#nomP-txt").value;
    let cliente={};
    cliente.nombre=nombre;
    cliente.fono=fono;
    cliente.direccion=direccion;
    cliente.nomP=nomP;
    let res= await crearClientes(cliente);
    await Swal.fire("Cliente creado","Cliente ingresado","info");
    window.location.href="ver_cliente";
});