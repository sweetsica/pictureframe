<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFramesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frames', function (Blueprint $table) {
            $table->id();
            $table->string('frame_name');

            $table->string('frame_type');
            $table->string('frame_shortname')->nullable();
            $table->string('frame_size');
            $table->string('frame_depth');
            $table->string('price');
            $table->string('msrp');
            $table->string('groups')->default('{"0": "default", "1": "advanced"}');

            $table->text('frame_link');
            $table->integer('frame_product_id');
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
        Schema::dropIfExists('frames');
    }
}
