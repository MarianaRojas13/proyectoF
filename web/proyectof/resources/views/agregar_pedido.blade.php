@extends('layouts/master')
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-primary">
                <span>Agregar Pedido</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre cliente</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="prod-txt" class="form-label">Productos comprados</label>
                    <input type="number" id="prod-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="tipo-select" class="form-label">Tipo</label>
                    <select  id="tipo-select" class="form-select">

                    </select>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" type="button" class="btn btn-info">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection