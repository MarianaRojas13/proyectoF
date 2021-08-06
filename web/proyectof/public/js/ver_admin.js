const iniciarEliminacion=async function(){
    let id=this.idAdmin;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
       
        if(await eliminarAdmin(id)){
            let admin= await getAdmin();
            cargarTabla(admin);
            Swal.fire(" Eliminado");
        }else{
            Swal.fire("ERROR","No se encontro admin","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}
const iniciarActualizacion=async function(){
    let id=this.idAdmin;
    let resp=await Swal.fire({title:"Tas seguro?",text:"Comenzará la edición"
    ,icon:"info",showCancelButton:true});

    if(resp.isConfirmed){
    
        if(await obtenerAdmin(id)){
           let producto= await getAdmin();
            cargarTabla(producto);
            Swal.fire("Administradora actualizado");        
        }
    }else{
        Swal.fire("Cancelado");
    }

}

const cargarTabla =(admins)=>{
    let tbody=document.querySelector("#tbody-admin");
    tbody.innerHTML="";
    for(let i=0;i<admins.length;++i){
        let tr=document.createElement("tr");
        let tdNombre=document.createElement("td");
        tdNombre.innerText=admins[i].nombre;
        let tdCod=document.createElement("td");
        tdCod.innerText=admins[i].cod;
        let tdAcciones=document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idAdmin=admins[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.addEventListener("click", iniciarActualizacion);
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.idAdmin=admins[i].id;
        tdAcciones.appendChild(botonActualizar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdCod);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};

document.addEventListener("DOMContentLoaded",async()=>{
    let admin= await getAdmin();
    cargarTabla(admin);
});