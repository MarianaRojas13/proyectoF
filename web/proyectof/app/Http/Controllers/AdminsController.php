<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminsController extends Controller
{
    public function getAdmin(){
        $admin=Admin::all();
        return $admin;
    }
    public function crearAdmin(Request $request){
        $input=$request->all();
        $admin=new Admin();
        $admin->nombre=$input["nombre"];
        $admin->cod=$input["cod"];
        $admin->save();
        return $admin;

    }
    
    public function eliminarAdmin(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $admin= Admin::findOrFail($id);
        $admin->delete();
        return "ok";
    }
    public function obtenerAdmin(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $admin= Admin::findOrFail($id);
        return $admin;
    }
    public function actualizarAdmin(Request $request){
        $input=$request->all();
        $id=$input["id"];
        $admin = Admin::where('id','=',$input["id"])->update(
            array(
                "nombre" => $input["nombre"],
                "cod" => $input["cod"]
            )
        );

            return $admin;

    }
    public function logout () {
        //logout user
        auth()->logout();
        // redirect to homepage
        return redirect('/');
    }
}
