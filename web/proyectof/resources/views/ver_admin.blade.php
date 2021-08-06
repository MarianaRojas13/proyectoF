@extends('layouts/master')
@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hower table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr class="table-info">
                        <td>Nombre</td>
                        <td>Codigo</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-admin">

                </tbody>
            </table>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/adminService.js')}}"></script>
    <script src="{{asset('js/ver_admin.js')}}"></script>
@endsection