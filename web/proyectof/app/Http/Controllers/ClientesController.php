<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
   
    public function getClientes(){/*llama a toda la informacion que se manda y se usa el model */
        $cli=Cliente::all();
        return $cli;
    }/*el requiest trae los datos del formulario */
    public function crearClientes(Request $request){
        $input=$request->all();//se crea un arreglo con todo lo que se mando.
        $cliente=new Cliente();
        $cliente->nombre=$input["nombre"];
        $cliente->fono=$input["fono"];
        $cliente->direccion=$input["direccion"];
        $cliente->nomP=$input["nomP"];
        $cliente->save();
        return $cliente;
    }
    public function eliminarClientes(Request $request){
        $input=$request->all();
        $id=$input["id"];

        $cliente= Cliente::findOrFail($id);
        
        $cliente->delete();
        return "ok";
    }
}
