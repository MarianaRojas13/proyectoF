<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\PedidosController;
use App\Http\Controllers\AdminsController;
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
Route::post("productos/obtener",[ProdutosController::class,"obtenerProducto"]);

Route::post("clientes/update",[ClientesController::class,"actualizarClientes"]);
Route::post("clientes/obtener",[ClientesController::class,"obtenerClientes"]);

Route::get("clientes/get",[ClientesController::class,"getClientes"]);
Route::post("clientes/post",[ClientesController::class,"crearClientes"]);
Route::post("clientes/delete",[ClientesController::class,"eliminarClientes"]);

Route::get("pedido/get",[PedidosController::class,"getTipos"]);
Route::get("datospedido/get",[PedidosController::class,"getPedido"]);
Route::post("pedido/post",[PedidosController::class,"crearPedido"]);
Route::post("pedido/delete",[PedidosController::class,"eliminarPedido"]);

Route::post("pedido/update",[PedidosController::class,"actualizarPedido"]);
Route::post("pedido/obtener",[PedidosController::class,"obtenerPedido"]);

Route::post("admin/update",[AdminsController::class,"actualizarAdmin"]);
Route::post("admin/obtener",[AdminsController::class,"obtenerAdmin"]);

Route::get("admin/get",[AdminsController::class,"getAdmin"]);
Route::post("admin/post",[AdminsController::class,"crearAdmin"]);
Route::post("admin/delete",[AdminsController::class,"eliminarAdmin"]);
Route::post("admin/obtener",[AdminsController::class,"store"]);