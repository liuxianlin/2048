//游戏基础逻辑
function getpasTop(i,j){
return 20+i*120;
}
function getpasLeft(i,j){
    return 20+j*120;
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65"
    }
    return "white";
}

function canMoveLeft(board){
   
    for(var i=0 ;i < n;i++){
        for(var j=1;j < n; j++){//不为第一列
            if(board[i][j] != 0){
                if(board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
                    //当前数字格左边第一个值为0，或者当前数字格的值与左边第一个值相等
                    return true;

                }
            }
        }
    }
    return false;
}

function canMoveRight(board){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n-1; j++){
            if(board[i][j] != 0){
                if(board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
                    return true;
                }
            }
        }
    }
}

function canMoveUp(board){
    for(var i = 1; i < n; i++){
        for(var j = 0; j < n; j++){
            if(board[i][j] != 0){
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
}

function canMoveDown(board){
    for(var i = 0;i < n-1; i++){
        for(var j = 0; j < n; j++){
            if(board[i][j] != 0){
                if(board[i+1][j] == 0 || board[i+1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
}


function noNumberRow(row,col,col2,board){
    for(var j=col+1; j < col2;j++){
        if(board[row][j] != 0){
            return false;
        }
    }
    return true;
}

function noNumberCol(row,row2,col,board){
    for(var i = row+1; i < row2; i++){
        if(board[i][col] != 0){
            return false;
        }
    }
    return true;
}

function nopace(board){
    for(var i = 0;i < n-1; i++){
        for(var j = 0; j < n; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

function nomove(board) { 
    if(canMoveLeft(board) || canMoveRight(board) || canMoveUp(board) || canMoveDown(board)){
        return  false;
    }
    return true;
 }