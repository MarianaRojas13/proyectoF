const iniciarEliminacion=async function(){
    let id=this.idPedido;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
    
        if(await eliminarPedido(id)){
            let pedido= await getPedido();
            cargarTabla(pedido);
            Swal.fire("Pedido eliminado");
        }else{
            Swal.fire("ERROR","No se encontro producto","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}
const iniciarActualizacion=async function(){
    let id=this.idPedido;
    let resp=await Swal.fire({title:"Tas seguro?",text:"comenzará la edición"
    ,icon:"info",showCancelButton:true});

    if(resp.isConfirmed){
    
        if(await obtenerPedido(id)){
           let pedido= await getPedidos();
            cargarTabla(pedido);
            Swal.fire("Pedido actualizado");        
        }
    }else{
        Swal.fire("Cancelado");
    }

}


const cargarTabla =(pedidos)=>{
    let tbody=document.querySelector("#tbody-pedido");
    tbody.innerHTML="";
    for(let i=0;i<pedidos.length;++i){
        let tr=document.createElement("tr");
        let tdNombre=document.createElement("td");
        tdNombre.innerText=pedidos[i].nombre;
        let tdFecha=document.createElement("td");
        tdFecha.innerText=pedidos[i].fecha;
        let tdprodN=document.createElement("td");
        tdprodN.innerText=pedidos[i].prodN;
        let tdcantidad=document.createElement("td");
        tdcantidad.innerText=pedidos[i].cantidad;
        let tdTipo=document.createElement("td");
        tdTipo.innerText=pedidos[i].tipo;
        let tdAcciones=document.createElement("td");
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.addEventListener("click", iniciarActualizacion);
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.idPedido=pedidos[i].id;
        tdAcciones.appendChild(botonActualizar);

        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idPedido=pedidos[i].id; 
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdFecha);
        tr.appendChild(tdprodN);
        tr.appendChild(tdcantidad);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};



document.addEventListener("DOMContentLoaded",async()=>{
    let pedido= await getPedido();
    cargarTabla(pedido);
    
});