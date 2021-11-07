<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ajuste extends Model
{
    use HasFactory;
    protected $table = 'ajustes';
    protected $primaryKey = 'fecha';
    
    public function producto(){
        return $this->belongsTo("App/Models/Producto","ID_Producto");
    }
}
