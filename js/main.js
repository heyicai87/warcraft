document.addEventListener("scroll",function(){
			  var scrollTop=document.body.scrollTop;
			  //document.querySelector(".nav_head").className=scrollTop>40?"nav_head":"nav_head fade";
        //document.querySelector(".nav_intro").className=scrollTop>40?"nav_intro fade":"nav_intro";
        document.querySelector(".nav_intro").className=scrollTop>40?"nav_intro fixTop":"nav_intro";
				document.querySelector("#holy>h1").className=scrollTop>750?"animated fadeInRight":"";
				document.querySelector("#holy>p").className=scrollTop>780?"animated fadeInLeft":"";
				document.querySelector("#holy>a").className=scrollTop>800?"animated bounceInUp":"";
				document.querySelector("#online>h1").className=scrollTop>1300?"animated fadeInRight":"";
				document.querySelector("#online>p").className=scrollTop>1400?"animated fadeInLeft":"";
				document.querySelector("#online>a").className=scrollTop>1510?"animated bounceInUp":"";
				document.querySelector("#walion>h1").className=scrollTop>3000?"animated fadeInRight":"";
				document.querySelector("#walion>p").className=scrollTop>3100?"animated fadeInLeft":"";
				document.querySelector("#walion>a").className=scrollTop>3200?"animated bounceInUp":"";
		});
/*$(".nav_game>.a1").on("click",function(){
	$(".nav_game>div").toggleClass("list");
});*/
function ToggleNav(a,n1,n2,classOne,classTwo){
  var parent=a.parentNode;
	var a1=document.querySelector(n1);
  var a2=document.querySelector(n2);
	var parent1=a1.parentNode;
  var parent2=a2.parentNode;
	if (parent.children[1].className==classOne||parent1.children[1].className=="list"||parent2.children[1].className==='list'){
		parent.children[1].className=classTwo;
		parent.style.backgroundColor='#35231C';
    a.children[0].style.backgroundPosition="-96px 0px";
    a1.children[0].style.backgroundPosition="0px 0px";
		parent1.style.backgroundColor='';
		parent1.children[1].className=classOne;
		parent.children[1].style.zIndex=1;
    parent2.children[1].className=classOne;
    parent2.style.backgroundColor='';
	}
	else{
		parent.children[1].className=classOne;
		parent.style.backgroundColor='';
    a.children[0].style.backgroundPosition="0px 0px";
	}
}
$(".nav_game").on("click","a",function(e){
	e.preventDefault();
  ToggleNav(this,".nav_story>.a2",".nav_search>a","list hide","list");
});
$(".nav_story").on("click","a",function(e){
	e.preventDefault();
  ToggleNav(this,".nav_game>.a1",".nav_search>a","list hide","list");
;
});
$(".nav_search").on('click','a',function(e){
  e.preventDefault();
	var parent=this.parentNode;
  var a1=document.querySelector(".nav_game>.a1");
  var a2=document.querySelector(".nav_story>.a2");
  var parent1=a1.parentNode;
  var parent2=a2.parentNode;
  if(parent.children[1].className=="list hide"||parent1.children[1].className=="list"||parent2.children[1].className==='list'){
    $(this).next().removeClass('hide');
    parent.style.backgroundColor='#35231C';
    parent1.children[1].className="list hide";
    parent2.children[1].className="list hide";
		parent.children[1].style.zIndex=1;
    parent1.style.backgroundColor='';
    parent2.style.backgroundColor='';
    a1.children[0].style.backgroundPosition="0px 0px";
    a2.children[0].style.backgroundPosition="0px 0px";
  }
  else{
     //debugger;
    parent.children[1].className="list hide";
		parent.style.backgroundColor='';
    //this.children[0].style.backgroundPosition="0px 0px";
  }
})
window.onload=function(){
  if(sessionStorage['uname']){
    var un=sessionStorage['uname'];
    //console.log(document.querySelector('.right_head>a:nth-child(2)'));
    document.querySelector('#right_head>a:nth-child(2)').innerHTML=un+'<b></b>';
    document.querySelector('.nav_intro>.nav_free').style.width='200px';
    document.querySelector('.nav_intro>.nav_free').innerHTML='<a href="#">\
							<image src="image/login/38213851-avatar.jpg"/>\
							<h3>枪与菊</h3>\
							<span>等级 110 恶魔猎手</span>\
						</a>';
    document.getElementById('nav-intro').className="nav_intro login";
    document.getElementById("nav-intro").className="nav_intro fixTop login";
    document.querySelector('.nav_intro').removeChild(document.querySelector('.nav_intro>.nav_layon'));
  }
}
