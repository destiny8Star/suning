{
	var img=document.querySelectorAll(".imgbox li");
	var dian=document.querySelectorAll(".pagebox li");
	var  banner=document.querySelector(".banner_mi");
	var left=document.querySelector(".banner_mijiantou2");
	var right=document.querySelector(".banner_mijiantou1");

	  dian.forEach(function(ele,index){
         ele.onmouseenter=function(){
         	for(let i=0;i<dian.length;i++){
         			img[i].classList.remove("active");
         			dian[i].classList.remove("active");
         	}
         	this.classList.add("active");
         	img[index].classList.add("active");
         	n=index;
         }
	});
	let n=0;
       let t= setInterval(move,3000);
        function move() {
            n++;
            if(n===img.length){
                    n=0;
            }
            if(n<0){n=4;}
             for(let i=0;i<img.length;i++){
                img[i].classList.remove("active");
                dian[i].classList.remove("active");
            } img[n].classList.add("active");
               dian[n].classList.add("active");
        }
        banner.onmouseenter=function () {
            clearInterval(t);
        };
        banner.onmouseleave=function () {
            t=setInterval(move,3000);
        }
        let flag=true;
        right.onclick=function(){
            if(flag){
                flag=false;
        		move();
            }
        }
        left.onclick=function(){
            if(flag){
                flag=false;
        	n-=2;
        	move();
            }
        }
        img.forEach(function(ele,index){
            ele.addEventListener("transitionend",function(){
                flag=true;
            })
        })
}
 
{ //先获取向上按钮
    // let top=document.querySelector(".rightnav_nbt");
    // top.onclick=function(){                         //向上点击事件
    //  let st=document.documentElement.scrollTop;     // 定义st等于文档超出窗口的距离
    //
    //  let t= setInterval(function(){      //定义t等于区间事件
    //        st-=500;                    //让st减500；
    //        if(st<0){                     //当st<0
    //         st=0;                          //st赋值为0
    //         clearInterval(t);               //清除t区间事件
    //        } document.documentElement.scrollTop=st; //将当前窗口移动到最顶部
    //     },50);
    //  }
   
   // let topnav=document.querySelector(".kongnav");//获取上搜索栏
   // let sidenav=document.querySelector(".sidenav");//获取边道航栏
   // // console.log(sidenav);
   // window.onscroll=function(){                    //窗口移动事件
   //   let st=document.documentElement.scrollTop;  //定义st为文档超出窗口距离
   //   if(st>1100){                                    //当st>1100
   //      topnav.style.display="block";       //上搜索栏出现
   //   }else{
   //      topnav.style.display="none";          //否则消失
   //   }
   //    if(st>2600&&st<9000){                    //当st位于2600到9000之间时候
   //      sidenav.style.display="block";         //侧导航栏出现
   //   }else{
   //      sidenav.style.display="none";
   //   }
   //
   // }
                                                //获取侧澳航小框，导航板块
   let sidenav_woc=document.querySelectorAll(".sidenav_woc");
   let remai=document.querySelectorAll(".remai");
   let flag=true;
   sidenav_woc.forEach(function(ele,index){         //遍历侧导航
        ele.onclick=function(){             //单击事件
         flag=false;
        let rein=remai[index].offsetTop-400;    //定义rein等于当前导航板块高的位置
        let tos=document.documentElement.scrollTop;//定义tos等于文档超出浏览器距离
        let speed=(rein-tos)/10;         //定义speed
        let time=0;                 //定义time
          let t= setInterval(function(){ //定义t等于区间事件
            tos+=speed;           //每25ms文档移动speed
            time+=20 ;               //每25ms time自家20；
            if(time===200){           //当10次之后，相当于定义了时间
               clearInterval(t);    //清除t区间事件
               flag=true;
            }  
         document.documentElement.scrollTop=tos;//文档处于浏览器的位置就是tos
        },25);

        }
   });


     window.addEventListener("scroll",function(){ //给窗口添加滚动监听事件
      let st=document.documentElement.scrollTop; //
      // let obj=sidenav_woc[0];
      if(flag){
      for(let i=0;i<remai.length;i++){           //进行循环
           if(st>=remai[i].offsetTop-400){    //当文档超出窗口位置大于导航模块位置
              for(let j=0;j<sidenav_woc.length;j++){       //所有侧导航移除类名
                sidenav_woc[j].classList.remove("special");//对应侧导航加入类名
              }
             // obj.classList.remove("special");

             sidenav_woc[i].classList.add("special");
             // obj=sidenav_woc[i]; 
          }
      }
             
      }
     
     })
}
//banner
{
    let box=document.querySelector(".banner_left");
    let nav=document.querySelectorAll(".banner_nav");
    let sidebox=document.querySelector(".banner_leftbox");
    let sidein=document.querySelectorAll(".banner_leftinner");
    box.onmouseenter=function(){
          sidebox.style.width="900px";  
    }
    box.onmouseleave=function(){
        sidebox.style.width="0";
    }
    let obj=nav[0];
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.classList.remove("special2");
            sidein[index].classList.add("special2");
            obj=sidein[index];
    }
    })
    
}

{ 
  let box=document.querySelector(".juhui_bottomzbox");
  let navl=document.querySelector(".juhui_znavl");
  let navr=document.querySelector(".juhui_znavr");
   
   let n=1;
   let flag=true;
  navr.onclick=function(){
    if (flag) {
      flag=false;
      n++;
        box.style.transition="all 1s";

      box.style.marginLeft=-1000*n+"px";
  }
  
};
  box.addEventListener("transitionend", function(){
      flag=true;
      if(n===4){
        box.style.transition="none";
        box.style.marginLeft=-1000+"px";
       n=1;
      }
  });
  navl.onclick=function(){
    if(flag){
      flag=false;
      n--;
        box.style.transition="all 1s";

      box.style.marginLeft=n*-1000+"px";
    }
  };
  box.addEventListener("transitionend", function(){
      flag=true;
      if(n===0){
        box.style.transition="none";
        box.style.marginLeft=-3000+"px";
       n=3;
      }
  })

}
{
  $(".rightnav_nbt").click(function () {
    $("html,body").animate({scrollTop:0},300);
  });
//
console.log($("html"));
  $(window).scroll(function(){
    let st=$(window).scrollTop();
    if(st>1100){
      $(".kongnav").show()
    }else(
      $(".kongnav").hide()
      );
      if(st>2600&&st<9000){
         $(".sidenav").show();
      }else{
          $(".sidenav").hide();
      }
  });
//
//   $(".navleft").click(function() {
//     let index=$(this).index();
//    let ot= $(".contain").eq(index).offset().top;
//    $("html,body").animate({scrollTop:ot}, 200)
//   });
//
//   $(window).scroll(function(){
//     let st=$(window).scrollTop();
//     $(".contain").each(function(index, el) {
//       if(st>$(this).offset().top){
//         $(".navleft").removeClass('active').eq(index).addClass('active');
//       }
//     });
//   })
   let inner=$(".inner");
   $(".container").hover(function () {
      $(".left,.next").fadeIn(500)
   },function () {
       $(".left,.next").fadeOut(500)
   });
   let n=1;
   let flag=true;
   $(".next").click(function () {
       if(flag){
           flag=false;
         n++;
       inner.animate({marginLeft:-n*1000},1000,function () {
           flag=true;
           if(n===4){
               inner.css("marginLeft",-1000);
               n=1;
           }
       });
       }
   });
    $(".left").click(function () {
        n--;
        inner.animate({marginLeft:-n*1000},1000)
    })
}
