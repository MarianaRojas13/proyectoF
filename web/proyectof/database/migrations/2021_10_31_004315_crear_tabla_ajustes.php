<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaAjustes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ajustes', function (Blueprint $table) {
            $table->id();
            $table->date("fecha");
            $table->string("tipoajuste",50);
            $table->integer("cantidad")->unsigned();
            $table->string("motivo",200);
            $table->bigInteger("ID_Producto")->unsigned();
            $table->foreign("ID_Producto")->references("id")->on("productos")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ajustes');
    }
}
