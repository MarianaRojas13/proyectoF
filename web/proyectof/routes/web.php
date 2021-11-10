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


Route:: view("/producto_venta","producto_venta")->name("producto_venta");
Route:: view("/agregar_producto","agregar_producto")->name("agregar_producto");

Route:: view("/agregar_cliente","agregar_cliente")->name("agregar_cliente");
Route:: view("/ver_cliente","ver_cliente")->name("ver_cliente");

Route:: view("/agregar_pedido","agregar_pedido")->name("agregar_pedido");
Route:: view("/ver_pedido","ver_pedido")->name("ver_pedido");

Route:: view("/","principal2")->name("principal2");

Route:: view("/agregar_admin","agregar_admin")->name("agregar_admin");
Route:: view("/ver_admin","ver_admin")->name("ver_admin");

Route:: view("/login","login")->name("login");

Route:: view("/agregar_ajuste","agregar_ajuste")->name("agregar_ajuste");
Route:: view("/ver_ajustes","ver_ajustes")->name("ver_ajustes");

Route:: view("/principal","principal")->name("principal");