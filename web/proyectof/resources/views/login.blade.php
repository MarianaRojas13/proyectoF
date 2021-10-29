@extends('layouts/master')

@section('contenido')

<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-primary text-center">
                <span>LOGIN</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cod-txt" class="form-label">Ingrese codigo</label>
                    <input type="password" id="cod-txt" class="form-control">
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="ingresar-btn" type="button" class="btn btn-info">Ingresar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
   <script src="{{asset('js/servicios/adminService.js')}}"></script>
    <script src="{{asset('js/login.js')}}"></script>
@endsection