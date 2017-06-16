/**
 * Created by bjwsl-001 on 2016/12/29.
 */
$('footer').load('data/resFooter.php');
loginBtn.onclick=function(e){
    e.preventDefault();
    console.log(this);
    var m=umail.value;
    var up=upwd.value;
    //debugger;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                doResponse(xhr);
            }else{
                alert('已经响应但有问题')
            }
        }
    }
    xhr.open('POST','data/login.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("mailAddr="+m+"&upwd="+up);
    function doResponse(xhr){
        var obj=JSON.parse(xhr.responseText);
        console.log(obj);
        if(obj.code===2){
            sessionStorage['uname']=obj.msg;
            location.href='main.html';
        }else if(obj.code===4){
            document.querySelector('.loginMain>p').innerHTML=obj.msg;
        }else if(obj.code===1){
            document.querySelector('.loginMain>p').innerHTML="请输入战网通行证";
        }else if(obj.code===3){
            document.querySelector('.loginMain>p').innerHTML="请输入密码";
        }
    }
}