
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombre-txt").value;
    let fecha= document.querySelector("#fecha-txt").value;
    let prodN=document.querySelector("#prodN-txt").value.trim();
    let cantidad=document.querySelector("#cantidad-txt").value;
    let tipo=document.querySelector("#tipo-rb-G").value;
    let pedido={};
    producto.nombre=nombre;
    producto.precio=precio;
    producto.stock=stock;
    producto.tipo=tipo;
    let res= await crearProductos(producto);
    await Swal.fire("Producto creado","Producto ingresado","info");
    window.location.href="producto_venta";
});