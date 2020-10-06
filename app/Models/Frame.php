<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Frame extends Model
{
    use HasFactory;
    protected $guarded=[''];

    public function product()
    {
        return $this->hasOne('App\Models\Product','id','frame_product_id');
    }
}
