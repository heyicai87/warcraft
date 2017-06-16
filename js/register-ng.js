/**
 * Created by bjwsl-001 on 2017/1/3.
 */
//开始验证表单
//邮箱验证正则
var myreg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//创建一个控制器
var app=angular.module('myWow',['ng','ngRoute']);
app.controller('wowRegist',['$scope','$http','$location',function($scope,$http,$location){
    $scope.order={};
    $scope.isTrue=true;
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  $scope.btnSubmit=function(){
        //debugger;
        //console.log(args);
        //console.dir($scope.order);
        console.log($scope.order);
        if(!$scope.order.userId){
            $scope.userIdLost='身份证信息不能为空';
        }
        else if($scope.order.userId.length!=18){
            $scope.userIdLost='身份证长度不得低于18位';
        }　
        else if(!$scope.order.username){
            $scope.usernameLost='姓名不能为空';
        }
        else if(!$scope.order.mailAddr){
            $scope.mailAddrLost='邮箱地址不能为空';
        }
        else if(!reg.test($scope.order.mailAddr)){
          $scope.mailAddrLost='邮箱格式不正确';
        }
        else if(mailAddrConf.value!=mailAddr.value){
          console.log(mailAddrConf.value);
          debugger;
          $scope.mailConf='邮箱不一致，请重新输入';
        }
        else if(!$scope.order.upwd||$scope.order.upwd.length<6){
          $scope.upwdLost='密码不能为空或长度不够';
        }
        else if(upwdConf.value!==upwd.value){
          $scope.upwdC='密码不一致，请重新输入';
        }
        else{
            $scope.isTrue=false;
            var args=$.param($scope.order);
            console.log(args);
            $http.get('data/register.php?'+args).success(function (data) {
                //console.log(arguments);
								if(data.code===1){
									$scope.usernameLost='姓名或邮箱已被使用'
								}
                else if(data.code===2){
                  sessionStorage['uname']=data.name;
                  location.href="main.html";
                }
            })
        }
    }
}])