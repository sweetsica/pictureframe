@extends('masterlayout.master');
@section('custom-css')
    <style>
    .mdi-pencil-box{
        display: list-item!important;
    }
    .prj-item .top-project-section{
        height: 430px!important;
    }

    .prj-item .project-icon img {
        max-width: 260px!important;
    }

    .prj-item .project-icon {
        height: 300px;
        display: table-cell;
        vertical-align: middle;
        width: 50%;
        margin: 0px auto;
    }
    </style>
    <script>
        $(document).ready(function(){
            $('.mdi-pencil-box').css("display","list-item!important");
        });
    </script>
@endsection
@section('body')
    <div id="wrapper">
        <div class="main-content">
            <div class="prj-header margin-bottom-30">
                <a href="#" class="btn btn-info btn-submit-prj btn-sm waves-effect waves-light">Submit Project</a>
                <div class="result-count">130 Projects</div>
                <!-- /.result-count -->
                <ul class="filters">
                    <li><a class="active" href="#">All</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">API Wrappers</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
                <!-- /.filters -->
            </div>
            <!-- /.prj-header -->

            <div class="prj-list row">
                @foreach($products as $product)
                    <?php
                    //                    dump($product);
                    ?>
                <div class="col-lg-4 col-md-6 col-xs-12 margin-bottom-30">
                    <a href="{{route('product.edit',$product->id)}}" class="prj-item">
                        <div class="top-project-section">
                            <div class="project-icon">
                                <div class="custom-3">
                                    <img src="{{asset('gallery/product/images/'.$product->product_image)}}" alt="">
                                </div>
                            </div>
                            <h3>{{$product->product_name}}</h3>
                            <div class="meta">
                                <p class="author">
                                    Price: {{$product->product_price}}
                                </p>
                            </div>
                        </div>
                        <div class="bottom-project-section">
                            <div class="meta">
                                <div class="points">
                                    <i class="fa fa-heart-o"></i> 407
                                </div>
                                <div class="views">
                                    <i class="fa fa-eye"></i> 40.6k
                                </div>
                                <span class="feedable-time timeago">2 years ago</span>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach

            </div>
            <!-- .prj-list row -->
            <div class="text-center">
                <a href="#" class="btn btn-success">Load More Results</a>
            </div>
            <footer class="footer">
                <ul class="list-inline">
                    <li>2016 © NinjaAdmin.</li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </footer>
        </div>
        <!-- /.main-content -->
    </div><!--/#wrapper -->

@endsection
