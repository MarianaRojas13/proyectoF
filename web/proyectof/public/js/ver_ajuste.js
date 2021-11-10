
const iniciarEliminacion=async function(){
    let id=this.idAjuste;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
    
        if(await eliminarProducto(id)){
            let ajuste= await getAjustes();
            cargarTabla(ajuste);
            
            Swal.fire("Ajuste eliminado");
        }else{
            Swal.fire("ERROR","No se encontro ajuste","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}



const cargarTabla =(ajustes)=>{
    let tbody=document.querySelector("#tbody-ajuste");
    tbody.innerHTML="";
    for(let i=0;i<ajustes.length;++i){
        let tr=document.createElement("tr");
        let tdFecha=document.createElement("td");
        tdFecha.innerText=ajustes[i].fecha;
        let tdIDproducto=document.createElement("td");
        tdIDproducto.innerText=ajustes[i].ID_Producto;
        let tdTipoAjuste=document.createElement("td");
        tdTipoAjuste.innerText=ajustes[i].tipoajuste;
        let tdStock=document.createElement("td");
        tdStock.innerText=ajustes[i].cantidad;
        let tdTipo=document.createElement("td");
        tdTipo.innerText=ajustes[i].motivo;
    //    let tdAcciones=document.createElement("td");       
     //   let botonEliminar=document.createElement("button");
     //   botonEliminar.innerText="Eliminar";
     //   botonEliminar.classList.add("btn","btn-danger");
     //   botonEliminar.idAjuste=ajustes[i].id; 
     //   botonEliminar.addEventListener("click", iniciarEliminacion);
     //   tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdFecha);
        tr.appendChild(tdIDproducto);
        tr.appendChild(tdTipoAjuste);
        tr.appendChild(tdStock);
        tr.appendChild(tdTipo);
    //    tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};



document.addEventListener("DOMContentLoaded",async()=>{
    
    let producto= await getAjustes();
    cargarTabla(producto);
    
    
});