const getPedido = async()=>{
    let resp= await axios.get("api/datospedido/get");
    return resp.data;
}
const crearPedido =async(pedido)=>{
    let resp =await axios.post("api/pedido/post",pedido,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarPedido =async(id)=>{
    try{
        let resp =await axios.post("api/pedido/delete",{id},{
           
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};
const actualizarPedido =async()=>{
    let formulario = document.forms['frmEditPedido'].elements;

    let postForm = {
        id :formulario[0].value,
        nombre:formulario[1].value,
        fecha:formulario[2].value,
        prodN:formulario[3].value,
        cantidad:formulario[4].value
    }

   try{
        let resp =await axios.post("api/pedido/update",postForm,{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(resp.status == 200){
            Swal.fire({
                title:'Actualización',
                icon:'success',
                text:'Actualizacion correcta',
                showCancelButton:false,
                confirmButtonText:'Continuar'
            }).then(
               window.location.reload()
            )
        }else{
            Swal.fire('Error','Error al actualizar','error')
        }

    }catch(e){
        return false;
    }
};

const obtenerPedido =async(id)=>{
    
    
    try{
        let resp =await axios.post("api/pedido/obtener",{id},{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(resp.status == 200){
            

            let htmlModal  = '<div class="modal" id="editarPedido" tabindex="-1">'
            +'<div class="modal-dialog modal-lg">'
            +'<div class="modal-content">'
            +'    <div class="modal-header">'
            +'      <h5 class="modal-title ">Tabla para modificar</h5>'
            +'      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cancelar"></button>'
            +'    </div>'
            +'    <div class="modal-body">'
            +'      <form id="frmEditPedido" >'
            +'      <input type="hidden" value="'+resp.data.id+'">'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre</label>'
            +'              <input type="text-center" class="form-control" value="'+resp.data.nombre+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Fecha </label>'
            +'              <input type="date" class="form-control" value="'+resp.data.fecha+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre productos </label>'
            +'                <input type="text-center" class="form-control" value="'+resp.data.prodN+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Cantidad </label>'
            +'              <input type="number" class="form-control" value="'+resp.data.cantidad+'">'
            +'       </div>'
            +'      </form>'
            +'    </div>'
            +'  <div class="modal-footer">'
            +'      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'
            +'      <button type="button" class="btn btn-primary" onclick="actualizarPedido()">Actualizar</button>'
            +'    </div>'
            +'  </div>'
            +'</div>'
            +'</div>';

            let modal = document.createElement('div');
            modal.innerHTML = htmlModal;
            document.body.appendChild(modal);

            let myModal = new bootstrap.Modal(document.getElementById('editarPedido') );
            myModal.show();

        } 
        else{
            Swal.fire('Title', 'Error en llamada','warning');
        } 
      
    }catch(e){
        return false;
    }   
};