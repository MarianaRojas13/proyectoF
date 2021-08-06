const iniciarEliminacion=async function(){
    let id=this.idCliente;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
       
        if(await eliminarClientes(id)){
            let cliente= await getClientes();
            cargarTabla(cliente);
            Swal.fire(" Eliminado");
        }else{
            Swal.fire("ERROR","No se encontro producto","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}
const iniciarActualizacion=async function(){
    let id=this.idCliente;
    let resp=await Swal.fire({title:"Tas seguro?",text:"comenzará la edición"
    ,icon:"info",showCancelButton:true});

    if(resp.isConfirmed){
    
        if(await obtenerClientes(id)){
           let producto= await getClientes();
            cargarTabla(producto);
            Swal.fire("Producto actualizado");        
        }
    }else{
        Swal.fire("Cancelado");
    }

}

const cargarTabla =(clientes)=>{
    let tbody=document.querySelector("#tbody-cliente");
    tbody.innerHTML="";
    for(let i=0;i<clientes.length;++i){
        let tr=document.createElement("tr");
        let tdNombre=document.createElement("td");
        tdNombre.innerText=clientes[i].nombre;
        let tdPrecio=document.createElement("td");
        tdPrecio.innerText=clientes[i].fono;
        let tdStock=document.createElement("td");
        tdStock.innerText=clientes[i].direccion;
        let tdTipo=document.createElement("td");
        tdTipo.innerText=clientes[i].nomP;
        let tdAcciones=document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idCliente=clientes[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.addEventListener("click", iniciarActualizacion);
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.idCliente=clientes[i].id;
        tdAcciones.appendChild(botonActualizar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdStock);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};

document.addEventListener("DOMContentLoaded",async()=>{
    let cliente= await getClientes();
    cargarTabla(cliente);
});