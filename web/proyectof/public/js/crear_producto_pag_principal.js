const cargarContenedor=(productos)=>{
    let body=document.querySelector("#body-producto");
    body.innerHTML="";
    for(let i=0;i<productos.length;++i){
        let div=document.createElement("div");
        
      
        
        let tdNombre=document.createElement("p");
        tdNombre.innerText=productos[i].nombre;
        let tdPrecio=document.createElement("p");
        tdPrecio.innerText=productos[i].precio;
        let tbody=document.querySelector("#body-producto");
        let botonComprar=document.createElement("button");
        botonComprar.innerText="Comprar";
        botonComprar.classList.add("btn","btn-info");
        botonComprar.idProducto=productos[i].id;
        
        
        div.appendChild(tdNombre);
        div.appendChild(tdPrecio);
        
        
        body.appendChild(div);
        tbody.appendChild(botonComprar);
    };

}

document.addEventListener("DOMContentLoaded",async()=>{
    
    let producto= await getDatosProductos();
    
    cargarContenedor(producto);
    
});