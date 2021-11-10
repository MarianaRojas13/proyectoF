@extends('layouts/smaster')

@section('contenido')
<div class="container-fluid ">
    <h1 class="animate__animated animate__bounce text-center text-primary"></h1>
    <div class="row" >
        <div class="container-fluid">
        <img id="img" src="" alt="">
        <div class="mx-auto col-auto p-5 mt-5 " id="body-producto">
            
             <div class="card-footer" id="boton-compra">
            
            </div>
        </div>    
        </div>

       
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/productosService.js')}}"></script>
    <script src="{{asset('js/crear_producto_pag_principal.js')}}"></script>
@endsection