
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let nombre= document.querySelector("#nombre-txt").value.trim();
    let fecha= document.querySelector("#fecha-txt").value;
    let prodN=document.querySelector("#prodN-txt").value.trim();
    let cantidad=document.querySelector("#cantidad-txt").value.trim();
    let tipo=document.querySelector("#tipo-select").value;
    let pedido={};
    if(nombre==""){
        await Swal.fire("Error","Debe llenar el campo","warning");
    }if(prodN==""){
        await Swal.fire("Error","Debe ingresar los productos comprados","warning");
    }else{
        pedido.nombre=nombre;
        pedido.fecha=fecha;
        pedido.prodN=prodN;
        pedido.cantidad=cantidad;
        pedido.tipo=tipo;
        let res= await crearPedido(pedido);
        await Swal.fire("Pedido hecho","Pedido ingresado","info");
        window.location.href="ver_pedido";
    }
});
const cargarTipo =async()=>{
    let resultado=await axios.get("api/pedido/get");
    let pedido= resultado.data;
    let tipoSelect=document.querySelector("#tipo-select");
    
    pedido.forEach(m=> {
        let option=document.createElement("option");
        option.innerText=m;
        tipoSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded",()=>{
    cargarTipo();
});
