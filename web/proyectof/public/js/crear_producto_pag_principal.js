const cargarContenedor=(productos)=>{
    let body=document.querySelector("#body-producto");
    //let Timg=document.querySelector("#img");
    body.innerHTML="";
    for(let i=0;i<productos.length;++i){
        
        let div=document.createElement("div");
        let tdimg=document.createElement("img");
        tdimg.setAttribute("src",'img/img1.png');

        let tdNombre=document.createElement("p");
        tdNombre.innerText=productos[i].nombre;
        let tdPrecio=document.createElement(+"p");
        tdPrecio.innerText=productos[i].precio;
        let tbody=document.querySelector("#body-producto");
        let botonComprar=document.createElement("button");
        botonComprar.innerText="Comprar";
        botonComprar.classList.add("btn","btn-info");
        botonComprar.idProducto=productos[i].id;
        
        div.appendChild(tdimg);
        
        div.appendChild(tdNombre);
        div.appendChild(tdPrecio);
        body.appendChild(div);
        //body.appendChild(tdimg);
        tbody.appendChild(botonComprar);
        
        
        
        
    };

}

document.addEventListener("DOMContentLoaded",async()=>{
    
    let producto= await getDatosProductos();
    
    cargarContenedor(producto);
    
});