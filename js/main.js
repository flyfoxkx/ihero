/**
 * Main类
 * @author vicLee
 * @email leekaixuan@qq.com
 **/
init(50,"mylegend",512,300,main);
/**层变量*/
//显示进度条所用层
var loadingLayer;
//游戏底层
var backLayer;

//地图层
var mapLayer;
//人物层
var charaLayer;
//效果层
var effectLayer;
//对话层
var talkLayer;
//控制层
var ctrlLayer;
//方向变量
var DOWN = 0;
var LEFT = 1;
var RIGHT = 2;
var UP = 3;
var STEP = 8;
//点击状态
var isKeyDown = false;
//地图滚动
var mapmove = false;
/**int变量*/
//读取图片位置
var loadIndex = 0;
/**对象变量*/
//玩家
var player;

/**数组变量*/
//图片path数组
var imgData = new Array();
//读取完的图片数组
var imglist = {};
var imageArray;
var stage;
function main(){
    if(LGlobal.canTouch){
        LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
        LSystem.screen(LStage.FULL_SCREEN);
    }

    imgData.push({type:"js",path:"./js/Map.js"});
    imgData.push({type:"js",path:"./js/Character.js"});
    imgData.push({type:"js",path:"./js/script.js"});
    //准备读取图片
    var	na;
    var	pa;
    for(var i=0 ; i < 244; i++){
        na = "map"+i;
        pa = "./image/"+i+".png";
        imgData.push({name:na,path:pa});
    }
    imgData.push({name:"hero",path:"./image/hero.png"});
    imgData.push({name:"e1",path:"./image/e1.png"});
    imgData.push({name:"e2",path:"./image/e2.png"});

    loadingLayer = new LoadingSample3();
    addChild(loadingLayer);
    LLoadManage.load(
        imgData,
        function(progress){
            loadingLayer.setProgress(progress);
        },
        function(result){
            imglist = result;
            removeChild(loadingLayer);
            loadingLayer = null;
            gameInit();
        }
    );
}
function gameInit(event){
    //游戏层显示初始化
    layerInit();
    //地图图片初始化
//	initMap();
    stage = gameMap.stage00;
    initScript(stage);

    //添加贞事件，开始游戏循环
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
    //添加控制按钮
    bitmapdata = new LBitmapData(imglist["e1"]);
    bitmap = new LBitmap(bitmapdata);
    bitmap.x = 0;
    bitmap.y = 0;
    ctrlLayer.addChild(bitmap);
    bitmapdata = new LBitmapData(imglist["e2"]);
    bitmap = new LBitmap(bitmapdata);
    bitmap.x = 280;
    bitmap.y = 30;
    ctrlLayer.addChild(bitmap);
    ctrlLayer.x = 40;
    ctrlLayer.y = 160;
    LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN,true);
    LMouseEventContainer.set(LMouseEvent.MOUSE_UP,true);
    //添加点击控制事件
    backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,ondown);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,onup);

    if(!LGlobal.canTouch){
        //电脑的时候，添加键盘事件 【上 下 左 右 空格】
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);
    }
}

//游戏层显示初始化
function layerInit(){
    //游戏底层添加
    backLayer = new LSprite();
    addChild(backLayer);
    //地图层添加
    mapLayer = new LSprite();
    backLayer.addChild(mapLayer);
    //人物层添加
    charaLayer = new LSprite();
    backLayer.addChild(charaLayer);
    //效果层添加
    effectLayer = new LSprite();
    backLayer.addChild(effectLayer);
    //对话层添加
    talkLayer = new LSprite();
    backLayer.addChild(talkLayer);
    //控制层添加
    ctrlLayer = new LSprite();
    backLayer.addChild(ctrlLayer);
}

/**
 * 循环
 * */
function onframe(){
    for(var i=0;i<charaLayer.childList.length;i++)charaLayer.childList[i].onframe();
}

//根据脚本，初始化游戏画面
function initScript(){
    //地图位置初始化
    mapLayer.x = 0;
    mapLayer.y = 0;
    charaLayer.x = 0;
    charaLayer.y = 0;

    //地图层初始化
    mapLayer.removeAllChild();
    //人物层初始化
    charaLayer.removeAllChild();
    //效果层初始化
    effectLayer.removeAllChild();
    //对话层初始化
    talkLayer.removeAllChild();

    //地图数据获取
    map = stage.map;
    mapdata = stage.mapdata;
    //对话数据获取
    talkScriptList = stage.talk;

    //添加地图
    addMap(0,0);
//    delMap();
    //添加人物
    addChara();
}