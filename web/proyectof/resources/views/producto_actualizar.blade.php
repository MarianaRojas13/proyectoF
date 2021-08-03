@extends('layouts/master')

@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-primary">
                <span>Actualizar Productos</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nombre-txt"  class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="precio-txt" class="form-label">Precio</label>
                    <input type="number" id="precio-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="stock-txt" class="form-label">Stock</label>
                    <input type="number" id="stock-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="tipo-select" class="form-label">Tipo</label>
                    <select  id="tipo-select" class="form-select">

                    </select>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" type="button" class="btn btn-info">Modificar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/productosService.js')}}"></script>
    <script src="{{asset('js/producto_venta.js')}}"></script>
@endsection