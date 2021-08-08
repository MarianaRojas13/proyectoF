<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
  <!--  <link rel="stylesheet" href="sortable-theme-dark.css" />-->
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>ElefanteAzull</title>
  </head>
  
  <body>
    <header class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="{{route('principal')}}"> <img src="{{asset('img/icono.png')}}" class="logo"> ElefanteAzull</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link " aria-current="page" href="{{route('agregar_producto')}}">Registrar Productos</a>
                  <a class="nav-link " href="{{route('agregar_cliente')}}" >Registrar Clientes</a>
                  <a class="nav-link " href="{{route('ver_cliente')}}" >Ver Clientes</a>
                  <a class="nav-link " href="{{route('producto_venta')}}" >Ver Productos</a>
                  <a class="nav-link " href="{{route('agregar_pedido')}}" >Registrar Pedido</a>
                  <a class="nav-link " href="{{route('ver_pedido')}}" >Ver Pedido</a>

                  <a class="nav-link " href="{{route('agregar_admin')}}" >Administración</a>
                  <a class="nav-link " href="{{route('ver_admin')}}" >ver admins</a>
                </div>
              </div>
            </div>
          </nav>
    </header>
    <main class="container-fluid">
        @yield('contenido')
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 <!--   <script src="src/loadingOverlay.js"></script>-->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{asset('js/axios_config.js')}}"></script>
    @yield('javascript')
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>