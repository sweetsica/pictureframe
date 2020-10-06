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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {
    Route::get('/home', function () {
        return view('backend.index');
    })->name('dashboard');

    Route::resource('/product', Controllers\ProductController::class);
    Route::resource('/background', Controllers\BackgroundController::class);
    Route::resource('/frame', Controllers\FrameController::class);
});

