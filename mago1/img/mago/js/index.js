//头部搜索框的显示产品的点击事件
$("#mango-header").load("header.html",()=>{

$(".hd-search .icon-protype").click(function(){

       if($(".hd-wrap .hd-search .drop-down-list").css("display")=="none"){
           $(".hd-wrap .hd-search .drop-down-list").fadeIn();
       }else{
           $(".hd-wrap .hd-search .drop-down-list").fadeOut();
       }
   });


})
	
   

//轮播效果
$(()=>{
    var length=$(" .slider-pic li").length;
    var index=$(" .slider-pic li").index();
    $(" .slider-pic li").eq(0).show().siblings().hide();
    //点小圆点实现轮播
    $(" .slider-num ul").on("click","li",function(){
        var index=$(this).index();
        $(" .slider-pic li").eq(index).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    });
    function moveLeft(){
        index++;
        if(index==length){
            index=0;
        }
        $(" .slider-pic li").eq(index).show().siblings().hide();

    }
   var timer=setInterval(moveLeft,4000);
   $(" .slider-pic li").hover(function(){
       clearInterval(timer);
   },function(){
       timer=setInterval(moveLeft,4000);
   });
});
//底部 点击+显示 列表
$("#ad").click(function(){
   if($("#list").css("display")=="none"){
        $("#list").css("display","block");
       $("#ad").html("-");
    }else{

       $("#list").css("display","none")
     }

})
// $("#ad").click(function(){
//     $("#list").toggle(function(){
//         $("#list").css("display","none")
//     },function(){
//         $("#list").css("display","block")
//     })
// })
