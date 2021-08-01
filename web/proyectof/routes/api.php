<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\ClientesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("productos/get",[ProdutosController::class,"getProductos"]);
Route::get("datosproductos/get",[ProdutosController::class,"getDatosProductos"]);
Route::post("productos/post",[ProdutosController::class,"crearProductos"]);
Route::post("productos/delete",[ProdutosController::class,"eliminarProducto"]);

Route::post("productos/update",[ProdutosController::class,"actualizarProducto"]);

Route::get("clientes/get",[ClientesController::class,"getClientes"]);
Route::post("clientes/post",[ClientesController::class,"crearClientes"]);
Route::post("clientes/delete",[ClientesController::class,"eliminarClientes"]);