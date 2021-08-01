<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function getProductos(){/*retorna los productos */
        $productos=array(); 
        $productos[]="Agenda";
        $productos[]="Album";
        $productos[]="Planner";
        $productos[]="Croquera";
        return $productos;
    }
    public function getDatosProductos(){/*llama a toda la informacion que se manda y se usa el model */
        $prod=Producto::all();
        return $prod;
    }/*el requiest trae los datos del formulario */
    public function crearProductos(Request $request){
        $input=$request->all();//se crea un arreglo con todo lo que se mando.
        $producto=new Producto();
        $producto->nombre=$input["nombre"];
        $producto->precio=$input["precio"];
        $producto->stock=$input["stock"];
        $producto->tipo=$input["tipo"];
        $producto->save();
        return $producto;
    }
    public function eliminarProducto(Request $request){
        $input=$request->all();
        $id=$input["id"];
        //eloquent:el administrador de bs de laravel se llama Eloquent
        $producto= Producto::findOrFail($id);
        //para eliinar se llama al metodo delete
        $producto->delete();
        return "ok";
    }
}
