<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function getProductos(){
        $productos=array(); 
        $productos[]="Agenda";
        $productos[]="Album";
        $productos[]="Planner";
        $productos[]="Croquera";
        return $productos;
    }
    public function getDatosProductos(){
        $prod=Producto::all();
        return $prod;
    }
    public function crearProductos(Request $request){
        $input=$request->all();
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
        $producto= Producto::findOrFail($id);
        $producto->delete();
        return "ok";
    }
    public function obtenerProducto(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $producto= Producto::findOrFail($id);
        return $producto;
    }
    public function actualizarProducto(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $producto = Producto::where('id','=',$input["id"])->update(
            array(
                "nombre" => $input["nombre"],
                "precio" => $input["precio"],
                "stock" => $input["stock"],
                "tipo" => $input["tipo"]
            )
        );

            return $producto;
        
        //$producto= Producto::findOrFail($id);
       // $producto->nombre=$input["nombre"];
       // $producto->precio=$input["precio"];
       // $producto->stock=$input["stock"];
        //$producto->tipo=$input["tipo"];
        //$producto->save();
       // return $producto;

    }
}
