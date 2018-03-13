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
	})
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
        right.onclick=function(){
        		move();
        }
        left.onclick=function(){
        	n-=2;
        	move();
        }
}
 
{
    let top=document.querySelector(".rightnav_nbt");
    top.onclick=function(){
     let st=document.documentElement.scrollTop;

     let t= setInterval(function(){
           st-=500;
           if(st<0){
            st=0;
            clearInterval(t);
           } document.documentElement.scrollTop=st;
        },50);
    }
   
   let topnav=document.querySelector(".kongnav");
   let sidenav=document.querySelector(".sidenav");
   // console.log(sidenav);
   window.onscroll=function(){
     let st=document.documentElement.scrollTop;
     if(st>1100){
        topnav.style.display="block";
     }else{
        topnav.style.display="none";
     }
      if(st>2600&&st<9000){
        sidenav.style.display="block";
     }else{
        sidenav.style.display="none";
     }

   }

   let sidenav_woc=document.querySelectorAll(".sidenav_woc");
   let remai=document.querySelectorAll(".remai");
   sidenav_woc.forEach(function(ele,index){
        ele.onclick=function(){
        let rein=remai[index].offsetTop-400;
        let tos=document.documentElement.scrollTop;
        let speed=(rein-tos)/10;
        let time=0;
          let t= setInterval(function(){
            tos+=speed; 
            time+=20 ;
            if(time===200){
               clearInterval(t);
            }  
         document.documentElement.scrollTop=tos;
        },25);

        }
   });


     window.addEventListener("scroll",function(){
      let st=document.documentElement.scrollTop;
      // let obj=sidenav_woc[0];
      for(let i=0;i<remai.length;i++){
           if(st>=remai[i].offsetTop-400){
              for(let j=0;j<sidenav_woc.length;j++){
                sidenav_woc[j].classList.remove("special");
              }
             // obj.classList.remove("special");

             sidenav_woc[i].classList.add("special");
             // obj=sidenav_woc[i]; 

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