const getDatosProductos = async()=>{
    let resp= await axios.get("api/datosproductos/get");
    return resp.data;
}
//crearProductos
const crearProductos =async(producto)=>{
    let resp =await axios.post("api/productos/post",producto,{
        
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarProducto =async(id)=>{
    try{
        let resp =await axios.post("api/productos/delete",{id},{
           
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data="ok";
    }catch(e){
        return false;
    }   
};
const actualizarProducto =async()=>{
    let formulario = document.forms['frmEditProduct'].elements;
        
    let postForm = {
        id :formulario[0].value,
        nombre:formulario[1].value,
        precio:formulario[2].value,
        stock:formulario[3].value,
        tipo:formulario[4].value
    }

   try{
        let resp =await axios.post("api/productos/update",postForm,{
            
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

const obtenerProducto =async(id)=>{
    
    
    try{
        let resp =await axios.post("api/productos/obtener",{id},{
            
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(resp.status == 200){
            

            let htmlModal  = '<div class="modal" id="editarProducto" tabindex="-1">'
            +'<div class="modal-dialog modal-lg">'
            +'<div class="modal-content">'
            +'    <div class="modal-header">'
            +'      <h5 class="modal-title ">Tabla para modificar</h5>'
            +'      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cancelar"></button>'
            +'    </div>'
            +'    <div class="modal-body">'
            +'      <form id="frmEditProduct" >'
            +'      <input type="hidden" value="'+resp.data.id+'">'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Nombre</label>'
            +'              <input type="text-center" class="form-control" value="'+resp.data.nombre+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light">'
            +'            <label>Precio </label>'
            +'              <input type="number" class="form-control" value="'+resp.data.precio+'">'
            +'       </div>'
            +'      <div class="form-control mb-3 bg-primary text-light ">'
            +'            <label>Stock </label>'
            +'                <input type="text-center" class="form-control" value="'+resp.data.stock+'">'
            +'       </div>'
            +'      </form>'
            +'    </div>'
            +'  <div class="modal-footer">'
            +'      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'
            +'      <button type="button" class="btn btn-primary" onclick="actualizarProducto()">Actualizar</button>'
            +'    </div>'
            +'  </div>'
            +'</div>'
            +'</div>';

            let modal = document.createElement('div');
            modal.innerHTML = htmlModal;
            document.body.appendChild(modal);

            let myModal = new bootstrap.Modal(document.getElementById('editarProducto') );
            myModal.show();

        } 
        else{
            Swal.fire('Title', 'Error en llamada','warning');
        } 
      
    }catch(e){
        return false;
    }   
};