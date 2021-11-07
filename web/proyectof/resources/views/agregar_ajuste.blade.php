@extends('layouts/smaster')

@section('contenido')

<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-primary">
                <span>Agregar Ajuste</span>
            </div>
            <div class="card-body">
                
                
                <div class="mb-3">
                    <label for="id-producto" class="form-label">ID Producto</label>
                    <select  id="id-producto"></select>
                </div>
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cantidad-txt" class="form-label">Cantidad</label>
                    <input type="number" id="cantidad-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="tipo-ajuste" class="form-label">Tipo ajuste</label>
                    <input type="text" id="tipo-ajuste" class="form-control">

                    <label for="motivo-txt" class="form-label">Motivo</label>
                    <textarea id="motivo-txt" class="form-control">

                    </textarea>
                
                   
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="agregar-btn" type="button" class="btn btn-info">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/productosService.js')}}"></script>
    <script src="{{asset('js/servicios/ajustesService.js')}}"></script>
    <script src="{{asset('js/agregar_ajustes.js')}}"></script>
@endsection