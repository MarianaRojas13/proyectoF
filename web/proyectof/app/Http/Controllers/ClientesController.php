<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
   
    public function getClientes(){
        $cli=Cliente::all();
        return $cli;
    }
    public function crearClientes(Request $request){
        $input=$request->all();
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
    public function obtenerClientes(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $cliente= Cliente::findOrFail($id);
        return $cliente;
    }
    public function actualizarClientes(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $cliente = Cliente::where('id','=',$input["id"])->update(
            array(
                "nombre" => $input["nombre"],
                "fono" => $input["fono"],
                "direccion" => $input["direccion"],
                "nomP" => $input["nomP"]
            )
        );

            return $cliente;
        

    }
}
