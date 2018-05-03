//定义一个javascript 数组
var board = new Array();
var score = 0;

$(document).ready(function () {
    newgame();
    $("#Newgamebutton").click(newgame);
});

function newgame() {
    $("#gameover").remove();
    //初始化棋盘格
    init();
    //生成两个随机位置的随机数组
    greataNumber();
    greataNumber();
}

function init() {
    for (var i = 0; i < 4; i++) {
        //定义二维数组
        board[i] = new Array();
        for (var j = 0; j < n; j++) {
            //初始化小格子，初始值为0
            board[i][j] = 0;
            var mainCell = $("#mainCell-" + i + "-" + j);
            //getTop()设置每个格子距离顶端的距离
            mainCell.css("top", getpasTop(i, j));
            //getLeft()设置每个格子距离左端的距离
            mainCell.css("left", getpasLeft(i, j));
        }
    }
    updateNumber();
    score = 0;
    $("#score").text(0);
}

function updateNumber() {
    //清空之前的数字格内容
    $(".numberCell").remove();
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            //增加数字格
            $("#mainc").append("<div class='numberCell' id='numberCell-" + i + "-" + j + "'></div>");
            var numberCell = $("#numberCell-" + i + "-" + j);
            //如果棋盘格的值为0 时，设置数字格宽高都为0
            if (board[i][j] == 0) {
                numberCell.css({
                    "width": "0px",
                    "height": "0px",
                    "top": getpasTop(i, j) + 50,
                    "left": getpasLeft(i, j) + 50
                });
            } else {
                numberCell.css({
                    "width": "100px",
                    "height": "100px",
                    "top": getpasTop(i, j),
                    "left": getpasLeft(i, j),
                    "background-color": getNumberBackgroundColor(board[i][j]),
                    "color": getNumberColor(board[i][j])
                });
                numberCell.text(board[i][j]);
            }
        }
    }
}

function greataNumber() {
    //生成一个随机位置的随机数
    //随机位置

    var randx = parseInt(Math.floor(Math.random() * 4)); //0~4 浮点数  强制转换   x  floor:对一个数进行下舍入 ：小于等于 x，且与 x 最接近的整数。
    var randy = parseInt(Math.floor(Math.random() * 4)); //y
    while (true) {
        //确保刚产生的不会与已有的冲突
        if (board[randx][randy] == 0) {
            break;
        }
        //重新产生
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }
    //随机数字（2048规则  只能是2或4）
    var randNumber = Math.random() < 0.5 ? 2 : 4; //生成2或4各50%

    //显示数字
    board[randx][randy] = randNumber;
    showNumberAnimation(randx, randy, randNumber); //动画显示数字

}



function updateScore(score) {
    $("#score").text(score);
}