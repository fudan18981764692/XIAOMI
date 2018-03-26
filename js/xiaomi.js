/* ====================== 顶部特效start =======================*/
	$(".top li a").hover(function(){
		$(this).css("color","#fff");
	},function(){
		$(this).css("color","'#a4b094'");
	});
	/* ====================== 购物车特效start =======================*/
	$("#shopCar").mouseover(function(){
		$(this).css({background:"#fff",color:"#ff6700"});
		$(".goods").stop(true,false).slideDown();
	}).mouseout(function(){
		$(this).css({background:"#a4b094",color:"#424242"});
		$(".goods").stop(true,false).slideUp();
	})
		/* ====================== 头部特效start =======================*/
	/* ====================== 输入框特效start =======================*/

		var flagSer=1;
		$('.ser1').mouseover(function(){
			if(flagSer){
				$('.ser1 input').css({border:'1px solid #c0c0c0',borderRight:'none'});
				$('.ser2').css('border','1px solid #c0c0c0');
			}
		}).mouseout(function(){
			if(flagSer){
				$('.ser1 input').css({border:'1px solid #e0e0e0',borderRight:'none'});
				$('.ser2').css('border','1px solid #e0e0e0');
			}
		});

		$('.a a').mouseover(function(){
			$(this).css({color:'#fff',background:'#FF6700'});
		}).mouseout(function(){
			$(this).css({color:'#757575',background:'#eee'});
		});

		$('.ser2').mouseover(function(){
			if(flagSer){
				$('.ser1 input').css({border:'1px solid #c0c0c0',borderRight:'none'});
			}
			$(this).css({color:'#fff',width:'52px',height:'52px',border:'none', background:'#ff6700'});
		}).mouseout(function(){
			if(flagSer){
				$(this).css({color:'#616161',width:'50px',height:'50px',background:'#fff',border:'1px solid #e0e0e0'});
				$('.ser1 input').css({border:'1px solid #e0e0e0',borderRight:'none'});
			}else{
				$(this).css({color:'#616161',width:'50px',height:'50px',background:'#fff',border:'1px solid #ff6700'});
			}
		});
		
		$(".ser1 input").focus(function(){
			flagSer=0;
			$(".a").addClass("hide");
			$(".keywordList").removeClass("hide");
			$(this).css("border","1px solid #ff6700");
			$(".ser2").css({border:"1px solid #ff6700",borderLeft:"none"});
			$(".keywordList").css("border","1px solid #ff6700");
		}).blur(function(){
			flagSer=1;
			$(".a").removeClass("hide");
			$(".keywordList").addClass("hide");
			$(".ser2").css("border","1px solid #e0e0e0");
			$(this).css("border","1px solid #e0e0e0");
		});
			/* ====================== 下拉列表特效start =======================*/
		
		$('.nav li').mouseover(function(){
				$(this).children('a').css('color','#FF6700');
				if($(this).index()<7){
				$('.select').removeClass('hide');
				$(".select").slideDown().finish();		 
				$(".select").find("ul").addClass("hide");
				$(".select").find("ul").eq($(this).index()).removeClass("hide");
				}
			}).mouseout(function(){
				$(this).children("a").css("color","#333");
			})
			$(".nav").mouseout(function(){
				$(".select").slideUp();
			})
			$(".select").find("ul").mouseover(function(){
				$(".selcet").slideDown().finish();
			}).mouseout(function(){
			$('.select').slideUp();
		});
			/* ====================== 主内容特效start =======================*/
	/* ====================== 轮播图特效start =======================*/
var num=-1;
	var clock;
	var n=1;
	displayImg();
	clock=setInterval('displayImg()',4000);  

	$('.banner>img').mouseover(function(){
		clearInterval(clock);
	}).mouseout(function(){
		clock=setInterval(displayImg,4000);
	});

	$('.direc').mouseover(function(){
		$(this).css('background','#77787A');
	}).mouseout(function(){
		$(this).css('background','transparent');
	});

	$('.direc-L').click(function(){
		n=-1;
		displayImg();
		n=1;
	});
	$('.direc-R').click(function(){
		n=1;
		displayImg();
	});

	$('.round li').mouseover(function(){
		$(this).css({background:'#fff',opacity:'0.6'});
	}).mouseout(function(){
		$(this).css({background:'#342416',opacity:'0.8'});
	}).click(function(){
		num=$(this).index()-1;
		displayImg();
	});

	function displayImg(){
		num=num+n;
		if(num>4){
			num=0;
		}else if(num<0){
			num=4;
		}
		$('.banner>img').fadeOut();
		$('.banner>img').eq(num).fadeIn();
		$('.round li').css({background:'#342416',opacity:'0.8'});
		$('.round li').eq(num).css({background:'#fff',opacity:'0.6'});
	}
	/* ====================== 轮播图区域下方列表特效end =======================*/
			$('.miniLink li a').hover(function(){
			$(this).css('color','#fff');
		},function(){
			$(this).css('color','#cfcdcb');
		});
		/* ====================== 左边隐藏列表特效start =======================*/
		$(".navL li").mouseover(function(){
			$(this).css("background","#ff6700");
				$('.navHide').removeClass('hide');
			$('.ulHide').addClass('hide');
			$(".ulHide").eq($(this).index()).removeClass("hide");
			
		}).mouseout(function(){
			$(this).css('background','transparent');    //注意这里的颜色
		});
			$('.navL').mouseout(function(){
			$('.navHide').addClass('hide');
				});
			$('.ulHide').mouseover(function(){
					$('.navHide').removeClass('hide');
					$('.navL li').eq($(this).index()).css('background','#ff6700');
				}).mouseout(function(){
				$('.navHide').addClass('hide');
				$('.navL li').eq($(this).index()).css('background','transparent');
				});
	$(".ulHide li p").hover(function(){
		$(this).css("color","#ff6700");
	},function(){
	$(this).css("color","#333");
	})
	$(".ulHide li .buy").hover(function(){
		$(this).css({background:"#ff6700",color:"#fff"});
	},function(){
		$(this).css({background:"#fff",color:"#ff6700"});
		})

		/* ====================== 明星单品特效start =======================*/
var clockLR;
$('.p').mouseover(function(){
    clearInterval(clockLR);
}).mouseout(function(){
    clockLR=setInterval(autoLR,10000);
});
//向左翻页
$('.prev').mouseover(function(){
    if($('.scroll').css('left')!='0px'){
        $(this).css({color:'#ff6700',cursor:'pointer'});
    }
}).click(function(){
    // console.log($('.scroll').css('left'));
    if($('.scroll').css('left')!='0px'){
        $('.scroll').css('left','0px');
        $(this).css({color:'#dfdfe0',cursor:'default'});
        $('.next').css('color','#b0b4bc');
        // console.log($('.scroll').css('left'));
    }
}).mouseout(function(){
    if($('.scroll').css('left')!='0px'){
        $(this).css('color','#b0b4bc');
    }else{
        $(this).css('color','#dfdfe0');
    }
});

//向右翻页
$('.next').mouseover(function(){
    if($('.scroll').css('left')=='0px'){
        $(this).css({color:'#ff6700',cursor:'pointer'});
    }
}).click(function(){
    if($('.scroll').css('left')=='0px'){
        $('.scroll').css('left','-100%');
        $(this).css({color:'#dfdfe0',cursor:'default'});
        $('.prev').css('color','#b0b4bc');
        // console.log($('.scroll').css('left'));
    }
}).mouseout(function(){
    if($('.scroll').css('left')=='0px'){
        $(this).css('color','#b0b4bc');
    }else{
        $(this).css('color','#dfdfe0');
    }
});

//自动轮播
clockLR=setInterval(autoLR,10000);

function autoLR(){
    if($('.scroll').css('left')!='0px'){
        $('.scroll').css('left','0px');
    }else if($('.scroll').css('left')=='0px'){
        $('.scroll').css('left','-100%');
    }
}

/* ====================== 其他分类右边公用特效 start =======================*/
$(".ProLi>li").hover(function(){
	$(this).find(".slideDiv").stop(true,false).slideDown("fast");
    if($(this).index()!=7){
        $(this).css({marginTop:'12px','box-shadow':'0px 0px 28px #aaa'});
    }
},function(){
$(this).find(".slideDiv").stop(true,false).slideUp("fast");
	if($(this).index()!=7){
		$(this).css({
		marginTop:"10",boxShadow:"none"
		})
	}
});
$('.twoRow li').mouseover(function(){
			if($(this).index()==0){
				$(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'});
				$(this).next().css('marginTop','16px');
			}
			else{
				$(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'});
			}
		}).mouseout(function(){
			if($(this).index()==0){
				$(this).css({marginTop:'14px',boxShadow:'0 0 28px #aaa'});
				$(this).next().css('marginTop','14px');
			}
			else{
				$(this).css({marginTop:'14px',boxShadow:'none'});
			}
		});

		function displayList(obj1,s1,obj2){
			obj1.find(s1).mouseover(function(){
				var a=$(this).index();
				obj1.find(s1).css({color:'#000',borderBottom:'none'});
				$(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'});
				obj2.addClass('hide');
				obj2.eq(a).removeClass('hide');
			});
			return;
		}
	/* ====================== 4.2 搭配  特效start =======================*/
		displayList($('.list41'),'li',$('.productR2>ul'));	
	/* ====================== 4.3 配件  特效start =======================*/
		displayList($('.list1'),'li',$('.productR3>ul'));
	/* ====================== 4.4 周边  特效end =======================*/
		displayList($('.list5'),'li',$('.productR4>ul'));


/*4.5 为你推荐  特效start */
$(".scroll2 li").find("img").hover(function(){
	$(this).css({marginTop:50})
},function(){
    $(this).css({marginTop:48})
})
//上一页
$(".prev2").mouseover(function(){
	if($(".scroll2").css("left")!="0px"){
		$(this).css({color:'#ff6700',cursor:"pointer"})
	}else{
		$(this).css({color:"#dfdfe0"})
	}
}).click(function(){
	if($(".scroll2").css("left")!="0px"){
        $(this).css('left',parseInt($('.scroll2').css("left")+1226+"px"));
        if($(".scroll2").css("left")!="-3678px"){
        	$('.next2').css({color:'#b0b4bc'})
		}
	}else{
        $(this).css({color:'#dfdfe0'})
	}
})
	.mouseout(function(){
	if($(".scroll2").css("left")!="0px"){
        $(this).css({color:"#b0b4bc"})
	}else{
        $(this).css({color:"#dfdfe0"})
	}
})
//下一页
$(".next2").mouseover(function(){
	if($('.scroll2').css("left")!="-3678px") {
        $(this).css({color: '#ff6700', cursor: "pointer"})
    }
})
	.click(function(){
        $(this).css('left',parseInt($('.scroll2').css("left")-1226+"px"));
        if($(".scroll2").css("left")!="0px"){
            $('.prev2').css({color: '#b0b4bc'})
		}
        if($(".scroll2").css("left")!="-3678px"){
            $(this).css({color: '#dfdfe0',cursor:"default"})
		}
	})
	.mouseout(function(){
        if($('.scroll2').css("left")!=="-3678px") {
            $(this).css({color: '#b0b4bc'})
        }else{
            $(this).css({color:"#dfdfe0"})
		}
	})
