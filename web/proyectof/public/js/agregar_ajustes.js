const cargarProducto = async()=>{
    let producto =await getDatosProductos();
    let productoselect=document.querySelector("#id-producto")
    producto.forEach(m=> {
        let option=document.createElement("option");
        option.value=m.id;
        option.innerText=m.id;
        productoselect.appendChild(option);
    });
}



document.addEventListener("DOMContentLoaded",async()=>{
      
    cargarProducto();
    
});
document.querySelector("#agregar-btn").addEventListener("click", async()=>{
    let fecha= document.querySelector("#fecha-txt").value;
    let tipoajuste=document.querySelector("#tipo-ajuste").value.trim();
    let cantidad=document.querySelector("#cantidad-txt").value.trim();
    let motivo=document.querySelector("#motivo-txt").value;
    let producto=document.querySelector("#id-producto").value;
    let ajuste={};
    ajuste.fecha = fecha;
    ajuste.tipoajuste = tipoajuste;
    ajuste.cantidad= cantidad;
    ajuste.motivo= motivo;
    ajuste.ID_Producto=producto;
    await save(ajuste);
    await Swal.fire("Bien","se registro el ajuste","info");
})