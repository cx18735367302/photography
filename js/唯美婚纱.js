//固定定位
 $(function(){
 	$(window).scroll(function(){
 		if($(window).scrollTop()>=20){
 			$(".nav").addClass("fix");
 			$(".fullwidthbanner li img").addClass("grey");
 			
 		}else{
 			$(".nav").removeClass("fix");
 			$(".fullwidthbanner li img").removeClass("grey");
 		}
 	});
 });
//固定定位结束
//特惠区
$(function(){
	$(".news_main").animate({
		"bottom":0,
	},2000);//news动画
	
});	
$(function(){
	var num=0;
	$(".left").click(function(){
		num--;
		if(num<0){
			num=2;
		}		
		$("#th").animate({
			"left":-950*num,
		},1000);				
	});
	$(".right").click(function(){
		num++;
		$("#th").animate({
			"left":-950*num,
		},1000);
		if(num>=2){
			num=-1;
		}
	});
//	实现左右轮播效果
});
$(function(){
	$("#th>li").mouseover(function(){
		$(".bd_bot>.sp1").stop().animate({
			"width":20,
		},10);
		$(this).find($(".tu")).stop().animate({
			"width":190,
			"height":190,
			"left":-5,
		},500);
	});
	$("#th>li").mouseout(function(){
		$(".bd_bot>.sp1").stop().animate({
			"width":45,
		},10);
		$(this).find($(".tu")).stop().animate({
			"width":180,
			"height":180,
			"left":0,
		},500);
	});
}); // 文字移动结束
//$(window).ready(function(){
//	$("#th>li").mouseover()
//});
//特惠区结束
//客户案例开始
$(function(){
	$(".fir").mouseover(function(){
		$(this).find("img").removeClass("grey");		
	});
	$(".fir").mouseout(function(){
		$(this).find("img").addClass("grey");
	});
});
$(function(){
	$(".fir").mouseover(function(){
		$(".box").animate({
			"top":35,
		},300);
	});
	$(".fir").mouseout(function(){
		$(".box").animate({
			"top":0,
		},300);
	});
})
//客户案例结束
//动画显示 
$(window).scroll(function(){
	 $(window).ready(function(){
	    if($(window).scrollTop()>=400){
	    	$(".m_top").animate({
	    		"left":0,
	    	},1500)
	    }
    });
});  //客户案例动画显示
$(window).scroll(function(){
	 $(window).ready(function(){
	    if($(window).scrollTop()>=400){
	    	$(".m_mid").animate({
	    		"right":0,
	    	},1500)
	    }
    });
}); //客户案例导航动画显示
$(window).scroll(function(){
	 $(window).ready(function(){
	    if($(window).scrollTop()>=400){
	    	$("#dong1").animate({
	    		"left":0,
	    	},1000)
	    	$("#dong2").animate({
	    		"bottom":0,
	    	},1500)
	    	$("#dong3").animate({
	    		"right":0,
	    	},2000)
	    	$("#dong4").animate({
	    		"left":0,
	    	},2500)
	    	$("#dong5").animate({
	    		"bottom":0,
	    	},3000)
	    	$("#dong6").animate({
	    		"right":0,
	    	},3500)
	    	$(".m_bot>a").animate({
			"right":0,
		     },3500)
	    }
    });
}); // 图片动画显示
$(window).ready(function(){
	 $(window).scroll(function(){
	 	if($(window).scrollTop()>=2000){
	 		$(".all_main").animate({
	 			"left":0,
	 		},3000)
	 	}
	 });
});  //关于我们 动画显示

$(window).ready(function(){
	 $(window).scroll(function(){
	 	if($(window).scrollTop()>=2200){
	 		$(".np").animate({
	 			"left":0,
	 		},2000)
	 		$(".np1").animate({
	 			"right":0,
	 		},2000)
	 	}
	 });
	 $(window).scroll(function(){
	 	if($(window).scrollTop()>=2200){
	 		$("#hua1").animate({
	 			"bottom":0,
	 		},1000)
	 		$("#hua2").animate({
	 			"bottom":0,
	 		},1500)
	 		$("#hua3").animate({
	 			"bottom":0,
	 		},2000)
	 		$("#hua4").animate({
	 			"bottom":0,
	 		},2500)
	 		$(".new_main>a").animate({
	 			"left":0,
	 		},3000)
	 	}
	 })
});//新闻动画显示
$(window).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=2500){
			$(".bot_t").animate({
				"top":0,
			},2000);
			$(".bot_m>ul").animate({
				"left":0,
			},2000);
			$(".m_r").animate({
				"right":0,
			},2000)
		}
	})
});
//动画结束
//表单元素开始
$(function(){
	$(".name>input").blur(function(){
		if((this).value!=""){
			$(this).next().text("正确").css("color","green")
		}else{
			$(this).next().text("亲，请填写姓名！").css("color","red")
		}
	});	
}) //姓名表单验证
$(function(){
	$(".pho>input").blur(function(){
		var pho=$(".pho>input");
		var phoValue=pho.val();
		var reg=/^[1][3,5,6,7,8]\d{9}$/;	
			if(reg.test(phoValue)){				
				$(this).next().text("正确").css("color","green");
				return true;
			}else{			
				$(this).next().text("亲，请填写正确手机号哟！").css("color","red");
				return false;
			}
	});
});  //手机号表单验证
$(function(){
	$(".email>input").blur(function(){
		var email=$(".email>input");
		var emailValue=email.val();
		var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;	
			if(reg1.test(emailValue)){				
				$(this).next().text("正确").css("color","green");
				return true;
			}else{			
				$(this).next().text("亲，请填写正确邮箱哟！").css("color","red");
				return false;
			}
	});
}); //邮箱表单验证
$(function(){
	$(".tit>input").blur(function(){
		if((this).value!=""){
			$(this).next().text("正确").css("color","green")
		}else{
			$(this).next().text("亲，请填写标题！").css("color","red")
		}
	});	
})//留言标题
$(function(){
	$(".con>input").blur(function(){
		if((this).value!=""){
			$(this).next().text("正确").css("color","green")
		}else{
			$(this).next().text("亲，请填写您要留的内容！").css("color","red")
		}
	});	
})
//表单元素结束
//回到顶部开始
$(function(){
	$(".fixx").click(function(){
		$("html,body").animate({
			"scrollTop":0,
		},500);
	});
});

//回到顶部结束
