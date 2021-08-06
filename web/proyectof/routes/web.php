<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/
Route:: view("/producto_venta","producto_venta")->name("producto_venta");/*en esta ruta se ven los productos*/ 
Route:: view("/","agregar_producto")->name("agregar_producto");/*Agrega los productos */

Route:: view("/agregar_cliente","agregar_cliente")->name("agregar_cliente");
Route:: view("/ver_cliente","ver_cliente")->name("ver_cliente");

Route:: view("/agregar_pedido","agregar_pedido")->name("agregar_pedido");
Route:: view("/ver_pedido","ver_pedido")->name("ver_pedido");
Route:: view("/principal","principal")->name("principal");