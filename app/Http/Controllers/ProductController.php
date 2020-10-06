<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Symfony\Component\Console\Input\Input;



class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['products'] = Product::all();
        return view('backend.product.index',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['title']='Thêm sản phẩm';
        return view('backend.product.create',$data);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $product = Product::create($request->all());
       if($request->hasFile('product_image')){
           $file = $request->file('product_image');
           $filename = time().'.'.$file->getClientOriginalExtension();
           $location = public_path('gallery/product/images');
           $file->move($location,$filename);
           $product->product_image = $filename;
       }
       $product->save();
       Session::flash('message','Đăng sản phẩm thành công!');
       return view('backend.product.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['product']=Product::findorFail($id);
        return view('backend.product.details',$data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['product']=Product::findorFail($id);
        return view('backend.product.edit',$data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();//nhận toàn bộ request
        $product = Product::findOrFail($id);//lấy thông tin sản phẩm
        $oldImage=$product->product_image;//lấy giá trị ảnh cũ
        if ($request->hasFile('product_image')){
            File::delete(public_path('gallery/product/images/'.$oldImage));

            $file = $request->file('product_image');
            $filename = time().'.'.$file->getClientOriginalExtension();
            $location = public_path('gallery/product/images/');

            $file->move($location,$filename);
            $newImage = $filename;

        }//sửa đường dẫn ảnh trên host+ xóa ảnh
        $product->fill($input);//thay dữ liệu lấy về => thông tin request
        if(isset($newImage)){
            $product->product_image=$newImage;
        }
        $product->save();//lưu lên db confirm
        
        Session::flash('message', 'Cập nhật sản phẩm thành công!');
        return redirect()->route("product.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Product::findorFail($id);
        $post->delete();
        return redirect()->route("backend.product.index");
    }
}
