var gameMap = {
    stage00:{
        map:[
            [0,126,154,63,108,108,94,60,60,60,40,40,103,156,161,63,40,1]
        ],
        mapdata:[
            [1,0,0,2,3,3,0,2,2,2,0,0,1,2,9,2,0,1]
        ],
        add:[
            {chara:"player",img:"hero",x:0,y:2},
        ],
        jump:[
            {at:{x:0,y:2},to:"stage18"},
            {at:{x:3,y:2},to:"stage01"},
            {at:{x:4,y:2},to:"stage09"},
            {at:{x:5,y:2},to:"stage09"},
            {at:{x:7,y:2},to:"stage02"},
            {at:{x:8,y:2},to:"stage03"},
            {at:{x:9,y:2},to:"stage04"},
            {at:{x:12,y:2},to:"stage16"},
            {at:{x:13,y:2},to:"stage05"},
            {at:{x:15,y:2},to:"stage06"},
            {at:{x:17,y:2},to:"stage19"}
        ]
    },
    stage01:{
        map:[
            [115,117,171,0]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage02:{
        map:[
            [43,30,5,223,215,43]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage03:{
        map:[
            [43,30,5,165,194,5]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage04:{
        map:[
            [221,5,30,172,153,130,153]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage05:{
        map:[
            [128,111,166,164,111,127,177,128]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage06:{
        map:[
            [219,30,166]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage09:{
        map:[
            [2,95,95,95,228,176,121,122,95,95,95,182,159,95,95,123,41,124,125,95,95,95]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage16:{
        map:[
            [2,51,118,158,51,184]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage18:{
        map:[
            [0,2,140,140,140,197,13,132,53,103,56,140,140,144,141,141,141,141,141,141,141,2]//,
        ],
//		mapdata:[
//			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
//			],
        add:[
            {chara:"player",img:"hero",x:90,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    },
    stage19:{
        map:[
            [2,142,142,142,95,95,70,70,70,70,98,98,98,98,98,98,98,98,98,98,98,197,142,103,142,56,140,140,2,2,0,]//,
        ],
        mapdata:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]//,
        ],
        add:[
            {chara:"player",img:"hero",x:1,y:2},
//		     {chara:"npc",img:"npc1",x:8,y:3},
//		     {chara:"npc",img:"npc1",x:10,y:3}
        ]
    }
};