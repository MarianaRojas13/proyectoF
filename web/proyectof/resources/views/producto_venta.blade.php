@extends('layouts/smaster')
@section('contenido')
    <div class="row mt-2">
        <div class="col-12 col-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-info text-white">
                    <span>Filtrar</span>
                </div>
                <div class="card-body" >
                    <select class="form-select" id="filtro">
                        <option value="todos">Todos</option>
                    </select>    
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hower table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr class="table-info">
                        <td>ID Producto</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Stock</td>
                        <td>Tipo</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-producto">

                </tbody>
            </table>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/productosService.js')}}"></script>
    <script src="{{asset('js/servicios/producServices.js')}}"></script>
    <script src="{{asset('js/producto_venta.js')}}"></script>
@endsection