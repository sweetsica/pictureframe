<?php

namespace Database\Seeders;

use App\Models\Frame;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class FrameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $canvases = array(
            array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-12x8',
                'frame_size'       => '12x8',
                'frame_depth'      => '3',
                'price'            => '59.99',
                'msrp'             => '76.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-18x12',
                'frame_size'       => '18x12',
                'frame_depth'      => '3',
                'price'            => '79.99',
                'msrp'             => '98.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-18x12',
                'frame_size'       => '18x12',
                'frame_depth'      => '6',
                'price'            => '89.99',
                'msrp'             => '156.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-26x18',
                'frame_size'       => '26x18',
                'frame_depth'  => '3',
                'price'      => '79.99',
                'msrp'       => '98.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-26x18',
                'frame_size'       => '26x18',
                'frame_depth'  => '6',
                'price'      => '89.99',
                'msrp'       => '156.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-40x26',
                'frame_size'       => '40x26',
                'frame_depth'  => '3',
                'price'      => '79.99',
                'msrp'       => '98.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ), array(
                'frame_type' => 'canvas',
                'frame_name'       => 'canvas-size-40x26',
                'frame_size'       => '40x26',
                'frame_depth'  => '6',
                'price'      => '89.99',
                'msrp'       => '156.00',
                'frame_link'       => 'unknown',
                'frame_product_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            )
        );
        Frame::insert($canvases);
    }
}
