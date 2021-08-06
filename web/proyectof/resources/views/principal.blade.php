@extends('layouts/master')
@section('contenido')
<div class="container con">
    
  
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        
       <img src="{{asset('img/i.png')}}" alt="">
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/clientesService.js')}}"></script>
    <script src="{{asset('js/ver_cliente.js')}}"></script>
@endsection