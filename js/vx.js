$(function(){
//	获取品屏幕的宽高
	var width=window.innerWidth;
	var height=window.innerHeight;
	var nowpage=0;
	$(".content").width(width);
	$(".content").height(4*height)
	
	$(".page").width(width);
	$(".page").height(height);
//	不是jquery原生自带的
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,figureout){
//		console.log(direction);

        if(direction=="up"){
        	nowpage++;
        }
         if(direction=="down"){
        	nowpage--;
        }
         if(nowpage>3){
         	nowpage=3;
         }
         else if(nowpage<0){
         	nowpage=0;
         }
       
        //	animate({要做的动画},{duration:时长,完成后要做的事情})
     $(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
     	if(nowpage==1){
     	$(".page2-farm").fadeIn(2000,function(){
		$(".page2-it").fadeIn(2000)});
     	}
     	if(nowpage==2){
     	$(".page3-earlytitle").fadeIn(2000,function(){
		$(".page3-lasttitle").fadeIn(2000)});
	   $(".page3-bus").animate({left:"-100%"},{duration:2000});
	   $(".page3-avatar").animate({left:"-100%"},{duration:4000,complete:function(){
	   	    $(".page3-earlytitle").fadeOut(2000);
	   	    $(".page3-station").fadeOut(2000);
	   	    $(".page3-lasttitle").fadeOut(2000,function(){
	   	    $(".page3-wall").fadeIn(2000);
	   	    $(".page3-myteamavatar").fadeIn(2000,function(){
	   	    
	   	    	$(".page3-txt").animate({width:"50%"},{duration:400,complete:function(){
	   	    		$(".page3-space").animate({width:"30%"},{duration:400})
	   	    	}});
	   	  });
	   	 });   
	   }});
     	}
     	if(nowpage==3){
     		$(".page4-lightoff").click(function(){
     			$(".page4-cornertitle").fadeOut(2000);
    	 $(".page4-click").fadeOut(2000);
    	$(".page4-lightoffbg").fadeOut(2000);
    	$(".page4-lightoff").fadeOut(2000);
//  	$(".page4-cornertitle").fadeOut(slow);
//  	 $(".page4-click").fadeOut(slow);
//  	$(".page4-lightoffbg").fadeOut(slow);
//  	$(".page4-lightoff").fadeOut(slow);  
})
//  	$(".page4-lightoff").fadeOut(2000,function(){
//  		$(".page4-lightonbg").fadeIn(2000);
//  		$(".page4-lighton").fadeIn(2000);
//  		$(".page4-weknowyou").fadeIn(2000);
//  	});
 
     	}
     }})
		}
	});
	$(".page1-building").fadeIn(4000,function(){
		$(".page1-flight").animate({width:"70%"},{duration:4000})
	});
 
})
  
//$(document).ready(function(){
//	
//})

$(".musicbtn").click(function(){
	var music=$("#music")[0];//document.getelementbyid("#.music")
	if(music.paused){
		music.play();
		$(this).attr("src","img/musicBtn.png");
	}
	else{
		music.pause;
		$(this).attr("src","img/musicBtnOff.png");
	}
	
})