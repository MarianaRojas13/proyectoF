@extends('layouts/master')
@section('contenido')
<div class="container-fluid ">
    
    <div class="row">
        <h1 class="animate__animated animate__bounce text-center text-primary">¡B i e n v e n i d o!</h1>
        <div class="col-3 text-center mt-4">
            
        <img src="{{asset('img/a.png')}}" width="200">
        <div class="card-footer">
            <button id="registrar-btn" type="button" class="btn btn-info">Producto 1</button>
        </div>
        </div>
        <div class="col-3 text-center mt-4">
            
        <img src="{{asset('img/a.png')}}" width="200">
        <div class="card-footer">
            <button id="registrar-btn" type="button" class="btn btn-info">Producto 2</button>
        </div>
        </div>
        <div class="col-3 text-center mt-4">
            
            <img src="{{asset('img/a.png')}}" width="200">
            <div class="card-footer">
                <button id="registrar-btn" type="button" class="btn btn-info">Producto 3</button>
            </div>
        </div>
        <div class="col-3 text-center mt-4">
            
            <img src="{{asset('img/a.png')}}" width="200">

                <div class="card-footer ">
                    <button id="registrar-btn" type="button" class="btn btn-info">Producto 4</button>
                </div>
        </div>
        <div class="col-3 text-center mt-4">
            
            <img src="{{asset('img/a.png')}}" width="200">

                <div class="card-footer ">
                    <button id="registrar-btn" type="button" class="btn btn-info">Producto 5</button>
                </div>
        </div>
        <div class="col-3 text-center mt-4">
            
            <img src="{{asset('img/a.png')}}" width="200">

                <div class="card-footer ">
                    <button id="registrar-btn" type="button" class="btn btn-info">Producto 6</button>
                </div>
        </div>
        <div class="col-3 text-center mt-4">
            
            <img src="{{asset('img/a.png')}}" width="200">

                <div class="card-footer ">
                    <button id="registrar-btn" type="button" class="btn btn-info">Producto 7</button>
                </div>
        </div>
    </div>
</div>
@endsection
