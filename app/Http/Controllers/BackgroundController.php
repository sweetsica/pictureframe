<?php

namespace App\Http\Controllers;

use App\Models\Background;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;

class BackgroundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function index()
    {
        $data['backgrounds'] = Background::all();
        return view('backend.background.index',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['title']='Thêm sản phẩm';
        return view('backend.background.create',$data);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $background = Background::create($request->all());
        if($request->hasFile('background_image')){
            $file = $request->file('background_image');
            $filename = time().'.'.$file->getClientOriginalExtension();
            $location = public_path('gallery/background/images');
            $file->move($location,$filename);
            $background->background_image = $filename;
        }
        $background->save();
        Session::flash('message','Đăng sản phẩm thành công!');
        return view('backend.background.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['background']=Background::findorFail($id);
        return view('backend.background.details',$data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['background']=Background::findorFail($id);
        return view('backend.background.edit',$data);
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
        $background = Background::findOrFail($id);//lấy thông tin sản phẩm
        $oldImage=$background->background_image;//lấy giá trị ảnh cũ
        if ($request->hasFile('background_image')){
            File::delete(public_path('gallery/background/images/'.$oldImage));

            $file = $request->file('background_image');
            $filename = time().'.'.$file->getClientOriginalExtension();
            $location = public_path('gallery/background/images/');

            $file->move($location,$filename);
            $newImage = $filename;

        }//sửa đường dẫn ảnh trên host+ xóa ảnh
        $background->fill($input);//thay dữ liệu lấy về => thông tin request
        if(isset($newImage)){
            $background->background_image=$newImage;
        }
        $background->save();//lưu lên db confirm

        Session::flash('message', 'Cập nhật sản phẩm thành công!');
        return redirect()->route("background.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Background::findorFail($id);
        $post->delete();
        return redirect()->route("backend.background.index");
    }
}
