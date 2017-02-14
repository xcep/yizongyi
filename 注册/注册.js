// JavaScript Document
$(document).ready(function(){ 

$('.textinput').focus(function(){           
  $(this).parent().siblings('.tip,.yuan').css('display','inline-block').end() 
                   .siblings('.zq,.cw,.wrong').css('display','none');           //账户跟密码input框获取焦点时，显出提示，隐藏对错的提示
  })

$('.clear').click(function(){                                                   
  $(this).parent().prev('input').val('').focus();
  $(this).css('visibility','hidden')                                            //清空图标点击时清空此图标上一个input的值，并使他获取焦点
  })                                                                            //点击后隐藏清空图标

$('.textinput').blur(function(){                                                
  $(this).parent().nextAll('.tip').css('display','none').end()
                  .nextAll('.yuan').css('display','none');                      //账户跟密码input框失去焦点时隐藏邻近的提示
   if($(this).val() != ''){                                                     //账户跟密码input框的值不为空时调用regex（）正则表达式函数
     if(regex(this))
       {
       $(this).parent().siblings('.zq').css('display','inline-block')           //正则表达式返回true时，邻近的正确图标显示
       }                                       
       else
       {
       $(this).parent().siblings('.cw').css('display','inline-block')     
                       .siblings('.wrong').css('display','inline-block')        //正则表达式返回wrong时，邻近的错误的图标跟提示显示
       }}       
  })

$('.textinput').keyup(function(){                                               
  if($(this).value !='')                                                        //账户跟密码input框键盘点击后，如果该输入框的值不为空，将邻近的清空图标显示
    $(this).next('span').children('.clear').css('visibility','visible');
  })

$('.xz').hover(function(){                                                      //右下角注册块获取hover事件时，横线的右移，竖线上移
  $('.hengline').animate({right:'0'},1000);
  $('.shuline').animate({bottom:'100'},1000);
  $('.zhuce').animate({bottom:'-100px',right:'-100px'},1000);                   //注册框显出
  $('.bd').fadeIn(1500);
  $('#tellMail').focus();                                                       //账号输入框获取焦点
  })


window.onload = function(){                                                     //页面加载时轮播器第一张图显出，调用select（）函数选用动作
  $('.bgimg1').css('display','inline-block');                                   
  select();
  setInterval(random,10000);                                                    //页面加载后每10s调用一次random函数,随机切换轮播器的切换出方式
  }
   
function fade(before,after){                                                    //轮播器的切换方式1，淡入淡出
  reset();                                                                      //复位函数，重置轮播器改变的css样式
  $(before).css('display','block');                                             //将淡出的图片的显示方式改为block，避免影响select（）函数
  $(before).fadeOut(2000); 
  $(after).fadeIn(2000);                                                        
  setTimeout(function(){                                                        //将淡入的图片的显示方式改为inline-block，满足select（）函数的选择条件
    $(after).css('display','inline-block');
    },100) 
  setTimeout(select,3000);                                                      //切换后3s调用select（）函数
  }
                                            
function spfly(before,after){                                                   //轮播器的切换方式2，水平飞入飞出
  reset();
  $(before).css('display','block');
  $(after).css('display','inline-block');    
  $(after).css('left','-100%');                                                 //将飞入的图片位置初始化为页面左端
  $(before).animate({left:'-125%'},2000);                                       //图片飞出左端
  $(after).animate({left:'0%'},2000);                                           //图片从左端飞入
  setTimeout(function(brfore){$(before).css('display','block')},2500)
  setTimeout(select,3000);
  }   
  
function czfly(before,after){                                                   //轮播器的切换方式3，垂直飞入飞出
  reset();                  
  $(after).css('top','100%')                                                    //将飞入的图片位置初始化为页面上端
  $(before).css('display','block');
  $(after).css('display','inline-block');
  $(after).animate({top:'0%'},2000); 
  $(before).animate({top:'-150%'},2000);
  setTimeout(function(){$(before).css('display','blcok')},100)
  setTimeout(select,3000);
      }              
                  
$('.bgimg').click(function(){                                                   //轮播器图片点击时，横线向右飞出，竖线向下飞出，注册框隐藏
  $('.hengline').animate({right:'-580px'},500);
  $('.shuline').animate({bottom:'-250'},500);
  $('.zhuce').animate({bottom:'0',right:'0'},1000);
  $('.bd').fadeOut(1000)  
  })      
      
function reset(){
  $('.bgimg1,.bgimg2,.bgimg3').css({'display':'none','top':'0','width':'100%','left':'0'});
  $('.bgimg2,.bgimg3').find('img').css('width','100%');    
  setTimeout(function(){
    $('.hally').eq(0).css({'top':'20%','right':'10%'});
    $('.hally').eq(1).css({'top':'40%','right':'40%'});
    $('.hally').eq(2).css({'top':'70%','right':'80%'});
    $('.hally').eq(3).css({'top':'2%','right':'40%'});
    },15000)
  }                                                                             //重置函数，重置轮播器改变的图片位置，显示方式，宽度以及hally块的位置
      
function hally(){                                                               //hally块的运动
  $('.hally').eq(0).animate({right:'20%',top:'40%'},10000)
  $('.hally').eq(1).animate({right:'60%',top:'80%'},10000)
  $('.hally').eq(2).animate({right:'100%',top:'110%'},10000)
  $('.hally').eq(3).animate({right:'52%',top:'22%'},10000)
  }

function galaxy(){                                                           
  $('.bgimg2').find('img').animate({width:'125%'},10000)
  }

function nebula(){
  $('.bgimg3').find('img').animate({width:'125%'},10000)
  }
   
function select(){                                                              //select函数，判断当前显示为inline-block的块
  if($('.bgimg1').get(0).style.display == 'inline-block'){
    hally();
    after = '.bgimg2';
    before = '.bgimg1';
    }
  else if($('.bgimg2').get(0).style.display == 'inline-block'){
    galaxy();
    after = '.bgimg3';
    before = '.bgimg2';
    }
  else{
    nebula();
    after = '.bgimg1';
    before = '.bgimg3';
    }       
  }
                           
function random(){                                                              //random函数，随机轮播器的切换方式
  var number = Math.random();
  if(number<0.33)
    {
    fade(before,after)
    }
  else if(number<0.66){
    spfly(before,after)
    }
  else{
    czfly(before,after)
    }
  }   
   
function regex(ele){                                                            //正则表达式函数
  if($(ele).attr('id') == 'tellMail')                                           //正则匹配账号框的值
    {
    return /^1\d{10}$/.test(ele.value) || /^(\w)*@(\w)*\.(com|cn)$/.test(ele.value);
    }

  else if($(ele).attr('id') == 'password')                                      //正则匹配密码框的值
    {
    return /^(\w){6,14}$/.test(ele.value)                                       
    } 
  else 
    {
    return false;
    }      
 }  
})


