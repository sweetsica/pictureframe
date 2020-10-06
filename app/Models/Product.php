<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded=[''];

    public function frames()
    {
        return $this->hasMany(Frame::class,'frame_product_id','id');
    }

    public function backgrounds()
    {
        return $this->hasMany(Background::class,'background_product_id','id');
    }
}
