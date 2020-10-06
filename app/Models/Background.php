<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Background extends Model
{
    use HasFactory;

    protected $guarded=[''];
    public function product()
    {
        return $this->hasOne('App\Models\Product','id','background_product_id');
    }
}
