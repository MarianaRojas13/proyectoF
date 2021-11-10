<?php

namespace App\Http\Controllers;
use App\Models\Ajuste;
use App\Models\Producto;
use Illuminate\Http\Request;

class AjustesController extends Controller
{
    public function getAjustes(){
        return Ajuste::all();
    }
    public function obtenerProductoAjuste(Request $request){
        $input=$request->all();
        $id=$input["ID_Producto"];
        $producto= Producto::findOrFail($id);
        return $producto->ajustes()->get();
    }
    public function save(Request $request){
        $input = $request->all();
        $fecha= $input["fecha"];
        $tipoajuste = $input["tipoajuste"];
        $cantidad = $input["cantidad"];
        $motivo = $input["motivo"];
        $idproducto= $input["ID_Producto"];

        $ajuste = new Ajuste();
        $ajuste->fecha =$fecha;
        $ajuste->tipoajuste =$tipoajuste;
        $ajuste->cantidad =$cantidad;
        $ajuste->motivo =$motivo;
        $ajuste->ID_Producto =$idproducto;

        $ajuste->save();
        return $ajuste;
    }
    public function eliminarAjuste(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $producto= Ajuste::findOrFail($id);
        $producto->delete();
        return "ok";
    }
    
}
