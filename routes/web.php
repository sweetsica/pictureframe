<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers as Controllers;
//use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::prefix('admin')->group(function () {
    Route::get('/home', function () {
        return view('backend.index');
    })->name('dashboard');

    Route::resource('/product', Controllers\ProductController::class);
    Route::resource('/background', Controllers\BackgroundController::class);
    Route::resource('/frame', Controllers\FrameController::class);
});

Route::get('/', function () {
    return view('frontend.index');
});

Route::get('/test', function () {
    $canvases = \App\Models\Frame::where('frame_type','=','canvas')->get();
    $data = [];

    foreach ($canvases as $canvas)
    {
        $data[1][$canvas->frame_size][$canvas->frame_depth]['price']= $canvas->price;
        $data[1][$canvas->frame_size][$canvas->frame_depth]['msrp']= $canvas->msrp;
        $data[1][$canvas->frame_size][$canvas->frame_depth]['code']= $canvas->frame_name;
        $data[1][$canvas->frame_size][$canvas->frame_depth]['id']= $canvas->id;
        $data[1][$canvas->frame_size][$canvas->frame_depth]['group']= '{"0": "default", "1": "advanced"}';
    }
    return view('frontend.index_data')->with('canvases',$data);
});

