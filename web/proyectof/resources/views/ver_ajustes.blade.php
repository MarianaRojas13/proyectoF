@extends('layouts/smaster')
@section('contenido')
    
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hower table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr class="table-info">
                        <td>Fecha de ajuste</td>
                        <td>ID Producto</td>
                        <td>Tipo de ajuste</td>
                        <td>Cantidad</td>
                        <td>Motivo</td>
                       
                    </tr>
                </thead>
                <tbody id="tbody-ajuste">

                </tbody>
            </table>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/productosService.js')}}"></script>
    <script src="{{asset('js/servicios/ajustesService.js')}}"></script>
    <script src="{{asset('js/ver_ajuste.js')}}"></script>
@endsection