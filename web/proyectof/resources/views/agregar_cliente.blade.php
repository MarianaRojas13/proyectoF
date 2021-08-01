@extends('layouts/master')
@section('contenido')

  <div class="row mt-5 ">
      <div class="col-12 col-md-6 col-lg-5 mx-auto">
          <div class="card">
              <div class="card-header bg-primary">
                  <span><ion-icon name="person-add-outline"></ion-icon> Agregar Cliente</span>
              </div>
              <div class="card-body">
                  <div class="mb-3">
                      <label for="nombre-txt" class="form-label">Nombre</label>
                      <input type="text" id="nombre-txt" class="form-control">
                  </div>
                  <div class="mb-3">
                    <ion-icon name="call-outline"></ion-icon>
                      <label for="fono-txt" class="form-label">Telefono</label>
                      <input type="number" id="fono-txt" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="direccion-txt" class="form-label">Dirección</label>
                    <input type="text" id="direccion-txt" class="form-control">
                </div>
                  <div class="mb-3">
                      <label for="nomP-txt" class="form-label">Nombre Producto Comprado</label>
                      <input type="text" id="nomP-txt" class="form-control">
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
    <script src="{{asset('js/servicios/clientesService.js')}}"></script>
    <script src="{{asset('js/agregar_cliente.js')}}"></script>
@endsection