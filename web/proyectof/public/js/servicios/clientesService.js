  

const getClientes = async()=>{
    let resp= await axios.get("api/clientes/get");
    return resp.data;
}


const crearClientes =async(cliente)=>{
    let resp =await axios.post("api/clientes/post",cliente,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarClientes =async(id)=>{
    try{
        let resp =await axios.post("api/clientes/delete",{id},{
            //estructura de peticiones post, siempre va
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};

const actualizarClientes =async()=>{
    let formulario = document.forms['frmEditCliente'].elements;

    let postForm = {
        id :formulario[0].value,
        nombre:formulario[1].value,
        fono:formulario[2].value,
        direccion:formulario[3].value,
        nomP:formulario[4].value
    }

   try{
        let resp =await axios.post("api/clientes/update",postForm,{
            
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

const obtenerClientes =async(id)=>{
    
    
    try{
        let resp =await axios.post("api/clientes/obtener",{id},{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(resp.status == 200){
            

            let htmlModal  = '<div class="container mt-5">'
            +'<div class="modal" id="editarCliente" tabindex="-1">'
            +'<div class="modal-dialog modal-lg">'
            +'<div class="modal-content">'
            +'    <div class="modal-header">'
            +'      <h5 class="modal-title ">Tabla para modificar</h5>'
            +'      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cancelar"></button>'
            +'    </div>'
            +'    <div class="modal-body">'
            +'      <form id="frmEditCliente" >'
            +'      <input type="hidden" value="'+resp.data.id+'">'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre</label>'
            +'              <input type="text-center" class="form-control" value="'+resp.data.nombre+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Telefono </label>'
            +'              <input type="number" class="form-control" value="'+resp.data.fono+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Dirección </label>'
            +'                <input type="text-center" class="form-control" value="'+resp.data.direccion+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre producto </label>'
            +'                <input type="text" class="form-control" value="'+resp.data.nomP+'">'
            +'       </div>'
            +'      </form>'
            +'    </div>'
            +'  <div class="modal-footer">'
            +'      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'
            +'      <button type="button" class="btn btn-primary" onclick="actualizarClientes()">Actualizar</button>'
            +'    </div>'
            +'  </div>'
            +'</div>'
            +'</div>'
            +'</div>';

            let modal = document.createElement('div');
            modal.innerHTML = htmlModal;
            document.body.appendChild(modal);

            let myModal = new bootstrap.Modal(document.getElementById('editarCliente') );
            myModal.show();

        } 
        else{
            Swal.fire('Title', 'Error en llamada','warning');
        } 
      
    }catch(e){
        return false;
    }   
};