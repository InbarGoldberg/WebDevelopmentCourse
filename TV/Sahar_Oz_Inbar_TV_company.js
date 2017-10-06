(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Sahar_Oz_Inbar_TV_company_atlas_", frames: [[3025,1632,505,414],[3532,1632,505,414],[3843,669,121,128],[4052,25,25,16],[871,2251,121,121],[4039,1603,50,50],[3447,0,603,542],[2581,1490,50,50],[2633,502,603,542],[2581,1438,50,50],[3238,544,603,542],[2420,1590,603,542],[4039,1915,50,50],[4039,1655,50,50],[605,1260,603,542],[2633,1046,603,542],[4039,1759,50,50],[4039,1967,50,50],[3238,1088,603,542],[4039,1811,50,50],[0,1260,603,542],[4039,1707,50,50],[1210,1260,603,542],[4039,1863,50,50],[1815,1260,603,542],[2494,2259,110,57],[3843,1545,242,56],[2195,0,436,1113],[2633,0,812,500],[0,1804,376,159],[2195,1115,368,52],[2606,2259,85,42],[2954,2298,85,42],[2693,2259,85,42],[2780,2259,85,42],[3986,544,86,86],[2867,2259,85,42],[3843,799,86,86],[2565,1115,65,65],[2545,1372,64,64],[3968,1045,123,123],[3968,1170,123,123],[3843,1170,123,123],[2420,1223,123,123],[3843,1295,123,123],[3843,1045,123,123],[3150,2048,123,123],[3275,2048,123,123],[3968,1420,123,123],[1363,2251,119,123],[374,2251,122,123],[498,2251,122,123],[2015,1965,123,123],[3843,1420,123,123],[1890,1965,123,123],[250,2251,122,123],[1484,2251,119,123],[2420,1348,123,123],[3968,1295,123,123],[2268,1804,123,123],[2268,1929,123,123],[2140,1965,123,123],[3025,2048,123,123],[3966,795,124,123],[1890,2090,123,123],[1250,2126,123,123],[3966,669,124,124],[3525,2048,123,123],[1125,2126,123,123],[1375,2126,123,123],[3390,2173,123,123],[125,2126,123,123],[3400,2048,123,123],[250,2126,123,123],[2015,2090,123,123],[2265,2054,123,123],[3650,2048,123,123],[3775,2048,123,123],[2890,2134,123,123],[2640,2134,123,123],[3515,2173,123,123],[3900,2048,123,123],[2390,2134,123,123],[3140,2173,123,123],[1750,2126,123,123],[3265,2173,123,123],[2515,2134,123,123],[2765,2134,123,123],[3843,544,141,123],[3015,2173,123,123],[500,2126,123,123],[2140,2090,123,123],[1500,2126,123,123],[0,2126,123,123],[375,2126,123,123],[1625,2126,123,123],[625,2126,123,123],[750,2126,123,123],[875,2126,123,123],[1000,2126,123,123],[2125,2215,123,123],[2000,2215,123,123],[0,2251,123,123],[3640,2173,123,123],[1875,2215,123,123],[3843,920,124,123],[3969,920,124,123],[125,2251,123,123],[3765,2173,123,123],[3890,2173,123,123],[2265,2179,123,123],[4052,0,36,23],[3986,632,99,24],[3363,502,61,23],[3843,887,101,23],[3215,2298,85,42],[3041,2298,85,42],[3128,2298,85,42],[3302,2298,85,42],[3389,2298,85,42],[2195,1169,368,52],[994,2251,121,121],[1117,2251,121,121],[1240,2251,121,121],[622,2251,124,121],[4015,2173,74,47],[2390,2259,102,67],[3025,1590,113,38],[2545,1308,68,62],[1605,2251,136,56],[3238,502,123,37],[2545,1223,83,83],[2420,1473,159,80],[1743,2251,130,54],[0,0,2193,1258],[756,1965,376,159],[756,1804,376,159],[1134,1804,376,159],[378,1804,376,159],[0,1965,376,159],[378,1965,376,159],[1512,1804,376,159],[1890,1804,376,159],[1134,1965,376,159],[1512,1965,376,159],[748,2251,121,124]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash01111111111111111111111111111111 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0111 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash01 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_5 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_6 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_7 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_8 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_9 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_10 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_11 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_12 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_13 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_14 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_15 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_16 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_17 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_18 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_19 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_20 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_21 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_22 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_23 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_24 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_25 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_26 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_27 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_28 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_29 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_30 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_31 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_32 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_33 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_34 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_35 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_36 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_37 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_38 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_39 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_40 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_41 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_42 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_43 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_44 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_45 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_46 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_47 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_48 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_49 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_50 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_51 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_52 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_53 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_54 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_55 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_56 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_57 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_58 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_59 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_60 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_61 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_62 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_63 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_64 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_65 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_66 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_67 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_68 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_69 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_70 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_71 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_72 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_73 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_74 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_75 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_76 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_77 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_78 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_79 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_80 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_81 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_82 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_83 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_84 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_85 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_86 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_87 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_88 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_89 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_90 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_91 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_92 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_93 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_94 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_95 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_96 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_97 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_98 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_99 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_100 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_101 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_102 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_103 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_104 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_105 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_106 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_107 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_108 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_109 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_110 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_111 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_112 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_113 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_114 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_115 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_116 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_117 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_118 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_119 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_120 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_121 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_122 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_123 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_124 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_125 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_126 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_127 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_128 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_129 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_1 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_2 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_3 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_4 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_5 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_6 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_7 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_8 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets_9 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.flash0 = function() {
	this.spriteSheet = ss["Sahar_Oz_Inbar_TV_company_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zero_on1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_30();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,-16.3,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zero_on1, new cjs.Rectangle(-16.3,-16.3,32.6,32.6), null);


(lib.zero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_32();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,-16.3,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zero, new cjs.Rectangle(-16.3,-16.3,32.6,32.6), null);


(lib.yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-17,-13.2,0.067,0.064);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjDCjIAAlFIGHAAIAAFFg");
	this.shape.setTransform(0,0.2,0.872,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yes, new cjs.Rectangle(-17,-13.2,34.1,26.6), null);


(lib.x_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_34();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,-16.7,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.x_bottom, new cjs.Rectangle(-16.7,-16.7,33.5,33.5), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.westworld_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_14();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.westworld = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_87();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.westworld, new cjs.Rectangle(-20,-20,40,40), null);


(lib.vikings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_51();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.403,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vikings, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.veep_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.veep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_81();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.veep, new cjs.Rectangle(-20,-20,40,40), null);


(lib.unbreakable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_89();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unbreakable, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.touching_distance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_63();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.touching_distance, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.tnr_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.tnr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_80();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tnr, new cjs.Rectangle(-20,-20,40,40), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.tno_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_8();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.tno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_84();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tno, new cjs.Rectangle(-20,-20,40,40), null);


(lib.this_is_us = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_45();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.393,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.this_is_us, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_white_queen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_39();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_white_queen, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_unit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_67();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_unit, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_missing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_40();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_missing, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_handmaiss_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_43();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_handmaiss_tale, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_good_fight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_54();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_good_fight, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_104();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_fall, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_catch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_77();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_catch, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_big_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_48();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_big_c, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_big_bang_theroy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_57();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_big_bang_theroy, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.the_americans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_36();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.the_americans, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.tahagad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_62();
	this.instance.parent = this;
	this.instance.setTransform(-23.4,-23.9,0.381,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tahagad, new cjs.Rectangle(-23.4,-23.9,46.8,47.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_52();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.stuped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_71();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stuped, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.stranger_things = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_103();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stranger_things, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.srugim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_60();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.srugim, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.siliconv_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_7();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.siliconv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_83();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.284,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.siliconv, new cjs.Rectangle(-20,-20,40,40), null);


(lib.showtime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_124();
	this.instance.parent = this;
	this.instance.setTransform(-26,-10.7,0.382,0.382);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkOB4IAAjvIIdAAIAADvg");
	this.shape.setTransform(0.5,-1.3,0.945,0.788);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.showtime, new cjs.Rectangle(-26,-10.7,52.1,21.5), null);


(lib.shades_of_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_47();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shades_of_blue, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.rake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_74();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rake, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.quantico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_76();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.quantico, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.q_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_33();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,-16.7,0.515,0.515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.q_bottom, new cjs.Rectangle(-16.7,-16.7,33.5,33.5), null);


(lib.principle_of_substitution = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_64();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.principle_of_substitution, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.pan_am = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_72();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pan_am, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.our_song = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_58();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.386,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.our_song, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.orange_is_the_new_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_92();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.orange_is_the_new_black, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.once_upon_a_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_78();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.once_upon_a_time, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.netflix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_127();
	this.instance.parent = this;
	this.instance.setTransform(-27,-15,0.387,0.387);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlVBvIAAjdIKrAAIAADdg");
	this.shape.setTransform(4.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.netflix, new cjs.Rectangle(-29.4,-15,68.4,31), null);


(lib.nbc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_123();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-13.2,0.428,0.428);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ai5CwIAAlfIFzAAIAAFfg");
	this.shape.setTransform(0.1,2.4,0.785,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nbc, new cjs.Rectangle(-14.5,-15.2,29.2,35.3), null);


(lib.narcos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_90();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.narcos, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.masters_of_sex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_50();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.393,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.masters_of_sex, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.master_of_none = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_91();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.master_of_none, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.making_a_murderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_102();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.making_a_murderer, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.lip_service = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_38();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip_service, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.la_la_land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_59();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.la_la_land, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.kidnapped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_61();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.386,0.386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kidnapped, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.justified = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_35();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.justified, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.jessica_jones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_94();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jessica_jones, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.important_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_65();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.important_person, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.hulu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_122();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-7.2,0.38,0.38);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjgBrIAAjWIHBAAIAADWg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hulu, new cjs.Rectangle(-22.1,-10.1,45,21.5), null);


(lib.how_i_meet_your_mother = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_56();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.how_i_meet_your_mother, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.house_of_cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_95();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_of_cards, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.hot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.1,0.058,0.069);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiyCTIAAklIFlAAIAAElg");
	this.shape.setTransform(-0.1,-0.1,0.819,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hot, new cjs.Rectangle(-14.8,-14.8,29.4,29.4), null);


(lib.hbo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_128();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-9.7,0.394,0.361);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkzBoIAAjPIJnAAIAADPg");
	this.shape.setTransform(-0.6,-0.8,0.83,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hbo, new cjs.Rectangle(-26.1,-11.2,51.7,21), null);


(lib.guid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" עברו עם העכבר על הסדרה בה אתם מעוניינים ולחצו עליה .כדי לראות מידע נוסף ", "12px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(123.9,51);

	this.text_1 = new cjs.Text("לחצו עם העכבר על חברות הטלוויזיה על מנת לקבע את .המצב בו אתם נמצאים בעת מעבר עכבר ", "12px 'Heebo Light'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 269;
	this.text_1.parent = this;
	this.text_1.setTransform(124.5,2.6);

	this.text_2 = new cjs.Text("עברו עם העכבר על חברות טלוויזיה, רשתות שידור או יכולות על מנת לראות את הקשרים בינם לבין התוכן שלכל .חברה יש להציע", "12px 'Heebo Light'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 271;
	this.text_2.parent = this;
	this.text_2.setTransform(124.5,-61.1);

	this.text_3 = new cjs.Text("(3", "12px 'Heebo Light'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 16;
	this.text_3.parent = this;
	this.text_3.setTransform(143.9,50.7);

	this.text_4 = new cjs.Text("(2", "12px 'Heebo Light'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 18;
	this.text_4.parent = this;
	this.text_4.setTransform(146.2,2.5);

	this.text_5 = new cjs.Text("(1", "12px 'Heebo Light'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 15;
	this.text_5.parent = this;
	this.text_5.setTransform(143.2,-61.1);

	this.text_6 = new cjs.Text("הנחיות", "24px 'Heebo Medium'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 37;
	this.text_6.lineWidth = 75;
	this.text_6.parent = this;
	this.text_6.setTransform(26.4,-99.9);

	this.instance = new lib.flash0ai_23();
	this.instance.parent = this;
	this.instance.setTransform(-184.7,-113.7,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.guid, new cjs.Rectangle(-184.7,-113.7,369.6,227.6), null);


(lib.greys_antomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_79();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greys_antomy, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.got_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_12();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.got = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_86();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.got, new cjs.Rectangle(-20,-20,40,40), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.girls_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_18();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.girls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash01111111111111111111111111111111();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.33,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girls, new cjs.Rectangle(-20,-20,40,40), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.fx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_120();
	this.instance.parent = this;
	this.instance.setTransform(-15.2,-9.6,0.412,0.412);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AicCFIAAkJIE4AAIAAEJg");
	this.shape.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fx, new cjs.Rectangle(-16,-13.8,31.3,26.7), null);


(lib.four_in_the_morning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_53();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.four_in_the_morning, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.fauda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_70();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fauda, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.esfor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_68();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.esfor, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.entourage_pop_x1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_16();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.entourage_pop_x1, new cjs.Rectangle(-19,-19,38,38), null);


(lib.entourage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_88();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.entourage, new cjs.Rectangle(-20,-20,40,40), null);


(lib.easy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_105();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.easy, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.dwp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_101();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.386,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dwp, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.die_for_a_moment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_69();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.die_for_a_moment, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.deadwood_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_4();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.deadwood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_82();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.deadwood, new cjs.Rectangle(-20,-20,40,40), null);


(lib.deadbeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_42();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.deadbeat, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.daredevil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_93();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.daredevil, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.control_yes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash01();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_yes1, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_vod_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_106();
	this.instance.parent = this;
	this.instance.setTransform(-10.8,-6.9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_vod_title, new cjs.Rectangle(-10.8,-6.9,21.6,13.8), null);


(lib.control_vod_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_31();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-10.6,0.467,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_vod_on, new cjs.Rectangle(-19.8,-10.6,39.7,21.2), null);


(lib.control_vod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_113();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-8.2,0.364,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_vod, new cjs.Rectangle(-15.4,-8.2,30.9,16.5), null);


(lib.control_tv_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_21();
	this.instance.parent = this;
	this.instance.setTransform(-58.6,-13.5,0.484,0.484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_tv_title, new cjs.Rectangle(-58.6,-13.5,117.2,27.1), null);


(lib.control_smart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_117();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_smart1, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_repit_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_107();
	this.instance.parent = this;
	this.instance.setTransform(-24,-6.1,0.486,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_repit_title, new cjs.Rectangle(-24,-6.1,48.1,12.3), null);


(lib.control_repit_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_28();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-10.6,0.467,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_repit_on, new cjs.Rectangle(-19.8,-10.6,39.7,21.2), null);


(lib.control_repit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_112();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-8.2,0.364,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_repit, new cjs.Rectangle(-15.4,-8.2,30.9,16.5), null);


(lib.control_records_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_108();
	this.instance.parent = this;
	this.instance.setTransform(-16.8,-5.9,0.553,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_records_title, new cjs.Rectangle(-16.8,-5.9,33.8,11.9), null);


(lib.control_records_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_26();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-10.6,0.467,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_records_on, new cjs.Rectangle(-19.8,-10.6,39.7,21.2), null);


(lib.control_records = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_110();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-8.2,0.364,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_records, new cjs.Rectangle(-15.4,-8.2,30.9,16.5), null);


(lib.control_phone_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_109();
	this.instance.parent = this;
	this.instance.setTransform(-26,-5.9,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_phone_title, new cjs.Rectangle(-26,-5.9,52.1,11.9), null);


(lib.control_phone_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_27();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-10.6,0.467,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_phone_on, new cjs.Rectangle(-19.8,-10.6,39.7,21.2), null);


(lib.control_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_114();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-8.2,0.363,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_phone, new cjs.Rectangle(-15.4,-8.2,30.9,16.5), null);


(lib.control_partner1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.345,0.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_partner1, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_not = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_119();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.337,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_not, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_nefflix1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_118();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_nefflix1, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_hd_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0111();
	this.instance.parent = this;
	this.instance.setTransform(-7.8,-5,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_hd_title, new cjs.Rectangle(-7.8,-5,15.6,10), null);


(lib.control_hd_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_29();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-10.6,0.467,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_hd_on, new cjs.Rectangle(-19.8,-10.6,39.7,21.2), null);


(lib.control_hd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_111();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-8.2,0.364,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_hd, new cjs.Rectangle(-15.4,-8.2,30.9,16.5), null);


(lib.control_cellcom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_116();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,-20.8,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_cellcom1, new cjs.Rectangle(-20.8,-20.8,41.8,41.8), null);


(lib.control_capa_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_20();
	this.instance.parent = this;
	this.instance.setTransform(-23.1,-12,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_capa_title, new cjs.Rectangle(-23.1,-12,46.3,24), null);


(lib.control_active1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_115();
	this.instance.parent = this;
	this.instance.setTransform(-60,-8.4,0.326,0.326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_active1, new cjs.Rectangle(-60,-8.4,120.1,17), null);


(lib.control_active_on1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_25();
	this.instance.parent = this;
	this.instance.setTransform(-77.1,-10.8,0.419,0.418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_active_on1, new cjs.Rectangle(-77.1,-10.8,154.3,21.8), null);


(lib.control = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_22();
	this.instance.parent = this;
	this.instance.setTransform(-94.6,-221.2,0.434,0.398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.control, new cjs.Rectangle(-94.6,-221.2,189.4,442.6), null);


(lib.charlies_angels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_75();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.charlies_angels, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.cbs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_125();
	this.instance.parent = this;
	this.instance.setTransform(-23.6,-7.1,0.384,0.384);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjtBoIAAjPIHbAAIAADPg");
	this.shape.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cbs, new cjs.Rectangle(-23.6,-11.6,47.6,20.9), null);


(lib.casual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_41();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.casual, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.bull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_55();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bull, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.broadchurch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_100();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.386,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.broadchurch, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.bojack_horseman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_96();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bojack_horseman, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.bll_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_11();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.bll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_85();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bll, new cjs.Rectangle(-20,-20,40,40), null);


(lib.blindspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_46();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.393,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blindspot, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.blacklist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_44();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.403,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blacklist, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.black_mirror = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_97();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.black_mirror, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.billions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_49();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.billions, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.better_call_saul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_99();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.better_call_saul, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.bbc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_121();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-10.2,0.305,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbc, new cjs.Rectangle(-15.5,-10.2,31.2,20.5), null);


(lib.atlanta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_37();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atlanta, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.agents_of_shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_73();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.agents_of_shield, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.aborer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_66();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aborer, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.abc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_126();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-19.8,0.477,0.477);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjFDGIAAmMIGLAAIAAGMg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.abc, new cjs.Rectangle(-19.8,-19.8,39.6,39.7), null);


(lib._13_resasons_why = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_98();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,-23.9,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._13_resasons_why, new cjs.Rectangle(-23.9,-23.9,47.9,47.9), null);


(lib.zero_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.zero_on = new lib.zero_on1();
	this.zero_on.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.zero_on).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-16.3,32.6,32.6);


(lib.westworld_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מותחן מדע-בדיוני. הסדרה עוקבת אחר פארק שעשושים עתידני, בו באי הפארק מתארחים כדי לחוות חוויה עשירה ומלאה של חיים והרפתקאות במערב הפרוע. בפארק ישנם מאות רובוטים המכונים “מארחים”, המתוכנתים לשעשע את באי הפארק.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 389;
	this.text.parent = this;
	this.text.setTransform(199.1,-146.7);

	this.westworld_trailer = new lib.my_youtube({'id': 'westworld_trailer', 'src':'https://www.youtube.com/embed/IuS5huqOND4', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.westworld_trailer.setTransform(-0.4,74.9,4.276,2.322,0,0,0,50,50);

	this.instance = new lib.flash0ai_15();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.westworld_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.westworld_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.westworld_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.westworld = new lib.westworld();
	this.westworld.parent = this;
	this.westworld.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_5();
	this.instance.parent = this;
	this.instance.setTransform(21,-94,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.westworld,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.westworld,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.veep_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קומדיה סטירית. סדרה עוסקת בסלינה מאייר, דמותה הבדיונית של סגנית נשיא ארצות הברית, ובהמשך גם נשיאת ארצות הברית. הסדרה עוקבת אחר מאייר וצוותה וניסיונותיהם להשאיר את חותמם על ההיסטוריה האמריקנית, כשבדרך הם שורדים אך בקושי את היומיום ההפכפך בוושינגטון די.סי.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 396;
	this.text.parent = this;
	this.text.setTransform(196.1,-146.5);

	this.veep_trailer = new lib.my_youtube({'id': 'veep_trailer', 'src':'https://www.youtube.com/embed/I2HoCG_iyhU', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.veep_trailer.setTransform(-0.8,74,4.276,2.322,0,0,0,50,50);

	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.veep_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.veep_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.veep_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.veep = new lib.veep();
	this.veep.parent = this;
	this.veep.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_8();
	this.instance.parent = this;
	this.instance.setTransform(21,-93,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.veep,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.veep,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.tnr_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tnr_trailer = new lib.my_youtube({'id': 'tnr_trailer', 'src':'https://www.youtube.com/embed/wC8ovJYAU3U', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.tnr_trailer.setTransform(0.8,74.1,4.276,2.322,0,0,0,50,50);

	this.text = new cjs.Text("דרמה. וויל מק'אווי הוא שדרן חדשות פופולארי וקונפורמיסט, אשר לאחר התפרצות פומבית מפתיעה נגד הפטריוטיות האמריקאית, מאבד את צוות החדשות שלו ומקבל בתמורה צוות חדש, צעיר ואידיאליסטי. יחדיו, וויל והצוות שלו יוצאים לשנות את פני החדשות באמריקה ולנצל את כוחה כדי לשפר את המצב הלאומי.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 406;
	this.text.parent = this;
	this.text.setTransform(202,-148);

	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.tnr_trailer}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tnr_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.tnr_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tnr = new lib.tnr();
	this.tnr.parent = this;
	this.tnr.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_6();
	this.instance.parent = this;
	this.instance.setTransform(19,-94,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tnr,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.tnr,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.tno_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דרמה. הסדרה עוקבת אחר חקירתו ומשפטו של צעיר אמריקאי ממוצא פקיסטני שמואשם ברצח בחורה עמה בילה בליל האירוע.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 383;
	this.text.parent = this;
	this.text.setTransform(158.5,-125.7);

	this.tno_trailer = new lib.my_youtube({'id': 'tno_trailer', 'src':'https://www.youtube.com/embed/PbHkfsyU-r8', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.tno_trailer.setTransform(-26.1,74.3,4.276,2.322,0,0,0,50,50);

	this.instance = new lib.flash0ai_9();
	this.instance.parent = this;
	this.instance.setTransform(-256,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.tno_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tno_pop, new cjs.Rectangle(-256,-206,458.4,412.1), null);


(lib.tno_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tno = new lib.tno();
	this.tno.parent = this;
	this.tno.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_1();
	this.instance.parent = this;
	this.instance.setTransform(21,-93,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tno,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.tno,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.siliconv_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קומדיה. העלילה מתרחשת בעמק הסיליקון שבקליפורניה ועוקבת אחרי חברת ההזנק \"פייד פייפר\" (Pied Piper), המציעה שירות כיווץ בעל אלגוריתם ייחודי, ומתחריהם, חברת \"הולי\" ומוצרם \"נוקליאוס\", במירוץ להשקת מערכת הכיווץ לשוק לפני החברה המתחרה.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(191.4,-144.9);

	this.siliconv_trailer = new lib.my_youtube({'id': 'siliconv_trailer', 'src':'https://www.youtube.com/embed/69V__a49xtw', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.siliconv_trailer.setTransform(0.7,74,4.276,2.322,0,0,0,50,50);

	this.instance = new lib.flash0ai_6();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.siliconv_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.siliconv_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.siliconv_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.siliconv = new lib.siliconv();
	this.siliconv.parent = this;
	this.siliconv.setTransform(0.5,0.1,1.396,1.198,0,0,0,0.3,0.1);

	this.instance = new lib.flash0aiAssets_2();
	this.instance.parent = this;
	this.instance.setTransform(20,-95,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.siliconv,p:{regY:0.1,scaleX:1.396,scaleY:1.198,y:0.1}}]}).to({state:[{t:this.siliconv,p:{regY:0.3,scaleX:1.713,scaleY:1.6,y:0.5}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-23.9,55.8,47.9);


(lib.got_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.got_trailer = new lib.my_youtube({'id': 'got_trailer', 'src':'https://www.youtube.com/embed/BpJYNVhGf1s', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.got_trailer.setTransform(1.5,73.9,4.276,2.322,0,0,0,50,50);

	this.text = new cjs.Text("פנטזיה. הסדרה עוקבת אחר עלילותיהן של מספר משפחות אצולה הטוענות לכתר ושליטה בשבע הממלכות הדמיוניות של יבשת וסטרוז (Westeros). העלילה עוסקת במאבקיהן הפוליטיים והאלימים של משפחות האצולה הללו, על כס המלוכה.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 391;
	this.text.parent = this;
	this.text.setTransform(191.6,-144.8);

	this.instance = new lib.flash0ai_13();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.got_trailer}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.got_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.got_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.got = new lib.got();
	this.got.parent = this;
	this.got.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_4();
	this.instance.parent = this;
	this.instance.setTransform(22,-94,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.got,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.got,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.girls_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דרמה קומדיה. הסדרה עוקבת אחר קבוצת צעירים, בעיקר נשים בתחילת שנות ה-20 לחייהן, המתמודדות עם החיים בניו יורק. ב-2012 זכתה הסדרה בפרס גלובוס הזהב בקטגוריית הסדרה הקומית הטובה ביותר.", "19px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 30;
	this.text.lineWidth = 532;
	this.text.parent = this;
	this.text.setTransform(262.7,-187.7);

	this.girls_trailer = new lib.my_youtube({'id': 'girls_trailer', 'src':'https://www.youtube.com/embed/oMK8PbjPwhA', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.girls_trailer.setTransform(-0.3,97.3,5.62,3.05,0,0,0,50,50);

	this.instance = new lib.flash0ai_19();
	this.instance.parent = this;
	this.instance.setTransform(-301.5,-271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.girls_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.girls_pop, new cjs.Rectangle(-301.5,-271,603,542), null);


(lib.girls_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.girls = new lib.girls();
	this.girls.parent = this;
	this.girls.setTransform(0.5,0.5,1.198,1.198,0,0,0,0.4,0.4);

	this.instance = new lib.flash0aiAssets_9();
	this.instance.parent = this;
	this.instance.setTransform(22,-94,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.girls,p:{regX:0.4,regY:0.4,scaleX:1.198,scaleY:1.198,x:0.5,y:0.5}}]}).to({state:[{t:this.girls,p:{regX:0,regY:0,scaleX:1.5,scaleY:1.5,x:0,y:0}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.entourage_pop_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.entourage_pop_x = new lib.entourage_pop_x1();
	this.entourage_pop_x.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.entourage_pop_x).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.entourage_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קומדיה. הסדרה עוסקת בנושאים של ידידות גברית ומצבים בחיים האמיתיים בהוליווד של ימינו. העלילה מתארת את קריירת המשחק של כוכב קולנוע צעיר בראשית דרכו, המנסה להתקדם בתעשיית הקולנוע האמריקאי של לוס אנג'לס, בעזרת חברי הילדות שלו.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 391;
	this.text.parent = this;
	this.text.setTransform(196.1,-144.8);

	this.entourage_trailer = new lib.my_youtube({'id': 'entourage_trailer', 'src':'https://www.youtube.com/embed/SGSE_XPF4_g', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.entourage_trailer.setTransform(0.5,73.3,4.276,2.321,0,0,0,50.1,49.6);

	this.instance = new lib.flash0ai_17();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.entourage_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entourage_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.entourage_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.entourage = new lib.entourage();
	this.entourage.parent = this;
	this.entourage.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_7();
	this.instance.parent = this;
	this.instance.setTransform(21,-95,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.entourage,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.entourage,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.deadwood_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.deadwood_trailer = new lib.my_youtube({'id': 'deadwood_trailer', 'src':'https://www.youtube.com/embed/mFIojradr4Y', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.deadwood_trailer.setTransform(0.5,74.4,4.276,2.322,0,0,0,50,50);

	this.text = new cjs.Text("דרמה. הסדרה מתארת את קורותיו של המחנה \"דדווד\". המחנה הוקם לאחר גילוי זהב באזור, והיה בית למחפשי הזהב הרבים. בעודה מתמקדת בזונות, בבעלי הבארים ובמהגרים. הסדרה מבוססת בחלקה על דמויות היסטוריות ואירועים אמיתיים", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 389;
	this.text.parent = this;
	this.text.setTransform(192.9,-146.1);

	this.instance = new lib.flash0ai_5();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.deadwood_trailer}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.deadwood_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.deadwood_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.deadwood = new lib.deadwood();
	this.deadwood.parent = this;
	this.deadwood.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets();
	this.instance.parent = this;
	this.instance.setTransform(21,-95,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deadwood,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.deadwood,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.control_yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_yes = new lib.control_yes1();
	this.control_yes.parent = this;
	this.control_yes.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_yes).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_smart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_smart = new lib.control_smart1();
	this.control_smart.parent = this;
	this.control_smart.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_smart).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_partner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_partner = new lib.control_partner1();
	this.control_partner.parent = this;
	this.control_partner.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_partner).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_nefflix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_nefflix = new lib.control_nefflix1();
	this.control_nefflix.parent = this;
	this.control_nefflix.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_nefflix).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_hot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_hot = new lib.control_not();
	this.control_hot.parent = this;
	this.control_hot.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_hot).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_cellcom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_cellcom = new lib.control_cellcom1();
	this.control_cellcom.parent = this;
	this.control_cellcom.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_cellcom).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-26.8,53.7,53.7);


(lib.control_active_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_active_on = new lib.control_active_on1();
	this.control_active_on.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control_active_on).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-10.8,154.3,21.8);


(lib.control_active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.control_active = new lib.control_active1();
	this.control_active.parent = this;
	this.control_active.setTransform(0,0,1.284,1.284);

	this.timeline.addTween(cjs.Tween.get(this.control_active).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-10.8,154.3,21.8);


(lib.bll_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דרמה. העלילה מתרחשת במונטריי ומספרת על חבורתן של שלוש אמהות של תלמידי כיתה א' שהופכות לחברות. מבחוץ הכל נראה נוצץ, אבל חייהן, שעל פני השטח מצטיירים כמושלמים, נחשפים במערומיהן בעקבות רצח שמתרחש במקום מגוריהן.", "13px 'Heebo Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 392;
	this.text.parent = this;
	this.text.setTransform(193.9,-146.4);

	this.bll_trailer = new lib.my_youtube({'id': 'bll_trailer', 'src':'https://www.youtube.com/embed/YFZcNKzDhYI', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.bll_trailer.setTransform(-0.1,73.8,4.276,2.322,0,0,0,50,50);

	this.instance = new lib.flash0ai_10();
	this.instance.parent = this;
	this.instance.setTransform(-229.2,-206,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bll_trailer},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bll_pop, new cjs.Rectangle(-229.2,-206,458.4,412.1), null);


(lib.bll_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bll = new lib.bll();
	this.bll.parent = this;
	this.bll.setTransform(0.1,0.1,1.198,1.198,0,0,0,0.1,0.1);

	this.instance = new lib.flash0aiAssets_3();
	this.instance.parent = this;
	this.instance.setTransform(20,-93,0.481,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bll,p:{scaleX:1.198,scaleY:1.198,x:0.1,y:0.1}}]}).to({state:[{t:this.bll,p:{scaleX:1.5,scaleY:1.5,x:0.2,y:0.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


// stage content:
(lib.חברתטלוויזיהשמתאימהליסופי = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//משתנים גלובאלים
		var buttonClicked = 0;
		
		
		
		//פונקציות
		
		//הצג פעילים
		this.control_active.addEventListener("click", showActive.bind(this));
		
		function showActive()
		{
			buttonClicked = 3;
			fadeAll.bind(this)();
			this.control_active_on.x=1187.4;
			this.control_active_on.y=435.9;
			
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
			this.control_active_on.alpha=1;
			this.netflix.alpha=1;
			this.hbo.alpha=1;
			this.abc.alpha=1;
			this.cbs.alpha=1;
			this.showtime.alpha=1;
			this.nbc.alpha=1;
			this.hulu.alpha=1;
			this.bbc.alpha=1;
			this.fx.alpha=1;
			this.hot.alpha=1;
			this.yes.alpha=1;
		
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.siliconv.alpha=1;
			this.tno.alpha=1;
			this.deadwood.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
		
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_partner.alpha=1;
			
			this.control_records_title.alpha=1;
			this.control_records.alpha=1;
			this.control_phone.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_tv_title.alpha=1;
			this.control_capa_title.alpha=1;
				
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			this.zero_on.alpha=1;
		
		}
		
		
		//פונקציה שמסתירה את כל האלמנטים בפייד
		function fadeAll(){
			
				this.netflix.alpha=0.2;
				this.hbo.alpha=0.2;
				this.abc.alpha=0.2;
				this.cbs.alpha=0.2;
				this.showtime.alpha=0.2;
				this.nbc.alpha=0.2;
				this.hulu.alpha=0.2;
				this.bbc.alpha=0.2;
				this.fx.alpha=0.2;
				this.hot.alpha=0.2;
				this.yes.alpha=0.2;
				this.girls_button.alpha=0.2;
				this.entourage.alpha=0.2;
				this.westworld.alpha=0.2;
				this.bll.alpha=0.2;
				this.tno.alpha=0.2;
				this.siliconv.alpha=0.2;
				this.deadwood.alpha=0.2;
				this.veep.alpha=0.2;
				this.tnr.alpha=0.2;
				this.black_mirror.alpha=0.2;
				this.got.alpha=0.2;
				this.easy.alpha=0.2;
				this.the_fall.alpha=0.2;
				this.stranger_things.alpha=0.2;
				this.making_a_murderer.alpha=0.2;
				this.dwp.alpha=0.2;
				this.broadchurch.alpha=0.2;
				this.better_call_saul.alpha=0.2;
				this.resasons_why.alpha=0.2;
				this.unbreakable.alpha=0.2;
				this.narcos.alpha=0.2;
				this.master_of_none.alpha=0.2;
				this.orange_is_the_new_black.alpha=0.2;
				this.daredevil.alpha=0.2;
				this.jessica_jones.alpha=0.2;
				this.house_of_cards.alpha=0.2;
				this.bojack_horseman.alpha=0.2;
				this.pan_am.alpha=0.2;
				this.agents_of_s.alpha=0.2;
				this.rake.alpha=0.2;
				this.charlies_angels.alpha=0.2;
				this.quantico.alpha=0.2;
				this.the_catch.alpha=0.2;
				this.once_upon_a_time.alpha=0.2;
				this.greys_antomy.alpha=0.2;
				this.serial_thriller.alpha=0.2;
				this.four_in_the_morning.alpha=0.2;
				this.the_good_fight.alpha=0.2;
				this.bull.alpha=0.2;
				this.how_i_meet_your_mother.alpha=0.2;
				this.the_big_bang_theroy.alpha=0.2;
				this.the_big_c.alpha=0.2;
				this.billions.alpha=0.2;
				this.masters_of_sex.alpha=0.2;
				this.vikings.alpha=0.2;
				this.blacklist.alpha=0.2;
				this.this_is_us.alpha=0.2;
				this.blindspot.alpha=0.2;
				this.shades_of_blue.alpha=0.2;
				this.casual.alpha=0.2;
				this.deadbeat.alpha=0.2;
				this.the_handmaiss_tale.alpha=0.2;
				this.lip_service.alpha=0.2;
				this.the_white_queen.alpha=0.2;
				this.the_missing.alpha=0.2;
				this.justified.alpha=0.2;
				this.the_americans.alpha=0.2;
				this.atlanta.alpha=0.2;
				this.principle_of_substitution.alpha=0.2;
				this.important_person.alpha=0.2;
				this.aborer.alpha=0.2;
				this.the_unit.alpha=0.2;
				this.esfor.alpha=0.2;
				this.die_for_a_moment.alpha=0.2;
				this.fauda.alpha=0.2;
				this.stuped.alpha=0.2;
				this.touching_distance.alpha=0.2;
				this.tahagad.alpha=0.2;
				this.kidnapped.alpha=0.2;
				this.srugim.alpha=0.2;
				this.la_la_land.alpha=0.2;
				this.our_song.alpha=0.2;
				this.x_bottom.alpha=0.2;
				this.q_bottom.alpha=0.2;
				this.guid.alpha=0.2;
				this.control.alpha=0.2;
				this.control_nefflix.alpha=0.2;
				this.control_hot.alpha=0.2;
				this.control_yes.alpha=0.2;
				this.control_cellcom.alpha=0.2;
				this.control_smart.alpha=0.2;
				this.control_partner.alpha=0.2;
				this.control_active.alpha=0.2;
				this.control_active_on.alpha=0.2;
				this.control_records.alpha=0.2;
				this.control_records_title.alpha=0.2;
				this.control_records_on.alpha=0.2;
				this.control_phone.alpha=0.2;
				this.control_phone_title.alpha=0.2;
				this.control_phone_on.alpha=0.2;
				this.control_vod_on.alpha=0.2;
				this.control_vod.alpha=0.2;
				this.control_vod_title.alpha=0.2;
				this.control_repit.alpha=0.2;
				this.control_repit_title.alpha=0.2;
				this.control_repit_on.alpha=0.2;
				this.control_hd.alpha=0.2;
				this.control_hd_title.alpha=0.2;
				this.control_hd_on.alpha=0.2;
				this.control_tv_title.alpha=0.2;
				this.control_capa_title.alpha=0.2;
				this.zero.alpha=0.2;
				this.zero_on.alpha=0.2;
		
		}
		
		
		//פונקציה שמציגה את כל האלמנטים
		function showAll(){
		this.netflix.alpha=1;
		this.hbo.alpha=1;
		this.abc.alpha=1;
		this.cbs.alpha=1;
		this.showtime.alpha=1;
		this.nbc.alpha=1;
		this.hulu.alpha=1;
		this.bbc.alpha=1;
		this.fx.alpha=1;
		this.hot.alpha=1;
		this.yes.alpha=1;
		this.girls_button.alpha=1;
		this.entourage.alpha=1;
		this.westworld.alpha=1;
		this.bll.alpha=1;
		this.tno.alpha=1;
		this.siliconv.alpha=1;
		this.deadwood.alpha=1;
		this.veep.alpha=1;
		this.tnr.alpha=1;
		this.black_mirror.alpha=1;
		this.got.alpha=1;
		this.easy.alpha=1;
		this.the_fall.alpha=1;
		this.stranger_things.alpha=1;
		this.making_a_murderer.alpha=1;
		this.dwp.alpha=1;
		this.broadchurch.alpha=1;
		this.better_call_saul.alpha=1;
		this.resasons_why.alpha=1;
		this.unbreakable.alpha=1;
		this.narcos.alpha=1;
		this.master_of_none.alpha=1;
		this.orange_is_the_new_black.alpha=1;
		this.daredevil.alpha=1;
		this.jessica_jones.alpha=1;
		this.house_of_cards.alpha=1;
		this.bojack_horseman.alpha=1;
		this.pan_am.alpha=1;
		this.agents_of_s.alpha=1;
		this.rake.alpha=1;
		this.charlies_angels.alpha=1;
		this.quantico.alpha=1;
		this.the_catch.alpha=1;
		this.once_upon_a_time.alpha=1;
		this.greys_antomy.alpha=1;
		this.serial_thriller.alpha=1;
		this.four_in_the_morning.alpha=1;
		this.the_good_fight.alpha=1;
		this.bull.alpha=1;
		this.how_i_meet_your_mother.alpha=1;
		this.the_big_bang_theroy.alpha=1;
		this.the_big_c.alpha=1;
		this.billions.alpha=1;
		this.masters_of_sex.alpha=1;
		this.vikings.alpha=1;
		this.blacklist.alpha=1;
		this.this_is_us.alpha=1;
		this.blindspot.alpha=1;
		this.shades_of_blue.alpha=1;
		this.casual.alpha=1;
		this.deadbeat.alpha=1;
		this.the_handmaiss_tale.alpha=1;
		this.lip_service.alpha=1;
		this.the_white_queen.alpha=1;
		this.the_missing.alpha=1;
		this.justified.alpha=1;
		this.the_americans.alpha=1;
		this.atlanta.alpha=1;
		this.principle_of_substitution.alpha=1;
		this.important_person.alpha=1;
		this.aborer.alpha=1;
		this.the_unit.alpha=1;
		this.esfor.alpha=1;
		this.die_for_a_moment.alpha=1;
		this.fauda.alpha=1;
		this.stuped.alpha=1;
		this.touching_distance.alpha=1;
		this.tahagad.alpha=1;
		this.kidnapped.alpha=1;
		this.srugim.alpha=1;
		this.la_la_land.alpha=1;
		this.our_song.alpha=1;
		this.x_bottom.alpha=1;
		this.q_bottom.alpha=1;
		this.guid.alpha=1;
		this.control.alpha=1;
		this.control_nefflix.alpha=1;
		this.control_hot.alpha=1;
		this.control_yes.alpha=1;
		this.control_cellcom.alpha=1;
		this.control_smart.alpha=1;
		this.control_partner.alpha=1;
		this.control_active.alpha=1;
		this.control_active_on.alpha=1;
		this.control_records.alpha=1;
		this.control_records_title.alpha=1;
		this.control_records_on.alpha=1;
		this.control_phone.alpha=1;
		this.control_phone_title.alpha=1;
		this.control_phone_on.alpha=1;
		this.control_vod_on.alpha=1;
		this.control_vod.alpha=1;
		this.control_vod_title.alpha=1;
		this.control_repit.alpha=1;
		this.control_repit_title.alpha=1;
		this.control_repit_on.alpha=1;
		this.control_hd.alpha=1;
		this.control_hd_on.alpha=1;
		this.control_hd_title.alpha=1;
		this.control_tv_title.alpha=1;
		this.control_capa_title.alpha=1;
		this.zero.alpha=1;
		this.zero_on.alpha=1;
		
		}
		
		//כפתור איפוס
		
		this.zero_on.addEventListener("click", resetButton.bind(this));
		
		function resetButton()
		{
			buttonClicked = 0;
			showAll.bind(this)();
			this.zero_on.x=1431.3;
			this.zero_on.y=366.3;
			this.control_active_on.x=1631.3;
			this.control_active_on.y=366.3;
			this.control_records_on.x=1427.85;
			this.control_records_on.y=254.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=254.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=254.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=254.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=254.6;
			
		
		}
		
		//אינטרקציה לחברות טלוויזיה
		
		//Yes אינטרקציה לחברת
		
		//לחיצת כפתור
		this.control_yes.addEventListener("click", clickOnYesActive.bind(this));
		
		function clickOnYesActive()
		{
			
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_yes.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
			this.zero_on.alpha=1;
			this.netflix.alpha=1;
			this.hbo.alpha=1;
			this.abc.alpha=1;
			this.yes.alpha=1;
			this.cbs.alpha=1;
			this.showtime.alpha=1;
			this.nbc.alpha=1;
			this.bbc.alpha=1;
			this.fx.alpha=1;
			this.the_fall.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.better_call_saul.alpha=1;
			this.house_of_cards.alpha=1;
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.tno.alpha=1;
			this.siliconv.alpha=1;
			this.deadwood.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
			this.once_upon_a_time.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.the_big_bang_theroy.alpha=1;
			this.masters_of_sex.alpha=1;
			this.blacklist.alpha=1;
			this.the_white_queen.alpha=1;
			this.the_missing.alpha=1;
			this.the_americans.alpha=1;
			this.touching_distance.alpha=1;
			this.tahagad.alpha=1;
			this.kidnapped.alpha=1;
			this.srugim.alpha=1;
			this.la_la_land.alpha=1;
			this.our_song.alpha=1;
			
			this.control_capa_title.alpha=1;
			this.control_records_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		
		//מעבר עכבר
		this.control_yes.addEventListener("mouseover", fadeOverYesControl.bind(this));
		
		function fadeOverYesControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_yes.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
			this.netflix.alpha=1;
			this.hbo.alpha=1;
			this.abc.alpha=1;
			this.yes.alpha=1;
			this.cbs.alpha=1;
			this.showtime.alpha=1;
			this.nbc.alpha=1;
			this.bbc.alpha=1;
			this.fx.alpha=1;
			this.the_fall.alpha=1;
			this.this_is_us.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.better_call_saul.alpha=1;
			this.house_of_cards.alpha=1;
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.tno.alpha=1;
			this.siliconv.alpha=1;
			this.deadwood.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
			this.once_upon_a_time.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.the_big_bang_theroy.alpha=1;
			this.masters_of_sex.alpha=1;
			this.blacklist.alpha=1;
			this.the_white_queen.alpha=1;
			this.the_missing.alpha=1;
			this.the_americans.alpha=1;
			this.touching_distance.alpha=1;
			this.tahagad.alpha=1;
			this.kidnapped.alpha=1;
			this.srugim.alpha=1;
			this.la_la_land.alpha=1;
			this.our_song.alpha=1;
			
			
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.control_records_on.x=1248.15;
			this.control_records_on.y=510.15;
			this.control_phone_on.x=1134.6;
			this.control_phone_on.y=510.15;
			this.control_vod_on.x=1132.4;
			this.control_vod_on.y=575.65;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_yes.addEventListener("mouseout", fadeOutYesControl.bind(this));
		
		function fadeOutYesControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				
				
			}
				if(buttonClicked==3){
					showActive.bind(this)();
				this.control_records_on.x=1427.85;
				this.control_records_on.y=159.6;
				this.control_phone_on.x=1427.85;
				this.control_phone_on.y=159.6;
				this.control_vod_on.x=1427.85;
				this.control_vod_on.y=159.6;
				this.control_repit_on.x=1427.85;
				this.control_repit_on.y=159.6;
				this.control_hd_on.x=1427.85;
				this.control_hd_on.y=159.6;				
					
				}
		}
		
		//HOT
		
		//לחיצת כפתור
		this.control_hot.addEventListener("click", clickOnHotActive.bind(this));
		
		function clickOnHotActive()
		{
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_hot.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.hbo.alpha=1;
			this.hot.alpha=1;
			this.cbs.alpha=1;
			this.hulu.alpha=1;
				
			this.black_mirror.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.house_of_cards.alpha=1;
			this.girls_button.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.veep.alpha=1;
			this.casual.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.stuped.alpha=1;
			this.fauda.alpha=1;
			this.die_for_a_moment.alpha=1;
			this.esfor.alpha=1;
			this.the_unit.alpha=1;
			this.aborer.alpha=1;
			this.important_person.alpha=1;
			this.principle_of_substitution.alpha=1;
			
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
			this.control_records_on.alpha=1;
		
			this.zero_on.alpha=1;
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		//מעבר עכבר
		this.control_hot.addEventListener("mouseover", fadeOverHOTControl.bind(this));
		
		function fadeOverHOTControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
		
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_hot.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.hbo.alpha=1;
			this.hot.alpha=1;
			this.cbs.alpha=1;
			this.hulu.alpha=1;
				
			this.black_mirror.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.house_of_cards.alpha=1;
			this.girls_button.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.veep.alpha=1;
			this.casual.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.stuped.alpha=1;
			this.fauda.alpha=1;
			this.die_for_a_moment.alpha=1;
			this.esfor.alpha=1;
			this.the_unit.alpha=1;
			this.aborer.alpha=1;
			this.important_person.alpha=1;
			this.principle_of_substitution.alpha=1;
			
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
			this.control_records_on.alpha=1;
			
			this.control_records_on.x=1248.15;
			this.control_records_on.y=510.15;
			this.control_vod_on.x=1132.4;
			this.control_vod_on.y=575.65;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_hot.addEventListener("mouseout", fadeOutHOTControl.bind(this));
		
		function fadeOutHOTControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;		
			}
				if(buttonClicked==3){
					showActive.bind(this)();
				this.control_records_on.x=1427.85;
				this.control_records_on.y=159.6;
				this.control_vod_on.x=1427.85;
				this.control_vod_on.y=159.6;
				this.control_repit_on.x=1427.85;
				this.control_repit_on.y=159.6;
				this.control_hd_on.x=1427.85;
				this.control_hd_on.y=159.6;	
				}
		}
		
		
		//Netflix
		
		//לחיצת כפתור
		this.control_nefflix.addEventListener("click", clickOnNetflixActive.bind(this));
		
		function clickOnNetflixActive()
		{
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_nefflix.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
				
			this.black_mirror.alpha=1;
			this.easy.alpha=1;
			this.the_fall.alpha=1;
			this.stranger_things.alpha=1;
			this.making_a_murderer.alpha=1;
			this.dwp.alpha=1;
			this.broadchurch.alpha=1;
			this.better_call_saul.alpha=1;
			this.resasons_why.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.unbreakable.alpha=1;
			this.narcos.alpha=1;
			this.master_of_none.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.daredevil.alpha=1;
			this.jessica_jones.alpha=1;
			this.house_of_cards.alpha=1;
			this.bojack_horseman.alpha=1;
			this.vikings.alpha=1;
			this.blacklist.alpha=1;
			
		
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.zero_on.alpha=1;
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		//מעבר עכבר
		
		this.control_nefflix.addEventListener("mouseover", fadeOverNetflixControl.bind(this));
		
		function fadeOverNetflixControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
		
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_nefflix.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
				
			this.black_mirror.alpha=1;
			this.easy.alpha=1;
			this.the_fall.alpha=1;
			this.stranger_things.alpha=1;
			this.making_a_murderer.alpha=1;
			this.dwp.alpha=1;
			this.broadchurch.alpha=1;
			this.better_call_saul.alpha=1;
			this.resasons_why.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.unbreakable.alpha=1;
			this.narcos.alpha=1;
			this.master_of_none.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.daredevil.alpha=1;
			this.jessica_jones.alpha=1;
			this.house_of_cards.alpha=1;
			this.bojack_horseman.alpha=1;
			this.vikings.alpha=1;
			this.blacklist.alpha=1;
			
		
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.control_phone_on.x=1134.6;
			this.control_phone_on.y=510.15;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_nefflix.addEventListener("mouseout", fadeOutNetflixControl.bind(this));
		
		function fadeOutNetflixControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				
			}
				if(buttonClicked==3){
					showActive.bind(this)();
				this.control_phone_on.x=1427.85;
				this.control_phone_on.y=159.6;
				this.control_repit_on.x=1427.85;
				this.control_repit_on.y=159.6;
				this.control_hd_on.x=1427.85;
				this.control_hd_on.y=159.6;
				}
		}
		
		
		//Partner
		
		//לחיצת כפתור
		this.control_partner.addEventListener("click", clickOnPartnerActive.bind(this));
		
		function clickOnPartnerActive()
		{
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_partner.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
				
			this.black_mirror.alpha=1;
			this.easy.alpha=1;
			this.the_fall.alpha=1;
			this.stranger_things.alpha=1;
			this.making_a_murderer.alpha=1;
			this.dwp.alpha=1;
			this.broadchurch.alpha=1;
			this.better_call_saul.alpha=1;
			this.resasons_why.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.unbreakable.alpha=1;
			this.narcos.alpha=1;
			this.master_of_none.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.daredevil.alpha=1;
			this.jessica_jones.alpha=1;
			this.house_of_cards.alpha=1;
			this.bojack_horseman.alpha=1;
			this.vikings.alpha=1;
			this.blacklist.alpha=1;
			
		
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.zero_on.alpha=1;
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		//מעבר עכבר
		
		this.control_partner.addEventListener("mouseover", fadeOverPartnerControl.bind(this));
		
		function fadeOverPartnerControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
				
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_partner.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
				
			this.black_mirror.alpha=1;
			this.easy.alpha=1;
			this.the_fall.alpha=1;
			this.stranger_things.alpha=1;
			this.making_a_murderer.alpha=1;
			this.dwp.alpha=1;
			this.broadchurch.alpha=1;
			this.better_call_saul.alpha=1;
			this.resasons_why.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.unbreakable.alpha=1;
			this.narcos.alpha=1;
			this.master_of_none.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.daredevil.alpha=1;
			this.jessica_jones.alpha=1;
			this.house_of_cards.alpha=1;
			this.bojack_horseman.alpha=1;
			this.vikings.alpha=1;
			this.blacklist.alpha=1;
			
		
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.control_records_on.x=1248.15;
			this.control_records_on.y=510.15;
			this.control_phone_on.x=1134.6;
			this.control_phone_on.y=510.15;
			this.control_vod_on.x=1132.4;
			this.control_vod_on.y=575.65;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_partner.addEventListener("mouseout", fadeOutPartnerControl.bind(this));
		
		function fadeOutPartnerControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
		
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				}
		}
		
		//Smart
		
		//לחיצת כפתור
		this.control_smart.addEventListener("click", clickOnSmartActive.bind(this));
		
		function clickOnSmartActive()
		{
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_smart.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.hulu.alpha=1;
			this.abc.alpha=1;
			this.hbo.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
			this.bbc.alpha=1;
			this.fx.alpha=1;
				
			this.deadwood.alpha=1;
			this.pan_am.alpha=1;
			this.charlies_angels.alpha=1;		
			this.serial_thriller.alpha=1;
			this.four_in_the_morning.alpha=1;
			this.the_big_c.alpha=1;
			this.masters_of_sex.alpha=1;
			this.casual.alpha=1;
			this.lip_service.alpha=1;
			this.the_white_queen.alpha=1;
			this.justified.alpha=1;
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.zero_on.alpha=1;
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		//מעבר עכבר
		
		this.control_smart.addEventListener("mouseover", fadeOverSmartControl.bind(this));
		
		function fadeOverSmartControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
		
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_smart.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
			this.hulu.alpha=1;
			this.abc.alpha=1;
			this.hbo.alpha=1;
			this.showtime.alpha=1;
			this.cbs.alpha=1;
			this.bbc.alpha=1;
			this.fx.alpha=1;
				
			this.deadwood.alpha=1;
			this.pan_am.alpha=1;
			this.charlies_angels.alpha=1;		
			this.serial_thriller.alpha=1;
			this.four_in_the_morning.alpha=1;
			this.the_big_c.alpha=1;
			this.masters_of_sex.alpha=1;
			this.casual.alpha=1;
			this.lip_service.alpha=1;
			this.the_white_queen.alpha=1;
			this.justified.alpha=1;
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.control_records_on.x=1248.15;
			this.control_records_on.y=510.15;
			this.control_phone_on.x=1134.6;
			this.control_phone_on.y=510.15;
			this.control_vod_on.x=1132.4;
			this.control_vod_on.y=575.65;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_smart.addEventListener("mouseout", fadeOutSmartControl.bind(this));
		
		function fadeOutSmartControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
		
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				}
		
		}
		
		//Cellcom TV
		
		//לחיצת כפתור
		this.control_cellcom.addEventListener("click", clickOnCellcomActive.bind(this));
		
		function clickOnCellcomActive()
		{
			buttonClicked = 2;
			fadeAll.bind(this)();
			this.control_active_on.alpha=1;
			this.control_cellcom.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
		
			this.abc.alpha=1;
			this.hbo.alpha=1;
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.bbc.alpha=1;
		
				
			this.better_call_saul.alpha=1;
			this.house_of_cards.alpha=1;
			this.deadwood.alpha=1;		
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.tno.alpha=1;
			this.siliconv.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
			this.quantico.alpha=1;
			this.the_catch.alpha=1;
			this.blacklist.alpha=1;
			this.shades_of_blue.alpha=1;
			this.the_missing.alpha=1;
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.zero_on.alpha=1;
			this.zero_on.x=1191.3;
			this.zero_on.y=366.3;
			
		}
		
		//מעבר עכבר
		
		this.control_cellcom.addEventListener("mouseover", fadeOverCellcomControl.bind(this));
		
		function fadeOverCellcomControl()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
		
			this.control_active_on.alpha=1;
			this.zero_on.alpha=1;
			this.control_cellcom.alpha=1;
			this.control.alpha=1;
			this.control_tv_title.alpha=1;
				
		
			this.abc.alpha=1;
			this.hbo.alpha=1;
			this.netflix.alpha=1;
			this.nbc.alpha=1;
			this.bbc.alpha=1;
		
				
			this.better_call_saul.alpha=1;
			this.house_of_cards.alpha=1;
			this.deadwood.alpha=1;		
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.tno.alpha=1;
			this.siliconv.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
			this.quantico.alpha=1;
			this.the_catch.alpha=1;
			this.blacklist.alpha=1;
			this.shades_of_blue.alpha=1;
			this.the_missing.alpha=1;
		
			this.control_records_title.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
			this.control_vod_title.alpha=1;
			this.control_repit_title.alpha=1;
			this.control_hd_title.alpha=1;
			this.control_records_on.alpha=1;
			this.control_phone_on.alpha=1;;
			this.control_vod_on.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_hd_on.alpha=1;
		
			this.control_records_on.x=1248.15;
			this.control_records_on.y=510.15;
			this.control_phone_on.x=1134.6;
			this.control_phone_on.y=510.15;
			this.control_vod_on.x=1132.4;
			this.control_vod_on.y=575.65;
			this.control_repit_on.x=1190.45;
			this.control_repit_on.y=575.65;
			this.control_hd_on.x=1248.5;
			this.control_hd_on.y=575.65;
			
			}
		}
		
		this.control_cellcom.addEventListener("mouseout", fadeOutCellcomControl.bind(this));
		
		function fadeOutCellcomControl()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
				
		
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_records_on.x=1427.85;
			this.control_records_on.y=159.6;
			this.control_phone_on.x=1427.85;
			this.control_phone_on.y=159.6;
			this.control_vod_on.x=1427.85;
			this.control_vod_on.y=159.6;
			this.control_repit_on.x=1427.85;
			this.control_repit_on.y=159.6;
			this.control_hd_on.x=1427.85;
			this.control_hd_on.y=159.6;
				}
		
		}
		
		//מעבר על יכולות
		
		//HD
		
		this.control_hd.addEventListener("mouseover", fadeOverHD.bind(this));
		
		function fadeOverHD()
		{
			if(buttonClicked==0){
			fadeAll.bind(this)();
			this.control_hd_on.x= 1248.5;
			this.control_hd_on.y= 575.65;
			this.control.alpha=1;
			this.control_hd_on.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_hot.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_smart.alpha=1;
			this.control_partner.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_hd_title.alpha=1;
			}
		}
		
		this.control_hd.addEventListener("mouseout", fadeOutHD.bind(this));
		
		function fadeOutHD()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			this.control_hd_on.x= 1427.85;
			this.control_hd_on.y= 159.6;
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_hd_on.x= 1427.85;
			this.control_hd_on.y= 159.6;
				}
		}
		
		
		//הקלטה
		this.control_records.addEventListener("mouseover", fadeOverRecords.bind(this));
		
		function fadeOverRecords()
		{
			if(buttonClicked==0){
			fadeAll.bind(this)();
			this.control_records_on.x= 1248.15;
			this.control_records_on.y= 510.15;
			this.control.alpha=1;
			this.control_records_on.alpha=1;
			this.control_hot.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_partner.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_records_title.alpha=1;
			}
		}
		
		this.control_records.addEventListener("mouseout", fadeOutRecords.bind(this));
		
		function fadeOutRecords()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			this.control_records_on.x= 1427.85;
			this.control_records_on.y= 159.6;
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_records_on.x= 1427.85;
			this.control_records_on.y= 159.6;
				}
		}
		
		//צפייה חוזרת
		
		this.control_repit.addEventListener("mouseover", fadeOverRepit.bind(this));
		
		function fadeOverRepit()
		{
			if(buttonClicked==0){
			fadeAll.bind(this)();
			this.control_repit_on.x= 1190.45;
			this.control_repit_on.y= 575.65;
			this.control.alpha=1;
			this.control_repit_on.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_hot.alpha=1;
			this.control_yes.alpha=1;
			this.control_smart.alpha=1;
			this.control_partner.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_repit_title.alpha=1;
			}
		}
		
		this.control_repit.addEventListener("mouseout", fadeOutRepit.bind(this));
		
		function fadeOutRepit()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			this.control_repit_on.x= 1427.85;
			this.control_repit_on.y= 159.6;
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_repit_on.x= 1427.85;
			this.ccontrol_repit_on.y= 159.6;
				}
		}
		
		//צפייה מהנייד
		
		this.control_phone.addEventListener("mouseover", fadeOverphone.bind(this));
		
		function fadeOverphone()
		{
			if(buttonClicked==0){
			fadeAll.bind(this)();
			this.control_phone_on.x= 1134.6;
			this.control_phone_on.y= 510.15;
			this.control_phone_on.alpha=1;
			this.control.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_hot.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_smart.alpha=1;
			this.control_partner.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_phone_title.alpha=1;
				
			}
		}
		
		this.control_phone.addEventListener("mouseout", fadeOutphone.bind(this));
		
		function fadeOutphone()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			this.control_phone_on.x= 1427.85;
			this.control_phone_on.y= 159.6;
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_phone_on.x= 1427.85;
			this.control_phone_on.y= 159.6;
				}
		}
		
		//VOD
		
		this.control_vod.addEventListener("mouseover", fadeOverVOD.bind(this));
		
		function fadeOverVOD()
		{
			if(buttonClicked==0){
			fadeAll.bind(this)();
			this.control_vod_on.x= 1132.4;
			this.control_vod_on.y= 575.65;
			this.control.alpha=1;
			this.control_vod_on.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_hot.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_smart.alpha=1;
			this.control_partner.alpha=1;
			this.control_capa_title.alpha=1;
			this.control_vod_title.alpha=1;
			}
		}
		
		this.control_vod.addEventListener("mouseout", fadeOutVOD.bind(this));
		
		function fadeOutVOD()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			this.control_vod_on.x= 1427.85;
			this.control_vod_on.y= 159.6;
			}
				if(buttonClicked==3){
					showActive.bind(this)();
			this.control_vod_on.x= 1427.85;
			this.control_vod_on.y= 159.6;
				}
		}
		
		
		
		
		
		
		
		//אינטראקציות לסדרות של HBO
		//בנות\girls
		
		this.girls_button.addEventListener("mouseover", fadeOverGirls.bind(this));
		
		function fadeOverGirls()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.control_hot.alpha=1;
			this.control.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.girls_button.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.girls_button.addEventListener("mouseout", fadeOutGirls.bind(this));
		
		function fadeOutGirls()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//entourage/הפמליה
		
		this.entourage.addEventListener("mouseover", fadeOverEntourage.bind(this));
		
		function fadeOverEntourage()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.control.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.entourage.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.entourage.addEventListener("mouseout", fadeOutEntourage.bind(this));
		
		function fadeOutEntourage()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		 //westworld/ווסטרלוורד
		
		this.westworld.addEventListener("mouseover", fadeOverwestworld.bind(this));
		
		function fadeOverwestworld()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.westworld.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.westworld.addEventListener("mouseout", fadeOutwestworld.bind(this));
		
		function fadeOutwestworld()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		 //game of thrones \ משחקי הכס
		
		this.got.addEventListener("mouseover", fadeOvergot.bind(this));
		
		function fadeOvergot()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.got.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.got.addEventListener("mouseout", fadeOutgot.bind(this));
		
		function fadeOutgot()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		 //Big Little Lies \ שקרים קטנים גדולים
		
		
		this.bll.addEventListener("mouseover", fadeOverbll.bind(this));
		
		function fadeOverbll()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.bll.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.bll.addEventListener("mouseout", fadeOutbll.bind(this));
		
		function fadeOutbll()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		 //The Night Of \ ליל האירוע
		
		
		this.tno.addEventListener("mouseover", fadeOvertno.bind(this));
		
		function fadeOvertno()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.tno.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.tno.addEventListener("mouseout", fadeOuttno.bind(this));
		
		function fadeOuttno()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		 //Silicon Valley\ עמק הסיליקון
		
		
		this.siliconv.addEventListener("mouseover", fadeOversiliconv.bind(this));
		
		function fadeOversiliconv()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.siliconv.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.siliconv.addEventListener("mouseout", fadeOutsiliconv.bind(this));
		
		function fadeOutsiliconv()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		 //Deadwood \ דדוד
		
		
		this.deadwood.addEventListener("mouseover", fadeOverdeadwood.bind(this));
		
		function fadeOverdeadwood()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.deadwood.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control_smart.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.deadwood.addEventListener("mouseout", fadeOutdeadwood.bind(this));
		
		function fadeOutdeadwood()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		 //The News Room \ חדר החדשות
		
		
		this.tnr.addEventListener("mouseover", fadeOvertnr.bind(this));
		
		function fadeOvertnr()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.tnr.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.tnr.addEventListener("mouseout", fadeOuttnr.bind(this));
		
		function fadeOuttnr()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		 //veep
		
		
		this.veep.addEventListener("mouseover", fadeOverveep.bind(this));
		
		function fadeOverveep()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.veep.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			this.zero_on.alpha=1;
			this.control_active_on.alpha=1;
			this.hbo.alpha=1;
			}
		}
		
		this.veep.addEventListener("mouseout", fadeOutveep.bind(this));
		
		function fadeOutveep()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//אינטראקציה לפי רשתות שידור
		//נטפליקס
		
		this.netflix.addEventListener("mouseover", fadeOvernetflix.bind(this));
		
		function fadeOvernetflix()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.netflix.alpha=1;
			this.black_mirror.alpha=1;
			this.easy.alpha=1;
			this.the_fall.alpha=1;
			this.stranger_things.alpha=1;
			this.daredevil.alpha=1;
			this.making_a_murderer.alpha=1;
			this.dwp.alpha=1;
			this.broadchurch.alpha=1;
			this.better_call_saul.alpha=1;
			this.house_of_cards.alpha=1;
			this.bojack_horseman.alpha=1;
			this.resasons_why.alpha=1;
			this.unbreakable.alpha=1;
			this.narcos.alpha=1;
			this.master_of_none.alpha=1;
			this.orange_is_the_new_black.alpha=1;
			this.jessica_jones.alpha=1;
			
			this.control_nefflix.alpha=1;
			this.control_partner.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
		}
		}
		
		this.netflix.addEventListener("mouseout", fadeOutnetflix.bind(this));
		
		function fadeOutnetflix()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//HBO
		
		this.hbo.addEventListener("mouseover", fadeOverHbo.bind(this));
		
		function fadeOverHbo()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.hbo.alpha=1;
			this.girls_button.alpha=1;
			this.entourage.alpha=1;
			this.westworld.alpha=1;
			this.got.alpha=1;
			this.bll.alpha=1;
			this.siliconv.alpha=1;
			this.tno.alpha=1;
			this.deadwood.alpha=1;
			this.tnr.alpha=1;
			this.veep.alpha=1;
		
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.hbo.addEventListener("mouseout", fadeOutHbo.bind(this));
		
		function fadeOutHbo()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		//abc
		
		this.abc.addEventListener("mouseover", fadeOverAbc.bind(this));
		
		function fadeOverAbc()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.abc.alpha=1;
			this.pan_am.alpha=1;
			this.agents_of_s.alpha=1;
			this.rake.alpha=1;
			this.charlies_angels.alpha=1;
			this.quantico.alpha=1;
			this.the_catch.alpha=1;
			this.once_upon_a_time.alpha=1;
			this.greys_antomy.alpha=1;
		
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.abc.addEventListener("mouseout", fadeOutAbc.bind(this));
		
		function fadeOutAbc()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//cbs
		
		this.cbs.addEventListener("mouseover", fadeOverCbs.bind(this));
		
		function fadeOverCbs()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.cbs.alpha=1;
			this.serial_thriller.alpha=1;
			this.four_in_the_morning.alpha=1;
			this.the_good_fight.alpha=1;
			this.bull.alpha=1;
			this.how_i_meet_your_mother.alpha=1;
			this.the_big_bang_theroy.alpha=1;
		
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_hot.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.cbs.addEventListener("mouseout", fadeOutCbs.bind(this));
		
		function fadeOutCbs()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		//showtime
		
		this.showtime.addEventListener("mouseover", fadeOverShowtime.bind(this));
		
		function fadeOverShowtime()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.showtime.alpha=1;
			this.the_big_c.alpha=1;
			this.billions.alpha=1;
			this.masters_of_sex.alpha=1;
			this.vikings.alpha=1;
		
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.showtime.addEventListener("mouseout", fadeOutShowtime.bind(this));
		
		function fadeOutShowtime()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//nbc
		
		this.nbc.addEventListener("mouseover", fadeOverNbc.bind(this));
		
		function fadeOverNbc()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.nbc.alpha=1;
			this.blacklist.alpha=1;
			this.this_is_us.alpha=1;
			this.blindspot.alpha=1;
			this.shades_of_blue.alpha=1;
			
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_nefflix.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.nbc.addEventListener("mouseout", fadeOutNbc.bind(this));
		
		function fadeOutNbc()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//hulu
		
		this.hulu.addEventListener("mouseover", fadeOverHulu.bind(this));
		
		function fadeOverHulu()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.hulu.alpha=1;
			this.casual.alpha=1;
			this.deadbeat.alpha=1;
			this.the_handmaiss_tale.alpha=1;
			
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.hulu.addEventListener("mouseout", fadeOutHulu.bind(this));
		
		function fadeOutHulu()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//fx
		
		this.fx.addEventListener("mouseover", fadeOverFx.bind(this));
		
		function fadeOverFx()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.fx.alpha=1;
			this.justified.alpha=1;
			this.the_americans.alpha=1;
			this.atlanta.alpha=1;
			
			this.control_smart.alpha=1;
			this.control_yes.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.fx.addEventListener("mouseout", fadeOutFx.bind(this));
		
		function fadeOutFx()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//hot
		
		this.hot.addEventListener("mouseover", fadeOverHot.bind(this));
		
		function fadeOverHot()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.hot.alpha=1;
			this.principle_of_substitution.alpha=1;
			this.important_person.alpha=1;
			this.aborer.alpha=1;
			this.the_unit.alpha=1;
			this.esfor.alpha=1;
			this.die_for_a_moment.alpha=1;
			this.fauda.alpha=1;
			this.stuped.alpha=1;
			
			this.control_hot.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.hot.addEventListener("mouseout", fadeOutHot.bind(this));
		
		function fadeOutHot()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		//yes
		
		this.yes.addEventListener("mouseover", fadeOverYes.bind(this));
		
		function fadeOverYes()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.yes.alpha=1;
			this.touching_distance.alpha=1;
			this.tahagad.alpha=1;
			this.kidnapped.alpha=1;
			this.srugim.alpha=1;
			this.la_la_land.alpha=1;
			this.our_song.alpha=1;
			
			this.control_yes.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.yes.addEventListener("mouseout", fadeOutYes.bind(this));
		
		function fadeOutYes()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		//bbc
		
		this.bbc.addEventListener("mouseover", fadeOverBbc.bind(this));
		
		function fadeOverBbc()
		{
			if(buttonClicked==0 || buttonClicked==3){
			fadeAll.bind(this)();
			this.bbc.alpha=1;
			this.lip_service.alpha=1;
			this.the_white_queen.alpha=1;
			this.the_missing.alpha=1;
			
			this.control_yes.alpha=1;
			this.control_cellcom.alpha=1;
			this.control_smart.alpha=1;
			this.control_tv_title.alpha=1;
			this.control.alpha=1;
			}
		}
		
		this.bbc.addEventListener("mouseout", fadeOutBbc.bind(this));
		
		function fadeOutBbc()
		{
			if(buttonClicked==0){
			showAll.bind(this)();
			}
				if(buttonClicked==3){
				showActive.bind(this)();
				}
		}
		
		
		
		
		
		//הנחיות לייצוג
		
		this.x_bottom.addEventListener("click", closeInstructions.bind(this));
		
		function closeInstructions()
		{
			this.guid.alpha = 0;
			this.q_bottom.alpha = 1
			this.x_bottom.alpha = 0;
		}
		
		this.q_bottom.addEventListener("click", openInstructions.bind(this));
		
		function openInstructions()
		{
			this.guid.alpha = 1;
			this.q_bottom.alpha = 0;
			this.x_bottom.alpha = 1;
		}
		
		//תקצירים שכוללים סרטונים
		
		//Girls
		
		
		
		this.girls_pop.x = 582.2;
		this.girls_pop.y = -242.5;
		this.girls_pop_x.x = 582.2;
		this.girls_pop_x.y = -242.5;
		
		
		this.girls_button.addEventListener("click", clickOnGirls.bind(this));
		
		function clickOnGirls()
		{
			
			
			$("#girls_trailer")[0].x = 582.2;
			$("#girls_trailer")[0].y = 386.35;
			this.girls_pop.x = 582.2;
			this.girls_pop.y = 386.35;
			this.girls_pop_x.x = 345.6;
			this.girls_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.girls_pop_x.addEventListener("click", xOnGirls.bind(this));
		
		function xOnGirls()
		{
			
			
			this.girls_pop.x = 582.2;
			this.girls_pop.y = -242.5;
			this.girls_pop_x.x = 582.2;
			this.girls_pop_x.y = -242.5;
			$("#girls_trailer")[0].x = 582.2;
			$("#girls_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//Entourage
		
		this.entourage_pop.x = 582.2;
		this.entourage_pop.y = -242.5;
		this.entourage_pop_x.x = 582.2;
		this.entourage_pop_x.y = -242.5;
		
		
		this.entourage.addEventListener("click", clickOnEntourage.bind(this));
		
		function clickOnEntourage()
		{
			
			
			$("#entourage_trailer")[0].x = 582.2;
			$("#entourage_trailer")[0].y = 386.35;
			this.entourage_pop.x = 582.2;
			this.entourage_pop.y = 386.35;
			this.entourage_pop_x.x = 345.6;
			this.entourage_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.entourage_pop_x.addEventListener("click", xOnEntourage.bind(this));
		
		function xOnEntourage()
		{
			
			
			this.entourage_pop.x = 582.2;
			this.entourage_pop.y = -242.5;
			this.entourage_pop_x.x = 582.2;
			this.entourage_pop_x.y = -242.5;
			$("#entourage_trailer")[0].x = 582.2;
			$("#entourage_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//WestWorld
		
		this.westworld_pop.x = 582.2;
		this.westworld_pop.y = -242.5;
		this.westworld_pop_x.x = 582.2;
		this.westworld_pop_x.y = -242.5;
		
		
		this.westworld.addEventListener("click", clickOnWestworld.bind(this));
		
		function clickOnWestworld()
		{
			
			
			$("#westworld_trailer")[0].x = 582.2;
			$("#westworld_trailer")[0].y = 386.35;
			this.westworld_pop.x = 582.2;
			this.westworld_pop.y = 386.35;
			this.westworld_pop_x.x = 345.6;
			this.westworld_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.westworld_pop_x.addEventListener("click", xOnWestworld.bind(this));
		
		function xOnWestworld()
		{
			
			
			this.westworld_pop.x = 582.2;
			this.westworld_pop.y = -242.5;
			this.westworld_pop_x.x = 582.2;
			this.westworld_pop_x.y = -242.5;
			$("#westworld_trailer")[0].x = 582.2;
			$("#westworld_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//Game Of Thrones
		
		this.got_pop.x = 582.2;
		this.got_pop.y = -242.5;
		this.got_pop_x.x = 582.2;
		this.got_pop_x.y = -242.5;
		
		
		this.got.addEventListener("click", clickOnGOT.bind(this));
		
		function clickOnGOT()
		{
			
			
			$("#got_trailer")[0].x = 582.2;
			$("#got_trailer")[0].y = 386.35;
			this.got_pop.x = 582.2;
			this.got_pop.y = 386.35;
			this.got_pop_x.x = 345.6;
			this.got_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.got_pop_x.addEventListener("click", xOnGOT.bind(this));
		
		function xOnGOT()
		{
			
			
			this.got_pop.x = 582.2;
			this.got_pop.y = -242.5;
			this.got_pop_x.x = 582.2;
			this.got_pop_x.y = -242.5;
			$("#got_trailer")[0].x = 582.2;
			$("#got_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//Big Little Lies
		
		
		this.bll_pop.x = 582.2;
		this.bll_pop.y = -242.5;
		this.bll_pop_x.x = 582.2;
		this.bll_pop_x.y = -242.5;
		
		
		this.bll.addEventListener("click", clickOnBLL.bind(this));
		
		function clickOnBLL()
		{
			
			
			$("#bll_trailer")[0].x = 582.2;
			$("#bll_trailer")[0].y = 386.35;
			this.bll_pop.x = 582.2;
			this.bll_pop.y = 386.35;
			this.bll_pop_x.x = 345.6;
			this.bll_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.bll_pop_x.addEventListener("click", xOnBLL.bind(this));
		
		function xOnBLL()
		{
			
			
			this.bll_pop.x = 582.2;
			this.bll_pop.y = -242.5;
			this.bll_pop_x.x = 582.2;
			this.bll_pop_x.y = -242.5;
			$("#bll_trailer")[0].x = 582.2;
			$("#bll_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//The Night Of
		
		
		this.tno_pop.x = 582.2;
		this.tno_pop.y = -242.5;
		this.tno_pop_x.x = 582.2;
		this.tno_pop_x.y = -242.5;
		
		
		this.tno.addEventListener("click", clickOnTNO.bind(this));
		
		function clickOnTNO()
		{
			
			$("#tno_trailer")[0].x = 582.2;
			$("#tno_trailer")[0].y = 386.35;
			this.tno_pop.x = 582.2;
			this.tno_pop.y = 386.35;
			this.tno_pop_x.x = 345.6;
			this.tno_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.tno_pop_x.addEventListener("click", xOnTNO.bind(this));
		
		function xOnTNO()
		{
			
			this.tno_pop.x = 582.2;
			this.tno_pop.y = -242.5;
			this.tno_pop_x.x = 582.2;
			this.tno_pop_x.y = -242.5;
			$("#tno_trailer")[0].x = 582.2;
			$("#tno_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//Sillicon Valley
		
		
		this.siliconv_pop.x = 582.2;
		this.siliconv_pop.y = -242.5;
		this.siliconv_pop_x.x = 582.2;
		this.siliconv_pop_x.y = -242.5;
		
		
		this.siliconv.addEventListener("click", clickOnSiliconV.bind(this));
		
		function clickOnSiliconV()
		{
			
			$("#siliconv_trailer")[0].x = 582.2;
			$("#siliconv_trailer")[0].y = 386.35;
			this.siliconv_pop.x = 582.2;
			this.siliconv_pop.y = 386.35;
			this.siliconv_pop_x.x = 345.6;
			this.siliconv_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.siliconv_pop_x.addEventListener("click", xOnSiliconV.bind(this));
		
		function xOnSiliconV()
		{
			
			this.siliconv_pop.x = 582.2;
			this.siliconv_pop.y = -242.5;
			this.siliconv_pop_x.x = 582.2;
			this.siliconv_pop_x.y = -242.5;
			$("#siliconv_trailer")[0].x = 582.2;
			$("#siliconv_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		
		
		//Deadwood
		
		
		this.deadwood_pop.x = 582.2;
		this.deadwood_pop.y = -242.5;
		this.deadwood_pop_x.x = 582.2;
		this.deadwood_pop_x.y = -242.5;
		
		
		this.deadwood.addEventListener("click", clickOnDeadwood.bind(this));
		
		function clickOnDeadwood()
		{
			
			$("#deadwood_trailer")[0].x = 582.2;
			$("#deadwood_trailer")[0].y = 386.35;
			this.deadwood_pop.x = 582.2;
			this.deadwood_pop.y = 386.35;
			this.deadwood_pop_x.x = 345.6;
			this.deadwood_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.deadwood_pop_x.addEventListener("click", xOnDeadwood.bind(this));
		
		function xOnDeadwood()
		{
			
			this.deadwood_pop.x = 582.2;
			this.deadwood_pop.y = -242.5;
			this.deadwood_pop_x.x = 582.2;
			this.deadwood_pop_x.y = -242.5;
			$("#deadwood_trailer")[0].x = 582.2;
			$("#deadwood_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		
		
		//The News Room
		
		
		this.tnr_pop.x = 582.2;
		this.tnr_pop.y = -242.5;
		this.tnr_pop_x.x = 582.2;
		this.tnr_pop_x.y = -242.5;
		
		
		this.tnr.addEventListener("click", clickOnTNR.bind(this));
		
		function clickOnTNR()
		{
		
			$("#tnr_trailer")[0].x = 582.2;
			$("#tnr_trailer")[0].y = 386.35;
			this.tnr_pop.x = 582.2;
			this.tnr_pop.y = 386.35;
			this.tnr_pop_x.x = 345.6;
			this.tnr_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.tnr_pop_x.addEventListener("click", xOnTNR.bind(this));
		
		function xOnTNR()
		{
		
			this.tnr_pop.x = 582.2;
			this.tnr_pop.y = -242.5;
			this.tnr_pop_x.x = 582.2;
			this.tnr_pop_x.y = -242.5;
			$("#tnr_trailer")[0].x = 582.2;
			$("#tnr_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			}
		
		}
		
		//Veep
		
		
		this.veep_pop.x = 582.2;
		this.veep_pop.y = -242.5;
		this.veep_pop_x.x = 582.2;
		this.veep_pop_x.y = -242.5;
		
		
		this.veep.addEventListener("click", clickOnVeep.bind(this));
		
		function clickOnVeep()
		{
		
			$("#veep_trailer")[0].x = 582.2;
			$("#veep_trailer")[0].y = 386.35;
			this.veep_pop.x = 582.2;
			this.veep_pop.y = 386.35;
			this.veep_pop_x.x = 345.6;
			this.veep_pop_x.y = 168.8;
			if(buttonClicked!=2){
			buttonClicked = 1;
			fadeAll.bind(this)();
			}
		}
		
		
		this.veep_pop_x.addEventListener("click", xOnVeep.bind(this));
		
		function xOnVeep()
		{
		
			this.veep_pop.x = 582.2;
			this.veep_pop.y = -242.5;
			this.veep_pop_x.x = 582.2;
			this.veep_pop_x.y = -242.5;
			$("#veep_trailer")[0].x = 582.2;
			$("#veep_trailer")[0].y = 286.35;
			if(buttonClicked!=2){
			buttonClicked = 0;
			showAll.bind(this)();
			resetButton.bind(this)();
			
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.veep_pop_x = new lib.veep_pop_x();
	this.veep_pop_x.parent = this;
	this.veep_pop_x.setTransform(-14.8,-484.5);
	new cjs.ButtonHelper(this.veep_pop_x, 0, 1, 1);

	this.veep_pop = new lib.veep_pop();
	this.veep_pop.parent = this;
	this.veep_pop.setTransform(214.4,-276.6);

	this.tnr_pop = new lib.tnr_pop();
	this.tnr_pop.parent = this;
	this.tnr_pop.setTransform(203.4,-254.5);

	this.deadwood_pop_x = new lib.deadwood_pop_x();
	this.deadwood_pop_x.parent = this;
	this.deadwood_pop_x.setTransform(-20.2,-486.1);
	new cjs.ButtonHelper(this.deadwood_pop_x, 0, 1, 1);

	this.deadwood_pop = new lib.deadwood_pop();
	this.deadwood_pop.parent = this;
	this.deadwood_pop.setTransform(248.1,-259.2);

	this.siliconv_pop = new lib.siliconv_pop();
	this.siliconv_pop.parent = this;
	this.siliconv_pop.setTransform(253.5,-265.7);

	this.siliconv_pop_x = new lib.siliconv_pop_x();
	this.siliconv_pop_x.parent = this;
	this.siliconv_pop_x.setTransform(-14.8,-486.1);
	new cjs.ButtonHelper(this.siliconv_pop_x, 0, 1, 1);

	this.tno_pop_x = new lib.tno_pop_x();
	this.tno_pop_x.parent = this;
	this.tno_pop_x.setTransform(-9.6,-491.5);
	new cjs.ButtonHelper(this.tno_pop_x, 0, 1, 1);

	this.tno_pop = new lib.tno_pop();
	this.tno_pop.parent = this;
	this.tno_pop.setTransform(280.3,-265.8);

	this.bll_pop = new lib.bll_pop();
	this.bll_pop.parent = this;
	this.bll_pop.setTransform(253.5,-291.5);

	this.bll_pop_x = new lib.bll_pop_x();
	this.bll_pop_x.parent = this;
	this.bll_pop_x.setTransform(-7.1,-484.9);
	new cjs.ButtonHelper(this.bll_pop_x, 0, 1, 1);

	this.got_pop_x = new lib.got_pop_x();
	this.got_pop_x.parent = this;
	this.got_pop_x.setTransform(-2.1,-484.5);
	new cjs.ButtonHelper(this.got_pop_x, 0, 1, 1);

	this.got_pop = new lib.got_pop();
	this.got_pop.parent = this;
	this.got_pop.setTransform(253.5,-291.5);

	this.westworld_pop_x = new lib.westworld_pop_x();
	this.westworld_pop_x.parent = this;
	this.westworld_pop_x.setTransform(-1.9,-485.9);
	new cjs.ButtonHelper(this.westworld_pop_x, 0, 1, 1);

	this.westworld_pop = new lib.westworld_pop();
	this.westworld_pop.parent = this;
	this.westworld_pop.setTransform(238.6,-311.5);

	this.entourage_pop_x = new lib.entourage_pop_x();
	this.entourage_pop_x.parent = this;
	this.entourage_pop_x.setTransform(-4.3,-491.5);
	new cjs.ButtonHelper(this.entourage_pop_x, 0, 1, 1);

	this.entourage_pop = new lib.entourage_pop();
	this.entourage_pop.parent = this;
	this.entourage_pop.setTransform(248.1,-304.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.entourage_pop},{t:this.entourage_pop_x},{t:this.westworld_pop},{t:this.westworld_pop_x},{t:this.got_pop},{t:this.got_pop_x},{t:this.bll_pop_x},{t:this.bll_pop},{t:this.tno_pop},{t:this.tno_pop_x},{t:this.siliconv_pop_x},{t:this.siliconv_pop},{t:this.deadwood_pop},{t:this.deadwood_pop_x},{t:this.tnr_pop},{t:this.veep_pop},{t:this.veep_pop_x}]}).wait(1));

	// new
	this.control_active_on = new lib.control_active_on();
	this.control_active_on.parent = this;
	this.control_active_on.setTransform(1485.2,213.9);
	new cjs.ButtonHelper(this.control_active_on, 0, 1, 1);

	this.text = new cjs.Text("חברת הטלוויזיה שהכי מתאימה לי", "bold 46px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 695;
	this.text.parent = this;
	this.text.setTransform(582.5,34.7);

	this.zero_on = new lib.zero_on();
	this.zero_on.parent = this;
	this.zero_on.setTransform(1431.3,174.3);
	new cjs.ButtonHelper(this.zero_on, 0, 1, 1);

	this.tnr_pop_x = new lib.tnr_pop_x();
	this.tnr_pop_x.parent = this;
	this.tnr_pop_x.setTransform(-44.8,-478.5);
	new cjs.ButtonHelper(this.tnr_pop_x, 0, 1, 1);

	this.girls_pop_x = new lib.girls_pop_x();
	this.girls_pop_x.parent = this;
	this.girls_pop_x.setTransform(-4.3,-487.3,0.76,0.76);
	new cjs.ButtonHelper(this.girls_pop_x, 0, 1, 1);

	this.girls_pop = new lib.girls_pop();
	this.girls_pop.parent = this;
	this.girls_pop.setTransform(253.5,-311.5,0.76,0.76);

	this.touching_distance = new lib.touching_distance();
	this.touching_distance.parent = this;
	this.touching_distance.setTransform(573,579);

	this.tahagad = new lib.tahagad();
	this.tahagad.parent = this;
	this.tahagad.setTransform(573.4,530);

	this.kidnapped = new lib.kidnapped();
	this.kidnapped.parent = this;
	this.kidnapped.setTransform(574,479);

	this.srugim = new lib.srugim();
	this.srugim.parent = this;
	this.srugim.setTransform(574,429);

	this.la_la_land = new lib.la_la_land();
	this.la_la_land.parent = this;
	this.la_la_land.setTransform(573,375);

	this.our_song = new lib.our_song();
	this.our_song.parent = this;
	this.our_song.setTransform(573,325);

	this.principle_of_substitution = new lib.principle_of_substitution();
	this.principle_of_substitution.parent = this;
	this.principle_of_substitution.setTransform(491,227);

	this.important_person = new lib.important_person();
	this.important_person.parent = this;
	this.important_person.setTransform(491,278);

	this.aborer = new lib.aborer();
	this.aborer.parent = this;
	this.aborer.setTransform(491,328);

	this.the_unit = new lib.the_unit();
	this.the_unit.parent = this;
	this.the_unit.setTransform(491,378);

	this.esfor = new lib.esfor();
	this.esfor.parent = this;
	this.esfor.setTransform(491,430);

	this.die_for_a_moment = new lib.die_for_a_moment();
	this.die_for_a_moment.parent = this;
	this.die_for_a_moment.setTransform(491,480);

	this.fauda = new lib.fauda();
	this.fauda.parent = this;
	this.fauda.setTransform(491,530);

	this.stuped = new lib.stuped();
	this.stuped.parent = this;
	this.stuped.setTransform(491,581);

	this.atlanta = new lib.atlanta();
	this.atlanta.parent = this;
	this.atlanta.setTransform(1026,581);

	this.the_americans = new lib.the_americans();
	this.the_americans.parent = this;
	this.the_americans.setTransform(1026,480);

	this.justified = new lib.justified();
	this.justified.parent = this;
	this.justified.setTransform(1026,530);

	this.the_missing = new lib.the_missing();
	this.the_missing.parent = this;
	this.the_missing.setTransform(959,530);

	this.the_white_queen = new lib.the_white_queen();
	this.the_white_queen.parent = this;
	this.the_white_queen.setTransform(959,480);

	this.lip_service = new lib.lip_service();
	this.lip_service.parent = this;
	this.lip_service.setTransform(959,581);

	this.the_handmaiss_tale = new lib.the_handmaiss_tale();
	this.the_handmaiss_tale.parent = this;
	this.the_handmaiss_tale.setTransform(892,581);

	this.deadbeat = new lib.deadbeat();
	this.deadbeat.parent = this;
	this.deadbeat.setTransform(892,530);

	this.casual = new lib.casual();
	this.casual.parent = this;
	this.casual.setTransform(892,480);

	this.blacklist = new lib.blacklist();
	this.blacklist.parent = this;
	this.blacklist.setTransform(819,431);

	this.this_is_us = new lib.this_is_us();
	this.this_is_us.parent = this;
	this.this_is_us.setTransform(819,480);

	this.blindspot = new lib.blindspot();
	this.blindspot.parent = this;
	this.blindspot.setTransform(819,530);

	this.shades_of_blue = new lib.shades_of_blue();
	this.shades_of_blue.parent = this;
	this.shades_of_blue.setTransform(819,581);

	this.the_big_c = new lib.the_big_c();
	this.the_big_c.parent = this;
	this.the_big_c.setTransform(739,430);

	this.billions = new lib.billions();
	this.billions.parent = this;
	this.billions.setTransform(739,480);

	this.masters_of_sex = new lib.masters_of_sex();
	this.masters_of_sex.parent = this;
	this.masters_of_sex.setTransform(739,530);

	this.vikings = new lib.vikings();
	this.vikings.parent = this;
	this.vikings.setTransform(739,582);

	this.serial_thriller = new lib.Symbol1();
	this.serial_thriller.parent = this;
	this.serial_thriller.setTransform(654,325);

	this.the_good_fight = new lib.the_good_fight();
	this.the_good_fight.parent = this;
	this.the_good_fight.setTransform(654,375);

	this.four_in_the_morning = new lib.four_in_the_morning();
	this.four_in_the_morning.parent = this;
	this.four_in_the_morning.setTransform(654,429);

	this.bull = new lib.bull();
	this.bull.parent = this;
	this.bull.setTransform(654,479);

	this.how_i_meet_your_mother = new lib.how_i_meet_your_mother();
	this.how_i_meet_your_mother.parent = this;
	this.how_i_meet_your_mother.setTransform(654,529);

	this.the_big_bang_theroy = new lib.the_big_bang_theroy();
	this.the_big_bang_theroy.parent = this;
	this.the_big_bang_theroy.setTransform(654,579);

	this.pan_am = new lib.pan_am();
	this.pan_am.parent = this;
	this.pan_am.setTransform(406,276);

	this.rake = new lib.rake();
	this.rake.parent = this;
	this.rake.setTransform(406,326);

	this.charlies_angels = new lib.charlies_angels();
	this.charlies_angels.parent = this;
	this.charlies_angels.setTransform(406,376);

	this.quantico = new lib.quantico();
	this.quantico.parent = this;
	this.quantico.setTransform(406,426);

	this.the_catch = new lib.the_catch();
	this.the_catch.parent = this;
	this.the_catch.setTransform(406,477);

	this.greys_antomy = new lib.greys_antomy();
	this.greys_antomy.parent = this;
	this.greys_antomy.setTransform(406,578);

	this.once_upon_a_time = new lib.once_upon_a_time();
	this.once_upon_a_time.parent = this;
	this.once_upon_a_time.setTransform(406,526);

	this.bojack_horseman = new lib.bojack_horseman();
	this.bojack_horseman.parent = this;
	this.bojack_horseman.setTransform(205,578);

	this.house_of_cards = new lib.house_of_cards();
	this.house_of_cards.parent = this;
	this.house_of_cards.setTransform(208,526);

	this.jessica_jones = new lib.jessica_jones();
	this.jessica_jones.parent = this;
	this.jessica_jones.setTransform(208,477);

	this.daredevil = new lib.daredevil();
	this.daredevil.parent = this;
	this.daredevil.setTransform(208,426);

	this.orange_is_the_new_black = new lib.orange_is_the_new_black();
	this.orange_is_the_new_black.parent = this;
	this.orange_is_the_new_black.setTransform(208,376);

	this.master_of_none = new lib.master_of_none();
	this.master_of_none.parent = this;
	this.master_of_none.setTransform(208,325);

	this.narcos = new lib.narcos();
	this.narcos.parent = this;
	this.narcos.setTransform(208,275);

	this.unbreakable = new lib.unbreakable();
	this.unbreakable.parent = this;
	this.unbreakable.setTransform(209,225);

	this.resasons_why = new lib._13_resasons_why();
	this.resasons_why.parent = this;
	this.resasons_why.setTransform(157,578);

	this.better_call_saul = new lib.better_call_saul();
	this.better_call_saul.parent = this;
	this.better_call_saul.setTransform(157,527);

	this.broadchurch = new lib.broadchurch();
	this.broadchurch.parent = this;
	this.broadchurch.setTransform(157,477);

	this.dwp = new lib.dwp();
	this.dwp.parent = this;
	this.dwp.setTransform(157,427);

	this.making_a_murderer = new lib.making_a_murderer();
	this.making_a_murderer.parent = this;
	this.making_a_murderer.setTransform(157,376);

	this.stranger_things = new lib.stranger_things();
	this.stranger_things.parent = this;
	this.stranger_things.setTransform(157,326);

	this.the_fall = new lib.the_fall();
	this.the_fall.parent = this;
	this.the_fall.setTransform(157,276);

	this.easy = new lib.easy();
	this.easy.parent = this;
	this.easy.setTransform(157,225);

	this.black_mirror = new lib.black_mirror();
	this.black_mirror.parent = this;
	this.black_mirror.setTransform(157,177);

	this.deadwood = new lib.deadwood_button();
	this.deadwood.parent = this;
	this.deadwood.setTransform(277,224.2);
	new cjs.ButtonHelper(this.deadwood, 0, 1, 1);

	this.tno = new lib.tno_button();
	this.tno.parent = this;
	this.tno.setTransform(277,274.5);
	new cjs.ButtonHelper(this.tno, 0, 1, 1);

	this.siliconv = new lib.siliconv_button();
	this.siliconv.parent = this;
	this.siliconv.setTransform(276.9,324.8);
	new cjs.ButtonHelper(this.siliconv, 0, 1, 1);

	this.bll = new lib.bll_button();
	this.bll.parent = this;
	this.bll.setTransform(277,375.1);
	new cjs.ButtonHelper(this.bll, 0, 1, 1);

	this.x_bottom = new lib.x_bottom();
	this.x_bottom.parent = this;
	this.x_bottom.setTransform(1044.6,155.3);

	this.instance = new lib.flash0ai_24();
	this.instance.parent = this;
	this.instance.setTransform(654,-74,0.374,0.374);

	this.control_vod_on = new lib.control_vod_on();
	this.control_vod_on.parent = this;
	this.control_vod_on.setTransform(1427.9,383.6);

	this.control_repit_on = new lib.control_repit_on();
	this.control_repit_on.parent = this;
	this.control_repit_on.setTransform(1427.9,354.6);

	this.control_hd_on = new lib.control_hd_on();
	this.control_hd_on.parent = this;
	this.control_hd_on.setTransform(1427.9,323.6);

	this.control_phone_on = new lib.control_phone_on();
	this.control_phone_on.parent = this;
	this.control_phone_on.setTransform(1427.9,259.6);

	this.control_records_on = new lib.control_records_on();
	this.control_records_on.parent = this;
	this.control_records_on.setTransform(1427.9,293.6);

	this.got = new lib.got_button();
	this.got.parent = this;
	this.got.setTransform(277,425.4);
	new cjs.ButtonHelper(this.got, 0, 1, 1);

	this.westworld = new lib.westworld_button();
	this.westworld.parent = this;
	this.westworld.setTransform(277,475.7);
	new cjs.ButtonHelper(this.westworld, 0, 1, 1);

	this.entourage = new lib.entourage_button();
	this.entourage.parent = this;
	this.entourage.setTransform(277,526);
	new cjs.ButtonHelper(this.entourage, 0, 1, 1);

	this.veep = new lib.veep_button();
	this.veep.parent = this;
	this.veep.setTransform(328.5,576.3);
	new cjs.ButtonHelper(this.veep, 0, 1, 1);

	this.girls_button = new lib.girls_bottom();
	this.girls_button.parent = this;
	this.girls_button.setTransform(277,576.3);
	new cjs.ButtonHelper(this.girls_button, 0, 1, 1);

	this.tnr = new lib.tnr_button();
	this.tnr.parent = this;
	this.tnr.setTransform(328.5,527.2);
	new cjs.ButtonHelper(this.tnr, 0, 1, 1);

	this.agents_of_s = new lib.agents_of_shield();
	this.agents_of_s.parent = this;
	this.agents_of_s.setTransform(406,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.agents_of_s},{t:this.tnr},{t:this.girls_button},{t:this.veep},{t:this.entourage},{t:this.westworld},{t:this.got},{t:this.control_records_on},{t:this.control_phone_on},{t:this.control_hd_on},{t:this.control_repit_on},{t:this.control_vod_on},{t:this.instance},{t:this.x_bottom},{t:this.bll},{t:this.siliconv},{t:this.tno},{t:this.deadwood},{t:this.black_mirror},{t:this.easy},{t:this.the_fall},{t:this.stranger_things},{t:this.making_a_murderer},{t:this.dwp},{t:this.broadchurch},{t:this.better_call_saul},{t:this.resasons_why},{t:this.unbreakable},{t:this.narcos},{t:this.master_of_none},{t:this.orange_is_the_new_black},{t:this.daredevil},{t:this.jessica_jones},{t:this.house_of_cards},{t:this.bojack_horseman},{t:this.once_upon_a_time},{t:this.greys_antomy},{t:this.the_catch},{t:this.quantico},{t:this.charlies_angels},{t:this.rake},{t:this.pan_am},{t:this.the_big_bang_theroy},{t:this.how_i_meet_your_mother},{t:this.bull},{t:this.four_in_the_morning},{t:this.the_good_fight},{t:this.serial_thriller},{t:this.vikings},{t:this.masters_of_sex},{t:this.billions},{t:this.the_big_c},{t:this.shades_of_blue},{t:this.blindspot},{t:this.this_is_us},{t:this.blacklist},{t:this.casual},{t:this.deadbeat},{t:this.the_handmaiss_tale},{t:this.lip_service},{t:this.the_white_queen},{t:this.the_missing},{t:this.justified},{t:this.the_americans},{t:this.atlanta},{t:this.stuped},{t:this.fauda},{t:this.die_for_a_moment},{t:this.esfor},{t:this.the_unit},{t:this.aborer},{t:this.important_person},{t:this.principle_of_substitution},{t:this.our_song},{t:this.la_la_land},{t:this.srugim},{t:this.kidnapped},{t:this.tahagad},{t:this.touching_distance},{t:this.girls_pop},{t:this.girls_pop_x},{t:this.tnr_pop_x},{t:this.zero_on},{t:this.text},{t:this.control_active_on}]}).wait(1));

	// old
	this.control_active = new lib.control_active();
	this.control_active.parent = this;
	this.control_active.setTransform(1187.4,435.9);
	new cjs.ButtonHelper(this.control_active, 0, 1, 1);

	this.control_cellcom = new lib.control_cellcom();
	this.control_cellcom.parent = this;
	this.control_cellcom.setTransform(1131.3,286.2);
	new cjs.ButtonHelper(this.control_cellcom, 0, 1, 1);

	this.control_smart = new lib.control_smart();
	this.control_smart.parent = this;
	this.control_smart.setTransform(1191.6,286.2);
	new cjs.ButtonHelper(this.control_smart, 0, 1, 1);

	this.control_partner = new lib.control_partner();
	this.control_partner.parent = this;
	this.control_partner.setTransform(1250.7,286.2);
	new cjs.ButtonHelper(this.control_partner, 0, 1, 1);

	this.control_nefflix = new lib.control_nefflix();
	this.control_nefflix.parent = this;
	this.control_nefflix.setTransform(1131.3,225.8);
	new cjs.ButtonHelper(this.control_nefflix, 0, 1, 1);

	this.control_hot = new lib.control_hot();
	this.control_hot.parent = this;
	this.control_hot.setTransform(1190.4,225.8);
	new cjs.ButtonHelper(this.control_hot, 0, 1, 1);

	this.control_yes = new lib.control_yes();
	this.control_yes.parent = this;
	this.control_yes.setTransform(1252,225.8);
	new cjs.ButtonHelper(this.control_yes, 0, 1, 1);

	this.control_hd_title = new lib.control_hd_title();
	this.control_hd_title.parent = this;
	this.control_hd_title.setTransform(1247.8,556);

	this.control_repit_title = new lib.control_repit_title();
	this.control_repit_title.parent = this;
	this.control_repit_title.setTransform(1189.1,558.1);

	this.control_vod_title = new lib.control_vod_title();
	this.control_vod_title.parent = this;
	this.control_vod_title.setTransform(1130.8,557.9);

	this.control_records_title = new lib.control_records_title();
	this.control_records_title.parent = this;
	this.control_records_title.setTransform(1247.9,489);

	this.control_phone_title = new lib.control_phone_title();
	this.control_phone_title.parent = this;
	this.control_phone_title.setTransform(1135.1,488.9);

	this.control_capa_title = new lib.control_capa_title();
	this.control_capa_title.parent = this;
	this.control_capa_title.setTransform(1194.1,475);

	this.control_tv_title = new lib.control_tv_title();
	this.control_tv_title.parent = this;
	this.control_tv_title.setTransform(1192.6,186.6);

	this.guid = new lib.guid();
	this.guid.parent = this;
	this.guid.setTransform(876.5,260.1,0.993,1,0,0,0,0.1,0.1);

	this.q_bottom = new lib.q_bottom();
	this.q_bottom.parent = this;
	this.q_bottom.setTransform(1044.6,155.3);

	this.zero = new lib.zero();
	this.zero.parent = this;
	this.zero.setTransform(1191.3,366.3);

	this.yes = new lib.yes();
	this.yes.parent = this;
	this.yes.setTransform(571.3,630.6,1.227,1.227);

	this.hot = new lib.hot();
	this.hot.parent = this;
	this.hot.setTransform(487.3,631.7,1.227,1.227);

	this.control_hd = new lib.control_hd();
	this.control_hd.parent = this;
	this.control_hd.setTransform(1248.5,575.7,1.284,1.284);

	this.control_repit = new lib.control_repit();
	this.control_repit.parent = this;
	this.control_repit.setTransform(1190.5,575.7,1.284,1.284);

	this.control_vod = new lib.control_vod();
	this.control_vod.parent = this;
	this.control_vod.setTransform(1132.4,575.7,1.284,1.284);

	this.control_phone = new lib.control_phone();
	this.control_phone.parent = this;
	this.control_phone.setTransform(1134.6,510.2,1.284,1.284);

	this.control_records = new lib.control_records();
	this.control_records.parent = this;
	this.control_records.setTransform(1248.2,510.2,1.284,1.284);

	this.fx = new lib.fx();
	this.fx.parent = this;
	this.fx.setTransform(1025.1,629.8,1.227,1.227);

	this.bbc = new lib.bbc();
	this.bbc.parent = this;
	this.bbc.setTransform(959.4,630.4,1.227,1.227);

	this.hulu = new lib.hulu();
	this.hulu.parent = this;
	this.hulu.setTransform(890.3,629.3,1.227,1.227);

	this.nbc = new lib.nbc();
	this.nbc.parent = this;
	this.nbc.setTransform(817.8,628.2,1.27,1.27,0,0,0,0.1,0.1);

	this.showtime = new lib.showtime();
	this.showtime.parent = this;
	this.showtime.setTransform(733.6,629.9,1.227,1.227);

	this.cbs = new lib.cbs();
	this.cbs.parent = this;
	this.cbs.setTransform(655,630.4,1.227,1.227);

	this.abc = new lib.abc();
	this.abc.parent = this;
	this.abc.setTransform(401,634.1,1.007,1.007,0,0,0,0.1,0.1);

	this.netflix = new lib.netflix();
	this.netflix.parent = this;
	this.netflix.setTransform(169.7,630.9,1.227,1.227);

	this.hbo = new lib.hbo();
	this.hbo.parent = this;
	this.hbo.setTransform(127.2,643.8,1.195,1.227,0,0,0,-141.3,8.8);

	this.instance_1 = new lib.flash0ai_129();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111,119,0.448,0.456);

	this.control = new lib.control();
	this.control.parent = this;
	this.control.setTransform(1191.7,392.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA1jQIhpGh");
	this.shape.setTransform(528.5,414.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.control},{t:this.instance_1},{t:this.hbo},{t:this.netflix},{t:this.abc},{t:this.cbs},{t:this.showtime},{t:this.nbc},{t:this.hulu},{t:this.bbc},{t:this.fx},{t:this.control_records},{t:this.control_phone},{t:this.control_vod},{t:this.control_repit},{t:this.control_hd},{t:this.hot},{t:this.yes},{t:this.zero},{t:this.q_bottom},{t:this.guid},{t:this.control_tv_title},{t:this.control_capa_title},{t:this.control_phone_title},{t:this.control_records_title},{t:this.control_vod_title},{t:this.control_repit_title},{t:this.control_hd_title},{t:this.control_yes},{t:this.control_hot},{t:this.control_nefflix},{t:this.control_partner},{t:this.control_smart},{t:this.control_cellcom},{t:this.control_active}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(636.2,-167.5,1626.1,1210.1);
// library properties:
lib.properties = {
	id: 'CD6FF09CAD187D47A2500D5BE71F5665',
	width: 1400,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Sahar_Oz_Inbar_TV_company_atlas_.png", id:"Sahar_Oz_Inbar_TV_company_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"},
		{src:"components/YouTube/src/myyoutube.js", id:"my.youtube"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD6FF09CAD187D47A2500D5BE71F5665'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;