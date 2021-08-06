@extends('layouts/master')

@section('contenido')

<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-primary">
                <span>Agregar Administradora</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cod-txt" class="form-label">Ingrese codigo de admin</label><!--Codigo que da la jefa-->
                    <input type="number" id="cod-txt" class="form-control">
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" type="button" class="btn btn-info">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/adminService.js')}}"></script>
    <script src="{{asset('js/agregar_admin.js')}}"></script>
@endsection