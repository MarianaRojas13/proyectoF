const getAdmin = async()=>{
    let resp= await axios.get("api/admin/get");
    return resp.data;
}


const crearAdmin =async(admin)=>{
    let resp =await axios.post("api/admin/post",admin,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarAdmin =async(id)=>{
    try{
        let resp =await axios.post("api/admin/delete",{id},{
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

const actualizarAdmin =async()=>{
    let formulario = document.forms['frmEditAdmin'].elements;

    let postForm = {
        id :formulario[0].value,
        nombre:formulario[1].value,
        cod:formulario[2].value
       
    }

   try{
        let resp =await axios.post("api/admin/update",postForm,{
            
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

const obtenerAdmin =async(id)=>{
    
    
    try{
        let resp =await axios.post("api/admin/obtener",{id},{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(resp.status == 200){
            

            let htmlModal  = '<div class="modal" id="editarAdmin" tabindex="-1">'
            +'<div class="modal-dialog modal-lg">'
            +'<div class="modal-content">'
            +'    <div class="modal-header">'
            +'      <h5 class="modal-title ">Tabla para modificar</h5>'
            +'      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cancelar"></button>'
            +'    </div>'
            +'    <div class="modal-body">'
            +'      <form id="frmEditAdmin" >'
            +'      <input type="hidden" value="'+resp.data.id+'">'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre</label>'
            +'              <input type="text-center" class="form-control" value="'+resp.data.nombre+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Codigo </label>'
            +'              <input type="number" class="form-control" value="'+resp.data.cod+'">'
            +'       </div>'
            +'      </form>'
            +'    </div>'
            +'  <div class="modal-footer">'
            +'      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'
            +'      <button type="button" class="btn btn-primary" onclick="actualizarAdmin()">Actualizar</button>'
            +'    </div>'
            +'  </div>'
            +'</div>'
            +'</div>';

            let modal = document.createElement('div');
            modal.innerHTML = htmlModal;
            document.body.appendChild(modal);

            let myModal = new bootstrap.Modal(document.getElementById('editarAdmin') );
            myModal.show();

        } 
        else{
            Swal.fire('Title', 'Error en llamada','warning');
        } 
      
    }catch(e){
        return false;
    }   
};