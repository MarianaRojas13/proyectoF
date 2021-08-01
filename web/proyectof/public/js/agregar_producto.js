const cargarProductos =async()=>{
    let resultado=await axios.get("api/productos/get");/*busca los productos*/
    let producto= resultado.data;/*guarda los productos */
    let tipoSelect=document.querySelector("#tipo-select");/*obtiene el select */
    
    producto.forEach(m=> {/*se recorren */
        let option=document.createElement("option");/*se crean las opciones y se guardan en el select */
        option.innerText=m;
        tipoSelect.appendChild(option);
    });
};
//ejecuta un codigo asegurandoce que todos los recursosos esten cargados antes de ejecutar
document.addEventListener("DOMContentLoaded",()=>{
    cargarProductos();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombreP-txt").value;
    let precio= document.querySelector("#precio-txt").value;
    let stock=document.querySelector("#stock-txt").value;
    let tipo=document.querySelector("#tipo-select").value;
    let producto={};
    producto.nombre=nombre;
    producto.precio=precio;
    producto.stock=stock;
    producto.tipo=tipo;
    let res= await crearProductos(producto);
    await Swal.fire("Producto creado","Producto ingresado","info");
    window.location.href="producto_venta";
});