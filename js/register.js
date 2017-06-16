/**
 * Created by Administrator on 2017/1/1.
 */
//canvas绘制验证码
var ctx=c1.getContext('2d');
//创建随机数方法
function rn(max,min){
  return Math.floor(Math.random()*(max-min)+min);
}
//创建随机颜色
function rc(max,min){
  var r=rn(max,min);
  var g=rn(max,min);
  var b=rn(max,min);
  return 'rgb('+r+','+g+','+b+')';
}
//首先填充一个背景
ctx.fillStyle='#ffffff';
ctx.fillRect(0,0,150,50);
//获取一个组随机数字
ctx.textBaseline='top';
var pool='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
for(var i=0;i<6;i++){
  var txt=pool[rn(51,0)];
  ctx.fillStyle=rc(10,155);
  ctx.font=rn(40,20)+'px sans-serif';
  var txtWidth=ctx.measureText(txt).width;
  ctx.save();
  ctx.translate(i*20+20,20);
  ctx.rotate(rn(-10,10)*Math.PI/180);
  ctx.fillText(txt, rn(20-txtWidth,-20), rn(20-txtWidth,-20));
  ctx.restore();
}
$('footer').load('data/resFooter.php');
