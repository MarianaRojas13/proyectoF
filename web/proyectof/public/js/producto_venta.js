const cargarProductos=async()=>{
    let filtro=document.querySelector("#filtro");
    let producto=await getProd();
    producto.forEach(m=>{
        let option=document.createElement("option");
        option.innerText=m;
        option.value=m;
        filtro.appendChild(option);
    });
};
const iniciarEliminacion=async function(){
    let id=this.idProducto;
    let resp=await Swal.fire({title:"Seguro de eliminar?",text:"Esta operacion es irreversible"
    ,icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
    
        if(await eliminarProducto(id)){
            let producto= await getDatosProductos();
            cargarTabla(producto);
            cargarContenedor(producto);
            Swal.fire("Producto eliminado");
        }else{
            Swal.fire("ERROR","No se encontro producto","error");
        }
    }else{
        Swal.fire("Cancelado");
    }

}
const iniciarActualizacion=async function(){
    let id=this.idProducto;
    let resp=await Swal.fire({title:"Seguro de modificar?",text:"comenzará la edición"
    ,icon:"info",showCancelButton:true});

    if(resp.isConfirmed){
       
            if(await obtenerProducto(id)){
           
            
                let producto= await getDatosProductos();
                cargarTabla(producto);
                cargarContenedor(producto);
                Swal.fire("Producto actualizado");  
            
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
        let tdId=document.createElement("td");
        tdId.innerText=productos[i].id;
        let tdNombre=document.createElement("td");
        tdNombre.innerText=productos[i].nombre;
        let tdPrecio=document.createElement("td");
        tdPrecio.innerText=productos[i].precio;
        let tdStock=document.createElement("td");
        tdStock.innerText=productos[i].stock;
        let tdTipo=document.createElement("td");
        tdTipo.innerText=productos[i].tipo;
        let tdAcciones=document.createElement("td");
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Modificar";
        botonActualizar.addEventListener("click", iniciarActualizacion);
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.idProducto=productos[i].id;
        tdAcciones.appendChild(botonActualizar);
     
        
       
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProducto=productos[i].id; 
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdStock);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    };

};

document.querySelector("#filtro").addEventListener("change",async()=>{
    let filtro=document.querySelector("#filtro").value;
    let producto=await getDatosProductos(filtro);
    cargarTabla(producto);
})

document.addEventListener("DOMContentLoaded",async()=>{
    await cargarProductos();
    let producto= await getDatosProductos();
    cargarTabla(producto);
    
    
});