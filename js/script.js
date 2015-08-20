//添加地图
function addMap(cx,cy){
    var i,j,index,indexX,indexY;
    var bitmapdata,bitmap;
    var mapX = mapLayer.x ;
    var mapY = mapLayer.y ;
    var mx = cx<0?-1:0,my = cy<0?-1:0;
    mapLayer.removeAllChild();
    //在地图层上，画出1*30的小图片
    for(i=my;i<1 +Math.abs(cy) && i-mapY < map.length;i++){
        var mapx = 0;
        for(j=mx;j<30 +Math.abs(cx)&& j-mapX < map[0].length;j++){
            //从地图数组中得到相应位置的图片坐标
            index = map[i-mapY][j-mapX];
            //小图片的竖坐标
            indexY = Math.floor(index /10);
            //小图片的横坐标
            indexX = index - indexY*10;
            //得到小图片
            bitmapdata = new LBitmapData(imglist["map"+index]);
            bitmap = new LBitmap(bitmapdata);
            //设置小图片的显示位置
            bitmap.x = mapx;
            mapx += bitmapdata.width+10;
            bitmap.y = (i+1)*64 - bitmapdata.height;
            //将小图片显示到地图层
            mapLayer.addChild(bitmap);
        }
    }
}
//移除多余地图块
function delMap(){
    var bitmap,i;
    for(i=0;i<mapLayer.childList.length;i++){
        bitmap = mapLayer.childList[i];
        if(bitmap.x + mapLayer.x < 0 || bitmap.x + mapLayer.x >= 1480 ||
            bitmap.y + mapLayer.y < 0 || bitmap.y + mapLayer.y >= 1288){
            mapLayer.removeChild(bitmap);
            i--;
        }
    }
}
//添加人物
function addChara(){
    var charaList = stage.add;
    var chara,charaObj;
    for(var i=0;i<charaList.length;i++){
        charaObj = charaList[i];
        if(charaObj.chara == "player"){
            //加入英雄
            bitmapdata = new LBitmapData(imglist[charaObj.img]);
            chara = new Character(true,i,bitmapdata,4,2);
            player = chara;
        }else{
            //加入npc
            bitmapdata = new LBitmapData(imglist[charaObj.img]);
            chara = new Character(false,i,bitmapdata,4,4);
        }
        chara.x = charaObj.x * 8;
        chara.y = charaObj.y * 32;
        charaLayer.addChild(chara);
    }
}
//游戏场景跳转测试
function checkJump(){
    var jump = stage.jump;
    var jumpStage;
    for(var i=0;i<jump.length;i++){
        var jumpS = 0;
        var jumpStart = 0;
        var jumpEnd = 0;
        jumpStage = jump[i];
        for(var j=0;j < jumpStage.at.x;j++){
            index = map[0][j];
            bitmapdata = new LBitmapData(imglist["map"+index]);
            jumpS += bitmapdata.width+10;
        }
        index = map[0][jumpStage.at.x];
        bitmapdata = new LBitmapData(imglist["map"+index]);
        if(mapdata[0][jumpStage.at.x] == 2){
            jumpStart = jumpS + bitmapdata.width/4;
            jumpEnd = bitmapdata.width/4 + jumpStart;
        }else if(mapdata[0][jumpStage.at.x] == 3){
            jumpStart = jumpS - 10;
            jumpEnd = bitmapdata.width + jumpStart + 10;
        }else{
            jumpEnd = bitmapdata.width + jumpStart;
        }
//        alert(player.x+"XXXXXXXX"+jumpStart+"XXXXXXXX"+jumpEnd)
        if(player.x+8 >= jumpStart && player.x+8 <= jumpEnd){
            //获取该场景脚本数据
            stage = gameMap[jumpStage.to];
            //开始跳转
            initScript(stage);
            return;
        }
    }
}

function ondown(event){
    //根据点击位置，判断移动方向
    if(event.offsetX >= ctrlLayer.x + 40 && event.offsetX <= ctrlLayer.x+80){
        if(event.offsetY >= ctrlLayer.y && event.offsetY <= ctrlLayer.y+40){
            player.changeDir(UP);
        }else if(event.offsetY >= ctrlLayer.y+80 && event.offsetY <= ctrlLayer.y+120){
            player.changeDir(DOWN);
        }
    }else if(event.offsetX >= ctrlLayer.x && event.offsetX <= ctrlLayer.x+40){
        if(event.offsetY >= ctrlLayer.y +40 && event.offsetY <= ctrlLayer.y+80){
            player.changeDir(LEFT);
        }
    }else if(event.offsetX >= ctrlLayer.x+80 && event.offsetX <= ctrlLayer.x+120){
        if(event.offsetY >= ctrlLayer.y +40 && event.offsetY <= ctrlLayer.y+80){
            player.changeDir(RIGHT);
        }
    }
    isKeyDown = true;
}

function onup(event){
    isKeyDown = false;
    if(event.offsetX >= ctrlLayer.x + 280 && event.offsetX <= ctrlLayer.x+330){
        if(event.offsetY >= ctrlLayer.y+40 && event.offsetY <= ctrlLayer.y+100){
            //对话
            addTalk();
        }
    }
}

function onkeydown(event){
    if(event.keyCode == 37){//left
        player.changeDir(LEFT);
    }else if(event.keyCode == 38){//up
        player.changeDir(UP);
    }else if(event.keyCode == 39){//right
        player.changeDir(RIGHT);
    }else if(event.keyCode == 40){//down
        player.changeDir(DOWN);
    }
    isKeyDown = true;
}

function onkeyup(event){
    isKeyDown = false;
    return;
    if(event.keyCode == 37 && player.move[0] < 0){//left
        player.move[0] = 0;
    }else if(event.keyCode == 38 && player.move[1] < 0){//up
        player.move[1] = 0;
    }else if(event.keyCode == 39 && player.move[0] > 0){//right
        player.move[0] = 0;
    }else if(event.keyCode == 40 && player.move[1] > 0){//down
        player.move[1] = 0;
    }else{//shoot
        player.canshoot = false;
        player.shootctrl = player.shootspeed;
    }
}



