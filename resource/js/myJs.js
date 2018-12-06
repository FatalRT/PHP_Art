function getWinSize()
{
    var w = window.innerWidth;
    var h = window.innerHeight;
    var elements = document.getElementsByClassName("resize");
    
    for(var i=0; i<elements.length; i++)
    {
        elements[i].style.width = w + 'px';
        elements[i].style.height = h +'px';
    }  
}

function choosePosition(position)
{
    for(var j=1; j<4; j++){
        var everyId = "a" + j;
        document.getElementById(everyId).style.animation = "";
    }

     everyId = document.location.href = "#a" + position;
     var ele = document.getElementById(everyId.split("#")[1]) ;
     ele.style.animation = "animation 2s ease-in-out";
     
}

function myScroll()
{
    var position = 1;//定位内容块序号
    var positionCompare = 1;//记录之前的内容块序号，之后用于比较
    var scrollAfter = 0;//滚轮滑动的步长累计

    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                scrollAfter++;
                if(scrollAfter > 1){
                    positionCompare = position;
                    position > 1 ? position-- : position;
                    if(positionCompare !== position)
                        choosePosition(position);//加载动画
                    scrollAfter = 0;
                }
            }else if (e.wheelDelta < 0 ) { //当滑轮向下滚动时
                scrollAfter++;
                if(scrollAfter > 1){
                    positionCompare = position;
                    position < 3 ? position++ : position;
                    if(positionCompare !== position)
                        choosePosition(position);//加载动画
                    scrollAfter = 0;
                }
            }
        };
    };
    return scrollFunc;
}


window.onload = getWinSize();//页面第一次加载时获取浏览器界面宽高
window.onresize = getWinSize();//浏览器大小调整后获取新的浏览器界面宽高
document.onmousewheel = myScroll();//滚动滑轮触发

    
