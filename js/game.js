//游戏交互逻辑
//keydown事件表示键盘被按下
var n = 4; //定义格子多少
$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37: //Left
            /*moveLeft()
            完成向左移动，
            返回boolean类型，是否可以向左移动
            */
            if (moveLeft()) {
                //重新随机地生成一个新数
                setTimeout("greataNumber()", 210);

                //当移动完成后，游戏是否结束
                setTimeout("isgameOver()", 300);
            }
            break;
        case 38: //UP
            if (moveUp()) {
                setTimeout("greataNumber()", 210);
                setTimeout("isgameOver()", 300);
            }
            break;
        case 39: //right
            if (moveRight()) {
                setTimeout("greataNumber()", 210);
                setTimeout("isgameOver()", 300);
            }
            break;
        case 40: //down
            if (moveDown()) {
                setTimeout("greataNumber()", 210);
                setTimeout("isgameOver()", 300);
            }
            break;
    }
});

function moveLeft() {
    if (!canMoveLeft(board)) {
        //不能移动
        return false;
    }
    //可以左移
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < n; j++) { //第一列不能左移
            if (board[i][j] != 0) { //当前数字格有值

                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noNumberRow(i, k, j, board)) { //noNumber() 判断本数字格与与目标数字格之间是否都没有值
                        //可左移
                        showMoveAnimation(i, j, i, k); //左移
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noNumberRow(i, k, j, board)) {
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k]; //add 分数
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateNumber()", 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (var i = 0; i < n; i++) {
        for (var j = n - 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = n - 1; k > j; k--) {
                    if (board[i][k] == 0 && noNumberRow(i, j, k, board)) { //与向左   顺序不一致
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noNumberRow(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        score += board[i][k];
                        board[i][j] = 0;
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateNumber()", 200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    }
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noNumberCol(k, i, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[k][j] == board[i][j] && noNumberCol(k, i, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        score += board[k][j];
                        board[i][j] = 0;
                        updateScore(score);
                    }

                }
            }
        }
    }
    setTimeout("updateNumber()", 200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }
    for (var i = n - 2; i >= 0; i--) { //第三行才能移 编号从0 开始
        for (var j = 0; j < n; j++) {
            if (board[i][j] != 0) {
                for (var k = n - 1; k > i; k--) {
                    if (board[k][j] == 0 && noNumberCol(i, k, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[k][j] == board[i][j] && noNumberCol(i, k, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateNumber()", 200);
    return true;
}



//结束游戏
//1）无空 2）相邻不等
function isgameOver() {
    if (nopace(board) && nomove(board)) {
        gameOver();
    }
}

function gameOver() {
    // var txt = confirm("game over!\n点击确认重新游戏?");

    // if (txt == true) {
    //     newgame();
    // }
    $("#mainc").append("<div class='gameover' id='gameover'><p>您的分数是：</p><span>" + score + "</span><br><button id='restgamebutton' >重新开始</button></div>");
    $("#gameover").css({
        "width": "500px",
        "height": "500px",
        "background-color": "rgba(0,0,0,0.5)",
        "position":"absolute",
        "top":"-5px",
        "left":"-4px",
        "font-size":"32px",
        "text-align":"center",
        "z-index":"999",
        "color":"white"

    });
    $("#restgamebutton").click(function () {
        $("#gameover").remove();
        updateScore(0);
        newgame();
    });
}