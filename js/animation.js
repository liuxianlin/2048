//动画逻辑
function  showNumberAnimation(randx,randy,randNumber){
    //获取当前的数字格
    var numberCell = $("#numberCell-"+randx+"-"+randy);
    //设置当前的数字格的背景颜色和前景色 及数字值
    numberCell.css({
        "background-color":getNumberBackgroundColor(randNumber),
        "color":getNumberColor(randNumber)
    }); 
    numberCell.text(randNumber);
    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getpasTop(randx,randy),
        left:getpasLeft(randx,randy),
    },50);
   
}

function showMoveAnimation(fromx,fromy,tox,toy){
    //获取到当前数字格的元素
    var numberCell = $("#numberCell-"+fromx+"-"+fromy);
    numberCell.animate({
        top: getpasTop(tox,toy),
        left:getpasLeft(tox,toy)
    },200);
}