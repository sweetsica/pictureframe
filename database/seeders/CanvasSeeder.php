<?php

namespace Database\Seeders;

use App\Models\Canvas;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CanvasSeeder extends Seeder
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
                'size'       => '12x8',
                'thickness'  => '3',
                'price'      => '59.99',
                'msrp'       => '76.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '18x12',
                'thickness'  => '3',
                'price'      => '79.99',
                'msrp'       => '98.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '18x12',
                'thickness'  => '6',
                'price'      => '89.99',
                'msrp'       => '156.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '26x18',
                'thickness'  => '3',
                'price'      => '79.99',
                'msrp'       => '98.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '26x18',
                'thickness'  => '6',
                'price'      => '89.99',
                'msrp'       => '156.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '40x26',
                'thickness'  => '3',
                'price'      => '79.99',
                'msrp'       => '98.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),array(
               'size'       => '40x26',
                'thickness'  => '6',
                'price'      => '89.99',
                'msrp'       => '156.00',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            )
        );
        Canvas::insert($canvases);
    }
}
