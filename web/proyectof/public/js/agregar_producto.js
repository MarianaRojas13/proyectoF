const cargarProductos =async()=>{
    let resultado=await axios.get("api/productos/get");
    let producto= resultado.data;
    let tipoSelect=document.querySelector("#tipo-select");
    
    producto.forEach(m=> {
        let option=document.createElement("option");
        option.innerText=m;
        tipoSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded",()=>{
    cargarProductos();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombreP-txt").value.trim();
    let precio= document.querySelector("#precio-txt").value;
    let stock=document.querySelector("#stock-txt").value;
    let tipo=document.querySelector("#tipo-select").value;
    if(nombre==""){
        await Swal.fire("Error","Debe ingresar un nombre ","warning");
    }if(precio==0 || precio<0){
        await Swal.fire("Error","Debe ingresar un precio valido ","warning");
    }if(stock==0 || stock<0){
        await Swal.fire("Error","Debe ingresar stock ","warning");
    }else{    
        let producto={};
        producto.nombre=nombre;
        producto.precio=precio;
        producto.stock=stock;
        producto.tipo=tipo;
        let res= await crearProductos(producto);
        await Swal.fire("Producto creado","Producto ingresado","info");
        window.location.href="producto_venta";
    }
});