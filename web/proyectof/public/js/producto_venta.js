const iniciarEliminacion=async function(){
    let id=this.idProducto;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        //se llama a la funcion eliminarProducto
        if(await eliminarProducto(id)){
            let producto= await getDatosProductos();
            cargarTabla(producto);
            Swal.fire("Producto eliminado");
        }else{
            Swal.fire("ERROR","No se encontro producto","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}

const cargarTabla =(productos)=>{
    let tbody=document.querySelector("#tbody-producto");
    tbody.innerHTML="";
    for(let i=0;i<productos.length;++i){
        let tr=document.createElement("tr");
        let tdNombre=document.createElement("td");
        tdNombre.innerText=productos[i].nombre;//estos nombres salen de la migracion,precio,nombre...
        let tdPrecio=document.createElement("td");
        tdPrecio.innerText=productos[i].precio;
        let tdStock=document.createElement("td");
        tdStock.innerText=productos[i].stock;
        let tdTipo=document.createElement("td");
        tdTipo.innerText=productos[i].tipo;
        let tdAcciones=document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProducto=productos[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdStock);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};

document.addEventListener("DOMContentLoaded",async()=>{
    let producto= await getDatosProductos();
    cargarTabla(producto);
});