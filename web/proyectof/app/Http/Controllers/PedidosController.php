<?php

namespace App\Http\Controllers;
use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidosController extends Controller
{
    public function getPedido(){
        $pe=Pedido::all();
        return $pe;
    }
    public function getTipos(){
        $pedido=array(); 
        
        $pedido[]="Starken";
        $pedido[]="Correos de Chile";
        $pedido[]="´Pyme";
        return $pedido;
    }
    public function crearPedido(Request $request){
        $input=$request->all();
        $pedido=new Pedido();
        $pedido->nombre=$input["nombre"];
        $pedido->fecha=$input["fecha"];
        $pedido->prodN=$input["prodN"];
        $pedido->cantidad=$input["cantidad"];
        $pedido->tipo=$input["tipo"];
        $pedido->save();
        return $pedido;
    }
    public function eliminarPedido(Request $request){
        $input=$request->all();
        $id=$input["id"];

        $pedido= Pedido::findOrFail($id);
        
        $pedido->delete();
        return "ok";
    }
    public function obtenerPedido(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $pedido= Pedido::findOrFail($id);
        return $pedido;
    }
    public function actualizarPedido(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $pedido = Pedido::where('id','=',$input["id"])->update(
            array(
                "nombre" => $input["nombre"],
                "fecha" => $input["fecha"],
                "prodN" => $input["prodN"],
                "cantidad" => $input["cantidad"]
            )
        );

            return $pedido;

    }
}
