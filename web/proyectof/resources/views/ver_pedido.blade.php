@extends('layouts/master')
@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hower table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr class="table-info">
                        <td>Nombre cliente</td>
                        <td>Fecha pedido</td>
                        <td>Nombre productos comprados</td>
                        <td>Cantidad de productos comprados</td>
                        <td>Tipo</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-pedido">

                </tbody>
            </table>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/pedidosService.js')}}"></script>
    <script src="{{asset('js/ver_pedido.js')}}"></script>
@endsection