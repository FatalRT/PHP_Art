var w = window.innerWidth;//获取可视窗口宽度
var h = window.innerHeight;//获取可视窗口高度
var delay = 2000;//操作睡眠时间

function sleep(delay){
    var firstTime = (new Date()).getTime();//触发时间
    while((new Date()).getTime() - firstTime < delay){
        continue;
    }
}

function getWinSize()
{

    var elements = document.getElementsByClassName("resize");
    
    for(var i=0; i<elements.length; i++)
    {
        elements[i].style.width = w + 'px';
        elements[i].style.height = h +'px';
    }  
}

function choosePosition(position,direction)
{
    for(var j=1; j<4; j++){
        var everyId = "a" + j;
        document.getElementById(everyId).style.animation = "";
    }

     everyId = "a" + position;//设置当前块的id 名称
     everyId = document.getElementById(everyId);//获取到当前块的元素
     var ele = document.getElementById("box");//获取大盒子的元素


     if(direction === 0){
         var lastMarginTop = parseInt(window.getComputedStyle(ele,null)["marginTop"]);
         //console.log(lastMarginTop);
         var newMarginTop = (lastMarginTop + h)+"px";
         ele.style.marginTop = newMarginTop; //向上滑
         console.log(newMarginTop);
     }else{
        var lastMarginTop = parseInt(window.getComputedStyle(ele,null)["marginTop"]);
        var newMarginTop = (lastMarginTop - h)+"px";
        ele.style.marginTop = newMarginTop; //向下滑
        console.log(newMarginTop);
     }
    
     everyId.style.animation = "animation 2s ease-in-out";//添加动画效果
   
}

function myScroll()
{
    var position = 1;//定位内容块序号
    var positionCompare = 1;//记录之前的内容块序号，之后用于比较
    var scrollAfter = 0;//滚轮滑动的步长累计
    var direction = 0;//0表示向上，1表示向下
    var status = true;

    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                scrollAfter++;
                direction = 0;
                if(scrollAfter > 1){
                    positionCompare = position;
                    position > 1 ? position-- : position;
                    if(positionCompare !== position)
                        choosePosition(position,direction);//加载动画
                    scrollAfter = 0;
                }
            }else if(e.wheelDelta < 0 ) { //当滑轮向下滚动时
                    scrollAfter++;
                    direction = 1;
                    if(scrollAfter > 1){
                        positionCompare = position;
                        position < 3 ? position++ : position;
                    if(positionCompare !== position)
                        choosePosition(position,direction);//加载动画
                    scrollAfter = 0;
                    }
            }
        };console.log(position);
    };
    return scrollFunc;
}


window.onload = getWinSize();//页面第一次加载时获取浏览器界面宽高
window.onresize = getWinSize();//浏览器大小调整后获取新的浏览器界面宽高
document.onmousewheel = myScroll();



    
