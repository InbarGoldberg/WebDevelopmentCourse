(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HitTheHigh_atlas_", frames: [[0,0,984,547],[274,549,272,164],[0,549,272,164],[548,714,270,163],[548,549,272,163]]}
];


// symbols:



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["HitTheHigh_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flower1 = function() {
	this.spriteSheet = ss["HitTheHigh_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lion1 = function() {
	this.spriteSheet = ss["HitTheHigh_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shcem1 = function() {
	this.spriteSheet = ss["HitTheHigh_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.yafo1 = function() {
	this.spriteSheet = ss["HitTheHigh_atlas_"];
	this.gotoAndStop(4);
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


(lib.RBpic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AususIdZAAIAAdZI9ZAAg");
	this.shape.setTransform(0,94.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(106,44,25,0)").s().p("AusOtIAA9ZIdZAAIAAdZg");
	this.shape_1.setTransform(0,94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RBpic3, new cjs.Rectangle(-95.1,-1,190.2,190.2), null);


(lib.RBpic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AOtC/IAALuI9ZAAIAAruAususIdZAA");
	this.shape.setTransform(0,94.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(106,44,25,0)").s().p("AusI2IAAxrIdZAAIAARrg");
	this.shape_1.setTransform(0,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RBpic2, new cjs.Rectangle(-95.1,-1,190.2,190.2), null);


(lib.RBpic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AususIdZAAIAAdZI9ZAAg");
	this.shape.setTransform(0,94.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RBpic1, new cjs.Rectangle(-95.1,-1,190.2,190.2), null);


(lib.RBpic0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AususIdZAAIAAdZI9ZAAg");
	this.shape.setTransform(0,94.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(106,44,25,0)").s().p("AusOtIAA9ZIdZAAIAAdZg");
	this.shape_1.setTransform(0,94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RBpic0, new cjs.Rectangle(-95.1,-1,190.2,190.2), null);


(lib.an_RadioButton = function(options) {
	this._element = new $.an.RadioButton(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.qpic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Auso1IdZAAIAARrI9ZAAg");
	this.shape.setTransform(0,56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AusI2IAAxrIdZAAIAARrg");
	this.shape_1.setTransform(0,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qpic, new cjs.Rectangle(-95.1,-1,190.2,115.2), null);


(lib.usa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgQgLIAUAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape.setTransform(-3.6,-2.1,1.462,1.256);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_1.setTransform(-20.5,-2.1,1.462,1.256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_2.setTransform(-37.4,-2.1,1.462,1.256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgQgLIAUAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_3.setTransform(-54.3,-2.1,1.462,1.256);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_4.setTransform(-71.3,-2.1,1.462,1.256);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_5.setTransform(-87.4,-2.1,1.462,1.256);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgQgLIAUAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_6.setTransform(-3.6,-14.6,1.462,1.256);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_7.setTransform(-20.5,-14.6,1.462,1.256);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_8.setTransform(-37.4,-14.6,1.462,1.256);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgQgLIAUAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_9.setTransform(-54.3,-14.6,1.462,1.256);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_10.setTransform(-71.3,-14.6,1.462,1.256);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_11.setTransform(-87.4,-14.6,1.462,1.256);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgQgLIAUAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_12.setTransform(-3.6,-27,1.462,1.256);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_13.setTransform(-20.5,-27,1.462,1.256);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_14.setTransform(-37.4,-27,1.462,1.256);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgQgLIAUAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_15.setTransform(-54.3,-27,1.462,1.256);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_16.setTransform(-71.3,-27,1.462,1.256);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_17.setTransform(-87.4,-27,1.462,1.256);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgQgLIAUAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_18.setTransform(-3.6,-39.5,1.462,1.256);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_19.setTransform(-20.5,-39.5,1.462,1.256);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_20.setTransform(-37.4,-39.5,1.462,1.256);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgQgLIAUAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_21.setTransform(-54.3,-39.5,1.462,1.256);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_22.setTransform(-71.3,-39.5,1.462,1.256);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_23.setTransform(-87.4,-39.5,1.462,1.256);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgQgLIAUAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_24.setTransform(-3.6,-51.9,1.462,1.256);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDEDEE").s().p("AAAANIgQANIAHgUIgRgMIAUAAIAGgTIAGATIAVAAIgRAMIAHAUg");
	this.shape_25.setTransform(-12.7,-7.7,1.462,1.256);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDEDEE").s().p("AAAANIgPANIAGgUIgRgMIAVAAIAFgTIAGATIAVAAIgRAMIAGAUg");
	this.shape_26.setTransform(-29.7,-7.7,1.462,1.256);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDEDEE").s().p("AAAANIgPANIAGgUIgRgMIAVAAIAFgTIAHATIAUAAIgRAMIAHAUg");
	this.shape_27.setTransform(-46.6,-7.7,1.462,1.256);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDEDEE").s().p("AAAANIgPANIAGgUIgRgMIAVAAIAFgTIAGATIAVAAIgRAMIAHAUg");
	this.shape_28.setTransform(-63.5,-7.7,1.462,1.256);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDEDEE").s().p("AAAANIgPANIAGgUIgRgMIAVAAIAFgTIAGATIAVAAIgRAMIAHAUg");
	this.shape_29.setTransform(-79.7,-7.7,1.462,1.256);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAUAAIAGgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_30.setTransform(-12.7,-20.2,1.462,1.256);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_31.setTransform(-29.7,-20.2,1.462,1.256);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_32.setTransform(-46.6,-20.2,1.462,1.256);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_33.setTransform(-63.5,-20.2,1.462,1.256);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_34.setTransform(-79.7,-20.2,1.462,1.256);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAUAAIAGgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_35.setTransform(-12.7,-32.6,1.462,1.256);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_36.setTransform(-29.7,-32.6,1.462,1.256);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_37.setTransform(-46.6,-32.6,1.462,1.256);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_38.setTransform(-63.5,-32.6,1.462,1.256);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_39.setTransform(-79.7,-32.6,1.462,1.256);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAUAAIAGgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_40.setTransform(-12.7,-45.1,1.462,1.256);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_41.setTransform(-29.7,-45.1,1.462,1.256);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_42.setTransform(-46.6,-45.1,1.462,1.256);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_43.setTransform(-63.5,-45.1,1.462,1.256);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_44.setTransform(-79.7,-45.1,1.462,1.256);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_45.setTransform(-20.5,-51.9,1.462,1.256);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAGAUg");
	this.shape_46.setTransform(-37.4,-51.9,1.462,1.256);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgQgLIAUAAIAFgUIAHAUIAUAAIgRALIAHAUg");
	this.shape_47.setTransform(-54.3,-51.9,1.462,1.256);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDEDEE").s().p("AAAAOIgPAMIAGgUIgRgLIAVAAIAFgUIAGAUIAVAAIgRALIAHAUg");
	this.shape_48.setTransform(-71.3,-51.9,1.462,1.256);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDEDEE").s().p("AAAAOIgQAMIAHgUIgRgLIAVAAIAFgUIAGAUIAUAAIgQALIAGAUg");
	this.shape_49.setTransform(-87.4,-51.9,1.462,1.256);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006BB5").s().p("AlQDzIAAmoQAAgZASgSQASgSAZAAIJkAAIAAHlg");
	this.shape_50.setTransform(-44.9,-26.1,1.462,1.256);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DA2128").s().p("AqDAjIAAgKQAAgZASgQQASgSAYAAISPAAQAZAAARASQASAQAAAZIAAAKg");
	this.shape_51.setTransform(0,-52.2,1.462,1.256);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DA2128").s().p("AqDAjIAAhFIUHAAIAABFg");
	this.shape_52.setTransform(0,-34.9,1.462,1.256);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DA2128").s().p("AqDAjIAAhFIUHAAIAABFg");
	this.shape_53.setTransform(0,-17.5,1.462,1.256);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DA2128").s().p("AqDAjIAAhFIUHAAIAABFg");
	this.shape_54.setTransform(0,0,1.462,1.256);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DA2128").s().p("AqDAjIAAhFIUHAAIAABFg");
	this.shape_55.setTransform(0,17.4,1.462,1.256);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DA2128").s().p("AqDAjIAAhFIUHAAIAABFg");
	this.shape_56.setTransform(0,34.8,1.462,1.256);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DA2128").s().p("ApHAjQgZAAgRgSQgSgRAAgYIAAgKIUHAAIAAAKQAAAYgSARQgRASgZAAg");
	this.shape_57.setTransform(0,52.3,1.462,1.256);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E6E7E8").s().p("ApHHCQgZAAgRgRQgSgSAAgYIAAsMQAAgZASgSQASgSAYAAISPAAQAZAAARASQASASAAAZIAAMMQAAAYgSASQgRARgZAAg");
	this.shape_58.setTransform(0,0,1.462,1.256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.usa, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.uk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA2128").s().p("AqDBRIAAigIUIAAIAACgg");
	this.shape.setTransform(0,0,1.46,1.254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA2128").s().p("AhQHEIAAuHICgAAIAAOHg");
	this.shape_1.setTransform(0,0,1.46,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA2128").s().p("AkLByIAAgQIGsj5IBrAAIoLEvQgMgRAAgVg");
	this.shape_2.setTransform(-54.9,35,1.46,1.254);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA2128").s().p("AkECWIIGkrQACAJABAJIAAArImdDug");
	this.shape_3.setTransform(56.1,-32.4,1.46,1.254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA2128").s().p("AB+CHIlmjPIAAg+IHRENg");
	this.shape_4.setTransform(-60,-30.3,1.46,1.254);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA2128").s().p("AjliGIBkAAIFoDPIAAA+g");
	this.shape_5.setTransform(60.5,30.8,1.46,1.254);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E7E8").s().p("AqDkiIAAhkQAAgfAZgSITvLZIAABmQAAAegZASg");
	this.shape_6.setTransform(0,0,1.46,1.254);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E7E8").s().p("AqDBtIAAjZIUIAAIAADZg");
	this.shape_7.setTransform(0,0,1.46,1.254);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E8").s().p("AhsHEIAAuHIDZAAIAAOHg");
	this.shape_8.setTransform(0,0,1.46,1.254);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E7E8").s().p("Ap5GiQgKgQAAgTIAAhWIT4rfQAPASABAWIAABzIzjLSQgRgHgKgOg");
	this.shape_9.setTransform(0,1,1.46,1.254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0089CD").s().p("ApIHEQgZAAgRgSQgRgRAAgaIAAsNQAAgZARgSQARgRAZgBISQAAQAaABARARQASASAAAZIAAMNQAAAagSARQgRASgaAAg");
	this.shape_10.setTransform(0,0,1.46,1.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uk, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.tur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FEFDFE","#FAF6F8","#F4EBEF","#EBDAE2","#E3CCD7"],[0,0.514,0.702,0.831,0.937,1],-20.2,1.4,0,-20.2,1.4,29.6).s().p("AgWAYIhMgVIBKgaIgDhPIAwA+IBKgbIgsBBIAwA+IhLgWIgrBBg");
	this.shape.setTransform(-2.4,-0.4,1.462,1.256);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FEFDFE","#FAF6F8","#F4EBEF","#EBDAE2","#E3CCD7"],[0,0.514,0.702,0.831,0.937,1],6.6,1.4,0,6.6,1.4,29.6).s().p("AiDCiQhAhDAAhfQAAhdBAhDQBAhDBaAAQA1AAAtAYQAtAXAeAoQgxgnhAAAQhMAAg1A1Qg1A1AABJQAABLA1A0QA1A1BMAAQBAAAAxgnQgeApgtAXQgtAXg1AAQhaAAhAhCg");
	this.shape_1.setTransform(-41.7,-0.4,1.462,1.256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA2029").s().p("ApHHDQgYAAgSgSQgRgRAAgaIAAsMQAAgZARgRQASgRAYAAISOAAQAaAAARARQASASAAAYIAAMMQAAAagSARQgRASgaAAg");
	this.shape_2.setTransform(0,0,1.462,1.256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tur, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.sou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape.setTransform(48.8,-22.2,1.459,1.254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape_1.setTransform(36.9,-32.4,1.459,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape_2.setTransform(37.6,-12.6,1.459,1.254);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape_3.setTransform(25.8,-22.8,1.459,1.254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSg5IAZgZICMCNIgYAYg");
	this.shape_4.setTransform(37.3,-22.5,1.459,1.254);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_5.setTransform(38,13.7,1.459,1.254);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_6.setTransform(43.5,18.5,1.459,1.254);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_7.setTransform(49.1,23.2,1.459,1.254);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_8.setTransform(26.1,23.9,1.459,1.254);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_9.setTransform(31.7,28.6,1.459,1.254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgqASIA8g8IAZAZIg8A8g");
	this.shape_10.setTransform(37.2,33.4,1.459,1.254);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape_11.setTransform(-32,28.7,1.459,1.254);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqgRIAZgZIA8A8IgZAZg");
	this.shape_12.setTransform(-43.8,18.5,1.459,1.254);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhTg6IAZgZICOCNIgaAag");
	this.shape_13.setTransform(-32.4,18.8,1.459,1.254);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhTg6IAZgZICOCNIgaAag");
	this.shape_14.setTransform(-43.5,28.4,1.459,1.254);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhTA6ICOiNIAZAZIiOCOg");
	this.shape_15.setTransform(-32,-17.7,1.459,1.254);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhTA7ICNiNIAaAZIiOCMg");
	this.shape_16.setTransform(-37.5,-22.5,1.459,1.254);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSA7ICMiOIAZAaIiNCNg");
	this.shape_17.setTransform(-43.1,-27.3,1.459,1.254);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005DAB").s().p("AgbBzQhEgMgng4Qgmg2AKhBQgEAfASAbQAUAbAhAGQAiAGAdgUQAcgTAFgiQAGghAcgUQAcgUAiAGQAhAGAUAcQAUAcgGAiQgMBDg4AnQgrAegyAAQgOAAgQgCg");
	this.shape_18.setTransform(-0.3,6.7,1.459,1.254);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C2262D").s().p("AhgB0QgigGgUgcQgTgcAGgiQAMhDA4gnQA4goBDAMQBDAMAoA4QAmA2gJBBQADgfgSgbQgUgbgigGQghgGgdAUQgcATgFAhQgGAigcAUQgVAPgZAAIgQgBg");
	this.shape_19.setTransform(-0.1,-5.6,1.459,1.254);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E7E8").s().p("ApIHDQgYAAgTgRQgRgSAAgZIAAsNQAAgZARgSQATgRAYAAISRAAQAZAAASARQARASAAAZIAAMNQAAAZgRASQgSARgZAAg");
	this.shape_20.setTransform(0,0,1.459,1.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sou, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.rus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA2128").s().p("ApICXQgZAAgSgSQgSgSAAgZIAAjwIULAAIAADwQgBAZgRASQgRASgZAAg");
	this.shape.setTransform(0,37.7,1.458,1.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0088CF").s().p("AqFCWIAAkrIULAAIAAErg");
	this.shape_1.setTransform(0,0,1.458,1.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E7E8").s().p("AqFCXIAAjxQAAgZASgRQASgRAZgBISSAAQAZABARARQARARABAZIAADxg");
	this.shape_2.setTransform(0,-37.7,1.458,1.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rus, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.ita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E8").s().p("AjWHEIAAuHIGtAAIAAOHg");
	this.shape.setTransform(0,0,1.458,1.254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA2128").s().p("AjWHEIAAuHIFxAAQAZAAARARQASARAAAZIAAMRQAAAYgSASQgRARgZAAg");
	this.shape_1.setTransform(62.7,0,1.458,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DB04B").s().p("AiaHEQgZAAgSgSQgRgRAAgZIAAsPQAAgYARgSQASgSAZAAIFxAAIAAOHg");
	this.shape_2.setTransform(-62.7,0,1.458,1.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ita, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.ira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BBBDBF","#D9DBDC","#E6E7E8"],[0,0.624,1],6.4,0,-0.6,0).s().p("AgFAEIAAgHIALAAIAAAHg");
	this.shape.setTransform(84.8,24.2,1.462,1.256);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BBBDBF","#D9DBDC","#E6E7E8"],[0,0.624,1],6.4,0,-0.6,0).s().p("AgFAEIAAgHIALAAIAAAHg");
	this.shape_1.setTransform(84.8,-24.1,1.462,1.256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BBBDBF","#D9DBDC","#E6E7E8"],[0,0.624,1],-1.7,0,3.7,0).s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_2.setTransform(-89.9,-20.6,1.462,1.256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_3.setTransform(93.2,18,1.462,1.256);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_4.setTransform(82.3,18,1.462,1.256);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_5.setTransform(75.7,20.6,1.462,1.256);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E7E8").s().p("AAXASIAAgbIgGAAIAAAbIgHAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgKAAIAAAIIAUAAIAAgOIAiAAIAAAjg");
	this.shape_6.setTransform(87.7,22.4,1.462,1.256);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_7.setTransform(79.5,24.2,1.462,1.256);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_8.setTransform(77.3,21.5,1.462,1.256);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC1C24").s().p("AgFAHIAAgNIAMAAIAAANg");
	this.shape_9.setTransform(72.4,18,1.462,1.256);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_10.setTransform(61.6,18,1.462,1.256);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_11.setTransform(55,20.6,1.462,1.256);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E7E8").s().p("AAYASIAAgbIgHAAIAAAbIgHAAIAAgbIgHAAIAAAbIgJAAIAAgPIgXAAIAAgUIAQAAIAAAGIgJAAIAAAIIAUAAIAAgOIAhAAIAAAjg");
	this.shape_12.setTransform(67,22.4,1.462,1.256);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_13.setTransform(58.8,24.2,1.462,1.256);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_14.setTransform(56.6,21.5,1.462,1.256);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_15.setTransform(51.7,18,1.462,1.256);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_16.setTransform(40.9,18,1.462,1.256);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_17.setTransform(34.3,20.6,1.462,1.256);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6E7E8").s().p("AAYASIAAgbIgGAAIAAAbIgIAAIAAgbIgHAAIAAAbIgJAAIAAgPIgXAAIAAgUIAQAAIAAAGIgKAAIAAAIIAVAAIAAgOIAgAAIAAAjg");
	this.shape_18.setTransform(46.3,22.4,1.462,1.256);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_19.setTransform(38.1,24.2,1.462,1.256);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_20.setTransform(36,21.5,1.462,1.256);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_21.setTransform(31,18,1.462,1.256);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_22.setTransform(20.2,18,1.462,1.256);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_23.setTransform(13.6,20.6,1.462,1.256);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6E7E8").s().p("AAXASIAAgbIgFAAIAAAbIgIAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgKAAIAAAIIAUAAIAAgOIAhAAIAAAjg");
	this.shape_24.setTransform(25.6,22.4,1.462,1.256);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_25.setTransform(17.4,24.2,1.462,1.256);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_26.setTransform(15.3,21.5,1.462,1.256);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_27.setTransform(10.3,18,1.462,1.256);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_28.setTransform(-0.5,18,1.462,1.256);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_29.setTransform(-7.1,20.6,1.462,1.256);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E7E8").s().p("AAXASIAAgbIgGAAIAAAbIgHAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgJAAIAAAIIATAAIAAgOIAiAAIAAAjg");
	this.shape_30.setTransform(4.9,22.4,1.462,1.256);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_31.setTransform(-3.2,24.2,1.462,1.256);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_32.setTransform(-5.4,21.5,1.462,1.256);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_33.setTransform(-10.3,18,1.462,1.256);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_34.setTransform(-21.2,18,1.462,1.256);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E7E8").s().p("AgDADIAAgFIAGAAIAAAFg");
	this.shape_35.setTransform(-27.8,20.6,1.462,1.256);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E6E7E8").s().p("AAYASIAAgbIgHAAIAAAbIgIAAIAAgbIgGAAIAAAbIgKAAIAAgPIgWAAIAAgUIAQAAIAAAGIgJAAIAAAIIATAAIAAgOIAiAAIAAAjg");
	this.shape_36.setTransform(-15.7,22.4,1.462,1.256);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_37.setTransform(-23.9,24.2,1.462,1.256);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAHAAIAAAMIARAAIAAgMIAdAAIAAAUg");
	this.shape_38.setTransform(-26.1,21.5,1.462,1.256);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_39.setTransform(-31,18,1.462,1.256);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_40.setTransform(-41.9,18,1.462,1.256);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E7E8").s().p("AgDADIAAgFIAHAAIAAAFg");
	this.shape_41.setTransform(-48.5,20.6,1.462,1.256);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6E7E8").s().p("AAYASIAAgbIgGAAIAAAbIgIAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgJAAIAAAIIATAAIAAgOIAiAAIAAAjg");
	this.shape_42.setTransform(-36.5,22.4,1.462,1.256);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_43.setTransform(-44.6,24.2,1.462,1.256);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAIAAIAAAMIAQAAIAAgMIAdAAIAAAUg");
	this.shape_44.setTransform(-46.8,21.5,1.462,1.256);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_45.setTransform(-51.7,18,1.462,1.256);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_46.setTransform(-62.6,18,1.462,1.256);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_47.setTransform(-69.2,20.6,1.462,1.256);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E7E8").s().p("AAYASIAAgbIgHAAIAAAbIgHAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgKAAIAAAIIAUAAIAAgOIAiAAIAAAjg");
	this.shape_48.setTransform(-57.1,22.4,1.462,1.256);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_49.setTransform(-65.3,24.2,1.462,1.256);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAIAAIAAAMIAQAAIAAgMIAdAAIAAAUg");
	this.shape_50.setTransform(-67.5,21.5,1.462,1.256);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_51.setTransform(-72.4,18,1.462,1.256);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EC1C24").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_52.setTransform(-83.2,18,1.462,1.256);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EC1C24").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_53.setTransform(-93.1,18,1.462,1.256);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_54.setTransform(-89.9,20.6,1.462,1.256);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E6E7E8").s().p("AAXASIAAgbIgGAAIAAAbIgHAAIAAgbIgHAAIAAAbIgJAAIAAgPIgYAAIAAgUIARAAIAAAGIgKAAIAAAIIAUAAIAAgOIAiAAIAAAjg");
	this.shape_55.setTransform(-77.8,22.4,1.462,1.256);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_56.setTransform(-86,24.2,1.462,1.256);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E6E7E8").s().p("AAOALIAAgHIAHAAIAAgHIgRAAIAAAOIgeAAIAAgUIAIAAIAAAMIAQAAIAAgMIAdAAIAAAUg");
	this.shape_57.setTransform(-88.2,21.5,1.462,1.256);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_58.setTransform(93.2,-18,1.462,1.256);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_59.setTransform(82.3,-18,1.462,1.256);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_60.setTransform(75.7,-20.6,1.462,1.256);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgUAAIAAAHIAKAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAHAAIAAAbIAGAAIAAgbIAIAAIAAAjg");
	this.shape_61.setTransform(87.7,-22.4,1.462,1.256);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_62.setTransform(79.5,-24.1,1.462,1.256);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_63.setTransform(77.3,-21.5,1.462,1.256);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#37B34A").s().p("AgFAHIAAgNIAMAAIAAANg");
	this.shape_64.setTransform(72.4,-18,1.462,1.256);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_65.setTransform(61.6,-18,1.462,1.256);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_66.setTransform(55,-20.6,1.462,1.256);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E6E7E8").s().p("AgCASIAAgOIgUAAIAAAHIAJAAIAAAHIgQAAIAAgUIAXAAIAAgPIAJAAIAAAbIAHAAIAAgbIAHAAIAAAbIAHAAIAAgbIAHAAIAAAjg");
	this.shape_67.setTransform(67,-22.4,1.462,1.256);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_68.setTransform(58.8,-24.1,1.462,1.256);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_69.setTransform(56.6,-21.5,1.462,1.256);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_70.setTransform(51.7,-18,1.462,1.256);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_71.setTransform(40.9,-18,1.462,1.256);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(34.3,-20.6,1.462,1.256);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E7E8").s().p("AgCASIAAgOIgVAAIAAAHIAKAAIAAAHIgQAAIAAgUIAXAAIAAgPIAJAAIAAAbIAHAAIAAgbIAIAAIAAAbIAGAAIAAgbIAGAAIAAAjg");
	this.shape_73.setTransform(46.3,-22.4,1.462,1.256);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_74.setTransform(38.1,-24.1,1.462,1.256);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_75.setTransform(36,-21.5,1.462,1.256);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_76.setTransform(31,-18,1.462,1.256);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_77.setTransform(20.2,-18,1.462,1.256);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_78.setTransform(13.6,-20.6,1.462,1.256);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgUAAIAAAHIAKAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAIAAIAAAbIAFAAIAAgbIAHAAIAAAjg");
	this.shape_79.setTransform(25.6,-22.4,1.462,1.256);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_80.setTransform(17.4,-24.1,1.462,1.256);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_81.setTransform(15.3,-21.5,1.462,1.256);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_82.setTransform(10.3,-18,1.462,1.256);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_83.setTransform(-0.5,-18,1.462,1.256);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_84.setTransform(-7.1,-20.6,1.462,1.256);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgTAAIAAAHIAJAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAHAAIAAAbIAGAAIAAgbIAIAAIAAAjg");
	this.shape_85.setTransform(4.9,-22.4,1.462,1.256);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_86.setTransform(-3.2,-24.1,1.462,1.256);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_87.setTransform(-5.4,-21.5,1.462,1.256);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_88.setTransform(-10.3,-18,1.462,1.256);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_89.setTransform(-21.2,-18,1.462,1.256);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6E7E8").s().p("AgDADIAAgFIAGAAIAAAFg");
	this.shape_90.setTransform(-27.8,-20.6,1.462,1.256);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgTAAIAAAHIAJAAIAAAHIgQAAIAAgUIAWAAIAAgPIAKAAIAAAbIAGAAIAAgbIAIAAIAAAbIAHAAIAAgbIAHAAIAAAjg");
	this.shape_91.setTransform(-15.7,-22.4,1.462,1.256);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_92.setTransform(-23.9,-24.1,1.462,1.256);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgRAAIAAAMIgHAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_93.setTransform(-26.1,-21.5,1.462,1.256);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_94.setTransform(-31,-18,1.462,1.256);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_95.setTransform(-41.9,-18,1.462,1.256);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E7E8").s().p("AgDADIAAgFIAHAAIAAAFg");
	this.shape_96.setTransform(-48.5,-20.6,1.462,1.256);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgTAAIAAAHIAJAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAIAAIAAAbIAGAAIAAgbIAHAAIAAAjg");
	this.shape_97.setTransform(-36.5,-22.4,1.462,1.256);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_98.setTransform(-44.6,-24.1,1.462,1.256);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgQAAIAAAMIgIAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_99.setTransform(-46.8,-21.5,1.462,1.256);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_100.setTransform(-51.7,-18,1.462,1.256);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_101.setTransform(-62.6,-18,1.462,1.256);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_102.setTransform(-69.2,-20.6,1.462,1.256);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgUAAIAAAHIAKAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAHAAIAAAbIAHAAIAAgbIAHAAIAAAjg");
	this.shape_103.setTransform(-57.1,-22.4,1.462,1.256);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_104.setTransform(-65.3,-24.1,1.462,1.256);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgQAAIAAAMIgIAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_105.setTransform(-67.5,-21.5,1.462,1.256);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_106.setTransform(-72.4,-18,1.462,1.256);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#37B34A").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_107.setTransform(-83.2,-18,1.462,1.256);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#37B34A").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_108.setTransform(-93.1,-18,1.462,1.256);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EC1C24").s().p("AhOgsQAGgYARgVQAJgLAHgFQgnBAAcA7QAOAdAWARIAAilIAOgPIANAPIAAClQAWgRAOgdQAcg7gnhAIAQAQQASAVAHAYQAVBNhkBUQhihUAUhNg");
	this.shape_109.setTransform(-0.6,1.8,1.462,1.256);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EC1C24").s().p("AAAAFIgIAIQgGgBgHgEQgOgIAAgMIAOALQAPAHAGgLQAHALAPgHQAIgFAGgGQAAAMgOAIIgNAFg");
	this.shape_110.setTransform(-0.6,-14.6,1.462,1.256);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EC1C24").s().p("AhLASQAogFAWgPQAKgIADgHQAEASAlAKQASAGARABg");
	this.shape_111.setTransform(-0.5,11.8,1.462,1.256);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EC1C24").s().p("AgPA8QgTgcAAggQAAgfASgcQARgaAegPQgUARgLAaQgMAbAAAeQAAAeAMAbQANAbAWARQgggOgSgbg");
	this.shape_112.setTransform(-13.9,-0.3,1.462,1.256);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EC1C24").s().p("AAAA5QANgbAAgeQAAgegMgbQgLgagUgRQAeAPARAaQASAcAAAfQAAAggTAcQgSAbggAOQAWgRAMgbg");
	this.shape_113.setTransform(13.4,-0.3,1.462,1.256);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E6E7E8").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_114.setTransform(-89.9,-20.6,1.462,1.256);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E6E7E8").s().p("AgDASIAAgOIgUAAIAAAHIAKAAIAAAHIgRAAIAAgUIAYAAIAAgPIAJAAIAAAbIAHAAIAAgbIAHAAIAAAbIAGAAIAAgbIAIAAIAAAjg");
	this.shape_115.setTransform(-77.8,-22.4,1.462,1.256);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6E7E8").s().p("AgpAEIAAgHIBTAAIAAAHg");
	this.shape_116.setTransform(-86,-24.1,1.462,1.256);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6E7E8").s().p("AgCALIAAgNIgQAAIAAAMIgIAAIAAgTIAeAAIAAAMIARAAIAAgGIgHAAIAAgGIANAAIAAAUg");
	this.shape_117.setTransform(-88.2,-21.5,1.462,1.256);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EC1C24").s().p("ApHCWQgYAAgSgRQgSgSAAgZIAAjvIUHAAIAADvQAAAZgSASQgRARgZAAg");
	this.shape_118.setTransform(0,37.7,1.462,1.256);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E6E7E8").s().p("AqDCWIAAkrIUHAAIAAErg");
	this.shape_119.setTransform(0,0,1.462,1.256);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#62BA46").s().p("AqDCWIAAjvQAAgZASgSQASgRAYAAISPAAQAZAAARARQASASAAAZIAADvg");
	this.shape_120.setTransform(0,-37.7,1.462,1.256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ira, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.ind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006BB5").s().p("AgDAFQgFgEAEgEQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABQAFADgEAFQgCADgDAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(-14.2,-8.9,1.465,1.259);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006BB5").s().p("AgDAFQgFgEAEgEQADgFAFAEQAFADgEAFQgCADgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_1.setTransform(13.5,9.3,1.465,1.259);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006BB5").s().p("AgDAFQgFgEAEgEQABgCADgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAFADgEAFQgCADgDAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(-10.9,12.1,1.465,1.259);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006BB5").s().p("AgDAFQgFgEAEgEQADgFAFAEQAFADgEAFQgCADgDAAIgDgCg");
	this.shape_3.setTransform(10.3,-11.7,1.465,1.259);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006BB5").s().p("AAAAGQgHgBABgFQABgHAGACQAGABgBAFQAAAGgFAAIgBgBg");
	this.shape_4.setTransform(-17.6,-1.8,1.465,1.259);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006BB5").s().p("AAAAGQgGgBABgFQAAgGAGAAQAGABgBAGQgBAGgEAAIgBgBg");
	this.shape_5.setTransform(17,2.1,1.465,1.259);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006BB5").s().p("AAAAGQgHgBABgFQACgGAFAAQAGABgBAGQAAAGgFAAIgBgBg");
	this.shape_6.setTransform(-2.6,15.1,1.465,1.259);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006BB5").s().p("AAAAGQgGgBABgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgCACAAQAGABgBAGQgBAGgEAAIgBgBg");
	this.shape_7.setTransform(2,-14.7,1.465,1.259);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006BB5").s().p("AgCAGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBQgCgFAFgCQAFgCADAFQADAGgHACIgCAAIgCAAg");
	this.shape_8.setTransform(-16.4,5.9,1.465,1.259);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006BB5").s().p("AgFACQgCgFAFgCQAFgDADAGQACAFgGADIgCABQgDAAgCgFg");
	this.shape_9.setTransform(15.8,-5.5,1.465,1.259);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006BB5").s().p("AgFACQgCgFAFgCQAGgCACAFQACAFgGADIgCABQgDAAgCgFg");
	this.shape_10.setTransform(6.3,14.1,1.465,1.259);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006BB5").s().p("AgFACQgBgCABgCQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAFgCADAFQACAFgGADIgCABQgDAAgCgFg");
	this.shape_11.setTransform(-7,-13.6,1.465,1.259);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006BB5").s().p("AAAAGQgDAAgBgCQgEgFAFgDQAEgEAEAFQAEAEgFAEIgDACIgBgBg");
	this.shape_12.setTransform(-10.9,-11.7,1.465,1.259);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006BB5").s().p("AgEAEQgEgFAFgDQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAgBAAQAAABgBAAQAAAAAAAAQgCAAgCgDg");
	this.shape_13.setTransform(10.3,12.1,1.465,1.259);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006BB5").s().p("AAAAGQgDAAgBgCQgEgFAFgDQAEgEAEAFQAEAEgFAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIAAgBg");
	this.shape_14.setTransform(-14.2,9.3,1.465,1.259);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006BB5").s().p("AgEAEQgEgFAFgDQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAgBAAQAAABgBAAQAAAAAAAAQgCAAgCgDg");
	this.shape_15.setTransform(13.5,-8.9,1.465,1.259);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006BB5").s().p("AgCAGQgFgDACgEQADgHAEADQAGACgCAFQgCAFgDAAIgDgBg");
	this.shape_16.setTransform(-16.4,-5.5,1.465,1.259);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006BB5").s().p("AgCAGQgFgCACgGQACgFAFACQAHADgDAEQgCAFgDAAIgDgBg");
	this.shape_17.setTransform(15.8,5.9,1.465,1.259);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006BB5").s().p("AgCAGQgGgDADgFQACgFAFACQAHADgDAEQgCAFgDAAIgDgBg");
	this.shape_18.setTransform(-7,14,1.465,1.259);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006BB5").s().p("AgCAGQgFgCACgFQACgGAFACQAHADgDAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgCABIgCgBg");
	this.shape_19.setTransform(6.4,-13.7,1.465,1.259);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006BB5").s().p("AgGABQgBgGAHgBQAFAAABAGQABAFgGABIgBABQgFAAgBgGg");
	this.shape_20.setTransform(-17.6,2.1,1.465,1.259);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006BB5").s().p("AgDAGQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgFAGgBQAFgBABAGQABAGgGABIgBAAIgDgBg");
	this.shape_21.setTransform(17,-1.8,1.465,1.259);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006BB5").s().p("AgDAFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgGAGgBQAFAAABAGQABAFgGABIgBABIgDgCg");
	this.shape_22.setTransform(2,15.1,1.465,1.259);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006BB5").s().p("AgGABQgBgFAHgBQAFgBABAGQABAFgGABIgBABQgFAAgBgGg");
	this.shape_23.setTransform(-2.6,-14.7,1.465,1.259);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006BB5").s().p("AgDADIgfgkIAmAeIAfAmg");
	this.shape_24.setTransform(-7.6,-6,1.465,1.259);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006BB5").s().p("AgDAEIgfglIAmAeIAfAmg");
	this.shape_25.setTransform(6.9,6.4,1.465,1.259);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006BB5").s().p("AgDgDIAlgeIgeAlIglAfg");
	this.shape_26.setTransform(-7.6,6.4,1.465,1.259);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006BB5").s().p("AgDgDIAmgeIgfAlIgmAfg");
	this.shape_27.setTransform(6.9,-6,1.465,1.259);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006BB5").s().p("AgBAGIgugSIAwAIIAvARg");
	this.shape_28.setTransform(-10.2,-2.1,1.465,1.259);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006BB5").s().p("AgBAFIgtgRIAvAHIAuASg");
	this.shape_29.setTransform(9.6,2.5,1.465,1.259);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006BB5").s().p("AgFAAIASguIgIAwIgRAtg");
	this.shape_30.setTransform(-3,8.7,1.465,1.259);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006BB5").s().p("AgEAAIARguIgIAwIgRAtg");
	this.shape_31.setTransform(2.3,-8.3,1.465,1.259);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006BB5").s().p("AgBgEIAxgIIgvASIgwAHg");
	this.shape_32.setTransform(-10.2,2.5,1.465,1.259);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006BB5").s().p("AgBgEIAwgIIguASIgvAHg");
	this.shape_33.setTransform(9.6,-2.1,1.465,1.259);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006BB5").s().p("AgEACIgIgwIASAuIAHAvg");
	this.shape_34.setTransform(2.3,8.7,1.465,1.259);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006BB5").s().p("AgFACIgHgwIARAuIAIAvg");
	this.shape_35.setTransform(-3,-8.3,1.465,1.259);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006BB5").s().p("AgEADIgUgsIAdAmIATAtg");
	this.shape_36.setTransform(-5.5,-7.4,1.465,1.259);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006BB5").s().p("AgFADIgTgsIAdAnIAUAsg");
	this.shape_37.setTransform(4.8,7.8,1.465,1.259);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#006BB5").s().p("AgCgEIAsgTIgnAcIgsATg");
	this.shape_38.setTransform(-9.2,4.6,1.465,1.259);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#006BB5").s().p("AgCgEIAsgUIgnAdIgsAUg");
	this.shape_39.setTransform(8.6,-4.2,1.465,1.259);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#006BB5").s().p("AgCAEIgngcIAsAUIAnAdg");
	this.shape_40.setTransform(-9.2,-4.2,1.465,1.259);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006BB5").s().p("AgCAFIgngcIAsATIAnAcg");
	this.shape_41.setTransform(8.6,4.6,1.465,1.259);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006BB5").s().p("AgEgBIAcgoIgTAsIgdAng");
	this.shape_42.setTransform(-5.5,7.8,1.465,1.259);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006BB5").s().p("AgEgCIAcgnIgTAsIgcAng");
	this.shape_43.setTransform(4.8,-7.4,1.465,1.259);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006BB5").s().p("AgwAAIAwgFIAxAFIgxAFg");
	this.shape_44.setTransform(-10.6,0.2,1.465,1.259);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#006BB5").s().p("AgwAAIAwgFIAxAFIgxAFg");
	this.shape_45.setTransform(10,0.2,1.465,1.259);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#006BB5").s().p("AgFABIAFgxIAGAxIgGAwg");
	this.shape_46.setTransform(-0.3,9,1.465,1.259);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#006BB5").s().p("AgFAAIAFgwIAGAwIgGAxg");
	this.shape_47.setTransform(-0.3,-8.6,1.465,1.259);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#006BB5").s().p("AhZBbQgmgmAAg1QAAg0AmglQAlgmA0AAQA1AAAmAmQAlAlAAA0QAAA1glAmQgmAlg1AAQg0AAglglgAhThTQgjAjAAAwQAAAyAjAiQAjAjAwAAQAxAAAkgjQAigiAAgyQAAgwgigjQgkgjgxAAQgwAAgjAjg");
	this.shape_48.setTransform(-0.4,0.2,1.465,1.259);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006BB5").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAIgGAHQgGAGgJAAQgIAAgGgGg");
	this.shape_49.setTransform(-0.4,0.2,1.465,1.259);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A8CE38").s().p("ApFCWQgZAAgSgSQgSgRAAgZIAAjvIUFAAIAADvQAAAZgSARQgRASgZAAg");
	this.shape_50.setTransform(0,37.7,1.465,1.259);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E6E7E8").s().p("AqCCWIAAkrIUFAAIAAErg");
	this.shape_51.setTransform(0,0,1.465,1.259);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAA819").s().p("AqCCWIAAjvQAAgZASgRQASgSAZAAISMAAQAYAAASASQASARAAAZIAADvg");
	this.shape_52.setTransform(0,-37.7,1.465,1.259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.ger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA05").s().p("ApICXQgZAAgSgSQgSgSAAgZIAAjwIULAAIAADwQAAAZgSASQgRASgZAAg");
	this.shape.setTransform(0,37.7,1.457,1.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC1C24").s().p("AqFCXIAAktIULAAIAAEtg");
	this.shape_1.setTransform(0,0,1.457,1.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("AqFCWIAAjwQAAgZASgRQASgRAZAAISSAAQAZAAARARQASASAAAYIAADwg");
	this.shape_2.setTransform(0,-37.7,1.457,1.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ger, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.fra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E8").s().p("AjWHEIAAuHIGtAAIAAOHg");
	this.shape.setTransform(0,0,1.459,1.254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA2128").s().p("AjWHEIAAuHIFxAAQAYAAASARQASASAAAYIAAMQQAAAZgSARQgSASgYAAg");
	this.shape_1.setTransform(62.7,0,1.459,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0089CD").s().p("AiaHEQgZAAgSgSQgRgSAAgZIAAsOQAAgZARgRQASgRAZgBIFxAAIAAOHg");
	this.shape_2.setTransform(-62.7,0,1.459,1.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fra, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.egy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2A824").s().p("AgCABIgBAAIgBgBQABgBAHABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBABIAAAAQgFgBgBABg");
	this.shape.setTransform(2.2,11.7,1.458,1.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2A824").s().p("AgDAAQAAAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAIAEABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABQgFgBgBABIgBAAg");
	this.shape_1.setTransform(3.9,11.6,1.458,1.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2A824").s().p("AgDABIABgBQABAAAEAAIABAAIgBAAQgEAAAAABIgBAAIAAAAg");
	this.shape_2.setTransform(6.8,11.3,1.458,1.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2A824").s().p("AgDACIAAgBQADgCADAAIABABIgBAAQgDAAgCACIAAAAIgBAAg");
	this.shape_3.setTransform(8.3,10.9,1.458,1.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2A824").s().p("AADABQAAgBgGABIgBAAIABgBQAGgBABABIAAABg");
	this.shape_4.setTransform(-2.2,11.7,1.458,1.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2A824").s().p("AADABQAAgBgFABIgBAAIAAgBQAGgCABADIAAABg");
	this.shape_5.setTransform(-3.9,11.6,1.458,1.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2A824").s().p("AADABQgBgBgEAAIgBAAIAAAAQAFAAACAAIAAABIAAAAg");
	this.shape_6.setTransform(-6.8,11.3,1.458,1.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2A824").s().p("AACACIgEgCIgBAAIABgBIACAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAAAIgBAAg");
	this.shape_7.setTransform(-8.3,10.9,1.458,1.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2A824").s().p("AAAADQgDgDAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADABIABABQAAADgEAAgAgBAAIABABQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIgBAAIgCAAIgBAAg");
	this.shape_8.setTransform(8.1,13.8,1.458,1.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2A824").s().p("AAAABIAAgBIAAAAIABAAIABAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_9.setTransform(9.2,14.1,1.458,1.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2A824").s().p("AAAABQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAIABgBIABABIABAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_10.setTransform(3.1,15,1.458,1.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2A824").s().p("AAAABIAAgBIAAgBIABABIABAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_11.setTransform(2.5,15,1.458,1.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2A824").s().p("AAAACQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAABAAIAAgBIABABIABAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_12.setTransform(2,13.8,1.458,1.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2A824").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABABIABAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_13.setTransform(2,13.4,1.458,1.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2A824").s().p("AAAABIgBgBIABgBIABABIABAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_14.setTransform(-7.6,14.6,1.458,1.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2A824").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABABIABAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_15.setTransform(-8.3,14.4,1.458,1.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2A824").s().p("AAAABIgBgBIABAAIABAAIABAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_16.setTransform(-8.9,14.2,1.458,1.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2A824").s().p("AAAABIgBgBIABgBIABABIABAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-9.1,12.8,1.458,1.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2A824").s().p("AAAABIgBgBIABgBIABABIABAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_18.setTransform(-8.9,12.4,1.458,1.253);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2A824").s().p("AAAAHQgBgDABgEIAAgGIABAAIABABIgBAFIgBAGQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_19.setTransform(-3,13.8,1.458,1.253);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2A824").s().p("AAAABIgBgBIABAAIABAAIABAAIgBABg");
	this.shape_20.setTransform(-4.3,13.7,1.458,1.253);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2A824").s().p("AAAABIgBgBIABAAIABAAIABAAIgBABg");
	this.shape_21.setTransform(-5.3,13.7,1.458,1.253);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2A824").s().p("AgBABIAAgBIACgBIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCACg");
	this.shape_22.setTransform(8.8,13.5,1.458,1.253);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2A824").s().p("AABAGQgBgBAAgFQAAgDgCgBQAAgBAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAIAFgBQACACAAAEQAAAEABABIADgBIgBAAIABgCIACACIAAABIgEACIgCgBg");
	this.shape_23.setTransform(8.8,12.8,1.458,1.253);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2A824").s().p("AgBABIgBADIgBAAIgBgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAIgBgFIAAgBIAAAAIABAAIABAGIAAAAQACgBACAEIAAABIgDADQgBAAgBgGgAAAABIABAFIACgCQgBgEgCAAg");
	this.shape_24.setTransform(6.8,13.6,1.458,1.253);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2A824").s().p("AgIAFIAAgBQABgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgCgCACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAIABADIAFgBIAIgCIABAAIAAABIgJACIgFAAQgBAFgCAAgAgHgBIAAABIACAAIgBgCIgBgBg");
	this.shape_25.setTransform(6.4,14.3,1.458,1.253);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2A824").s().p("AgCAFIAAAAIABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgEIAAgBQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAAAIgCAEIgCABIAAABIgBgBg");
	this.shape_26.setTransform(4.2,14.4,1.458,1.253);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2A824").s().p("AgEAGQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIABgJIAAgBIABABIAAAKIAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABgBABAAIABgCIAAgBIgBgCIAAAAIACAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAABAAABIgCAEIgEAAIgBgBIAAABIgCAAIgBgBg");
	this.shape_27.setTransform(2.8,13.9,1.458,1.253);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2A824").s().p("AgDADIABgBIACgBIAAgBIAAgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgBAAIgCAAgAABAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIgCgBg");
	this.shape_28.setTransform(0.9,14.4,1.458,1.253);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2A824").s().p("AgKAGIAAgBQAEAAAAgFIgCgCIAAgBIABgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAABIABAAIADgCIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAEAAQAHAAAAACQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAABIgCACIgBAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDgBIgBAAIAAAAIgCABIgBAAIgBgBQAAAEgEABgAgBAAIAEAAIAGADIAAAAIABgDIAAgBIgJAAIgBgBg");
	this.shape_29.setTransform(-1.3,14.6,1.458,1.253);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2A824").s().p("AAFAGIAAgBIgCgBIAAgBQgDADgEgCIgCgBQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIAAgBQACAAABgEQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAgBIABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIAAABIABABQAEACACgCQgCgCAAgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIABABIgCAEIAAABIACABIAAABIABABQABgBABgLIABgBIABABQgBANgDABIgCgCgAAAgBIADACIABgDIAAAAIgCgBg");
	this.shape_30.setTransform(-5.2,14.1,1.458,1.253);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2A824").s().p("AABAIIgBgCIAAgBIAAAAIAAAAIAAAAIAAABIgBAAQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBgCACgEIACgFIABgBIAAABQgDAGAAACIABACQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAgCABAAQAAgBAAgBQAAAAAAAAQAAgBABABIAAABIgBADQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAABgBIAAgBIAAAAIAAgBIABgCQAAAAAAABQABAAAAABQAAAAgBABQAAABAAABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAAAAAIgBAAIgDgBg");
	this.shape_31.setTransform(-7.8,13.2,1.458,1.253);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2A824").s().p("AADAGQgHgGAAgCIABgDIAAAAQAFAAACADQACADgCAFIAAAAgAgCgCQAAACAFAFIAAgEIgBgCQgBgCgDgBg");
	this.shape_32.setTransform(9.7,11.2,1.458,1.253);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E7E8").s().p("AgDgCIAAgCQAKAAgEAKQgFgFgBgDg");
	this.shape_33.setTransform(9.6,11.2,1.458,1.253);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2A824").s().p("AgDAGIAAgBIgBgDIABgEQADgDAEAAIAAAAIABACQAAADgHAGgAgBgBIgBADIAAACQAFgEAAgDIAAgBQgDABgBACg");
	this.shape_34.setTransform(-9.6,11.1,1.458,1.253);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E7E8").s().p("AgDAAQAAgEAGgBQAEAEgKAGQgBgCABgDg");
	this.shape_35.setTransform(-9.5,11.1,1.458,1.253);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2A824").s().p("AgCAGQgCgDABgDQACgGADAAIAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIABACIgEACIAAADIgBABgAgCAAIAAABIABADIAAgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBIABAAIgBAAIgCgDIgCADg");
	this.shape_36.setTransform(1,12.2,1.458,1.253);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E7E8").s().p("AgBgCIADgDQgBAAAAABQAAAAAAABQAAAAAAABQABABAAAAQABABAAAAQABAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAABQAAAAgBABIAAACQgDgFADgDg");
	this.shape_37.setTransform(1,12.2,1.458,1.253);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2A824").s().p("AABAGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgDgCIABgCIACgCIgBgBIAAgBIABgBIABACQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQACADgEADIgBABgAgBAAIgBAAIABAAIADADIAAABIABgDIgBgBIgCgDIgBADg");
	this.shape_38.setTransform(-1,12.2,1.458,1.253);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E7E8").s().p("AgBABQgBAAAAAAQgBgBAAAAQAAAAAAAAQABAAAAgBQABAAAAgBQAAgBABAAQAAgBgBAAQAAgBAAAAQAIADgFAIQABgEgEgBg");
	this.shape_39.setTransform(-0.9,12.2,1.458,1.253);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2A824").s().p("AAAAGQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgGAEAAQAFAAAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBABgAgDAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIABACIACgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgFgEABQgDgBAAAFg");
	this.shape_40.setTransform(5.3,12.2,1.458,1.253);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E7E8").s().p("AgBADQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgFAEAAQAFAAgBAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_41.setTransform(5.3,12.2,1.458,1.253);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E2A824").s().p("AAAAGQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgFAEAAQAFAAAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAAgAgDAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABABIACgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgEgEgBQgDABAAAEg");
	this.shape_42.setTransform(-5.4,12.1,1.458,1.253);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6E7E8").s().p("AgBADQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQABgFADAAQAFAAgBAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_43.setTransform(-5.3,12.1,1.458,1.253);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E2A824").s().p("AgBANQgJgGAAgVIABAAIABAAQgBAUAJAGQAEADADgCQgJgHgBgQIAAgDIABgBIABABIABALQACALAIAEIABABIgBAAIgFABQgEAAgCgCg");
	this.shape_44.setTransform(1.7,-8.8,1.458,1.253);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E6E7E8").s().p("AAAANQgJgFAAgWIAIABIAAALQACALAJAFIgFABIgFgCg");
	this.shape_45.setTransform(1.7,-8.8,1.458,1.253);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E2A824").s().p("AgJAOIAAAAIAAgBQANgHgCgTIAAgBIABABIAAADQAAAQgKAHQAEABAEgCQAIgGAAgUIABAAIAAAAQABAVgKAGQgCACgEAAIgEgBg");
	this.shape_46.setTransform(-1.8,-8.8,1.458,1.253);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6E7E8").s().p("AACgNIAIAAQAAAVgKAGIgJAAQAOgHgDgUg");
	this.shape_47.setTransform(-1.7,-8.8,1.458,1.253);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E7E8").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAgAAAAAIAAABIABgBIgBAAg");
	this.shape_48.setTransform(-0.7,-15,1.458,1.253);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E2A824").s().p("AgDAGIAAgBIgGgEIgBAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQADgDAGABQAHAAADAEQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAQgGAAgBADIgEADgAgIgBIgBABIAAAAIAGAEQADAAACgCQABgCAFAAQgEgDgEAAIgDAAQgDAAgCACg");
	this.shape_49.setTransform(-0.2,-15.1,1.458,1.253);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6B45C").s().p("AgDAFIgGgEQgBgFAKAAQAHABADADQgEAAgDACQgCACgCABg");
	this.shape_50.setTransform(-0.2,-15.1,1.458,1.253);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E2A824").s().p("AAEAGQgFgLgHACIgBAAIAAgBQAGgDAEACQAGACADAFIAAAAIAAABIgBAAIgEABIAAABIAAAAIAAABIAAAAgAAEADQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgCgEgFgCIgFAAQAEABAEAGg");
	this.shape_51.setTransform(-2.9,-14.2,1.458,1.253);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E6B45C").s().p("AgIgDQAIgEAFAFIAEAEQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAAAAAIAAACQgFgMgIADg");
	this.shape_52.setTransform(-2.9,-14.2,1.458,1.253);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E2A824").s().p("AAAAiIAAAAQAAgDgCgCQgDgDgGACQgHAHgKgEIAAAAIAAgBIADgCIAGgIQAGgKAAgMIgBgLQgFgOgJACIAAAAIAAAAIAAgDQABgDACgCQAGgEAPANQAEAAABgDQAFgFAGADQAFADAAAKIgBABQgBASABAHQACAPALAFIAAABIAAAAQgJADgFgFQgDgDgEABQgFACgCAFgAgBAcIABAEQADgFAFgBQAEgBAEADQAEAEAHgCQgNgHAAgXIABgTQAAgGgEgDQgGgCgDAEIgEADIgCAAIAAAAQgPgLgFACQgDACAAAEQAKgCAFAOIABAMQAAANgGAKQgFAHgEADQAJACAFgHIAAAAIAFAAQADAAADACg");
	this.shape_53.setTransform(-0.1,-11.5,1.458,1.253);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6E7E8").s().p("AgMAbQgFAIgLgEIAKgLQAJgOgEgUQgFgOgKADIADgHQAFgEAQAMIACAAQACAAACgCQADgEAFABQAHACgBALQgCARABAIQADAQALAGQgJACgFgEQgEgEgEACQgFACgCAFQAAgJgMACg");
	this.shape_54.setTransform(-0.1,-11.4,1.458,1.253);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2A824").s().p("AgMAjIAAhGIABAAQAMAGALgCIAAAAIABABQgCAqgWAXIAAAAIgBAAgAgLAhQAVgXABgnQgKABgMgFg");
	this.shape_55.setTransform(3.5,-1,1.458,1.253);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E6B45C").s().p("AgLgiQAMAGALgCQgCAqgVAXg");
	this.shape_56.setTransform(3.5,-1,1.458,1.253);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2A824").s().p("AANAkQgXgWgCgsIAAgBIAAAAIAIAAQAIAAAJgEIAAAAIAAAAIAABGIAAABgAAMAiIAAhEQgMAHgLgCQADAoAUAXg");
	this.shape_57.setTransform(-3.7,-1,1.458,1.253);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E6B45C").s().p("AgMgeIAIAAQAIAAAJgEIAABFQgXgVgCgsg");
	this.shape_58.setTransform(-3.6,-1,1.458,1.253);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E2A824").s().p("AAAArQgIgDgJgMQgSgWgCglIAAgBIANAAQAOgCAKgJIAAAAQARAOAUgDIAAAAIABABQgCAmgSAVQgGAIgGAEIgGADIAAABIAAgBgAgQAbQAGAIAKAHQALgHAGgIQARgWACgjQgTACgRgNQgQANgTgCQACAkARAVg");
	this.shape_59.setTransform(-0.1,-0.9,1.458,1.253);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E7E8").s().p("AgQAdQgSgXgCglIAMAAQAOgCAKgJQASAOATgDQgCAlgRAXIgSAOQgIgEgIgKg");
	this.shape_60.setTransform(-0.1,-1,1.458,1.253);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E2A824").s().p("AAAAwQgJgFgKgMQgTgZgCgoIAAgBIAOAAQAPgCALgKIAAAAQATAPAVgDIABAAIAAABQgCAogTAZQgGAIgIAFIgGAEgAgSAeQAGAIAMAIQANgIAGgIQASgYADgnQgWACgSgOQgRAOgWgCQACAmATAZg");
	this.shape_61.setTransform(-0.1,-0.9,1.458,1.253);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6E7E8").s().p("AgSAfQgTgYgDgpIAOAAQAPgDALgJQAUAPAUgDQgBApgUAYIgTAQQgIgEgKgMg");
	this.shape_62.setTransform(-0.1,-1,1.458,1.253);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E2A824").s().p("AAFAgIgLgkIAAgBIAGgZIABgBIABABIAFA9IgBABgAAFAZIgEgzIgGAVIAKAeg");
	this.shape_63.setTransform(4.9,0.9,1.458,1.253);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E6B45C").s().p("AgFgFIAGgZIAFA9g");
	this.shape_64.setTransform(4.9,0.9,1.458,1.253);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E2A824").s().p("AAGAwIgIgJIgEhRIABAAIAHgGIAAAAIABABIAEBfgAAFAuIgEhcIgFAFIADBQIAGAHg");
	this.shape_65.setTransform(6.4,0.3,1.458,1.253);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6B45C").s().p("AgBAnIgEhRIAHgFIAEBfg");
	this.shape_66.setTransform(6.4,0.3,1.458,1.253);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2A824").s().p("AAGA6IgIgJIgEhlIAHgFIABAAIAAABIAFBxIAAABgAAGA4IgFhvIgGAEIAEBkIAHAHg");
	this.shape_67.setTransform(8.3,0.6,1.458,1.253);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E6B45C").s().p("AgBAxIgFhkIAHgFIAGBxg");
	this.shape_68.setTransform(8.2,0.6,1.458,1.253);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E2A824").s().p("AAHBHIgJgJIgFh7IAJgJIAAAAIABABIAFCMIAAAAIAAAAIgBAAgAAHBFIgGiJIgHAHIAFB6IAIAIg");
	this.shape_69.setTransform(10.1,0.6,1.458,1.253);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E6B45C").s().p("AgCA9IgFh6IAJgIIAGCLg");
	this.shape_70.setTransform(10.1,0.6,1.458,1.253);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E2A824").s().p("AAIBOIgJgJIgBAAIgGiTIABAAIAJAFIAAABIAHCWIgBABgAAIBMIgHiTIgIgFIAHCQIAIAIg");
	this.shape_71.setTransform(12.2,1.3,1.458,1.253);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6B45C").s().p("AgBBFIgGiSIAJAFIAGCWg");
	this.shape_72.setTransform(12.1,1.3,1.458,1.253);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E2A824").s().p("AgFAeIAEg8IAAAAIABAAIAGAaIAAAAIgKAjIgBAAgAgEAZIAJgdIgFgVg");
	this.shape_73.setTransform(-4.9,0.8,1.458,1.253);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6B45C").s().p("AgBgdIAHAZIgLAig");
	this.shape_74.setTransform(-4.9,0.8,1.458,1.253);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E2A824").s().p("AgGAwIAAAAIAFhgIABAAIAHAGIAAAAIgEBSIgIAIgAgFAuIAHgHIADhQIgFgFg");
	this.shape_75.setTransform(-6.5,0.3,1.458,1.253);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E6B45C").s().p("AgBgvIAHAFIgEBRIgHAJg");
	this.shape_76.setTransform(-6.5,0.3,1.458,1.253);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E2A824").s().p("AgGA5IAFhxIAAgBIABAAIAHAFIAAABIgEBlIgJAIgAgFA4IAGgHIAFhkIgGgEg");
	this.shape_77.setTransform(-8.3,0.6,1.458,1.253);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E6B45C").s().p("AAAg4IAHAFIgFBkIgIAIg");
	this.shape_78.setTransform(-8.3,0.6,1.458,1.253);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E2A824").s().p("AgHBHIgBAAIAHiMIAAgBIAKAJIgGB6IgJAKIgBAAIAAAAgAgGBFIAIgIIAFh6IgHgHg");
	this.shape_79.setTransform(-10.2,0.6,1.458,1.253);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6B45C").s().p("AgBhFIAJAIIgGB6IgJAJg");
	this.shape_80.setTransform(-10.2,0.6,1.458,1.253);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E2A824").s().p("AgIBOIAGiWIABgBIAJgFIAAAAIABABIgGCSIgKAJIAAABgAAAhHIgGCTIAHgIIAGiQg");
	this.shape_81.setTransform(-12.2,1.3,1.458,1.253);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E6B45C").s().p("AgBhIIAJgFIgGCSIgJAJg");
	this.shape_82.setTransform(-12.2,1.3,1.458,1.253);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E2A824").s().p("AgYAIIgBAAIgBgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAAAAAAAQABAAAAgBIACgBQAOAAAjgFIADAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAAAQABADgCABIgBABIAAABQgXAGgUAAIgIAAgAgZAAIgBAAIgBACIACADIABACQAaABAYgIIABAAIABgCIAAgBIgCgDIgCAAQgiAGgPAAg");
	this.shape_83.setTransform(5.2,11.3,1.458,1.253);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E7E8").s().p("AgYAHIgEgFQAAgDADAAQAUAAAdgGQADAAACAEQAAABgCADQgWAHgWAAIgHgBg");
	this.shape_84.setTransform(5.2,11.3,1.458,1.253);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E2A824").s().p("AgaACIAAgBIgBgBQgCgBABgDQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIADAAIAAAAQAjAFAOAAIACABQAAABABAAQAAAAAAAAQAAAAAAABQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgBACIgBAAIgIAAQgUAAgXgGgAgbgDIAAABIABACIABAAQAYAIAagBIABgCIACgDQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBAAQgPAAgigGIgCAAIgCADg");
	this.shape_85.setTransform(-5.2,11.3,1.458,1.253);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E6E7E8").s().p("AgaABIgCgEQABgEADAAQAeAGAUAAQADAAAAADQAAACgEADIgHABQgWAAgWgHg");
	this.shape_86.setTransform(-5.2,11.3,1.458,1.253);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E2A824").s().p("AgFACIAAgBIABAAIACABIADABQADgBAAgFIABgBIABABQgCAHgDAAIgBABQgCAAgDgDg");
	this.shape_87.setTransform(4.8,9.6,1.458,1.253);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E2A824").s().p("AgCACIgCgCIABgBIABABQAAAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQACgBACgDIABAAIAAABQgDAEgCAAIgCgBg");
	this.shape_88.setTransform(6.4,10.2,1.458,1.253);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2A824").s().p("AgDACIgBgCIAAAAIABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQACgBACgDIABAAIAAAAQgDAFgCAAIgDgBg");
	this.shape_89.setTransform(3.6,10.6,1.458,1.253);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E2A824").s().p("AgDABIgBgBIAAAAIABAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQACABACgEIABAAIAAABQgDAEgCAAIgDgCg");
	this.shape_90.setTransform(3.6,9.3,1.458,1.253);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E2A824").s().p("AgFAIIAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAEAEACgCQAFgCgEgQIAAgBIABAAQAFARgGAEIgCAAQgCAAgEgDg");
	this.shape_91.setTransform(5.1,7.5,1.458,1.253);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E2A824").s().p("AgDAEIgBgCQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAIABABQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAgBQADgBACgFIAAgBIABABQgCAHgDAAIgBABIgDgBg");
	this.shape_92.setTransform(4.1,7.2,1.458,1.253);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E2A824").s().p("AgDACIgBgCIAAgBIABABIADACQABgBADgDIAAAAIABABQgDAEgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_93.setTransform(2.9,6.8,1.458,1.253);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E2A824").s().p("AgFAIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAFAEACgBQAEgDgEgQIABgBIAAAAQAFARgFAEIgDAAQgCAAgEgDg");
	this.shape_94.setTransform(4.4,5.1,1.458,1.253);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E2A824").s().p("AgCAEIgDgCIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABQABABAAAAQABAAAAAAQAAABAAAAQAAAAABgBQADgBAAgFIABgBIABABQgCAHgDAAIgBABIgCgBg");
	this.shape_95.setTransform(3.4,4.8,1.458,1.253);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E2A824").s().p("AgDACIgBgCIAAAAIABAAIADACQABAAADgEIABAAIAAABQgCAEgDAAIgDgBg");
	this.shape_96.setTransform(2.2,4.4,1.458,1.253);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E2A824").s().p("AgFAIIAAgBIABAAQAEAEADgBQADgDgDgQIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAEAQgFAEIgCAAQgCAAgEgDg");
	this.shape_97.setTransform(3.7,2.7,1.458,1.253);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E2A824").s().p("AAAAEQgEgBgBgGIABgBIAAABQACAFACABQACABACgDIABAAIABABQgDADgDAAIAAgBg");
	this.shape_98.setTransform(-4.8,9.6,1.458,1.253);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E2A824").s().p("AgEgBIAAgBIABAAQADADAAABIAEgCIABgBIAAABQgCADgDAAQgBAAgDgEg");
	this.shape_99.setTransform(-6.4,10.2,1.458,1.253);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E2A824").s().p("AgEgBIAAgBIABAAQACAEABAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIACAAIAAAAQgCADgDAAQgCAAgCgEg");
	this.shape_100.setTransform(-3.6,10.6,1.458,1.253);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E2A824").s().p("AgEgBIAAgBIABAAQACAEABAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIACAAIAAAAQgCADgDAAQgCAAgCgEg");
	this.shape_101.setTransform(-3.6,9.2,1.458,1.253);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E2A824").s().p("AgCALQgGgEAFgRIABAAIAAABIgCAJQAAAIACABQACACAFgEQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAABQgEADgCAAIgCAAg");
	this.shape_102.setTransform(-5.2,7.5,1.458,1.253);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E2A824").s().p("AAAAEQgEAAgBgHIABgBIABABQAAAFADABQABABAEgDIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgCACIgEABIAAgBg");
	this.shape_103.setTransform(-4.1,7.2,1.458,1.253);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E2A824").s().p("AgEgBIABgBIABAAQABADABABIAEgCIABgBIAAABQgCADgDAAQgCAAgCgEg");
	this.shape_104.setTransform(-2.9,6.8,1.458,1.253);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E2A824").s().p("AgCALQgDgCAAgJIACgKIABAAIAAABQgEAQAFADQABABAFgEIABAAIAAABQgEADgCAAIgCAAg");
	this.shape_105.setTransform(-4.5,5.1,1.458,1.253);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E2A824").s().p("AAAAEQgEgBgBgGQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAABQACAFACABQACABACgDQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgCADgCAAIgBgBg");
	this.shape_106.setTransform(-3.4,4.8,1.458,1.253);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E2A824").s().p("AgEgBIAAgBIABAAQADAEAAAAIADgCIABAAIABAAQgCADgDAAQgCAAgCgEg");
	this.shape_107.setTransform(-2.2,4.4,1.458,1.253);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E2A824").s().p("AgCALQgEgCABgJQAAgFACgEQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIgCAKQAAAHACACQACACAFgFIABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgFADgBAAIgCAAg");
	this.shape_108.setTransform(-3.7,2.7,1.458,1.253);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E2A824").s().p("AAqAIQAAgIgGgEQgJgGgUAKQgVALgPgFQgGgCgFgEIgDgEIABgBIABAAIACAEQAEAEAGACQAPAEAUgKQAVgLAKAGQAHAFgBAJIgBABg");
	this.shape_109.setTransform(6.2,-8.8,1.458,1.253);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E2A824").s().p("AgqAIIAAgGQABgFAFgDQAJgGAVALQAVAKAOgEQAJgEAEgGIABAAIAAABQgEAGgJAEQgQAFgUgLQgVgKgJAGQgDACgBAFIgBAFIAAABg");
	this.shape_110.setTransform(-6.2,-8.8,1.458,1.253);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E2A824").s().p("AAAAUQgfACgVgFQgOgEgGgFIgBgDIAAgBIABgBQAAgCgEgCIgEgDIgBgBIABAAQAFgCAFgFQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQANgJA2AMQA3gMANAJQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAEADIAHAEIAAAAIAAABIgDADQgEACgBACIAAACIgBADQgFAFgPAEQgPAEgUAAIgRgBgAAyAQQARgEAEgFIABgCIAAgCQAAgEAHgDIgHgEIgDgDIAAgBIgCgDQgJgGg6AJQg2gLgMAIIgCADIAAABIgDADIgHAEQAIADgBAEIAAABIAAABIABACQAEAFARAEQAVAEAcgBQAeABAUgEg");
	this.shape_111.setTransform(0,13.7,1.458,1.253);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6E7E8").s().p("AAAATQgjACgVgGQgRgFABgGQACgEgKgFQAHgBAEgGQACgJAfADQARACATAEQATgEARgCQAggDACAJIADADQAEADADABIgEADQgEADAAADQACAGgRAFQgQAFgZAAIgQgBg");
	this.shape_112.setTransform(0,13.7,1.458,1.253);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E2A824").s().p("AAAApIgEgFIACglIgFAkIAAABIgFADIgBgBIgEgFIgBgBIAShIIAAAAIAAAAIATBKIgBABIgEAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgFgDIAAgBIgEglIACAmIgFAFgAAAgXIgDA6IADAFIAFgFIgEg+IAAgBIABABIgCgKIgQBFIAEAFIAEgCIAIg6IAAAAgAAKAjIADACIAEgDIgOg8g");
	this.shape_113.setTransform(-0.1,5.9,1.458,1.253);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E6B45C").s().p("AgDAkIADg7IgHA6IgGADIgEgFIARhJIASBKIgFAEIgEgDIgIg+IAEA/IgFAFg");
	this.shape_114.setTransform(-0.1,5.9,1.458,1.253);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E2A824").s().p("AgLAvIgNg9IAAgBIAXgfIAAgBIABABIAZBXIAAABIAAAAIgjAGgAgXgOIAOA8IAhgFIgZhVg");
	this.shape_115.setTransform(4.4,6,1.458,1.253);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6E7E8").s().p("AgXgPIAWgfIAZBYIgiAFg");
	this.shape_116.setTransform(4.4,6,1.458,1.253);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E2A824").s().p("AgWApIgBAAIAAgBIAXhVIAAgBIABAAIAXAdIAAABIgNA+IgBABgAgVAoIAeAFIAOg9IgWgcg");
	this.shape_117.setTransform(-4.5,6.2,1.458,1.253);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E6E7E8").s().p("AgXApIAXhWIAYAcIgOA/g");
	this.shape_118.setTransform(-4.4,6.2,1.458,1.253);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("ApJCXQgZAAgRgSQgRgSAAgZIAAjwIUJAAIAADwQABAZgSASQgSASgZAAg");
	this.shape_119.setTransform(0,37.7,1.458,1.253);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E6E7E8").s().p("AqECXIAAktIUJAAIAAEtg");
	this.shape_120.setTransform(0,0,1.458,1.253);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EC1C24").s().p("AqECWIAAjwQAAgZARgRQARgRAZAAISSAAQAZAAASARQASASgBAYIAADwg");
	this.shape_121.setTransform(0,-37.7,1.458,1.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.egy, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.chi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDE00").s().p("AAABMIhcBDIAkhtIhdhCIBzAAIAihuIAkBuIByAAIhcBCIAjBtg");
	this.shape.setTransform(-61.4,-19.4,1.462,1.257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDE00").s().p("AAAAcIghAYIANgoIgigXIAqAAIAMgoIANAoIAqAAIgiAXIANAog");
	this.shape_1.setTransform(-13.8,-30.4,1.462,1.257);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDE00").s().p("AAAAcIghAYIANgnIgigYIAqAAIAMgoIANAoIAqAAIgiAYIANAng");
	this.shape_2.setTransform(-13.8,-14.2,1.462,1.257);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDE00").s().p("AAAAcIghAYIANgnIgigYIAqAAIAMgoIANAoIAqAAIgiAYIANAng");
	this.shape_3.setTransform(-30.8,-5.7,1.462,1.257);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDE00").s().p("AAAAcIghAYIANgoIgigYIAqAAIAMgnIANAnIAqAAIgiAYIANAog");
	this.shape_4.setTransform(-30.8,-37.3,1.462,1.257);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA2128").s().p("ApHHCQgZAAgRgRQgRgSAAgZIAAsLQAAgZARgSQARgRAZAAISOAAQAaAAARARQARASABAZIAAMLQgBAZgRASQgRARgaAAg");
	this.shape_5.setTransform(0,0,1.462,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chi, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.can = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1C24").s().p("AgQEEIAIiAIiAAcQAWgOgDgbQgEg0h4g9QARACAJgKQATgXgihAIAtAJQAtABAAgoIATAbQAUAcAOAKQAqAdgzisIAyAcIAuhdIAuBdIAzgbQg0CsArgeQANgKAVgcIATgbQAAAoAtgBQAXgBAWgIQgiBAATAXQAJAKARgCQh4A9gFA0QgCAbAVAOIiAgcIAJCAIgRADg");
	this.shape.setTransform(-1.9,1,1.462,1.257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE6EF").s().p("AgUELIAIh+Ih7AaIgDgIQAFgEAFgFQAIgMgBgOQgCgyh4g9IACgIQARABAHgKQAOgVgfg7IgGgLIAMAEIAbAIQAeAEAPgKQALgIAAgTIAAgQIAJAOQATAdARATQATAVAFgDQAFgDgCgUQgDgkgYhRIgDgLIA4AfIAvhhIAwBhIA4gfIgDALQgYBRgEAkQgBAUAFADQAFADASgVQASgTATgdIAIgOIAAAQQAAATAMAIQAOAKAfgEQAPgDANgFIALgEIgGALQggA6APAWQAHAKAQgBIACAIQh2A8gDAzQgCAWATANIgEAIIh6gaIAJB+IgWADg");
	this.shape_1.setTransform(-1.9,0.7,1.462,1.257);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC1C24").s().p("AijHCIAAuDIELAAQAZAAASARQARASAAAZIAAMLQAAAZgRASQgSARgZAAg");
	this.shape_2.setTransform(70.1,0,1.462,1.257);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC1C24").s().p("AhnHCQgZAAgSgRQgRgSAAgZIAAsLQAAgZARgSQASgRAZAAIELAAIAAODg");
	this.shape_3.setTransform(-70.1,0,1.462,1.257);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E7E8").s().p("ApHHCQgZAAgRgRQgSgSAAgZIAAsLQAAgZASgSQASgRAYAAISPAAQAZAAARARQASASAAAZIAAMLQAAAZgSASQgRARgZAAg");
	this.shape_4.setTransform(0,0,1.462,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.can, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.br = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEIgEADIACgFIgFgDIAGAAIABgFIACAFIAGAAIgFADIACAFg");
	this.shape.setTransform(-0.2,17.1,1.456,1.251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAGIgGAFIADgJIgJgEIAKAAIACgJIADAJIAKAAIgIAEIADAKg");
	this.shape_1.setTransform(27.1,4.1,1.456,1.251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAADIgDAEIABgGIgEgBIAFAAIABgGIACAGIAFgBIgEACIACAGg");
	this.shape_2.setTransform(22.3,3.9,1.456,1.251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAADIgCADIABgFIgEgCIAFAAIAAgEIABAFIAFAAIgEABIACAFg");
	this.shape_3.setTransform(24.1,7.6,1.456,1.251);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAEIgEAEIACgGIgFgDIAGAAIABgGIACAGIAGAAIgFADIACAGg");
	this.shape_4.setTransform(22.7,9.9,1.456,1.251);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAGIgGAFIADgIIgIgFIAJAAIACgIIADAIIAJAAIgHAFIADAIg");
	this.shape_5.setTransform(19,10.7,1.456,1.251);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAEIgDADIABgFIgEgDIAFAAIABgFIABAFIAGAAIgEADIACAFg");
	this.shape_6.setTransform(15.8,16.3,1.456,1.251);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAFIgEADIACgGIgGgDIAHAAIABgGIACAGIAHAAIgFADIACAGg");
	this.shape_7.setTransform(15.8,13.6,1.456,1.251);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAGIgGAEIADgIIgHgDIAJAAIABgIIADAIIAHAAIgFADIACAIg");
	this.shape_8.setTransform(15.7,9.4,1.456,1.251);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAEIgFAFIACgHIgFgEIAHAAIABgGIACAGIAHAAIgFAEIACAHg");
	this.shape_9.setTransform(11.8,11.3,1.456,1.251);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAGIgGAEIACgIIgGgDIAIAAIACgIIADAIIAIAAIgHADIADAIg");
	this.shape_10.setTransform(9.1,14.6,1.456,1.251);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAHIgIAHIAEgLIgJgFIALAAIACgLIAEALIALAAIgJAFIADALg");
	this.shape_11.setTransform(6.5,10.5,1.456,1.251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAFIgGAFIADgHIgGgFIAIABIABgIIACAHIAIAAIgGAFIACAHg");
	this.shape_12.setTransform(2.9,2.3,1.456,1.251);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAEIgFAEIADgGIgGgDIAHAAIABgGIACAGIAHAAIgGADIACAGg");
	this.shape_13.setTransform(7.1,-7,1.456,1.251);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABAFIgGAEIACgHIgGgDIAIAAIACgHIACAHIAHAAIgGADIACAHg");
	this.shape_14.setTransform(-0.2,-0.5,1.456,1.251);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAEIgEAEIACgGIgFgCIAGAAIABgHIACAHIAGAAIgFACIACAGg");
	this.shape_15.setTransform(-4.8,2.2,1.456,1.251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAADIgCABIABgDIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_16.setTransform(-2.2,3.8,1.456,1.251);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAHIgHAGIACgKIgIgFIAKAAIADgKIADAKIAKAAIgIAFIAEAKg");
	this.shape_17.setTransform(-0.6,7.7,1.456,1.251);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAGIgHAGIADgJIgHgFIAJAAIACgJIACAJIAKAAIgIAFIAEAJg");
	this.shape_18.setTransform(-14.2,10.3,1.456,1.251);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAEIgEAEIABgGIgEgDIAGAAIABgGIACAGIAGAAIgEADIABAGg");
	this.shape_19.setTransform(-18.6,7.5,1.456,1.251);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAAEIgFAFIADgHIgGgDIAHAAIABgHIACAHIAHAAIgGADIADAHg");
	this.shape_20.setTransform(-18,4.2,1.456,1.251);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCABIgEgCIAFAAIABgFIACAFIAFAAIgEACIABAFIgEgDIgEAEg");
	this.shape_21.setTransform(-27.7,4.2,1.456,1.251);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAHIgHAGIACgKIgIgFIAKAAIADgKIADAKIALAAIgJAFIAEAKg");
	this.shape_22.setTransform(-24.3,1.7,1.456,1.251);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAFIgFAFIACgIIgGgDIAIAAIABgIIACAIIAIAAIgGADIACAIg");
	this.shape_23.setTransform(-21.6,-0.1,1.456,1.251);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAAGIgHAFIADgJIgGgDIAIAAIACgJIACAJIAJgBIgHAEIADAJg");
	this.shape_24.setTransform(-27.3,-10,1.456,1.251);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAEIgEAEIACgGIgFgDIAGAAIABgGIACAGIAGAAIgFADIACAGg");
	this.shape_25.setTransform(-13.5,-3.9,1.456,1.251);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAHIgHAFIADgJIgIgFIAKAAIACgJIADAJIAKAAIgIAFIADAJg");
	this.shape_26.setTransform(8.7,-16.5,1.456,1.251);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A460").s().p("AgEAIQgIgEAGgIQAFgIAHAFQAEADAAAEQAAACgCADQgDAFgFAAQgBAAgDgCgAgEgCQgEAFAFAEQAEADAFgGQAEgGgGgDIgEgCQgCAAgCAFg");
	this.shape_27.setTransform(24.6,4.1,1.456,1.251);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A460").s().p("AgEAJQgDgDgBgCIABgEIACAAQgBAEAEADQADABABgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIgCgCQgDgDACgDQACgFAFADQAGAEgDAEIgCAAQACgDgEgDQgEgBAAACQgBABAAAAQAAAAABABQAAAAAAABQAAAAAAAAIAEADQADAEgDACQgBADgDAAIgEgBg");
	this.shape_28.setTransform(22.2,2.8,1.456,1.251);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A460").s().p("AgEAIQgCgBgCgDIABgEIACAAQgCAEAEACQADADACgDQABgDgDgCIgCgBQgCgEABgCQADgFAFADQAFADgCAFIgCAAQABgEgDgCQgEgCgBADQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIADADQADADgCADQgBADgDAAIgEgCg");
	this.shape_29.setTransform(20.1,1.7,1.456,1.251);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A460").s().p("AgKAFIAJgPIAMAGIgCACIgJgFIgCAFIAHAEIAAACIgIgEIgDAFIAJAEIgBACg");
	this.shape_30.setTransform(18,0.7,1.456,1.251);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A460").s().p("AAEAMIgDgBIACgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgEAGIgCgBIAJgQIAGAEQAFADgBAEQgCACgDAAIABAEIgCADIAAADgAgCgCIAEACQADACACgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgDg");
	this.shape_31.setTransform(15.5,-0.4,1.456,1.251);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A460").s().p("AACAKIAAgCQgCABgDgBQgEgCAAgDQgCgDACgEQAEgIAHADQAHADgCAGIgCgBQAAgEgEgCQgFgCgCAGQgEAGAGADIADAAQACAAACgDIgFgDIAAgBIAIADIgFAJg");
	this.shape_32.setTransform(13,-1.3,1.456,1.251);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A460").s().p("AgDAJQgEgCgBgEQgBgDACgDQAEgJAHAEQAEABABAFQABACgCADQgCAHgFAAIgEgBgAgFgCQgDAGAGADQAFACADgHQADgGgGgCIgDgBQgDAAgCAFg");
	this.shape_33.setTransform(10.3,-2.4,1.456,1.251);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A460").s().p("AACALIABgFQABgBAAAAQAAgBgBgBQAAAAAAAAQgBgBgBAAIgEgCIgDAHIgDgBIAHgRIAHAEQAGACgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgBADIAAACIAAABgAgDgCIAFACQAEABABgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEgCg");
	this.shape_34.setTransform(7.6,-3.3,1.456,1.251);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A460").s().p("AgIAIIAGgQIAHACQAFACgCAEQgCAFgFgCIgEgCIgDAIgAgDAAIAEABQABABABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBgBAAIgDgCg");
	this.shape_35.setTransform(5.2,-4.3,1.456,1.251);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A460").s().p("AgHAIIADgSIANADIgBADIgKgDIgBAGIAJABIgBACIgJgCIgBAGIAKACIgBADg");
	this.shape_36.setTransform(-3.4,-6.2,1.456,1.251);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A460").s().p("AAGAKIABgPIgGAOIgCAAIgDgPIgBAAIgBAOIgDAAIACgRIAEAAIADAPIAGgOIAEABIgCARg");
	this.shape_37.setTransform(-13.7,-7.7,1.456,1.251);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A460").s().p("AgGAJIABgSIAMABIAAADIgKgBIAAAGIAJAAIAAABIgJAAIgBAGIAKABIAAACg");
	this.shape_38.setTransform(-16.4,-8,1.456,1.251);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A460").s().p("AAAAJIgHAAIABgRIAGAAQAIABAAAHQgBAJgHAAIAAAAgAgEAHIAEAAQAFAAAAgHQAAgFgFgBIgEAAg");
	this.shape_39.setTransform(-19,-8.1,1.456,1.251);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00A460").s().p("AAFAKIgBgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgFAAIAAAJIgDAAIAAgSIAIAAQAGABAAAEQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIABAEIAAACIABABgAgEAAIAEAAQAEAAAAgDQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgFAAg");
	this.shape_40.setTransform(-21.7,-8.1,1.456,1.251);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A460").s().p("AgIABQAAgJAIgBQAJAAAAAJQAAAKgJAAIAAAAQgIAAAAgJgAAAgGQgHAAABAGQABAIAFAAQAHgBAAgHQgBgGgGAAIAAAAg");
	this.shape_41.setTransform(-24.7,-8.1,1.456,1.251);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhMgnQhNgKg/AKQAHgZALgSQA+gGA/AJQCbATCHBlQgCAWgHAWQiBhmibgWg");
	this.shape_42.setTransform(0,0,1.456,1.251);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#005E9E").s().p("AAADeQhbAAhAhBQhBhBAAhcQAAhbBBhAQBBhCBaAAQBcAABBBCQBABAABBbQgBBchABCQhBBAhbAAIgBAAg");
	this.shape_43.setTransform(0,0,1.456,1.251);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9D10B").s().p("AoTAAIITlKIIUFKIoUFLg");
	this.shape_44.setTransform(0,0,1.456,1.251);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AA5B").s().p("ApKHEQgYAAgSgRQgSgSAAgYIAAsQQAAgZASgSQARgRAZAAISUAAQAZAAASARQARASABAZIAAMQQgBAYgRASQgSARgZAAg");
	this.shape_45.setTransform(0,0,1.456,1.251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.br, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.aus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA2128").s().p("AglDLIAAidIkHAAIAAhLIEHAAIAAitIBLAAIAACtIEHAAIAABLIkHAAIAACdg");
	this.shape.setTransform(-50,-31.1,1.462,1.257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA2128").s().p("Ah5BGIDziLIAAAdIjBBug");
	this.shape_1.setTransform(-23.8,-45.3,1.462,1.257);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA2128").s().p("Ahrg+IAvAAICoBhIAAAcg");
	this.shape_2.setTransform(-21.7,-15.7,1.462,1.257);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA2128").s().p("Ah8BGIAAgXIDHh0IAzAAIjvCLg");
	this.shape_3.setTransform(-75.7,-14.3,1.462,1.257);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA2128").s().p("AA7A/IinhgIAAgEQAAgNAGgMIDTB9g");
	this.shape_4.setTransform(-78.1,-44.7,1.462,1.257);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("AESDLIjgh9IAAB9IhkAAIAAh5IjSB5IgoAAIAAg0ICdhdIidAAIAAhkICHAAIiHhLIAAgZQAAgeAYgSIDiCDIAAiPIBkAAIAACVID8iTIgBBQIiHBOICHAAIAABkIiSAAICSBVIAAA8g");
	this.shape_5.setTransform(-50,-31.1,1.462,1.257);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BBBDBF","#BCBEC0","#D3D5D6","#E1E2E3","#E6E7E8"],[0,0.02,0.373,0.71,1],0,-3.4,0,3.4).s().p("AgFAjIAAhFIALAAIAABFg");
	this.shape_6.setTransform(-43.6,-52.2,1.462,1.257);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BBBDBF","#BCBEC0","#D3D5D6","#E1E2E3","#E6E7E8"],[0,0.02,0.373,0.71,1],0,-3.4,0,3.4).s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_7.setTransform(-56.5,-52.2,1.462,1.257);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E8").s().p("AAAAcIgVAUIACgeIgdgEIAZgQIgQgaIAdAJIAKgcIALAcIAdgJIgPAaIAZAQIgeAEIACAeg");
	this.shape_8.setTransform(23.7,-6.3,1.462,1.257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E7E8").s().p("AAAAcIgVAUIACgeIgegEIAZgQIgPgaIAdAJIAKgcIALAcIAdgJIgQAaIAaAQIgeAEIACAeg");
	this.shape_9.setTransform(50.8,34.2,1.462,1.257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6E7E8").s().p("AAAATIgOANIABgUIgTgCIAQgLIgKgRIATAFIAHgTIAHATIAUgFIgKARIAQALIgUACIACAUg");
	this.shape_10.setTransform(60.6,5.3,1.462,1.257);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E8").s().p("AAAAbIgUAUIACgdIgdgEIAYgQIgPgaIAcAJIAKgbIALAbIAcgJIgPAaIAYAQIgcAEIACAdg");
	this.shape_11.setTransform(51.2,-34.4,1.462,1.257);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E7E8").s().p("AAAAcIgVAUIACgdIgdgFIAZgQIgQgaIAdAJIAKgcIALAcIAcgJIgPAaIAZAQIgdAFIACAdg");
	this.shape_12.setTransform(74,-11,1.462,1.257);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066B2").s().p("ApGHCQgZAAgSgRQgRgSAAgZIAAsLQAAgZARgSQASgRAZAAISOAAQAZAAARARQASASAAAZIAAMLQAAAZgSASQgRARgZAAg");
	this.shape_13.setTransform(0,0,1.462,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aus, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.arg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9AA65").s().p("AABACQgFgCgDAAIgDAAIgFADIgBAAIACgDQAEgFAKABQAIAAADAEQACAEACgBQADgBgCADIgDAAQgEAAgIgDg");
	this.shape.setTransform(3.8,-1.4,1.458,1.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9AA65").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(3,-1,1.458,1.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9AA65").s().p("AgKABIgBgCQAFAGASgGQgLADgFAAQgEAAgCgBg");
	this.shape_2.setTransform(3.7,-0.5,1.458,1.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9AA65").s().p("AAAABQgPACAAgIIAEAFQAGADAFgDQAIgHAIANQgJgGgHABg");
	this.shape_3.setTransform(3.6,-2.7,1.458,1.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9AA65").s().p("AgPAFQAAAAgBgBQAAAAAAAAQAAAAABAAQAAgBABAAQACABADgEQACgEAIAAQAKgBAEAFIACADIgBAAIgFgDQgDgBgIADQgIADgEAAIgDAAg");
	this.shape_4.setTransform(-3.5,-1.4,1.458,1.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9AA65").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_5.setTransform(-2.7,-1,1.458,1.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9AA65").s().p("AgLAAQAWAIABgLQABADgDACQgCACgEAAQgFAAgKgEg");
	this.shape_6.setTransform(-3.4,-0.7,1.458,1.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9AA65").s().p("AgJAAQAFgEAFAEQAJAEAGgJQAAAIgPgCQgEAAgGACIgGADg");
	this.shape_7.setTransform(-3.3,-2.7,1.458,1.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9AA65").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_8.setTransform(-0.4,2.6,1.458,1.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9AA65").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_9.setTransform(0.5,2.6,1.458,1.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9AA65").s().p("AgFABQAFgJAEAFQADACABADQgFgGgHAGIgDAEg");
	this.shape_10.setTransform(-0.1,2,1.458,1.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9AA65").s().p("AgUgDIAMADQAOACAPgFQgBACgDABQgGAEgMgBIgFABQgJAAgFgHg");
	this.shape_11.setTransform(0.2,3.6,1.458,1.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9AA65").s().p("AgKgBIAVAAQgEADgGAAQgFAAgGgDg");
	this.shape_12.setTransform(0,4.7,1.458,1.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF57E").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape_13.setTransform(0.2,-0.1,1.458,1.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9AA65").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(0.2,-0.1,1.458,1.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDBD1F").s().p("AAIAQIhDgnIABgCIBLAVIArAcIAAACgAA3AXIgngZIhDgTIA8AjIAuAJg");
	this.shape_15.setTransform(-8.5,-3.2,1.458,1.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF57E").s().p("AAJAPIhEgnIBMAVIArAcg");
	this.shape_16.setTransform(-8.5,-3.2,1.458,1.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDBD1F").s().p("AgQAFIgsgcIABgCIA0AKIBDAnIgBACgAA1AWIg9gjIgugJIAnAZIBEATg");
	this.shape_17.setTransform(9,3,1.458,1.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF57E").s().p("AgPAEIgsgcIAzAKIBEAng");
	this.shape_18.setTransform(9,3,1.458,1.253);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDBD1F").s().p("AgZA8IAVhMIAAgBIAcgrIACABIgKAzIgnBFgAgCgPIgTBEIAjg9IAJgug");
	this.shape_19.setTransform(-3.4,7.4,1.458,1.253);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF57E").s().p("AgDgQIAcgrIgKAzIgnBEg");
	this.shape_20.setTransform(-3.4,7.4,1.458,1.253);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDBD1F").s().p("AgZA8IAKgzIAnhEIACABIgVBMIgcAqgAgNAKIgJAtIAZgnIAThDg");
	this.shape_21.setTransform(3.8,-7.6,1.458,1.253);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF57E").s().p("AgOAJIAnhEIgVBMIgcArg");
	this.shape_22.setTransform(3.8,-7.6,1.458,1.253);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDBD1F").s().p("Ag7AYIBDgnIA0gKIAAACIgrAcIhLAVgAAJgNIg8AjIBDgTIAngZg");
	this.shape_23.setTransform(-8.5,3,1.458,1.253);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF57E").s().p("AAJgOIAzgKIgrAcIhMAVg");
	this.shape_24.setTransform(-8.5,3,1.458,1.253);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDBD1F").s().p("Ag8AYIAsgcIBLgVIABACIhDAnIg0AKgAgPgCIgnAZIAugJIA9gjg");
	this.shape_25.setTransform(9,-3.2,1.458,1.253);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF57E").s().p("AgPgDIBLgVIhEAnIgzAKg");
	this.shape_26.setTransform(9,-3.2,1.458,1.253);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDBD1F").s().p("AgPgIIgKgzIACgBIAcAsIAVBMIgCABgAAWA1IgThEIgZgnIAJAuIAjA9g");
	this.shape_27.setTransform(3.8,7.4,1.458,1.253);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFF57E").s().p("AgOgIIgKgzIAcArIAVBMg");
	this.shape_28.setTransform(3.8,7.4,1.458,1.253);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDBD1F").s().p("AgEASIgVhMIACgBIAnBEIAKAzIgCAAgAAXA3IgJgtIgjg9IATBDIAZAng");
	this.shape_29.setTransform(-3.4,-7.6,1.458,1.253);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFF57E").s().p("AgDARIgVhMIAnBEIAKAzg");
	this.shape_30.setTransform(-3.4,-7.6,1.458,1.253);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDBD1F").s().p("AACASIgwg+IACgCIA+AwIAdArIgCACgAAqAqIgagnIg3gqIAqA3IAnAag");
	this.shape_31.setTransform(-6.4,-5.8,1.458,1.253);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFF57E").s().p("AACARIgvg+IA+AvIAdAsg");
	this.shape_32.setTransform(-6.4,-5.8,1.458,1.253);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDBD1F").s().p("AgRgBIgdgrIACgCIArAdIAwA+IgCACgAAoAoIgqg3IgngaIAaAnIA3Aqg");
	this.shape_33.setTransform(6.9,5.7,1.458,1.253);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFF57E").s().p("AgQgCIgdgrIAsAdIAvA+g");
	this.shape_34.setTransform(6.9,5.7,1.458,1.253);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDBD1F").s().p("AguAtIAwg+IArgdIACACIgdArIg+AwgAADgPIgqA3IA3gqIAagng");
	this.shape_35.setTransform(-6.4,5.7,1.458,1.253);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF57E").s().p("AACgQIAsgdIgdArIg+Awg");
	this.shape_36.setTransform(-6.4,5.7,1.458,1.253);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDBD1F").s().p("AguAtIAdgrIA+gwIACACIgwA+IgrAdgAgPADIgaAnIAngaIAqg3g");
	this.shape_37.setTransform(6.9,-5.8,1.458,1.253);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFF57E").s().p("AgQACIA+gvIgvA+IgsAdg");
	this.shape_38.setTransform(6.9,-5.8,1.458,1.253);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDBD1F").s().p("AhAABIAAgBIBOgLIAzALIAAABIgzALgAg3AAIBFAJIAtgJIgtgIg");
	this.shape_39.setTransform(-9.2,-0.1,1.458,1.253);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFF57E").s().p("AhAAAIBOgKIAzAKIgzAKg");
	this.shape_40.setTransform(-9.2,-0.1,1.458,1.253);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDBD1F").s().p("AhAABIAAgBIAzgLIBOALIAAABIhOALgAg6AAIAtAJIBGgJIhGgIg");
	this.shape_41.setTransform(9.7,-0.1,1.458,1.253);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFF57E").s().p("AhAAAIAzgKIBOAKIhOAKg");
	this.shape_42.setTransform(9.7,-0.1,1.458,1.253);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDBD1F").s().p("AAABBIgKhOIAKgzIABAAIAKAzIgKBOgAgIgNIAIBGIAJhGQgBAAgIgtg");
	this.shape_43.setTransform(0.2,8.1,1.458,1.253);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFF57E").s().p("AgJgNIAJgzIAKAzIgKBOg");
	this.shape_44.setTransform(0.2,8.1,1.458,1.253);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDBD1F").s().p("AAABBIgKgzIAKhOIABAAIAKBOIgKAzgAgIAOIAIAtIAJgtIgJhGg");
	this.shape_45.setTransform(0.2,-8.2,1.458,1.253);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFF57E").s().p("AgJAOIAJhOIAKBOIgKAzg");
	this.shape_46.setTransform(0.2,-8.2,1.458,1.253);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDBD1F").s().p("AA1AlIgwgTIgOgDQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgGgQIgBgBIgJgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBIgCgHIgBgBIgFAAIgCgDIgCgEIgBAAIgEABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgFIgCgCIgBgBIABgCIACAAQAAAAAAAAQABgBAAABQABAAAAAAQAAAAAAABIADAFIABABIAEgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABADIABABIAGABIACACIAEAEIACABIAKABIADACIAGAIIABABIASAFIADABIAkAiIAAACIgBAAIgBAAgAgogZIABAEIABABIAFAAIACACIADAHIACABIAIADQABAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIAGARIABABIANADIAtASIghgfIgBgBIgSgFQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgGgIIgCgBIgLgBIgDgCIgDgEIgCgBIgFgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgDIAAAAIgEABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgCgFIgBAAIACACIABAFIAAABIAFgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABg");
	this.shape_47.setTransform(-7.7,-4.7,1.458,1.253);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFF57E").s().p("AA1AkIgwgTIgNgDIgCgCIgGgQIgCgCIgJgDIgCgBIgDgHIgCgCIgEAAIgCgCIgCgEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEABIgCgCIgCgFIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAQABAAAAgBQABAAAAAAQAAAAAAABQAAAAAAAAIADAGIACABIAEgBQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAABIABADIACABIAFABIADABIADAEIACACIALABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAGAIIACABIASAFIACABIAjAiIABABIgBgBg");
	this.shape_48.setTransform(-7.7,-4.7,1.458,1.253);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDBD1F").s().p("AAxAkIgDgFIAAgBIgEACQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgBgDIgCgBIgFgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgDgEIgCgBIgLgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgFgIIgCgBIgSgGIgCAAIgjgiIgBgCQAAAAAAAAQABAAAAAAQAAgBAAABQAAAAABAAIAwATIANADIADADIAGAQIABABIAJADQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIADAHIABABIAFABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIACAEIABAAIAEgBQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABAGIACABIABABIgBACIgBAAIgCAAIgCgBgAAwAeIADAFIABAAIgCgCIgBgFIgBAAIgEAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgDIgBgBIgEgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgDgHIgBgBIgJgDQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgGgRIgBgBIgOgDIgsgSIAgAfIACABIASAFIACACIAGAIIABABIAMABIADACIADAEIABABIAGABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABADIAAAAIAEgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABg");
	this.shape_49.setTransform(8.2,4.5,1.458,1.253);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFF57E").s().p("AAyAkIgDgGIgCgBIgDABIgCAAIgBgDIgCgCIgGgBQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgDgEIgCgCIgMgBIgCgBIgFgJIgDgBIgRgFIgDgBIgjgiQAAAAABAAIAwATIANADIACACIAGAQIABACIAJADIACABIADAHIACACIAFABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAEIACABIAEAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABAFIACACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBAAIAAAAIgCAAg");
	this.shape_50.setTransform(8.2,4.5,1.458,1.253);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDBD1F").s().p("AgkA2IAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAFgDIABgBIgBgEQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIADgBIABgBIABgFIACgDIAEgDIABgCIABgLIACgDIAIgGIABgBIAFgSIABgDIAigjQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIgTAxIgDANIgDACIgQAGIgBABIgDAJQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgHADIgBABIAAAEQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgEACIAAAAIABAEQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgFACIgCABIgBABIgCgBgAADgQIgBACIgFARIgCADIgIAGIgBABIgBALIgCADIgEADIgBACIgBAFIgCADIgDABIAAABIABAEIAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgFADIAAABIACgCIAFgCIABAAIgBgEIAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAEgCIAAgBIABgFIACgCIAHgDIABgBIADgJIACgDIARgGIABgBIADgNIASgtg");
	this.shape_51.setTransform(-5.1,6.7,1.458,1.253);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFF57E").s().p("AgjA2IAAgBIAAgCIAGgDIABgCIgBgEIAAgCIADgBQABAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIABgFIABgCIAEgEIACgCIABgLIACgCIAIgGIABgCIAFgSIABgCIAigjQABgCgBACIgTAwIgDAOIgCABIgQAGIgCACIgDAJIgBACIgHADIgCACIAAAEIgCACIgEACQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIABADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAIgFACIgCACIAAAAIgBAAg");
	this.shape_52.setTransform(-5.1,6.7,1.458,1.253);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FDBD1F").s().p("AgkA1IATgwIADgNIADgDIAQgGIABgBIADgIQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAHgDIABAAIAAgFIADgDIAEgBIAAgBIgBgEQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAGgBIABgCIABgBIACABIAAACQAAAAAAAAQABABgBAAQAAABAAAAQAAAAgBAAIgFAEIgBABIABADQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgBABIgBAFIgCADIgEADIgBABIgBALIgCAEIgIAFIgBABIgGATIAAACIgiAkIgCAAIAAgCgAAhgyIgFACIAAAAIAAAFIAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABIAAABIgBAFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgHAEIgBABIgDAJQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgRAGIgBABIgDANIgSAtIAfggIABgCIAFgSIACgDIAIgFIABgCIABgLIACgDIAEgDIABgCIABgFQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIADgBIAAgBIgBgDIAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIAFgCIAAgBg");
	this.shape_53.setTransform(5.6,-6.9,1.458,1.253);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFF57E").s().p("AgjA2IATgxIADgNIACgCIAQgGIACgBIADgJIABgCIAHgDQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAIABgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEgCIABgCIgBgEIACgCIAFgBIACgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgGADIgBACIABADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgDACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgBAGIgBACIgEADIgCADIgBALIgBACIgJAGIgBACIgFARIgBADIgiAjIAAAAIAAAAg");
	this.shape_54.setTransform(5.6,-6.9,1.458,1.253);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDBD1F").s().p("AAAAPIgQgIIgBAAIgIAEIgDABIgHgDIgCAAIgEADIgDAAIgEgCIgBABIgDADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBAAIAAgCIAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGACIABAAIABgEQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADACIABgBIAEgDIAEgBIAFABIACAAIAJgGIADgBIAKACIABgBIARgJIADgBIAxgBIABABIgBACIgtASIgCACIgNAHIgCABIgBgBgAgPAFIAPAIIACAAIAQgJIAogRIgsABIgCABIgRAJQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgJgCIgCAAIgJAGIgDABIgFAAIgCAAIgFADQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgDgBIgBAAIgCAEQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgHgCIAAABIgBAAIADAAIAFADIABAAIACgEQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADACIACAAIAEgDIADAAIAHADIACAAIAIgFIACAAIABAAg");
	this.shape_55.setTransform(-9.1,1.8,1.458,1.253);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFF57E").s().p("AABAOIgQgIIgCAAIgIAFIgDAAIgHgDIgCAAIgEADIgDABIgEgDIgCABIgCAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFgCQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIACgBIAGADIACgCIACgDIACAAIADAAQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAEgCIADgBIAFABIADgBIAJgGIACgBIAKACIACgBIARgJIACAAIAxgBQABgBgBABIgtATIgPAIg");
	this.shape_56.setTransform(-9.1,1.7,1.458,1.253);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDBD1F").s().p("Ag/APIABgCIAtgTIAPgIQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAQAIIACAAIAIgEIADgBIAHADIACAAIAEgDQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAIAEABIABAAIACgDQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIAFACIADAAIAAACIAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAgBIgGgBIgBAAIgCAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgDgBIgBAAIgFADIgDAAIgFAAIgCAAIgJAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgKgCIgCABIgQAJIgDABIgxABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAgAgRgDIgpARIAtgBIACgBIAQgKIADAAIAKACIACAAIAJgGIADgBIAFABIACgBIAEgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABIAAAAIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAFABIABAAIAAAAIgCgBIgFgCIgBABIgCACQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBIgEgBIgBAAIgEACIgDABIgHgDIgCAAIgIAFQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgQgIIgBAAg");
	this.shape_57.setTransform(9.6,-1.9,1.458,1.253);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFF57E").s().p("Ag+AOIAvgUIANgHIACAAIAQAIQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAIgFIADAAIAHADIACgBIAEgCQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABAAIAEABQAAABAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgDIACgBIAFADIADAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAgBIgGgBIgCAAIgCAEQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgEAEIgDABIgFgBIgDABIgJAGIgCAAIgKgCIgCABIgRAJIgCABIgxABQgBgBABAAg");
	this.shape_58.setTransform(9.6,-1.9,1.458,1.253);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FDBD1F").s().p("AAKBAIgBAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIACgGIAAgBIgEgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDgFIgBgDIABgFIAAgCIgGgJQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgKIgBgCIgJgQIgBgDIgBgxQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAIACABIATAvIAIANIAAACIgIARIAAABIAEAIQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAIIAAABIADAEQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCAEIABABIADACQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABIgDAFQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgBAAgAgMgNIABACIAJAQIABADIAAAAIgCAKIAAACIAGAJIABADIAAAAIgBAFIABACIADAFIABACIgBABIgBADIAAABIAEABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIgCAFIAAABIABAAIAAgBIAAgBIADgFIAAgBIgEgCIgBgDIAAgBIACgEIAAAAIAAgBIgDgEIAAgCIAAgBIADgHIAAgCIgFgIIAAgCIAAgBIAIgQIAAgBIgHgNIgTgsg");
	this.shape_59.setTransform(2.4,8,1.458,1.253);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFF57E").s().p("AAKA/IgBAAIgBgCIACgGIgBgCIgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBIABgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIgCgDIACgFIgCgDIgFgJIgBgCIACgKIAAgCIgKgQIAAgDIgBgxQAAgBAAABIATAtIABACIAIANIAAACIgJAQIAAADIAEAIIABACIgDAHIAAADIADADQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABIgCAEIABACIAEACIAAACIgDAFQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIgBAAg");
	this.shape_60.setTransform(2.3,8,1.458,1.253);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDBD1F").s().p("AANA/IgTgvIgIgMIAAgEIAIgQIAAgBIgEgIIgBgDIADgIIAAgBIgDgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIACgEIgBgBIgDgDQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIADgGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIACAAIABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgCAGIAAAAIAEACQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBADIAAABIADAFIABADIgBAFIAAACIAGAJQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAKIABABIAJARIABADIABAwIgBACIgCgBgAAOA7IgBgtIgBgCIgJgQIgBgDIAAgBIACgJIAAgBIAAgBIgGgJIgBgCIAAgBIABgGIgBgBIgDgFIgBgCIACgEIAAAAIgEgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIACgHIgBAAIAAAAIAAADIgDAEIAAAAIABABIADACIABADIAAABIgCADIAAABIAAABIADAEIAAACIAAABIgDAHIAAACIAFAIIAAADIgIAQIAAABIAJAPIARAqg");
	this.shape_61.setTransform(-1.9,-8.1,1.458,1.253);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFF57E").s().p("AAOA/IgUgvIgHgNIgBgCIAJgQIAAgCIgEgIIgBgDIADgHIgBgCIgCgEQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBIACgDIgBgDIgEgCIAAgCIADgFIAAgCIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAgBABIgBAGIABACIADACIAAACIgBADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAEAFIABACIgBAFIABADIAFAJIABACIgCAKIAAACIAKARIAAACIACAxIgBAAIAAAAg");
	this.shape_62.setTransform(-1.9,-8.1,1.458,1.253);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FDBD1F").s().p("AAjA3IglgkIgLgJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgRIgBgBIgHgGQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgBgIIAAgBIgFgCIgBgDIAAgFIgBAAIgDgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIABgGIgBgBIAAgCIACgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABABIAAAGIAAAAIAFABQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAADIABABIAEAEIACACIACAGIABABIAJAFIACADIACAKIAAABIAPALIACADIAUAtIAAACgAAhAyIgSgpIgBgBIgOgMIgCgCIgCgKIgBgBIgJgHQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgCgFIgBgCIgFgCQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAgDIgBAAIgEAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBgGIAAAAIAAABIAAAHIAAAAIAEABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAFIABABIAEACQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIAAAIIABABIAHAGIACADIAAAAIgCASIABABIAMAJIAhAhg");
	this.shape_63.setTransform(-5.1,-6.9,1.458,1.253);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFF57E").s().p("AAkA2IgjgiIgNgLIgBgCIABgRIgBgDIgHgFIgBgDIgBgHIgBgCIgDgDQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgEIgBgCIgEgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgFIgBgCIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIABAAIACACIAAAGQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIADABQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAFADIABACIACAFQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAKAGIABACIACAJIABADIAPALIACACIATAtg");
	this.shape_64.setTransform(-5.1,-6.9,1.458,1.253);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDBD1F").s().p("AAiA3QAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIAAgGIgBAAIgEgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAgEIgBgBIgEgDIgCgCIgCgFIgBgCIgJgGQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgCgKIgBgCIgPgLIgCgCIgTgtQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACABIAiAiIAOAKQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBASIABABIAHAGQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIABAHIAAACIAEACQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAEIAAABIAEABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAFIAAACQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAAiA1IAAgDIAAgFIAAgBIgEgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgEIgBgBIgEgDQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgHIAAgCIgIgFIgBgDIAAgBIABgRIAAgBIgNgLIghgfIASApIACACIAOALIACADIACAJIABACIAJAFIADADIABAFIABACIAFACIABADIAAAEIABAAIADABQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABAGIAAABg");
	this.shape_65.setTransform(5.6,6.8,1.458,1.253);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFF57E").s().p("AAiA2QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgGQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgDgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgEIgBgCIgFgDIgBgCIgCgFIgBgCIgKgFQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIgCgJIgCgCIgOgMIgCgCIgTgsQAAgBAAAAIAjAiIANALIABACIgBASQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAHAGIABACIABAHIABACIAEADIABACIAAAEQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIAAAFIABADQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAg");
	this.shape_66.setTransform(5.6,6.8,1.458,1.253);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDBD1F").s().p("Ag2AjIAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBIAGAAIAAgBIABgEQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAIAEAAIABAAIADgFIACgCIAFgBIACgCIAGgJQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKgCIACgBIALgPIACgCIAtgTQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACIgkAkIgJAMQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAgBIgSgBIgBABIgGAHIgDACIgHAAIgBAAIgDAEIgDACIgEAAIgBAAIgBAEQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgFAAIgCAAIgCABIgBgCgAgsAiIABAAIABgEQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAEAAIABgBIADgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAHgBIACAAIAFgIQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIARABIABAAIALgNIAfghIgpASIgBACIgMAOIgCACIgKACIgCABIgFAJIgDADIgFABIgBABIgDAFQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAIAAABIgBAEQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgGABIgBAAIADAAg");
	this.shape_67.setTransform(-7.7,4.5,1.458,1.253);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFF57E").s().p("Ag1AjIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAGgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIABgDQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAEAAIACgBIADgFIACgBIAFgBIACgCIAGgKQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAJgCIADgCIALgOIACgCIAtgTIAAAAIgiAjIgLANIgCABIgRgBIgDABIgFAHIgDABIgHABIgCABIgDAEIgCABIgEAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBAEQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgFAAIgCABIgBAAIgBAAIAAgBg");
	this.shape_68.setTransform(-7.7,4.5,1.458,1.253);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FDBD1F").s().p("Ag1AkQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAigjIALgNQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIARACIABgBIAGgHQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAIAAIABgBIACgEIAEgBIAEAAIAAgBIABgEQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAIAGABIABgBIACAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgGABIgBAAIAAAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgDAAIgBABIgDAFIgDACIgFABIgBABIgGAKIgDACIgKACIgBAAIgLAPIgDACIgtAUIgBAAIAAgBgAgHgMIgKANIggAgIApgSIACgBIALgOIADgCIAKgCIABgBIAGgKQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAGgBIABgBIADgFIADgCIADAAIABAAIAAgEQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAGgBIAAAAIAAgBIgCABIgHAAIAAAEQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEAAIgCABIgCADQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgIAAIgBABIgGAHQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgRgCg");
	this.shape_69.setTransform(8.2,-4.6,1.458,1.253);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFF57E").s().p("Ag0AkIAkgkIAIgNIADgBIARACIACgBIAGgIIACgBIAIAAIACgBIACgDQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIABgEIACgBIAGAAIACAAIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIgGABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAFIgCABIgDAAIgCABIgDAFIgCABIgFACIgCABIgGAKIgCABIgKACIgCABIgLAPIgCACIgtATIgBAAIABAAg");
	this.shape_70.setTransform(8.2,-4.6,1.458,1.253);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FDBD1F").s().p("AgFAPIgNgOIgBgBIgJABQgBABAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgGgEIgBAAIgFABIgDgBIgDgDQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAIgDACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgDgEIgCgBIgCgBIABgCIABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAFAEIABAAIADgCQAAAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIADACIABABIAFgCIAEABIAEADIACAAIALgDIADAAIAJAGIABAAIATgCIADABIAAgBIAtARIACACIgCABIg0ABIgNACIgBAAIgCgBgAgQAAIAMANIABABIAOgCIAwgBIgqgQIgCAAIgSACIgEAAIgIgGIgBAAIgMADIgDgBIgEgCIgCAAIgGABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCgDIgBAAIgDADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBgBAAAAIgFgEIgBAAIAAAAIACABIAEAFIABAAIADgCQABAAAAgBQABAAAAAAQABABAAAAQAAAAABAAIADADIABABIAEgBQABAAAAAAQAAgBABABQAAAAABAAQAAAAABABIAFAFIACAAIAJgBg");
	this.shape_71.setTransform(-9.1,-1.6,1.458,1.253);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFF57E").s().p("AgFAOIgMgOIgCAAIgJAAIgDAAIgFgFIgCAAIgFABIgCgBIgDgDQAAAAgBAAQAAgBAAAAQAAAAgBABQAAAAAAAAIgEACQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgDgEIgDgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAEAEIADAAIADgCQAAAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAIACACIACABIAGgBIACAAIAFACIACABIALgDIADAAIAIAGIADAAIASgCIADABIAtAQQABABgBAAIg0ABIgNACIgBAAIgCgBg");
	this.shape_72.setTransform(-9.2,-1.6,1.458,1.253);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FDBD1F").s().p("AA8APIgFgEIgBAAIgDADQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAIgDgDIgBAAIgFABIgEAAIgEgDIgCAAIgLADIgDgBIgJgFIgBgBIgTADIgDgBIgtgRIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIA0gBIANgCIAEABIAMAOIABAAIAJgBIADABIAGAFIABAAIAFgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIADADIABAAIADgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIADAEIACAAIACABIgBACIgBABIgCABIgBgBgAA4AKIAFAEIABAAIAAgBIgCgBIgEgEIgBAAIgDACQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBIgDgDIgBAAIgEABIgEgBIgFgFIgCgBIgJABQAAABgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgMgNIgBAAIgRACIgtABIAqAPIACAAIASgCIAEABIAIAFIACABIALgDIADAAIAEADIACAAIAGgBIADABIACACIABAAIADgCIABgBIACABg");
	this.shape_73.setTransform(9.6,1.5,1.458,1.253);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFF57E").s().p("AA4ALQgBAAAAAAQAAgBAAAAQgBAAAAABQAAAAgBAAIgDACIgCAAIgCgCIgCgBIgGACIgCgBIgFgCIgCgBIgLADIgDAAIgIgGIgCgBIgTACIgDAAIgtgRQgBAAABAAIAxgBIAQgCIADABIAMANIACABIAJgBIADABIAFAEQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAFgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIADADIACABIAEgDIACAAIADAFQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAQABAAgBAAIgBABIgCABg");
	this.shape_74.setTransform(9.6,1.4,1.458,1.253);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FDBD1F").s().p("AgOBAIgBgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAEgFIAAgBIgCgDQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAIACgDIABgBIgCgFIABgEIADgEIAAgCIgDgLIAAgDIAGgIIAAgCIgCgTIAAgDIARgtIACgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABA0IACANQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgOAMIgBABIABAJQABABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgEAGIAAABIABAFIgBADIgDADIgBABIADADQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgEADIgBACIgBACgAgFgQIAAACIACASIAAABIAAADIgGAIIAAABIAAABIADALIAAABIgBACIgCAEIgBACIABAAIABAGIAAAAIgBADIgDACIAAABIADADIAAACIAAABIgEAFIAAABIAAAAIABgCIAFgEIAAgBIgDgEIABgCIADgEIABgBIgBgEIAAgBIABgDIAFgFIAAgBIAAgBIgBgJIAAAAIABgDIANgMIABgBIgCgOIgBgwg");
	this.shape_75.setTransform(-1.5,8,1.458,1.253);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFF57E").s().p("AgNA/IgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAEgEQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgDIAAgDIACgCIABgCIgCgFIABgDIADgFIAAgCIgDgLIABgDIAFgIIAAgCIgCgTIAAgDIARgtQABgBAAABIABA0IACANIgBADIgNAMIgBACIABAJIgBADIgFAFIAAACIABAFIgBACIgDADQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAAAIACAEIAAACIgFAEIgBACIAAAAIgBAAg");
	this.shape_76.setTransform(-1.5,8,1.458,1.253);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FDBD1F").s().p("AgMA/IgBg0IgCgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIAOgNIAAgBIgBgJIABgDIAEgGIABgBIgBgFIABgDIADgDIAAgBIgCgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAEgDIAAgCIABgBIACAAIABABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgEAFIAAABIADADQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgDADIAAABIABAFIAAAEIgDAEIAAACIADALIgBADIgFAJIgBABIADATIgBADIAAAAIgRAtIgBACIgBgCgAAMg7IgEAEIAAABIACADIAAACIgBACIgDADIAAABIABAEIAAABIgBADIgFAFIgBACIABAJIAAAAIgBADIgNAMIAAABIAAABIACAQIABAtIAPgqIAAgCIgCgSIAAgBIABgDIAFgIIABgBIgDgLIAAgBIAAgDIADgEIAAgCIAAAAIgBgFIAAgBIABgDIACgCIAAgBIgCgDIgBgBIABgCIAEgFIAAgBIgBAAg");
	this.shape_77.setTransform(2,-8.1,1.458,1.253);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFF57E").s().p("AgLA/IgBg0IgCgNIABgDIANgMIAAgCIAAgJIAAgDIAFgFQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgFIABgCIADgDQAAAAAAgBQABAAAAAAQAAAAgBgBQAAAAAAAAIgCgEIAAgCIAFgDIABgDQAAAAAAAAQAAAAAAgBQAAAAAAABQAAAAABAAIAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgDAEQAAABAAAAQgBAAAAABQAAAAABAAQAAABAAAAIACADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCACIgBACIACAGIgBACIgDAFIAAACIADALIAAADIgGAIIAAADIABASIAAADIgRAtIAAABIAAgBg");
	this.shape_78.setTransform(2,-8.1,1.458,1.253);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A0C0E5").s().p("ApJCXQgZAAgRgSQgRgSAAgZIAAjwIUJAAIAADwQAAAZgRASQgSASgZAAg");
	this.shape_79.setTransform(0,37.7,1.458,1.253);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6E7E8").s().p("AqECXIAAktIUJAAIAAEtg");
	this.shape_80.setTransform(0,0,1.458,1.253);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A0C0E5").s().p("AqECWIAAjwQAAgYARgSQASgRAYAAISSAAQAZAAASARQARARAAAZIAADwg");
	this.shape_81.setTransform(0,-37.7,1.458,1.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arg, new cjs.Rectangle(-94.1,-56.6,188.2,113.2), null);


(lib.yafo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yafo1();
	this.instance.parent = this;
	this.instance.setTransform(-136,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yafo, new cjs.Rectangle(-136,-81.5,272,163), null);


(lib.shcem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shcem1();
	this.instance.parent = this;
	this.instance.setTransform(-135,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shcem, new cjs.Rectangle(-135,-81.5,270,163), null);


(lib.lion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lion1();
	this.instance.parent = this;
	this.instance.setTransform(-136,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lion, new cjs.Rectangle(-136,-82,272,164), null);


(lib.flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flower1();
	this.instance.parent = this;
	this.instance.setTransform(-136,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower, new cjs.Rectangle(-136,-82,272,164), null);


(lib.nopicgeza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Auso1IdZAAIAARrI9ZAAg");
	this.shape.setTransform(-5.9,56.6,0.703,0.703);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,102,0)").s().p("AusI2IAAxrIdZAAIAARrg");
	this.shape_1.setTransform(-5.9,56.6,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nopicgeza, new cjs.Rectangle(-73.1,15.9,134.3,81.6), null);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAABUIkMEOIhVhVIENkNIkNkMIBVhVIEMEMIENkMIBVBVIkNEMIENENIhVBVg");
	this.shape.setTransform(0,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.x, new cjs.Rectangle(-35.4,0,70.8,70.8), null);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B050").s().p("AnNgLIBWhRID1D7IH/niIBRBUIpTIzg");
	this.shape.setTransform(0,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-46.2,0,92.4,64.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.1,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(-0.1,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(6.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.6,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-7.8,0,15.8,6.1), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F07321").s().p("AgBBEIABhKIAChMIgCBMIAABZg");
	this.shape.setTransform(0.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0.1,0,0.5,16.6), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B24408").s().p("AgVAAQAGgCAPAAQAQAAAGACQgHADgPAAQgOAAgHgDg");
	this.shape.setTransform(2.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,4.5,0.7), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B24408").s().p("AAAABQgPAAgGADQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBgBAAQAAgFAYAAQAYAAAAAFQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgGgDgQAAg");
	this.shape.setTransform(2.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,4.9,0.8), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B24408").s().p("AgVAAQAGgCAPAAQAQAAAGACQgHADgPAAQgOAAgHgDg");
	this.shape.setTransform(2.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,4.5,0.7), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C380B").s().p("AAPAWQgDgQgJgKQgKgMgPAAIgDgFIAgACIATApg");
	this.shape.setTransform(2.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,5.2,4.5), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,2.9,2.9), null);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D3C0").s().p("AgTAHIgSgCQgKgCgHgCIAFABIAVACIAJABIAegBIAKgCIAYgFIAKgEIgQAHIgIADIgTAEIgVABIgKgBg");
	this.shape_1.setTransform(5.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, new cjs.Rectangle(0,0,11.1,1.6), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#237DA4").s().p("AAAAaIgBgQIADgmIAAADIAAAPIgCAkIAAADg");
	this.shape.setTransform(0.2,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,0.4,5.8), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#237DA4").s().p("AAEAUQgGgBgCgEQgCgDgBgIQgBgIACgMQACgHAEAGQADAGABAIIAEAQQACAIgFAAIgBgBg");
	this.shape.setTransform(0.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,1.7,4.1), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As+mAIKtoHIPQUIIqtIHg");
	mask.setTransform(-14,-4.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB03B").s().p("Ahtl7IA8KCICfgXIjVCMg");
	this.shape.setTransform(-49.2,-31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB03B").s().p("Ajmg2ICeh3Injj2IKXDaIi8CPIJ8Heg");
	this.shape_1.setTransform(-4,-20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB03B").s().p("ABQGtIo3taIJ3LzIFYj6QhSBfhcBbQipCog4AAQgFAAgEgBg");
	this.shape_2.setTransform(11.5,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBB03B").s().p("AkpiMIjHCBIhgqTIKzDxIkRDaIL/IeIlbFUg");
	this.shape_3.setTransform(-0.9,-2.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-60.2,-69.8,120.6,139.7), null);


(lib.gardescreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.TP2 = new cjs.Text("", "bold 16px 'Arial'");
	this.TP2.name = "TP2";
	this.TP2.textAlign = "right";
	this.TP2.lineHeight = 20;
	this.TP2.lineWidth = 217;
	this.TP2.parent = this;
	this.TP2.setTransform(-7.9,45);

	this.TP1 = new cjs.Text("", "bold 16px 'Arial'");
	this.TP1.name = "TP1";
	this.TP1.textAlign = "right";
	this.TP1.lineHeight = 20;
	this.TP1.lineWidth = 217;
	this.TP1.parent = this;
	this.TP1.setTransform(239.1,45);

	this.GP2 = new cjs.Text("", "bold 16px 'Arial'");
	this.GP2.name = "GP2";
	this.GP2.textAlign = "right";
	this.GP2.lineHeight = 20;
	this.GP2.lineWidth = 217;
	this.GP2.parent = this;
	this.GP2.setTransform(-7.9,2);

	this.GP1 = new cjs.Text("", "bold 16px 'Arial'");
	this.GP1.name = "GP1";
	this.GP1.textAlign = "right";
	this.GP1.lineHeight = 20;
	this.GP1.lineWidth = 217;
	this.GP1.parent = this;
	this.GP1.setTransform(239.1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GP1},{t:this.GP2},{t:this.TP1},{t:this.TP2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gardescreen, new cjs.Rectangle(-227,0,468.1,74), null);


(lib.clockp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.TXTclockplayer2 = new cjs.Text("", "bold 18px 'Arial'");
	this.TXTclockplayer2.name = "TXTclockplayer2";
	this.TXTclockplayer2.textAlign = "center";
	this.TXTclockplayer2.lineHeight = 20;
	this.TXTclockplayer2.lineWidth = 66;
	this.TXTclockplayer2.parent = this;
	this.TXTclockplayer2.setTransform(-1,24.8,0.769,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(0,33.9,0.936,0.936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(0.1,33.8,0.936,0.936);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-11.9,21.6,0.936,0.936);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-11.4,48.9,0.936,0.936);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(11.7,48.9,0.936,0.936);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(12.2,21.6,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.TXTclockplayer2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clockp2, new cjs.Rectangle(-28,16.2,54,34.7), null);


(lib.clockP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.TXTclockplayer1 = new cjs.Text("", "bold 18px 'Arial'");
	this.TXTclockplayer1.name = "TXTclockplayer1";
	this.TXTclockplayer1.textAlign = "center";
	this.TXTclockplayer1.lineHeight = 20;
	this.TXTclockplayer1.lineWidth = 66;
	this.TXTclockplayer1.parent = this;
	this.TXTclockplayer1.setTransform(-1,24.8,0.769,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F6F9").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAABAgtAsQgsAthAAAQg/AAgsgtg");
	this.shape.setTransform(0,33.9,0.936,0.936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414546").s().p("AgLC2QhEgEgxgxQgxgxgEhEQgFhOA2g6QA2g5BOAAQBMAAA1A1QA1A2AABKQAABPg5A2Qg0AxhHAAIgNAAgAAICVQAPgBAOgEIADAAIAAgBQARgEAQgJIADgCQAQgJAMgNIgCgBIACgCIACABQANgOAJgOIACgDQAIgPAFgSIABgDQAEgOAAgPQACgHgCgIIAAAAQgBgPgDgOIgBgDQgFgRgIgQIgCgDQgKgPgMgNIgCACIgCgCIACgCQgNgMgPgKIgDgCQgQgIgRgFIgDgBQgIgCgSgCIgKgBIgIABQgPABgOADIgDABQgRAFgQAIIgDACQgOAJgOANIABABIgBADIgCgCQgKAKgMASIgCADQgJAQgEARIgBAAIAAADQgEAOgBAPIADAAQgBAIABAHIgDAAQABAPAEAOIAAADIABAAQAEASAJAPIACADQAKAQAIAJQAHAMAMAFIAPAKIADACQAQAJARAEIAAABIADAAQAOAEAPABIAAgBIAHABIAIgBg");
	this.shape_1.setTransform(0.1,33.8,0.936,0.936);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414546").s().p("Ag5ASQACgTALgSQgGgMAKgJQAJgJAMAFQASgLAUgCQAUgBATAJQglAOgbAdQgdAbgPAlQgIgTABgVg");
	this.shape_2.setTransform(-11.9,21.6,0.936,0.936);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414546").s().p("AgQAPQgGgGAAgJQAAgHAGgGIAHgHQANANATALIgLALQgGAGgHAAQgJAAgGgGg");
	this.shape_3.setTransform(-11.4,48.9,0.936,0.936);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414546").s().p("AgMAPIgKgLQASgKAOgOIAHAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgIAAgHgGg");
	this.shape_4.setTransform(11.7,48.9,0.936,0.936);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414546").s().p("AAIgGQgcgcglgPQATgIAVABQAUABARALQANgFAIAJQAKAJgGAMQALASACAUQABAUgIATQgPglgcgbg");
	this.shape_5.setTransform(12.2,21.6,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.TXTclockplayer1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clockP1, new cjs.Rectangle(-28,16.2,54,34.7), null);


(lib.checkOrX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,51,0)").s().p("AiLCMIAAkXIEXAAIAAEXg");
	this.shape.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkOrX, new cjs.Rectangle(-14,-15.9,28,28), null);


(lib.yellowfloor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB+AAIAAALg");
	this.shape.setTransform(-9.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A63E26").s().p("AgFBQIAAifIAKAAIAACfg");
	this.shape_1.setTransform(-9.4,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_2.setTransform(-9.4,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_3.setTransform(-9.4,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB9AAIAAALg");
	this.shape_4.setTransform(30.8,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A63E26").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_5.setTransform(30.8,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_6.setTransform(30.8,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_7.setTransform(30.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A63E26").s().p("Ag/AGIAAgLIB+AAIAAALg");
	this.shape_8.setTransform(10.7,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A63E26").s().p("AgFBQIAAifIALAAIAACfg");
	this.shape_9.setTransform(10.7,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_10.setTransform(10.7,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_11.setTransform(10.7,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB9AAIAAALg");
	this.shape_12.setTransform(-29.6,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A63E26").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_13.setTransform(-29.6,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_14.setTransform(-29.5,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_15.setTransform(-29.6,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA8B00").s().p("AnPBzIAAjlIOfAAIAADlg");
	this.shape_16.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowfloor, new cjs.Rectangle(-46.3,0,92.8,23), null);


(lib.redfloor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB+AAIAAALg");
	this.shape.setTransform(-9.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A63E26").s().p("AgFBQIAAifIAKAAIAACfg");
	this.shape_1.setTransform(-9.4,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_2.setTransform(-9.4,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_3.setTransform(-9.4,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB9AAIAAALg");
	this.shape_4.setTransform(30.8,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A63E26").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_5.setTransform(30.8,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_6.setTransform(30.8,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_7.setTransform(30.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A63E26").s().p("Ag/AGIAAgLIB+AAIAAALg");
	this.shape_8.setTransform(10.7,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A63E26").s().p("AgFBQIAAifIALAAIAACfg");
	this.shape_9.setTransform(10.7,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_10.setTransform(10.7,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_11.setTransform(10.7,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A63E26").s().p("Ag+AGIAAgLIB9AAIAAALg");
	this.shape_12.setTransform(-29.6,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A63E26").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_13.setTransform(-29.6,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7FB2F0").s().p("Ag+BQIAAifIB9AAIAACfg");
	this.shape_14.setTransform(-29.5,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A63E26").s().p("AhJBbIAAi1ICTAAIAAC1g");
	this.shape_15.setTransform(-29.6,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9F5640").s().p("AnPBzIAAjlIOfAAIAADlg");
	this.shape_16.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redfloor, new cjs.Rectangle(-46.3,0,92.8,23), null);


(lib.bulding2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B7A21").s().p("AgcAzQgWAAgQgOQgRgOgEgVQAcAaAkgGQAdgFANgZIAHgZIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape.setTransform(43.7,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_1.setTransform(43.7,56.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_2.setTransform(43.7,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#588F27").s().p("AgbBTQgWAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAJAEAGAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_3.setTransform(43.7,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B7A21").s().p("AgcAzQgWAAgRgOQgQgOgEgVQAcAaAkgGQAcgFAOgZIAHgZIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape_4.setTransform(-46.1,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_5.setTransform(-46.1,56.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_6.setTransform(-46.1,55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588F27").s().p("AgcBTQgVAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAHAEAIAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_7.setTransform(-46.1,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5CCD4").s().p("AnPANIAAgZIOeAAIAAAZg");
	this.shape_8.setTransform(0,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_9.setTransform(0,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#402516").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_10.setTransform(5.6,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_11.setTransform(0,50.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_12.setTransform(0,37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_13.setTransform(0,24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#87321F").s().p("AhfDFIAAmJIC/AAIAAGJg");
	this.shape_14.setTransform(0,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A63E26").s().p("AhuDMIAAmYIDdAAIAAGYg");
	this.shape_15.setTransform(0,36.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_16.setTransform(26.4,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_17.setTransform(26.4,28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_18.setTransform(26.4,28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_19.setTransform(26.4,28.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_20.setTransform(-25.6,28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_21.setTransform(-25.6,28.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_22.setTransform(-25.6,28.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_23.setTransform(-25.6,28.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#402516").s().p("ApIAUIAAgnISRAAIAAAng");
	this.shape_24.setTransform(0,59.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA8B00").s().p("AnPEKIAAoTIOeAAIAAITg");
	this.shape_25.setTransform(0,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bulding2, new cjs.Rectangle(-58.4,0,116.9,61.1), null);


(lib.bulding1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B7A21").s().p("AgcAzQgWAAgQgOQgRgOgEgVQAcAaAkgGQAdgFANgZQAHgNAAgMIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape.setTransform(-45.1,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_1.setTransform(-45.1,56.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_2.setTransform(-45.1,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#588F27").s().p("AgbBTQgWAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAJAEAGAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_3.setTransform(-45.1,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B7A21").s().p("AgcAzQgWAAgRgOQgRgOgEgVQAeAaAigGQAdgFAOgZQAHgNABgMIAQABQASgCALgQQARASAAAXQAAAYgSASQgSASgZAAg");
	this.shape_4.setTransform(43.8,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_5.setTransform(43.7,56.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_6.setTransform(43.7,55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588F27").s().p("AgcBTQgVAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXASgQQARgQAXAAQAWAAARAPQARAPADAXQAJAEAFAHQARASAAAWQAAAZgSASQgSASgZAAg");
	this.shape_7.setTransform(43.7,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5CCD4").s().p("AnPANIAAgZIOfAAIAAAZg");
	this.shape_8.setTransform(0,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_9.setTransform(0,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#402516").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(5.6,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_11.setTransform(0,50.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_12.setTransform(0,37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_13.setTransform(0,24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#87321F").s().p("AhfDFIAAmJIC/AAIAAGJg");
	this.shape_14.setTransform(0,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A63E26").s().p("AhuDNIAAmZIDdAAIAAGZg");
	this.shape_15.setTransform(0,36.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_16.setTransform(26.4,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_17.setTransform(26.4,28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_18.setTransform(26.4,28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_19.setTransform(26.4,28.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_20.setTransform(-25.6,28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_21.setTransform(-25.6,28.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_22.setTransform(-25.6,28.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_23.setTransform(-25.6,28.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#402516").s().p("ApHAUIAAgnISPAAIAAAng");
	this.shape_24.setTransform(0,59.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F5640").s().p("AnPEKIAAoTIOfAAIAAITg");
	this.shape_25.setTransform(0,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bulding1, new cjs.Rectangle(-58.4,0,116.9,61.1), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape.setTransform(13.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_1.setTransform(4.6,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_2.setTransform(-4.6,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAzIAAg/QAAgMgGgFQgGgFgLAAIgRACIgCgPQAKgDANAAQATAAAJAJQAKAIAAASIAABCg");
	this.shape_3.setTransform(-13.5,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.1,1,1).p("AkPiGIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAIofAAQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AkPCHQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-14.5,79.2,29.1);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_4.setTransform(13.5,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_5.setTransform(4.6,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_6.setTransform(-4.6,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAMAzIAAg/QAAgMgGgFQgGgFgLAAIgRACIgCgPQAKgDANAAQATAAAJAJQAKAIAAASIAABCg");
	this.shape_7.setTransform(-13.5,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.1,1,1).p("AkPiGIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAIofAAQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AkPCHQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-14.5,79.2,29.1);


(lib.playagbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape.setTransform(23.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAlIAAglQAAgKgEgFQgEgFgLAAIgKABIAAA4IgTAAIAAhGQANgDAOAAQARAAAIAFQAIAEADAHQAEAHAAAMIAAAmg");
	this.shape_1.setTransform(14.6,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAyIAAhAIATAAIAABAgAAAAWIAAgNQAAgFACgEQABgDAEgGIADgDQADgEAAgIIAAgJIgsAAIAAgQIA/AAIAAASIgBAPQgBAFgCAEIgEAFIgDAGIgBAGIAAAMg");
	this.shape_2.setTransform(6.4,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_3.setTransform(0.4,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_4.setTransform(-10.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_5.setTransform(-17.3,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAlIAAgRIAnAAIAAgTQAAgLgEgFQgFgFgNAAIgQACIgCgPQALgDALAAQATAAAJAJQAKAIAAASIAAAVIAMAAIAAARg");
	this.shape_6.setTransform(-23.1,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.1,1,1).p("AkPiGIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAIofAAQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AkPCHQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-14.5,79.2,29.1);


(lib.donebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAcQgLgLAAgQQAAgRALgKQAKgLAQAAQALAAAJAFQAIAFAEAIQAFAJABAKQAAAQgLALQgLALgQAAQgPAAgLgKgAgMgPQgFAHAAAIQAAAKAFAGQAFAGAHAAQAIAAAFgGQAFgGgBgKQABgJgFgGQgFgGgIAAQgIAAgEAGg");
	this.shape.setTransform(8.9,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_1.setTransform(2.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_2.setTransform(-1.1,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAlIAAhGQANgDAOAAQARAAAIAFQAIAEAEAHQADAHAAAMIAAAmgAgNgTIAAAnIAcAAIAAgUQAAgKgEgFQgFgFgKAAIgJABg");
	this.shape_3.setTransform(-7.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.1,1,1).p("AkPiGIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAIofAAQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AkPCHQgvAAgighQghghAAgvIAAgrQAAgvAhghQAighAvAAIIfAAQAvAAAhAhQAiAhAAAvIAAArQAAAvgiAhQghAhgvAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-14.5,79.2,29.1);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.gametitles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.questionTXT = new cjs.Text("", "bold 22px 'Arial'");
	this.questionTXT.name = "questionTXT";
	this.questionTXT.textAlign = "center";
	this.questionTXT.lineHeight = 27;
	this.questionTXT.lineWidth = 583;
	this.questionTXT.parent = this;
	this.questionTXT.setTransform(2.4,37.1);

	this.instractionTXT = new cjs.Text("", "16px 'Arial'");
	this.instractionTXT.name = "instractionTXT";
	this.instractionTXT.textAlign = "center";
	this.instractionTXT.lineHeight = 20;
	this.instractionTXT.lineWidth = 578;
	this.instractionTXT.parent = this;
	this.instractionTXT.setTransform(0,0.6);

	this.gameName = new cjs.Text("", "14px 'Arial'");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 18;
	this.gameName.lineWidth = 502;
	this.gameName.parent = this;
	this.gameName.setTransform(0,-23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gameName},{t:this.instractionTXT},{t:this.questionTXT}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gametitles, new cjs.Rectangle(-291,-25.6,587,105.7), null);


(lib.dractivechoosenames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAaIATgEIgNg/IAUAAIAJA5QAHgCADgGQACgFAAgJIABgjIATAAIgBAaIgBARQgBAGgDAGQgDAGgGAFQgHAFgMAEQgNAFgSADg");
	this.shape.setTransform(82.2,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGABgEIAFgKIACgCQAEgEAAgIIAAgIIgmAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_1.setTransform(75.2,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_2.setTransform(69.9,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAjIADgPQAHADAFAAQALAAAFgHQAGgGAAgKQAAgJgGgGQgFgHgLAAQgFAAgHADIgDgPQAIgCAJAAQANAAAIAEQAIAEAGAIQAFAIAAAMQAAAMgFAIQgEAIgJAFQgKAEgMAAQgJAAgIgCg");
	this.shape_3.setTransform(64.6,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAlIAAhGQANgDAOAAQARAAAHAFQAJAEAEAHQADAHAAAMIAAAmgAgNgTIAAAnIAcAAIAAgUQAAgKgFgFQgDgFgKAAIgKABg");
	this.shape_4.setTransform(57,43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGACgEIAEgKIACgCQAEgEgBgIIAAgIIglAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_5.setTransform(45.2,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_6.setTransform(37.5,43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAkIAAgJIgBgVIAAgGQAAgNAIgGIgUAAIAAgQIAxAAIAAANQgKAAgFAFQgGAEAAAKIAAAFQACANAAAKIAAALg");
	this.shape_7.setTransform(30.5,43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_8.setTransform(25.5,41.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_9.setTransform(21.7,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_10.setTransform(10.9,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_11.setTransform(1.3,43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_12.setTransform(-4.8,43);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoAiIADgMIAIACQAEAAABgCIABgIIAAgiIgOABIgCgPQARgCAUAAQAPAAAJADQAKADAEAHQAFAIAAANIAAAmIgTAAIAAgjQAAgNgEgFQgFgDgRAAIAAAjQAAAJgBAEQgCAEgEACQgEADgIAAQgJAAgIgDg");
	this.shape_13.setTransform(-11.7,43);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAyIAAgNQAAgGACgEIAEgKIACgCQADgEABgIIAAgIIgmAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_14.setTransform(-23.6,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_15.setTransform(-31.6,43);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_16.setTransform(-40.8,43.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAiIADgMIAHACQAEAAACgCIABgIIAAgiIgPABIgBgPQASgCASAAQAQAAAJADQAJADAGAHQAEAIAAANIAAAmIgTAAIAAgjQAAgNgFgFQgFgDgQAAIAAAjQAAAJgBAEQgCAEgEACQgEADgIAAQgJAAgIgDg");
	this.shape_17.setTransform(-50.8,43);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_18.setTransform(-59.9,43);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_19.setTransform(-69,43.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_20.setTransform(-75.9,41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAlIAAhGQAOgDANAAQAQAAAJAFQAIAEADAHQAEAHAAAMIAAAmgAgOgTIAAAnIAdAAIAAgUQAAgKgFgFQgDgFgLAAIgKABg");
	this.shape_21.setTransform(-82,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dractivechoosenames, new cjs.Rectangle(-227.5,32,455,19.6), null);


(lib.dirctivegame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("", "14px 'Arial-BoldMT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 739;
	this.text.parent = this;
	this.text.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.dirctivegame, new cjs.Rectangle(-371.4,0,743,43.7), null);


(lib.Blend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1914").s().p("EhLIABdIAAi5MCWRAAAIAAC5g");
	this.shape.setTransform(480.9,88.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23201C").s().p("EhLIABpIAAjRMCWRAAAIAADRg");
	this.shape_1.setTransform(480.9,87.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2823").s().p("EhLIAB2IAAjrMCWRAAAIAADrg");
	this.shape_2.setTransform(480.9,86.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#322F2B").s().p("EhLIACDIAAkFMCWRAAAIAAEFg");
	this.shape_3.setTransform(480.9,85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#393732").s().p("EhLIACQIAAkfMCWRAAAIAAEfg");
	this.shape_4.setTransform(480.9,83.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#413E3A").s().p("EhLIACcIAAk3MCWRAAAIAAE3g");
	this.shape_5.setTransform(480.9,82.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#484641").s().p("EhLIACpIAAlRMCWRAAAIAAFRg");
	this.shape_6.setTransform(480.9,81.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F4D49").s().p("EhLIAC2IAAlrMCWRAAAIAAFrg");
	this.shape_7.setTransform(480.9,79.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#575451").s().p("EhLIADCIAAmDMCWRAAAIAAGDg");
	this.shape_8.setTransform(480.9,78.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E5C58").s().p("EhLIADPIAAmdMCWRAAAIAAGdg");
	this.shape_9.setTransform(480.9,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#656360").s().p("EhLIADcIAAm3MCWRAAAIAAG3g");
	this.shape_10.setTransform(480.9,75.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6B67").s().p("EhLIADoIAAnPMCWRAAAIAAHPg");
	this.shape_11.setTransform(480.9,74.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#74726F").s().p("EhLIAD1IAAnpMCWRAAAIAAHpg");
	this.shape_12.setTransform(480.9,73.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B7977").s().p("EhLIAECIAAoDMCWRAAAIAAIDg");
	this.shape_13.setTransform(480.9,72);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#83817E").s().p("EhLIAEOIAAobMCWRAAAIAAIbg");
	this.shape_14.setTransform(480.9,70.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A8886").s().p("EhLIAEbIAAo1MCWRAAAIAAI1g");
	this.shape_15.setTransform(480.9,69.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#91908D").s().p("EhLIAEoIAApPMCWRAAAIAAJPg");
	this.shape_16.setTransform(480.9,68.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#989795").s().p("EhLIAE0IAApnMCWRAAAIAAJng");
	this.shape_17.setTransform(480.9,66.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A09F9C").s().p("EhLIAFBIAAqBMCWRAAAIAAKBg");
	this.shape_18.setTransform(480.9,65.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A7A6A4").s().p("EhLIAFOIAAqbMCWRAAAIAAKbg");
	this.shape_19.setTransform(480.9,64.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AEADAC").s().p("EhLIAFaIAAqzMCWRAAAIAAKzg");
	this.shape_20.setTransform(480.9,62.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6B5B3").s().p("EhLIAFnIAArNMCWRAAAIAALNg");
	this.shape_21.setTransform(480.9,61.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BDBCBB").s().p("EhLIAF0IAArnMCWRAAAIAALng");
	this.shape_22.setTransform(480.9,60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4C4C2").s().p("EhLIAGAIAAr/MCWRAAAIAAL/g");
	this.shape_23.setTransform(480.9,59);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCBCA").s().p("EhLIAGNIAAsZMCWRAAAIAAMZg");
	this.shape_24.setTransform(480.9,57.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D3D2D2").s().p("EhLIAGaIAAszMCWRAAAIAAMzg");
	this.shape_25.setTransform(480.9,56.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DADAD9").s().p("EhLIAGnIAAtMMCWRAAAIAANMg");
	this.shape_26.setTransform(480.9,55.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2E1E1").s().p("EhLIAGzIAAtlMCWRAAAIAANlg");
	this.shape_27.setTransform(480.9,53.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E9E9E8").s().p("EhLIAHAIAAt/MCWRAAAIAAN/g");
	this.shape_28.setTransform(480.9,52.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0F0F0").s().p("EhLIAHNIAAuZMCWRAAAIAAOZg");
	this.shape_29.setTransform(480.9,51.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8F8F7").s().p("EhLIAHZIAAuxMCWRAAAIAAOxg");
	this.shape_30.setTransform(480.9,49.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EhLIAHmIAAvLMCWRAAAIAAPLg");
	this.shape_31.setTransform(480.9,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Blend, new cjs.Rectangle(0,0,961.8,98.2), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(143,140,137,0)","rgba(145,139,127,0.071)","rgba(152,137,101,0.263)","rgba(163,132,58,0.576)","#B27F00"],[0,0.137,0.365,0.659,1],0,116.5,0,0,116.5,543.7).s().p("EhK/AFuIAArcMCV/AAAIAALcg");
	this.shape.setTransform(480,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,960,73.3), null);


(lib.nopicgeza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(79,97,112,0.004)").s().p("ApmJnIAAzNITNAAIAATNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nopicgeza_1, new cjs.Rectangle(-61.4,-61.4,123,123), null);


(lib.xx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABUIkMEOIhVhVIENkNIkNkMIBVhVIEMEMIENkMIBVBVIkNEMIENENIhVBVg");
	this.shape.setTransform(0,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,0,70.8,70.8);


(lib.odoT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AAOAkIgYgkQgFAFgBARIgBAOIgTAAIACgPQABgQAEgGQAEgGAGgEIgRgYIAXAAIATAdQAGgEABgNIABgMIASAAIgBAJQgBAPgFAGQgEAGgGAEIAWAfg");
	this.shape.setTransform(12.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_1.setTransform(6.4,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AAEAkIAAg3IgmAAIAAgQIBFAAIAAAQIgLAAIAAA3g");
	this.shape_2.setTransform(0.7,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_3.setTransform(-5.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AgoAjIADgNIAHABQAFAAABgCIABgHIAAgiIgPABIgBgPQASgCASAAQAQAAAJADQAJADAGAHQAEAIAAAOIAAAmIgTAAIAAgkQAAgNgEgEQgGgEgQgBIAAAjQABAKgCAEQgCAEgEADQgEACgIAAQgJAAgIgCg");
	this.shape_4.setTransform(-12,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-9.8,94.1,19.6);


(lib.containerRadioMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.rt3 = new cjs.Text("", "12px 'Arial'");
	this.rt3.name = "rt3";
	this.rt3.textAlign = "right";
	this.rt3.lineHeight = 15;
	this.rt3.lineWidth = 118;
	this.rt3.parent = this;
	this.rt3.setTransform(-73.7,143.8,1.841,1.841);

	this.rt1 = new cjs.Text("", "12px 'Arial'");
	this.rt1.name = "rt1";
	this.rt1.textAlign = "right";
	this.rt1.lineHeight = 15;
	this.rt1.lineWidth = 91;
	this.rt1.parent = this;
	this.rt1.setTransform(153.3,143.8,1.841,1.841);

	this.check0 = new lib.checkOrX();
	this.check0.name = "check0";
	this.check0.parent = this;
	this.check0.setTransform(198.5,23.1,1,1,0,0,0,0,-1.9);

	this.check1 = new lib.checkOrX();
	this.check1.name = "check1";
	this.check1.parent = this;
	this.check1.setTransform(198.5,145.6,1,1,0,0,0,0,-1.9);

	this.check3 = new lib.checkOrX();
	this.check3.name = "check3";
	this.check3.parent = this;
	this.check3.setTransform(-33.2,145.6,1,1,0,0,0,0,-1.9);

	this.check2 = new lib.checkOrX();
	this.check2.name = "check2";
	this.check2.parent = this;
	this.check2.setTransform(-33.2,23.1,1,1,0,0,0,0,-1.9);

	this.PIC3 = new lib.RBpic3();
	this.PIC3.name = "PIC3";
	this.PIC3.parent = this;
	this.PIC3.setTransform(-147.1,241.9,1,0.602,0,0,0,0,94.2);

	this.PIC2 = new lib.RBpic2();
	this.PIC2.name = "PIC2";
	this.PIC2.parent = this;
	this.PIC2.setTransform(-147.1,119.9,1,0.602,0,0,0,0,94.2);

	this.PIC1 = new lib.RBpic1();
	this.PIC1.name = "PIC1";
	this.PIC1.parent = this;
	this.PIC1.setTransform(79.9,241.9,1,0.602,0,0,0,0,94.2);

	this.PIC0 = new lib.RBpic0();
	this.PIC0.name = "PIC0";
	this.PIC0.parent = this;
	this.PIC0.setTransform(79.9,119.9,1,0.602,0,0,0,0,94.2);

	this.r3 = new lib.an_RadioButton({'id': 'r3', 'label':'', 'value':'3', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r3.setTransform(31.3,177.7,1.841,1.841,0,0,0,50,11.1);

	this.rt2 = new cjs.Text("", "12px 'Arial'");
	this.rt2.name = "rt2";
	this.rt2.textAlign = "right";
	this.rt2.lineHeight = 15;
	this.rt2.lineWidth = 118;
	this.rt2.parent = this;
	this.rt2.setTransform(-73.7,25.5,1.841,1.841);

	this.rt0 = new cjs.Text("", "12px 'Arial'");
	this.rt0.name = "rt0";
	this.rt0.textAlign = "right";
	this.rt0.lineHeight = 15;
	this.rt0.lineWidth = 91;
	this.rt0.parent = this;
	this.rt0.setTransform(153.3,25.5,1.841,1.841);

	this.r2 = new lib.an_RadioButton({'id': 'r2', 'label':'', 'value':'3', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r2.setTransform(31.3,55.2,1.841,1.841,0,0,0,50,11.1);

	this.r1 = new lib.an_RadioButton({'id': 'r1', 'label':'', 'value':'2', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r1.setTransform(259.1,177.5,1.841,1.841,0,0,0,50,11);

	this.r0 = new lib.an_RadioButton({'id': 'r0', 'label':'', 'value':'1', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r0.setTransform(259.1,55,1.841,1.841,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r0},{t:this.r1},{t:this.r2},{t:this.rt0},{t:this.rt2},{t:this.r3},{t:this.PIC0},{t:this.PIC1},{t:this.PIC2},{t:this.PIC3},{t:this.check2},{t:this.check3},{t:this.check1},{t:this.check0},{t:this.rt1},{t:this.rt3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.containerRadioMC, new cjs.Rectangle(-295.4,9.1,647.5,289.7), null);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F07321").s().p("AgMAdQgYgDgWgKIAKgtQARALAUADQAdAEAfgPIAKArQgaANgdAAIgQgBg");
	this.shape.setTransform(34.1,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F07321").s().p("AgnANIAHgiIBAAAIAIAkQgSAHgSAAQgVAAgWgJg");
	this.shape_1.setTransform(34.1,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2486AB").s().p("AgZAjQAAgkgCgOQgBgXAcgRQAagRACAfIgFBXQgBAIgGADIgWAFIgDAAQgNAAgDgbg");
	this.shape_2.setTransform(9.5,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2486AB").s().p("AAHBBIgWgFQgGgDgBgIIgFhcQABggAbASQAcARgCAZIgCA0QgCAcgNAAIgDAAg");
	this.shape_3.setTransform(-8,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05F21").s().p("AAIA6QghgFgJgJQgIgKARgJQAEgCgKgEQgKgEAIgEQAHgEgFgJQgJgTgCgNQgDgSAXgFQAWgGADAVQAAApgCAQQgBAIAGAGQAFAEARAJQARAJgCAFQgCADgMAAIgVgBg");
	this.shape_4.setTransform(15.6,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F05F21").s().p("AgaBDQgNgBACgGQADgHAUgOQAKgHgCgHQgBgFgHgHQgFgEAGgCQAGgEAAgCQgFgZgBggQABgOAYAFQAZAEAAAQIABAbQAAAMgKAIQgJAJAHAFQALAIABAIQADANgcANQgVAKgOAAIgEgBg");
	this.shape_5.setTransform(-10.3,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAEIAAgIIABAGIgBADIAAgBg");
	this.shape_6.setTransform(-42.9,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBALIADgWIgBAUIgBADIgBgBg");
	this.shape_7.setTransform(-43.1,-11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A2C19").s().p("AgGAtIgggHIAEAHQgYAAgUgMQgKgGgGgHIAAADQABAFACAGQgLgFgJgLQAEgsANgTQgBAdAOASQAAgTAFgIQACAMAKANQAUAYAoABQAfgBAUgQQAKgIAOgTQACAQgEASIAIgHQAJgJAAgOQAGAOAEgDQAEgDgCgPQAIATAGAaQgGAEgLAGIgKAEIAAgGQgKAKgWADIADgJQgTALgaAAIgRgBg");
	this.shape_8.setTransform(3.3,-10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(240,115,33,0.486)").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgtAMhJQgDApACBEQBTAMACgBQALgEAbgkQADARAPANQAIAGAHADQAdAGAigIQASgEALgFQACjUgKgfQgJgFgPgEIgOgEQgaA0gUAWQgQARgFAOQgGARgIA7IABg3QAAgfgHgKQgKgOgMgeQgMgggBgQQgaAFgWAPQAGgQAHgCIAwgSQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_9.setTransform(0.9,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A2C19").s().p("AgIAHQgMgGAAgBQAAgEALgCQgMgKAEgEQADgEAfARQAPAIglgKQAMAKADAUQgFgHgNgHg");
	this.shape_10.setTransform(29.6,-29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A2C19").s().p("AgPAUQADgHAMgTQgIAFgFAAQgGAAADgEQADgFAFgFQAJgJALgBQAKAAgHALIgPATQANgIgCAIQgBAIgRALIgHACQgDAAACgGg");
	this.shape_11.setTransform(-19.6,-31.2);

	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(0.5,11,1,1,0,0,0,0.3,8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB213").s().p("AgNAOQgugDgWgIQgUgGARgEQAdgEAigCQBEgDAeAJQAhAKgkAHQgZAFgjAAIgbgBg");
	this.shape_12.setTransform(-3.1,-34.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCF13").s().p("Ah2BRQgJgDAEgXQAEgWATgiQASgjgEATQgDAcAAAkQAAAHAngDIBCgGIASg9QASg+AigCQAkgCADA5QACAdgJBCQgBAHgqAAQhUgBgxADIg0ACIgIAAg");
	this.shape_13.setTransform(-4.3,-46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB213").s().p("AAqAgQhRgDhSgNIAhACQCWANBDgQQAbgHgGgIQgHgIgogGQi7gViGAZIgNAAQgfAGgMgEQgEgDAFgDQAGgDANABQAdgFAvgEQBdgIBUADQBUADBeALQAwAFAeAFIAVAIIgCAMQgwgIgWAHQgwAThcAAIgWAAg");
	this.shape_14.setTransform(4.8,-33.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB213").s().p("AgdA/QAFgqgGgmQgFgkgMgNIgDgGQAfAGAUAJQAUAJAFALQAWAlADAoQABAUgDAMgAgZgjQAKAlgEA0IA9AIQACgQgCgUQgFgpgVgdQgXgRgdgCQAGAJAFATg");
	this.shape_15.setTransform(16.8,-49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB213").s().p("AguAfQAFgqAOgXQAFgIAOgMQAvgSAMAEIgBAFQgJAMgHAWQgPAqABAzIhGAFQABgQADgWgAgGg0QgJAIgKATQgSAlgBAzIA2gFQgBgTADgYQAHgxAWgdQgdAAgSALg");
	this.shape_16.setTransform(-6.4,-50.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCF13").s().p("ACwBoQhegLhUgDQhUgDhdAIQgvAEgdAFQAYhpAwgxQAYgZATgDQgOAXgGArQgDAVgBAQIBIgFQgCgyAPgrQAIgWAIgMQA+gIAqADQAVACAJADQAMAOAFAkQAGAngFApIBPAJQADgMgBgUQgDgogWgmQBUArAVBOQALAogHAfQgegFgwgFgAAKBPQCNAFBaAOQAGhEgpg2QgPgTgMgHQgMgGAEAMQAKAbgCAgQgBAQgDALIhfgNQAChNgSgeQgUgfg0ACQgtABgTBEQgKAhgBAhIhaAFQACgrALgrQgWAGgVAnQgYArgFA2QA8gLBmAAIBQABg");
	this.shape_17.setTransform(4.9,-45.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D38E60").s().p("AADAEQgDgCgDgEIAAgBQADADAEADIAAABIgBAAg");
	this.shape_18.setTransform(-31.3,8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AgEADIgFAAIgEgCIANgBIANgCIABAAIgBABIgCABIgFACIgFABg");
	this.shape_19.setTransform(-34.7,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgOABIAFAAIACAAIADAAIATgEIgGAEIgFACIgDAAIgCAAIgDABg");
	this.shape_20.setTransform(-34.7,7.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D38E60").s().p("AgFADIgLgDIAQAAIAGAAIADAAIADgBIADgBIACAAIgFACIgFACIgHABg");
	this.shape_21.setTransform(-34.9,6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCCF93").s().p("AgOATQAAgGADgHQgFgGgCgVIgMADQgJABgCgFQAGACAIgBQAFAAAGgCQACgBACAOIADANQACADAFAEQgIAAACAHQABADAGgEIAHgFQACgCANADQALACACgIQABgEgEgJIgDgLIAFAAIAJAiQgNAGgWgGQgJAJgHAAQgEAAgBgGg");
	this.shape_22.setTransform(-30.4,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F07321").s().p("AgMA1IAYh2QAKgbgaCQQgDAOgEADIgBABQgDAAADgRg");
	this.shape_23.setTransform(29.6,41.9);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.1,33.6,1,1,0,0,0,2.2,0.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.1,33.6,1,1,0,0,0,2.2,0.3);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_2_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.1,33.2,1,1,0,0,0,2.5,0.4);
	this.instance_3.alpha = 0.5;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B24408").s().p("AgWAGQgJgDAAgDQAAgCAJgCQAKgCAMgBQAgAAABAHQAAADgKADQgJABgOAAQgMAAgKgBg");
	this.shape_24.setTransform(34.1,33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(240,95,33,0.51)").s().p("AgvBVQgUgEAAgHIACgIQAnAXAdgNQAfgNgGgpIgJhHQgGgbgMABQgQACgSgHIABgJIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_25.setTransform(34.1,42.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F07321").s().p("AgvAJQgUgFAAgFIACgKQAXALAbADQApAFAngVIADAMQAAAFgUAFQgUAFgcgBQgbABgUgFg");
	this.shape_26.setTransform(34.1,50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D38E60").s().p("AABgCQgGgCgHADIAAgBQAKgEAFACQAJADABAFIgBACQgDgHgIgBg");
	this.shape_27.setTransform(34.9,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB213").s().p("AgJAdQh2gJgogOIgjgMQgRgGgMACQgUADgNAAIgKgCQgEgDAFgDQAGgDANABIBMgIQBdgIBUADQBUADBeAKQAwAGAeAFIAVAHIgCAMQgwgIgWAHQgwAUhZAAQgjAAgpgDg");
	this.shape_28.setTransform(4.8,-33.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F29C99").s().p("AgEAGQgPgBgLgFIAGgDQAEADAOABQARABAOgHIAGAEQgPAHgSAAIgCAAg");
	this.shape_29.setTransform(2.9,-10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F29C99").s().p("AgEAJQgPgBgLgFQAKgIANgCQATgDATALQgPAIgSAAIgCAAg");
	this.shape_30.setTransform(3,-14.1,1,1,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#801628").s().p("Ag3gEIgDgSIAFAAQANATAlAAQAbgBALgFQAJgDAEgKIAJACQAFAAgHAQQgIAQgRAJQgTgMgSAEQgNABgLAKQgSgJgGgTg");
	this.shape_31.setTransform(2.9,-12.1,1,1,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwgIQBDgCAeADQgEAIgIADQgLAFgaAAIgCAAQgiAAgMgRg");
	this.shape_32.setTransform(3.3,-10.6,1,1,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9D3C0").s().p("AgygIQBGgCAfACQgEAJgJAEQgLAEgbABIgCAAQgkAAgMgSg");
	this.shape_33.setTransform(3.4,-10.7,1,1,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3BC84").s().p("AgIAUQgKgDAMgaQAFgLAGAAQAIAAABANQAAAMgHAJQgGAHgFAAIgEgBg");
	this.shape_34.setTransform(27.8,-20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCD7A4").s().p("AgKAlIgWgLQAKgVAGgiQAQgRAUARQAWASgPAcQgLAVgSAAIgIgBg");
	this.shape_35.setTransform(28.1,-20.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3BC84").s().p("AgKAMQgFgKAEgJQABgFADgDQAHgIAFAEQAGAEACAPQADAOgLAGIgFABQgFAAgFgJg");
	this.shape_36.setTransform(-19.8,-23.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCD7A4").s().p("AAHAkQgUgCgJgWQgJgXARgPQAOgPAUAJIAGBBQgHADgIAAIgEAAg");
	this.shape_37.setTransform(-20.1,-24);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_38.setTransform(10.4,-21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAQgDgBAAgDg");
	this.shape_39.setTransform(9.1,-22.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_40.setTransform(9.6,-22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#454444").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgEAEABQAGgBADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_41.setTransform(9.7,-22.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(9.7,-22.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_43.setTransform(-3.4,-22);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1F1F1").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAEAAAAADQAAAEgEgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_44.setTransform(-4.7,-22.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_45.setTransform(-4.2,-22.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#454444").s().p("AgIAJQgDgDAAgGQAAgEADgEQAEgDAEgBQAGABADADQAEAEgBAEQABAGgEADQgDADgGABQgEgBgEgDg");
	this.shape_46.setTransform(-4.1,-22.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_47.setTransform(-4.2,-22.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6A2C19").s().p("AggARQAYglAQgBQANAAAMAXQgPgIgXAMQgMAHgKAJg");
	this.shape_48.setTransform(9.6,-27);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCD7A4").s().p("AgdAYIgFgFQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAZgnARAAQAQAAALAYQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABIgCAAIgCAAQgFgDgGgBQgUABgYAWIgDABg");
	this.shape_49.setTransform(9.6,-26.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6A2C19").s().p("AAFAEQgSgLgOASQADgSAJgHQAKgJAMAMQATAQACAJIgHAFQgHgKgJgFg");
	this.shape_50.setTransform(-4.4,-27);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCD7A4").s().p("AASAVQgNgTgNAAQgJAAgHALIgDABIgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQACgMAGgIQAHgLAJAAQAHAAAIAHQAWAUAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgGAEIgCABg");
	this.shape_51.setTransform(-4.4,-27);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6A2C19").s().p("AgGAtQgkgDgSgWQgQgUAGgUQgPAKAAAUQgOgnAigBIgHgHQAdAAAOAIIgFgPQALAIADAGQACADACgGIAFgJQADgCgEAMIAWgJQAHgBgJALIAVgCQAYgCALADIgTAGIARADQASAFAJAQQABABAAAAQAAAAgBAAQAAAAgBgBQgBAAgCgBQgJgHgFgCIAFAIQAFALgFANQAAgUgJgHQgFANgMAOQgWAZgdAAIgFAAg");
	this.shape_52.setTransform(3.5,-13.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6A2C19").s().p("AgGA9IgggHIAFAHQgYAAgVgMIgQgNIAAADQAAAFACAGQgKgFgJgLQADgdAGgTQAMgfATADIgNgGIARgDQATgCANAGIgNgPIAKADQAMAFAIAHIAKgNQADgDABANQAQgHAOAAQAOAAgSAKQAYgDAVAEQAKADAGADIgIAEIAPAOQAOAWAIAnQgKAHgRAHIAAgGQgKAKgWADIADgJQgTAMgaAAIgRgCg");
	this.shape_53.setTransform(3.3,-12.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6A2C19").s().p("AgqhKQAjADAIACQAdAIANAZQgegVgVADQgLABAHAIQAFAGAHADQgNABADAHQABACAJAJQgRAAADAPQADAPAeAEQgBANgFABQgEAAgEgDIgEgEQAKAXgHADQgEACgDgDIgMgSQgDAYgHAUQAJhLgahKg");
	this.shape_54.setTransform(27.9,-26.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6A2C19").s().p("AgrhKQAiADAJACQAWAGAOARQAHAKACAHQgJADgVgIQANAMABAOQAAAHgCAEQgBgEgRgNQAJAKAAARQAAARgGABQgEAAgFgDIgDgEQAKAXgHADQgEACgDgEIgMgRQgDAYgHAUQAJhLgahKg");
	this.shape_55.setTransform(28.1,-26.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCgABYAuIgGAEIANAOQAOASAGAZQBxg8g2iOQhhAOiEgNQhCgHgvgKQgtBLAbBAQAUAzAnAOQAFgVANgVIANgQQgEACgJgBQAIgMAWAAQALAAAKACIgIgLIALgDQAPgBAPAMQAFgKAMgBQALAAgEAMQAQgLAjAAIgQAPQANgEAUAEQAXAFAKAMIgFgBQgDAAgEACg");
	this.shape_56.setTransform(4,-20.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCg");
	this.shape_57.setTransform(4,-20.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6A2C19").s().p("AgNAEQgWAFgFgHQAKABAIgDQAOgGAIgLQAIgJgDgGQgDgDgFgBIgGABQAIgHAEgGQAJgNgPgCQgQgCgUASQAKgRAdgKIAoABQgnA0gBBgQgMgmgBghg");
	this.shape_58.setTransform(-17.5,-28.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6A2C19").s().p("AgJAZIgDgVQgYAFgDgIQgEgMAJgMIAKgLQgQAKgBgMQABgPAVgNIAUgKIApABQgnA1gCBfQgGgYgEgag");
	this.shape_59.setTransform(-17.6,-28.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7FAEF").s().p("AgvBVQgUgEAAgHIAjijIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_60.setTransform(34.1,42.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F07321").s().p("AgUANQgDgDAFgKQAEgKAEgFQAEgEgBAHQgCAFAAAFQABAKALACQAlAHgkAAQgUAAgEgEg");
	this.shape_61.setTransform(26.7,50.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F07321").s().p("AhQAZQgOAAgDgGIAxACQA1ABAbgDQAdgCg2gDQg1gDgNgFQgLgEABgOQACgNgPAGQACgEADAAIAIgBICLAAQAIAAACABQADACAEAJQAJARACALQgCAFgDACQgDACgIAAg");
	this.shape_62.setTransform(33.6,50.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCCF93").s().p("AgNAgQAQAAADgFQAGgHgIADQgMAEgJgCIAAgDIgCgCQAVABAGgHQAJgLgLAGQgMAEgOgCIACgEIgCgBQAJABAJgCQANgCABgEQABgGgKAEQgPADgLgFIACgCIgEgEQAIABAFgBQAGgBgBgDIgDgHQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEgCACgDQAOgCAOABQgCAKgMALQADACABAEQABAEgEADQACACAAAFQAAAGgEABQAEALgPAEIgHABIgGgBg");
	this.shape_63.setTransform(-34.4,6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCD7A4").s().p("AgNAfQgEgDACgHQgIgHAHgHQgGgCgBgFQgBgFAEgDQgGgEAAgIQACgIAZgDQANgBANAAQgCALgMAKQADACABAFQABAEgEACQADACAAAGQAAAFgFACQAFAKgQAEIgHACQgFAAgCgCg");
	this.shape_64.setTransform(-34.5,7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCD7A4").s().p("Ag1AqIAWgSQgFgCgHgSIgNgVQgFgKACgCQAEgEAIAFQALAGAFAPQAFgfADgMQAEgOAGAAQAJgCgGA1QALgdAHgLQAGgLAGACQAEABgEASIgJAjQAbglAHAEQAEACgaArIARgIQARgIADAEQAEAGggAQIgHAUQgMASgUgHIgXAVg");
	this.shape_65.setTransform(36.5,-11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C7D333").s().p("AgXgKQgJgOgEgJIAGgEQAMAZAWAVQANALAMgRIAIAHQgHAQgMAMQgXgVgSgbg");
	this.shape_66.setTransform(31.6,-4.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ECFF56").s().p("AgXgGIgNgXIAUgMQAOAUAnAjIgFAKQgHALgHAHQgXgVgSgbg");
	this.shape_67.setTransform(31.6,-5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C7D333").s().p("AgMAfQAMgCADgJQACgGgHgPQgHgPgFgSIAIgBQAOAuAHATQAAADgZADg");
	this.shape_68.setTransform(-24.2,7.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ECFF56").s().p("AgXAeQg8gEg2gNIAEgqQAwAQA4AEQBcAIBLgdIAAApQg2AUhKAAIghgBg");
	this.shape_69.setTransform(0.9,16.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#ECFF56").s().p("AgkAdQg0gDgsgNIAIgpQAvAJA0ADQBYAEBFgRIABAiQhGAZhKAAIgZgBg");
	this.shape_70.setTransform(1.3,7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAkAaADQAeAEAIgsIAOAAQgGAggQAdQgQAdgUARQgWgcgNhOgAgYAPQAIAYAJgDQAMgEAVgxQgVARgTgHQgLgDgGgHQAAAOAHASg");
	this.shape_71.setTransform(1.9,-2.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAlAaADQAeADAIgsIAOAAQgGAhgQAbQgQAegUAQQgWgagNhPg");
	this.shape_72.setTransform(1.9,-2.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCD7A4").s().p("AgDAUQgZgDgGgkIBFAAQgHAngbAAIgEAAg");
	this.shape_73.setTransform(1.6,-6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F07321").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgyAPhSQAJg3ALgmIAKggQAFgMAGgCQAUgHAcgLQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_74.setTransform(0.9,7.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2486AB").s().p("Ah/BmIgCg4IAKAwQAZAGAtAAQAIgdAGgdQANg6gKgCQgNgEgOgKQgOgKAVAHQAWAFAygCQAjgBgJAFQgFADgVAHQgKADAEAIIAQA1QALAsAGAAQAKABA3gFQAEgqgDhIQgBgUgVgCIguACQgbAAgLgDQgNgEgDgKQgDgJgDAGIgLAOQgHAGgcgCQgXgCgVgGQgTgGgFAzIABg/QAQgJAXgIQAugRAiABQA1ACBPAcIAEBCQADA3gBA2QgSAEgpAAIgmgBQgHgegJgdQgRg5gHACQgHADgKA7IgJA7QgJACgQABIgJABQgcAAgfgIg");
	this.shape_75.setTransform(1.3,28.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2486AB").s().p("Ah/BmQgCgaABhOIABhKIAngRQAugRAhABQA1ACBPAcIAFBCQACA3AAA2QgTAEgpAAIglgBQgIgegJgdQgRg5gHACQgHADgKA7IgIA7QgJACgQABIgKABQgcAAgfgIg");
	this.shape_76.setTransform(1.3,28.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B1DF63").s().p("AhYAzIgIhfQAKAFAOAEQAfAHAfgEQgQAHgYgBQgNgBgEAMQgFAMAGAOQAPAmAzgNQAzgNAPgWQALgQgQgPQgKgKgHgNIAJgGQARAXAbAfQgUAXgiATQgoAXgoAAQgaAAgZgJg");
	this.shape_77.setTransform(23,-1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1DF63").s().p("AhCBNIgSgyIAKgCQAGAUAIAGQALAJAZgGQAqgLAWgqQAHgPAAgKQAAgKgJAGQgTALgZAOQAzgfAogqQgMApgWBaQgXAOgxAFQgVADgSAAIgGAAg");
	this.shape_78.setTransform(-16.3,2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B1DF63").s().p("AhUAbQA2gLA+guIA1guIgJAgQgMArgNA4QgXAOgxAFIgtADIgSgyg");
	this.shape_79.setTransform(-16.3,2.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B24408").s().p("AgMALIg4gEQALgQAzgBQAvgBAcALQgVALg0AAIgIAAg");
	this.shape_80.setTransform(9.6,37.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B24408").s().p("AgYAKIgugKQAVgQA1AFQArAEAYAKQgcAKghAAQgQAAgSgDg");
	this.shape_81.setTransform(-6.8,38.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F05F21").s().p("AgcBQQgRAAgRgFQgBgQABgRQAAgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgBgCQgJgSgbhHQAZgLA7AAQAdAAAYACIAAAzQgBgMgEgIQgGgLgKACQgqANgfgFQgPgDAFAQQACAKALAdQAGANAGAEQADABAMADQAIABgEACIgMACQgJACAEAFQAEAEAMACQAHACgHADQgLAHgCAHQgEAQBJAKQAXADATgCQAWgDAGgIQACACABAHIAAAFQgoAJggAAQgiAAgZgLg");
	this.shape_82.setTransform(12.9,46.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B24408").s().p("AglAGIgLgJIgKAGQgWAAgBgEIgBgMQARAGARgBQAwAUBTgSQgBAIgNAFQgMAEggADIgOAAQggAAgQgIg");
	this.shape_83.setTransform(14.9,55.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F05F21").s().p("AhPBSIAEgFQAHAIASABQASAAAVgFIApgMQAOgFgCgJQgCgJgGgGIgFgFQATgGAFgGQAFgGgLAAIgTABQgIAAAJgFQAKgGAEgFQADgEACgLQAFgZAAgJQABgQgOACQg0AJgagRQgKgGADAlIAGAmIgBAAQgGgfgPg3QAdgNA7AHQAdAEAYAGQgLA6gEANIgFANQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgcAFIgUABQgaAAgRgNg");
	this.shape_84.setTransform(-7.7,46.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCD7A4").s().p("AgaAgQgMgBADgFQgKACAEgMQAIgTgBgIIgEABQgBAAgCgGQgCgFAJgDIAUgEIAMgDQACABACAEIADAIQACAFADABIAYAAIACAJIAHAZQgOAHgWgHQgJAJgGAAIgNABIgFAAg");
	this.shape_85.setTransform(-30.4,6.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ECFF56").s().p("AgRgPIgCgIIgDgKIAXgCIAWBBQAAADgZADg");
	this.shape_86.setTransform(-25,7.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B24408").s().p("AkLAYQgdgFABgHQAAgEACgFQAXASAogGQAdgFAOgHQAKgEAFAAQANABAJgCQAAAHgCACQgCACgFABIgLABQgEgBgCgEQgFAHgGADQgJAFgTAEQgLACgLAAQgOAAgQgDgAB2gKQgLAAgDgDQgDgCAAgHIAAgEQABAFADACQAEACAJAAICjAAQAIAAAEgCQADgCABgFIAAAEQAAAHgDACQgDADgKAAg");
	this.shape_87.setTransform(13.6,54.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F07321").s().p("AkmEjQAEgIAQgOIAUgRQAFgHgGgHQgIgHgBgEQgCgEAHgCQAGgDAAgBQgDgTgKgoIgKgkQAdgNA8AHQAdAEAYAGIgGAfIgJAoIgFAOQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgdAFIgUABQgaAAgRgNgAgkEbQgSAAgRgFQgBgQABgRQABgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgCgCIgjhaQAYgLA7AAQAdAAAZACIgBBwQgBAJAMAIQAIAFAUAIIAWAJQAGAEABALIAAAFQgoAJgfAAQgiAAgZgLgAB0EOQgJAAgDgCQgDgCgBgFQACgLAIgSQAFgKADgBQABgBAJAAICLAAQAJAAABABQADABAFAKQAJASABALQgBAFgDACQgDACgJAAgAh0hnQgCgMgBgNIAAgLIAAgNQAAgVACgMQACgXAJgOIAFgHIANgPQASgXARggIAaAKIgBAtIgBAWIgFBGIgBANIgEAkIgGAvIg6AEQgKgZgDgagAj8g/QABgMABgcIAAgPIABgVIABgNQADgjAHgjIAFgVIAAgBQAIgeAHgTIAdgKQAMAhAIAaIAGAWQAGAdAAARIgCAYIgDANIgKAkIgPAsg");
	this.shape_88.setTransform(13.8,25.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B1DF63").s().p("AhYAzIgIhfIAvANQA3AGAvgiQARAXAbAfIgOANQgTARgVAMIgTAKQgeANgfAAQgZAAgagJg");
	this.shape_89.setTransform(23,-1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFB213").s().p("ABWBAQAFgrgFglQgFgdgHgOIgFgHIgEgFIASAEIAcAIIAGACQAVAJAEALQAXAlACAoQACAUgEANgAijAcQAGgqAOgYQAFgHAOgNIAEgBQAsgQAMAEIgCAEIgPAiQgPArABAyIhHAGQAAgRADgVg");
	this.shape_90.setTransform(5.2,-50);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCF13").s().p("ACwBoQhfgLhTgDQhVgDhdAIIhMAJQAGgaAIgWQAWhFAlglQAOgPAQgIIAMgFQgOAXgGArQgDAVAAAQIBHgFQgBgyAPgrIAPgiQA/gIAqADQAVACAJADIAFAHQAHAPAFAcQAFAngFApIBPAJQAEgMgCgUQgCgogXgmQBVArAVBOIADANQAGAggFAaQgfgFgvgFg");
	this.shape_91.setTransform(5,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-57.3,86.6,114.7);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F07321").s().p("AgMAdQgYgDgWgKIAKgtQARALAUADQAdAEAfgPIAKArQgaANgdAAIgQgBg");
	this.shape.setTransform(34.1,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F07321").s().p("AgnANIAHgiIBAAAIAIAkQgSAHgSAAQgVAAgWgJg");
	this.shape_1.setTransform(34.1,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2486AB").s().p("AgZAjQAAgkgCgOQgBgXAcgRQAagRACAfIgFBXQgBAIgGADIgWAFIgDAAQgNAAgDgbg");
	this.shape_2.setTransform(9.5,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2486AB").s().p("AAHBBIgWgFQgGgDgBgIIgFhcQABggAbASQAcARgCAZIgCA0QgCAcgNAAIgDAAg");
	this.shape_3.setTransform(-8,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05F21").s().p("AAIA6QghgFgJgJQgIgKARgJQAEgCgKgEQgKgEAIgEQAHgEgFgJQgJgTgCgNQgDgSAXgFQAWgGADAVQAAApgCAQQgBAIAGAGQAFAEARAJQARAJgCAFQgCADgMAAIgVgBg");
	this.shape_4.setTransform(15.6,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F05F21").s().p("AgaBDQgNgBACgGQADgHAUgOQAKgHgCgHQgBgFgHgHQgFgEAGgCQAGgEAAgCQgFgZgBggQABgOAYAFQAZAEAAAQIABAbQAAAMgKAIQgJAJAHAFQALAIABAIQADANgcANQgVAKgOAAIgEgBg");
	this.shape_5.setTransform(-10.3,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAEIAAgIIABAGIgBADIAAgBg");
	this.shape_6.setTransform(-42.9,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBALIADgWIgBAUIgBADIgBgBg");
	this.shape_7.setTransform(-43.1,-11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A2C19").s().p("AgGAtIgggHIAEAHQgYAAgUgMQgKgGgGgHIAAADQABAFACAGQgLgFgJgLQAEgsANgTQgBAdAOASQAAgTAFgIQACAMAKANQAUAYAoABQAfgBAUgQQAKgIAOgTQACAQgEASIAIgHQAJgJAAgOQAGAOAEgDQAEgDgCgPQAIATAGAaQgGAEgLAGIgKAEIAAgGQgKAKgWADIADgJQgTALgaAAIgRgBg");
	this.shape_8.setTransform(3.3,-10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(240,115,33,0.486)").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgtAMhJQgDApACBEQBTAMACgBQALgEAbgkQADARAPANQAIAGAHADQAdAGAigIQASgEALgFQACjUgKgfQgJgFgPgEIgOgEQgaA0gUAWQgQARgFAOQgGARgIA7IABg3QAAgfgHgKQgKgOgMgeQgMgggBgQQgaAFgWAPQAGgQAHgCIAwgSQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_9.setTransform(0.9,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A2C19").s().p("AgIAHQgMgGAAgBQAAgEALgCQgMgKAEgEQADgEAfARQAPAIglgKQAMAKADAUQgFgHgNgHg");
	this.shape_10.setTransform(29.6,-29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A2C19").s().p("AgPAUQADgHAMgTQgIAFgFAAQgGAAADgEQADgFAFgFQAJgJALgBQAKAAgHALIgPATQANgIgCAIQgBAIgRALIgHACQgDAAACgGg");
	this.shape_11.setTransform(-19.6,-31.2);

	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(0.5,11,1,1,0,0,0,0.3,8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB213").s().p("AgNAOQgugDgWgIQgUgGARgEQAdgEAigCQBEgDAeAJQAhAKgkAHQgZAFgjAAIgbgBg");
	this.shape_12.setTransform(-3.1,-34.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCF13").s().p("Ah2BRQgJgDAEgXQAEgWATgiQASgjgEATQgDAcAAAkQAAAHAngDIBCgGIASg9QASg+AigCQAkgCADA5QACAdgJBCQgBAHgqAAQhUgBgxADIg0ACIgIAAg");
	this.shape_13.setTransform(-4.3,-46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB213").s().p("AAqAgQhRgDhSgNIAhACQCWANBDgQQAbgHgGgIQgHgIgogGQi7gViGAZIgNAAQgfAGgMgEQgEgDAFgDQAGgDANABQAdgFAvgEQBdgIBUADQBUADBeALQAwAFAeAFIAVAIIgCAMQgwgIgWAHQgwAThcAAIgWAAg");
	this.shape_14.setTransform(4.8,-33.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB213").s().p("AgdA/QAFgqgGgmQgFgkgMgNIgDgGQAfAGAUAJQAUAJAFALQAWAlADAoQABAUgDAMgAgZgjQAKAlgEA0IA9AIQACgQgCgUQgFgpgVgdQgXgRgdgCQAGAJAFATg");
	this.shape_15.setTransform(16.8,-49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB213").s().p("AguAfQAFgqAOgXQAFgIAOgMQAvgSAMAEIgBAFQgJAMgHAWQgPAqABAzIhGAFQABgQADgWgAgGg0QgJAIgKATQgSAlgBAzIA2gFQgBgTADgYQAHgxAWgdQgdAAgSALg");
	this.shape_16.setTransform(-6.4,-50.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCF13").s().p("ACwBoQhegLhUgDQhUgDhdAIQgvAEgdAFQAYhpAwgxQAYgZATgDQgOAXgGArQgDAVgBAQIBIgFQgCgyAPgrQAIgWAIgMQA+gIAqADQAVACAJADQAMAOAFAkQAGAngFApIBPAJQADgMgBgUQgDgogWgmQBUArAVBOQALAogHAfQgegFgwgFgAAKBPQCNAFBaAOQAGhEgpg2QgPgTgMgHQgMgGAEAMQAKAbgCAgQgBAQgDALIhfgNQAChNgSgeQgUgfg0ACQgtABgTBEQgKAhgBAhIhaAFQACgrALgrQgWAGgVAnQgYArgFA2QA8gLBmAAIBQABg");
	this.shape_17.setTransform(4.9,-45.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D38E60").s().p("AADAEQgDgCgDgEIAAgBQADADAEADIAAABIgBAAg");
	this.shape_18.setTransform(-31.3,8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AgEADIgFAAIgEgCIANgBIANgCIABAAIgBABIgCABIgFACIgFABg");
	this.shape_19.setTransform(-34.7,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgOABIAFAAIACAAIADAAIATgEIgGAEIgFACIgDAAIgCAAIgDABg");
	this.shape_20.setTransform(-34.7,7.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D38E60").s().p("AgFADIgLgDIAQAAIAGAAIADAAIADgBIADgBIACAAIgFACIgFACIgHABg");
	this.shape_21.setTransform(-34.9,6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCCF93").s().p("AgOATQAAgGADgHQgFgGgCgVIgMADQgJABgCgFQAGACAIgBQAFAAAGgCQACgBACAOIADANQACADAFAEQgIAAACAHQABADAGgEIAHgFQACgCANADQALACACgIQABgEgEgJIgDgLIAFAAIAJAiQgNAGgWgGQgJAJgHAAQgEAAgBgGg");
	this.shape_22.setTransform(-30.4,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F07321").s().p("AgMA1IAYh2QAKgbgaCQQgDAOgEADIgBABQgDAAADgRg");
	this.shape_23.setTransform(29.6,41.9);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.1,33.6,1,1,0,0,0,2.2,0.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.1,33.6,1,1,0,0,0,2.2,0.3);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_2_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.1,33.2,1,1,0,0,0,2.5,0.4);
	this.instance_3.alpha = 0.5;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B24408").s().p("AgWAGQgJgDAAgDQAAgCAJgCQAKgCAMgBQAgAAABAHQAAADgKADQgJABgOAAQgMAAgKgBg");
	this.shape_24.setTransform(34.1,33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(240,95,33,0.51)").s().p("AgvBVQgUgEAAgHIACgIQAnAXAdgNQAfgNgGgpIgJhHQgGgbgMABQgQACgSgHIABgJIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_25.setTransform(34.1,42.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F07321").s().p("AgvAJQgUgFAAgFIACgKQAXALAbADQApAFAngVIADAMQAAAFgUAFQgUAFgcgBQgbABgUgFg");
	this.shape_26.setTransform(34.1,50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D38E60").s().p("AABgCQgGgCgHADIAAgBQAKgEAFACQAJADABAFIgBACQgDgHgIgBg");
	this.shape_27.setTransform(34.9,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB213").s().p("AgJAdQh2gJgogOIgjgMQgRgGgMACQgUADgNAAIgKgCQgEgDAFgDQAGgDANABIBMgIQBdgIBUADQBUADBeAKQAwAGAeAFIAVAHIgCAMQgwgIgWAHQgwAUhZAAQgjAAgpgDg");
	this.shape_28.setTransform(4.8,-33.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F29C99").s().p("AgEAGQgPgBgLgFIAGgDQAEADAOABQARABAOgHIAGAEQgPAHgSAAIgCAAg");
	this.shape_29.setTransform(2.9,-14.4,1,1,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F29C99").s().p("AgEAJQgPgBgLgFQAKgIANgCQATgDATALQgPAIgSAAIgCAAg");
	this.shape_30.setTransform(2.8,-10.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#801628").s().p("Ag3gEIgDgSIAFAAQANATAlAAQAbgBALgFQAJgDAEgKIAJACQAFAAgHAQQgIAQgRAJQgTgMgSAEQgNABgLAKQgSgJgGgTg");
	this.shape_31.setTransform(2.9,-12.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwgIQBDgCAeADQgEAIgIADQgLAFgaAAIgCAAQgiAAgMgRg");
	this.shape_32.setTransform(2.6,-14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9D3C0").s().p("AgygIQBGgCAfACQgEAJgJAEQgLAEgbABIgCAAQgkAAgMgSg");
	this.shape_33.setTransform(2.4,-13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3BC84").s().p("AgIAUQgKgDAMgaQAFgLAGAAQAIAAABANQAAAMgHAJQgGAHgFAAIgEgBg");
	this.shape_34.setTransform(27.8,-20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCD7A4").s().p("AgKAlIgWgLQAKgVAGgiQAQgRAUARQAWASgPAcQgLAVgSAAIgIgBg");
	this.shape_35.setTransform(28.1,-20.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3BC84").s().p("AgKAMQgFgKAEgJQABgFADgDQAHgIAFAEQAGAEACAPQADAOgLAGIgFABQgFAAgFgJg");
	this.shape_36.setTransform(-19.8,-23.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCD7A4").s().p("AAHAkQgUgCgJgWQgJgXARgPQAOgPAUAJIAGBBQgHADgIAAIgEAAg");
	this.shape_37.setTransform(-20.1,-24);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_38.setTransform(10.4,-21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAQgDgBAAgDg");
	this.shape_39.setTransform(9.1,-22.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_40.setTransform(9.6,-22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#454444").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgEAEABQAGgBADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_41.setTransform(9.7,-22.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(9.7,-22.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_43.setTransform(-3.4,-22);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1F1F1").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAEAAAAADQAAAEgEgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_44.setTransform(-4.7,-22.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_45.setTransform(-4.2,-22.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#454444").s().p("AgIAJQgDgDAAgGQAAgEADgEQAEgDAEgBQAGABADADQAEAEgBAEQABAGgEADQgDADgGABQgEgBgEgDg");
	this.shape_46.setTransform(-4.1,-22.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_47.setTransform(-4.2,-22.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6A2C19").s().p("AggARQAYglAQgBQANAAAMAXQgPgIgXAMQgMAHgKAJg");
	this.shape_48.setTransform(9.6,-27);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCD7A4").s().p("AgdAYIgFgFQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAZgnARAAQAQAAALAYQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABIgCAAIgCAAQgFgDgGgBQgUABgYAWIgDABg");
	this.shape_49.setTransform(9.6,-26.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6A2C19").s().p("AAFAEQgSgLgOASQADgSAJgHQAKgJAMAMQATAQACAJIgHAFQgHgKgJgFg");
	this.shape_50.setTransform(-4.4,-27);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCD7A4").s().p("AASAVQgNgTgNAAQgJAAgHALIgDABIgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQACgMAGgIQAHgLAJAAQAHAAAIAHQAWAUAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgGAEIgCABg");
	this.shape_51.setTransform(-4.4,-27);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6A2C19").s().p("AgGAtQgkgDgSgWQgQgUAGgUQgPAKAAAUQgOgnAigBIgHgHQAdAAAOAIIgFgPQALAIADAGQACADACgGIAFgJQADgCgEAMIAWgJQAHgBgJALIAVgCQAYgCALADIgTAGIARADQASAFAJAQQABABAAAAQAAAAgBAAQAAAAgBgBQgBAAgCgBQgJgHgFgCIAFAIQAFALgFANQAAgUgJgHQgFANgMAOQgWAZgdAAIgFAAg");
	this.shape_52.setTransform(3.5,-13.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6A2C19").s().p("AgGA9IgggHIAFAHQgYAAgVgMIgQgNIAAADQAAAFACAGQgKgFgJgLQADgdAGgTQAMgfATADIgNgGIARgDQATgCANAGIgNgPIAKADQAMAFAIAHIAKgNQADgDABANQAQgHAOAAQAOAAgSAKQAYgDAVAEQAKADAGADIgIAEIAPAOQAOAWAIAnQgKAHgRAHIAAgGQgKAKgWADIADgJQgTAMgaAAIgRgCg");
	this.shape_53.setTransform(3.3,-12.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6A2C19").s().p("AgqhKQAjADAIACQAdAIANAZQgegVgVADQgLABAHAIQAFAGAHADQgNABADAHQABACAJAJQgRAAADAPQADAPAeAEQgBANgFABQgEAAgEgDIgEgEQAKAXgHADQgEACgDgDIgMgSQgDAYgHAUQAJhLgahKg");
	this.shape_54.setTransform(27.9,-26.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6A2C19").s().p("AgrhKQAiADAJACQAWAGAOARQAHAKACAHQgJADgVgIQANAMABAOQAAAHgCAEQgBgEgRgNQAJAKAAARQAAARgGABQgEAAgFgDIgDgEQAKAXgHADQgEACgDgEIgMgRQgDAYgHAUQAJhLgahKg");
	this.shape_55.setTransform(28.1,-26.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCgABYAuIgGAEIANAOQAOASAGAZQBxg8g2iOQhhAOiEgNQhCgHgvgKQgtBLAbBAQAUAzAnAOQAFgVANgVIANgQQgEACgJgBQAIgMAWAAQALAAAKACIgIgLIALgDQAPgBAPAMQAFgKAMgBQALAAgEAMQAQgLAjAAIgQAPQANgEAUAEQAXAFAKAMIgFgBQgDAAgEACg");
	this.shape_56.setTransform(4,-20.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCg");
	this.shape_57.setTransform(4,-20.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6A2C19").s().p("AgNAEQgWAFgFgHQAKABAIgDQAOgGAIgLQAIgJgDgGQgDgDgFgBIgGABQAIgHAEgGQAJgNgPgCQgQgCgUASQAKgRAdgKIAoABQgnA0gBBgQgMgmgBghg");
	this.shape_58.setTransform(-17.5,-28.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6A2C19").s().p("AgJAZIgDgVQgYAFgDgIQgEgMAJgMIAKgLQgQAKgBgMQABgPAVgNIAUgKIApABQgnA1gCBfQgGgYgEgag");
	this.shape_59.setTransform(-17.6,-28.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7FAEF").s().p("AgvBVQgUgEAAgHIAjijIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_60.setTransform(34.1,42.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F07321").s().p("AgUANQgDgDAFgKQAEgKAEgFQAEgEgBAHQgCAFAAAFQABAKALACQAlAHgkAAQgUAAgEgEg");
	this.shape_61.setTransform(26.7,50.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F07321").s().p("AhQAZQgOAAgDgGIAxACQA1ABAbgDQAdgCg2gDQg1gDgNgFQgLgEABgOQACgNgPAGQACgEADAAIAIgBICLAAQAIAAACABQADACAEAJQAJARACALQgCAFgDACQgDACgIAAg");
	this.shape_62.setTransform(33.6,50.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCCF93").s().p("AgNAgQAQAAADgFQAGgHgIADQgMAEgJgCIAAgDIgCgCQAVABAGgHQAJgLgLAGQgMAEgOgCIACgEIgCgBQAJABAJgCQANgCABgEQABgGgKAEQgPADgLgFIACgCIgEgEQAIABAFgBQAGgBgBgDIgDgHQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEgCACgDQAOgCAOABQgCAKgMALQADACABAEQABAEgEADQACACAAAFQAAAGgEABQAEALgPAEIgHABIgGgBg");
	this.shape_63.setTransform(-34.4,6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCD7A4").s().p("AgNAfQgEgDACgHQgIgHAHgHQgGgCgBgFQgBgFAEgDQgGgEAAgIQACgIAZgDQANgBANAAQgCALgMAKQADACABAFQABAEgEACQADACAAAGQAAAFgFACQAFAKgQAEIgHACQgFAAgCgCg");
	this.shape_64.setTransform(-34.5,7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCD7A4").s().p("Ag1AqIAWgSQgFgCgHgSIgNgVQgFgKACgCQAEgEAIAFQALAGAFAPQAFgfADgMQAEgOAGAAQAJgCgGA1QALgdAHgLQAGgLAGACQAEABgEASIgJAjQAbglAHAEQAEACgaArIARgIQARgIADAEQAEAGggAQIgHAUQgMASgUgHIgXAVg");
	this.shape_65.setTransform(36.5,-11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C7D333").s().p("AgXgKQgJgOgEgJIAGgEQAMAZAWAVQANALAMgRIAIAHQgHAQgMAMQgXgVgSgbg");
	this.shape_66.setTransform(31.6,-4.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ECFF56").s().p("AgXgGIgNgXIAUgMQAOAUAnAjIgFAKQgHALgHAHQgXgVgSgbg");
	this.shape_67.setTransform(31.6,-5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C7D333").s().p("AgMAfQAMgCADgJQACgGgHgPQgHgPgFgSIAIgBQAOAuAHATQAAADgZADg");
	this.shape_68.setTransform(-24.2,7.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ECFF56").s().p("AgXAeQg8gEg2gNIAEgqQAwAQA4AEQBcAIBLgdIAAApQg2AUhKAAIghgBg");
	this.shape_69.setTransform(0.9,16.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#ECFF56").s().p("AgkAdQg0gDgsgNIAIgpQAvAJA0ADQBYAEBFgRIABAiQhGAZhKAAIgZgBg");
	this.shape_70.setTransform(1.3,7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAkAaADQAeAEAIgsIAOAAQgGAggQAdQgQAdgUARQgWgcgNhOgAgYAPQAIAYAJgDQAMgEAVgxQgVARgTgHQgLgDgGgHQAAAOAHASg");
	this.shape_71.setTransform(1.9,-2.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAlAaADQAeADAIgsIAOAAQgGAhgQAbQgQAegUAQQgWgagNhPg");
	this.shape_72.setTransform(1.9,-2.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCD7A4").s().p("AgDAUQgZgDgGgkIBFAAQgHAngbAAIgEAAg");
	this.shape_73.setTransform(1.6,-6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F07321").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgyAPhSQAJg3ALgmIAKggQAFgMAGgCQAUgHAcgLQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_74.setTransform(0.9,7.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2486AB").s().p("Ah/BmIgCg4IAKAwQAZAGAtAAQAIgdAGgdQANg6gKgCQgNgEgOgKQgOgKAVAHQAWAFAygCQAjgBgJAFQgFADgVAHQgKADAEAIIAQA1QALAsAGAAQAKABA3gFQAEgqgDhIQgBgUgVgCIguACQgbAAgLgDQgNgEgDgKQgDgJgDAGIgLAOQgHAGgcgCQgXgCgVgGQgTgGgFAzIABg/QAQgJAXgIQAugRAiABQA1ACBPAcIAEBCQADA3gBA2QgSAEgpAAIgmgBQgHgegJgdQgRg5gHACQgHADgKA7IgJA7QgJACgQABIgJABQgcAAgfgIg");
	this.shape_75.setTransform(1.3,28.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2486AB").s().p("Ah/BmQgCgaABhOIABhKIAngRQAugRAhABQA1ACBPAcIAFBCQACA3AAA2QgTAEgpAAIglgBQgIgegJgdQgRg5gHACQgHADgKA7IgIA7QgJACgQABIgKABQgcAAgfgIg");
	this.shape_76.setTransform(1.3,28.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B1DF63").s().p("AhYAzIgIhfQAKAFAOAEQAfAHAfgEQgQAHgYgBQgNgBgEAMQgFAMAGAOQAPAmAzgNQAzgNAPgWQALgQgQgPQgKgKgHgNIAJgGQARAXAbAfQgUAXgiATQgoAXgoAAQgaAAgZgJg");
	this.shape_77.setTransform(23,-1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1DF63").s().p("AhCBNIgSgyIAKgCQAGAUAIAGQALAJAZgGQAqgLAWgqQAHgPAAgKQAAgKgJAGQgTALgZAOQAzgfAogqQgMApgWBaQgXAOgxAFQgVADgSAAIgGAAg");
	this.shape_78.setTransform(-16.3,2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B1DF63").s().p("AhUAbQA2gLA+guIA1guIgJAgQgMArgNA4QgXAOgxAFIgtADIgSgyg");
	this.shape_79.setTransform(-16.3,2.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B24408").s().p("AgMALIg4gEQALgQAzgBQAvgBAcALQgVALg0AAIgIAAg");
	this.shape_80.setTransform(9.6,37.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B24408").s().p("AgYAKIgugKQAVgQA1AFQArAEAYAKQgcAKghAAQgQAAgSgDg");
	this.shape_81.setTransform(-6.8,38.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F05F21").s().p("AgcBQQgRAAgRgFQgBgQABgRQAAgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgBgCQgJgSgbhHQAZgLA7AAQAdAAAYACIAAAzQgBgMgEgIQgGgLgKACQgqANgfgFQgPgDAFAQQACAKALAdQAGANAGAEQADABAMADQAIABgEACIgMACQgJACAEAFQAEAEAMACQAHACgHADQgLAHgCAHQgEAQBJAKQAXADATgCQAWgDAGgIQACACABAHIAAAFQgoAJggAAQgiAAgZgLg");
	this.shape_82.setTransform(12.9,46.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B24408").s().p("AglAGIgLgJIgKAGQgWAAgBgEIgBgMQARAGARgBQAwAUBTgSQgBAIgNAFQgMAEggADIgOAAQggAAgQgIg");
	this.shape_83.setTransform(14.9,55.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F05F21").s().p("AhPBSIAEgFQAHAIASABQASAAAVgFIApgMQAOgFgCgJQgCgJgGgGIgFgFQATgGAFgGQAFgGgLAAIgTABQgIAAAJgFQAKgGAEgFQADgEACgLQAFgZAAgJQABgQgOACQg0AJgagRQgKgGADAlIAGAmIgBAAQgGgfgPg3QAdgNA7AHQAdAEAYAGQgLA6gEANIgFANQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgcAFIgUABQgaAAgRgNg");
	this.shape_84.setTransform(-7.7,46.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCD7A4").s().p("AgaAgQgMgBADgFQgKACAEgMQAIgTgBgIIgEABQgBAAgCgGQgCgFAJgDIAUgEIAMgDQACABACAEIADAIQACAFADABIAYAAIACAJIAHAZQgOAHgWgHQgJAJgGAAIgNABIgFAAg");
	this.shape_85.setTransform(-30.4,6.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ECFF56").s().p("AgRgPIgCgIIgDgKIAXgCIAWBBQAAADgZADg");
	this.shape_86.setTransform(-25,7.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B24408").s().p("AkLAYQgdgFABgHQAAgEACgFQAXASAogGQAdgFAOgHQAKgEAFAAQANABAJgCQAAAHgCACQgCACgFABIgLABQgEgBgCgEQgFAHgGADQgJAFgTAEQgLACgLAAQgOAAgQgDgAB2gKQgLAAgDgDQgDgCAAgHIAAgEQABAFADACQAEACAJAAICjAAQAIAAAEgCQADgCABgFIAAAEQAAAHgDACQgDADgKAAg");
	this.shape_87.setTransform(13.6,54.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F07321").s().p("AkmEjQAEgIAQgOIAUgRQAFgHgGgHQgIgHgBgEQgCgEAHgCQAGgDAAgBQgDgTgKgoIgKgkQAdgNA8AHQAdAEAYAGIgGAfIgJAoIgFAOQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgdAFIgUABQgaAAgRgNgAgkEbQgSAAgRgFQgBgQABgRQABgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgCgCIgjhaQAYgLA7AAQAdAAAZACIgBBwQgBAJAMAIQAIAFAUAIIAWAJQAGAEABALIAAAFQgoAJgfAAQgiAAgZgLgAB0EOQgJAAgDgCQgDgCgBgFQACgLAIgSQAFgKADgBQABgBAJAAICLAAQAJAAABABQADABAFAKQAJASABALQgBAFgDACQgDACgJAAgAh0hnQgCgMgBgNIAAgLIAAgNQAAgVACgMQACgXAJgOIAFgHIANgPQASgXARggIAaAKIgBAtIgBAWIgFBGIgBANIgEAkIgGAvIg6AEQgKgZgDgagAj8g/QABgMABgcIAAgPIABgVIABgNQADgjAHgjIAFgVIAAgBQAIgeAHgTIAdgKQAMAhAIAaIAGAWQAGAdAAARIgCAYIgDANIgKAkIgPAsg");
	this.shape_88.setTransform(13.8,25.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B1DF63").s().p("AhYAzIgIhfIAvANQA3AGAvgiQARAXAbAfIgOANQgTARgVAMIgTAKQgeANgfAAQgZAAgagJg");
	this.shape_89.setTransform(23,-1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFB213").s().p("ABWBAQAFgrgFglQgFgdgHgOIgFgHIgEgFIASAEIAcAIIAGACQAVAJAEALQAXAlACAoQACAUgEANgAijAcQAGgqAOgYQAFgHAOgNIAEgBQAsgQAMAEIgCAEIgPAiQgPArABAyIhHAGQAAgRADgVg");
	this.shape_90.setTransform(5.2,-50);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCF13").s().p("ACwBoQhfgLhTgDQhVgDhdAIIhMAJQAGgaAIgWQAWhFAlglQAOgPAQgIIAMgFQgOAXgGArQgDAVAAAQIBHgFQgBgyAPgrIAPgiQA/gIAqADQAVACAJADIAFAHQAHAPAFAcQAFAngFApIBPAJQAEgMgCgUQgCgogXgmQBVArAVBOIADANQAGAggFAaQgfgFgvgFg");
	this.shape_91.setTransform(5,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-57.3,86.6,114.7);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-10.1,1,1,180,0,0,0,3.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape.setTransform(0,-10.4,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1.setTransform(-15.6,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(-12,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_3.setTransform(-13.3,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_4.setTransform(-13.3,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_5.setTransform(-0.3,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_6.setTransform(6.4,-24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_7.setTransform(-8,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_8.setTransform(15.7,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_9.setTransform(6.6,36.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_10.setTransform(-8.8,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_11.setTransform(-8,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_12.setTransform(4.8,23);

	this.instance_1 = new lib.Group_5_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance_1.alpha = 0.5;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_13.setTransform(16.5,52.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_14.setTransform(-16.8,53.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_15.setTransform(15.2,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_16.setTransform(-16.5,7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_17.setTransform(-26.3,-6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_18.setTransform(-25.2,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_19.setTransform(-26,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_20.setTransform(-26.2,3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_21.setTransform(-25.5,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_22.setTransform(-25.2,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_23.setTransform(-25.9,3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_24.setTransform(-25.6,1.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_25.setTransform(-24.6,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_26.setTransform(-21.8,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_27.setTransform(-21.3,1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_28.setTransform(16.2,-0.8);

	this.instance_2 = new lib.Group_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_29.setTransform(-13.3,25.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_30.setTransform(-12.9,22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_31.setTransform(-17.2,25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_32.setTransform(-17.4,25.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_33.setTransform(15.4,-3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_34.setTransform(16.2,-0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_35.setTransform(24.8,-6.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_36.setTransform(10.4,3.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_37.setTransform(7.5,5.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_38.setTransform(3.9,8.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_39.setTransform(3.1,9.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_40.setTransform(11.6,-2.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_41.setTransform(11.6,-2.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_42.setTransform(13.5,-0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_43.setTransform(14.1,-0.1);

	this.instance_3 = new lib.Path_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_3.alpha = 0.5;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_44.setTransform(5.5,22.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_45.setTransform(8.9,22.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_46.setTransform(-2,22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_47.setTransform(-2,22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_48.setTransform(4.8,18);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_49.setTransform(-0.3,14.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_50.setTransform(-5.5,10.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_51.setTransform(3.7,10.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_52.setTransform(-1.3,14.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_53.setTransform(-6.5,18.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_54.setTransform(-0.4,14.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_55.setTransform(-0.8,14.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_56.setTransform(12.3,36.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_57.setTransform(11.8,36);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_58.setTransform(11.7,32.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_59.setTransform(-14.6,37.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_60.setTransform(-14.4,35.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_61.setTransform(-14.2,32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_62.setTransform(6.2,6.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_63.setTransform(6.1,2.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_64.setTransform(-7.8,6.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_65.setTransform(-7.7,6.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_66.setTransform(-7.6,2.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_67.setTransform(-7.6,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_68.setTransform(-18.3,-36.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_69.setTransform(-16.7,-44.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_70.setTransform(-4.6,-32.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_71.setTransform(-2.8,-43.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_72.setTransform(-7.3,-45.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_73.setTransform(0.8,-32.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_74.setTransform(0.6,-44.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_75.setTransform(25.8,-40.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_76.setTransform(24,-40.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_77.setTransform(-22.6,-37.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_78.setTransform(-24.5,-37.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_79.setTransform(0.1,-43.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_80.setTransform(0.8,-32.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_81.setTransform(1.1,-17.7);

	this.instance_4 = new lib.Path_2_0_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_82.setTransform(0.1,-10.2,1,1,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_83.setTransform(22,-17.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_84.setTransform(22,-17.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_85.setTransform(22,-17.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_86.setTransform(-20,-16.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_87.setTransform(-20,-17.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_88.setTransform(-20,-17.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_89.setTransform(6.4,-24.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_90.setTransform(-7.9,-23.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_91.setTransform(7.6,-19.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_92.setTransform(6.4,-19.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_93.setTransform(6.9,-19.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_94.setTransform(6.9,-19.7);

	this.instance_5 = new lib.Path_4_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_5.alpha = 0.781;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_95.setTransform(-6.9,-18.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_96.setTransform(-8.1,-18.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(-7.6,-18.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_98.setTransform(-7.6,-18.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_99.setTransform(-7.6,-18.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_100.setTransform(0.9,-24.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_101.setTransform(1.1,-24.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_102.setTransform(1.1,-17.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_103.setTransform(1.2,-2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_104.setTransform(11,21.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_105.setTransform(0,27.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_106.setTransform(5.7,50.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_107.setTransform(0,27.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_108.setTransform(-6.6,50.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_109.setTransform(-9.6,50);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_110.setTransform(-21.3,1.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_111.setTransform(-16.5,7.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_112.setTransform(-16.5,7.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_113.setTransform(-24.6,-6.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_114.setTransform(-23.8,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_115.setTransform(-23.8,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_116.setTransform(11.7,52.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_117.setTransform(-12.2,53);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_118.setTransform(-12.2,55.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_119.setTransform(-2.9,-2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_120.setTransform(11.8,55);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_121.setTransform(9,49.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_122.setTransform(23.3,-6.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_123.setTransform(-3.9,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_124.setTransform(7.2,4.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_125.setTransform(0.1,2.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_126.setTransform(0.2,2.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_127.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_5},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.instance_4},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_3},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_2},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(0.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(0.1,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(7.1,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(-6.3,-9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(0.4,-9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(-15.6,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B4E19").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_6.setTransform(-12,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#237DA4").s().p("AgSAoIgPgCQgHgEACghIACgWQAGAKAKAAQALABAIgcIABANQABANAKACQASACAKghIgDBFQAAAJgDABIgRACIgQABIgSgBg");
	this.shape_7.setTransform(-13.3,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2095CF").s().p("AALAUQgLgCgBgNIAAgMQgIAbgMgBQgKAAgFgKQACgVgDgDQAEgDAIgBQAMAAAUACQAWACAJAEIAAABQgJAegQAAIgCAAg");
	this.shape_8.setTransform(-13.3,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C380B").s().p("AgBAWIgYgrIAhACIASApg");
	this.shape_9.setTransform(-0.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#836900").s().p("AgdAPQANgiASgBQARAAALAXQgSgHgOALIgMAOg");
	this.shape_10.setTransform(6.4,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#836900").s().p("AAGAIQgPgIgNAIQgFACAFgJQAFgIAGgGQAFgFAGACQAHACAHAIQAIAJAEAJIgHAGQgFgGgIgEg");
	this.shape_11.setTransform(-8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D38E60").s().p("AACAMIgEgLIgCgMIAAgFIACAFIAGAcg");
	this.shape_12.setTransform(15.7,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#755757").s().p("AgBBoQgIgBAJgKQAMgMADgEQAEgGgHABIgRACQgJAAADgEIAMgLQAIgHgEAAQgFAAgDgCQgCgDgGgLQgOgngShTQABgOAGgDQAFgCANAHQALAEAHAnIAMBGQAGAaALAKQAMALABAEQADAOgCAFQgDAKgQAEQgTAFgFAAIgBAAg");
	this.shape_13.setTransform(6.6,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#755757").s().p("AgJBpQgQgDgGgGQgGgGABgLQABgRABgDQACgDALgDQALgDAEgFQAFgGgIgCQgHgCgBgDQgBgDABgOQACgZAAgmQANgEAEgFQAEgFAEgOIAGgWQAEgJAJADQAJADgBAaQgBALgGA0IgGAyQgEAPgMAFQgOAGgGAFQgHAHAKAAIATACQAHABgJABIgUACQgJACAGAEQALAIAEAFQADAFgGAAIgGgBg");
	this.shape_14.setTransform(-8.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#755757").s().p("AgNA0QgSgCgEgNQgDgLADgdQAEgdAJgOQAJgPADAZIAAAUQAAATgBALQgCALAQALQANAJAQADQAOACgVACIgSABIgUgBg");
	this.shape_15.setTransform(-8,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2095CF").s().p("AgGAIIgCgEQgCgRACAHIACAKQABADAGAAIAJAAIgMACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_16.setTransform(4.8,23);

	this.instance = new lib.Group_5_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,27.4,1,1,0,0,0,0.8,2);
	this.instance.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2095CF").s().p("AADALQgMgBgJgMQgKgNAVAHIAZAJQAHAEgFAEQgEADgHAAIgGgBg");
	this.shape_17.setTransform(16.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2095CF").s().p("AgTALQgGgEAHgEQALgFAPgHQAVgJgJAOQgJAOgMADIgIABQgGAAgEgDg");
	this.shape_18.setTransform(-16.8,53.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AAIAuQgQgBgOgOIgXgYQAegUALgLIgBAAQAQgDAfgSQADALABAOQgGgOgIACQgMADgEAFQgEAGADAQQAEAQgEAFQgEAFgEgMIgHgSQgDgIgFACQgNAHgEAFQgJALAQAQQAOAPARgCQAPgCAMgOIgBACQgKAUgUAAIgBAAg");
	this.shape_19.setTransform(15.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgTAeQgXgLgMghQATgHALgNIAFAEQgJAKgIAFQgIAHAJANQAKANASAFQAWAHAOgNQANgMgNgIQgKgHgEgJQAFgDAEgEIAeAhQgbAcgaAAQgJAAgLgFg");
	this.shape_20.setTransform(-16.5,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353129").s().p("AgYAEQgBgHABgIQAAgKAXADQAXADADALQACAJgPAIQgMAHgNAAQgIAAgDgQg");
	this.shape_21.setTransform(-26.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353129").s().p("AgEAEQgEAAABgEQAGAAAFgDQABAAABAAQAAgBABABQAAAAABAAQAAAAAAABQAAACgEACQgEACgDAAIgBAAg");
	this.shape_22.setTransform(-25.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353129").s().p("AgHABQgBgBAAAAQgBgBAAgBQAAAAABgBQAAAAABAAQAGADAFgCQAFgCABADQABACgGACIgFABQgEAAgDgDg");
	this.shape_23.setTransform(-26,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353129").s().p("AAAAHQgNgCADgIQACgGABAEQACAJAMgDQAHgBgEAEQgDAEgFAAIgCgBg");
	this.shape_24.setTransform(-26.2,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353129").s().p("AANAcQADgKgEAFQgDAEgLADQgDAAgBADQgCgDABgEQgDgBgCgCQAPAEAGgJQAIgRgLAKQgEAEgDAAQgDAAgIgCIgCAAIABgEIgDgDQAKAGAKgGQAHgEgBgCQgBgDgFADQgEABgFgBQgFgBgCgFQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIAEgGQgFgNAIgJQgDAIAGAJQAGALAFgCQAEAAABgLQABAIgBAIQABAAABAAQAAAAABAAQAAABAAABQABAAAAABQABADgDADQAIgDgHATQAGgCgDAHQgCAIgGAEIgGACQAJgDACgHg");
	this.shape_25.setTransform(-25.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgKAEIAAgBIAIABIAEgCIAIgGQADgBgCACQgGAFgEACQgDABgDAAIgFgBg");
	this.shape_26.setTransform(-25.2,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgBADIgKgEIABgBIAKADIAGgBIAGgCIgBABQgHAEgEAAIgBAAg");
	this.shape_27.setTransform(-25.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAAAGQgDgCgDgEIgEgFQAAgBABAAQACACAEAFQAGAIAHgGIABABQgEADgEAAIgDgBg");
	this.shape_28.setTransform(-25.6,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353129").s().p("AggAfQgHgBgCgGQAKADAXgCQAZgDAJgHQAKgIgCgOQgCgNgSgCQgIgBgfABQgQACgFAHIAAgDQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgSACIgCAAg");
	this.shape_29.setTransform(-24.6,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353129").s().p("AAGAfIACgJQAAgGgCAAQgGgCgBgGQgCgGADgFQAEgFAAgCQACgFgFgCQgWgJAEgEQAEgGARAKQAMAHABAIQAAADgEAJQgDAIAAACIAEAHIAEAHQABACgEACIgGAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-21.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgCgHAFgDQgEADAEAGQADAEAKAFQAIAEgCAFQgEAIAAAHQAAAIAGACQAEACgCAXQASgLAFgHQgSgKAIgMQAFgKgHgMIABABQAJAHAAAHQAAAEgEAIQgEAHAQALIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_31.setTransform(-21.3,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353129").s().p("AgEA1IABgIQABgFgEABQgSABAFgWQAEgTgTgOQgHgGAHAAQAGAAAHAGQAEAFAIALQAFAIAAgDQgGgdgJgGQgNgJAGAAQAHAAAIAKQAGAIAEAJQALAYgCgQQgFgegLgHQgHgFACgBQACgCAIAEQAHADAGALQAFAIACAIQABAIACAAQADABACgKQABgTgIgMQgEgHgEgCQANADAJAPQAGAKAAALQAAAIgEAQIgFAWQgCAJgFACIgPAIQgHADgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_32.setTransform(16.2,-0.8);

	this.instance_1 = new lib.Group_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.9,26.9,1,1,0,0,0,0.2,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#237DA4").s().p("AgiAmIgBgBIAVADQAcAEAFgYQADgOAAgEQgBgFgOAAQgIAAgCAEQgDAHgBAPQgBgQgGgHQgHgIgQABIABgOQAFAKAKAAQAMABAIgcQgBAGABAHQABANALACQASACAJghIgDBFQAAAIgDACIgQACIgSACQgRAAgPgEg");
	this.shape_33.setTransform(-13.3,25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2095CF").s().p("AAHASQgJgCgCgNQgBgGABgGQgJAbgLgBQgGAAgEgDQAFABAGgEQAHgEAEgNQABgGAEAAQAEAAABAGIACAJQACAJAJgBQAJgCACgMQABgJgGgFQALACAHACIAAABQgJAegQAAIgDAAg");
	this.shape_34.setTransform(-12.9,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0330D").s().p("AgDApIgBgCIACgDQABgEAAgIIAAgbQAAgEABgLQADgJgCgGQgBgDgCABQACgFABgCQADACgBANIgDAfQAAAiAFADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgDgCg");
	this.shape_35.setTransform(-17.2,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A0330D").s().p("AgBApQgFgEABgdQAAgZACgKQADgNADgCQADACgBANIgDAfQgCAiAHADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(-17.4,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AABAAIgBgBIgFgIIgEgEIAFADIAEADIACAEIABABIADAFIAEALg");
	this.shape_37.setTransform(15.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#353129").s().p("AgSA4QABgHgCgCQgBgCgFgDQgFgCgBgIQgCgIADgIQAGgOgLgKQgKgKAFgGQADgFANAIQAHADADAGQgDgMgJgFQgFgEgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABgCAFAAQAFAAAEADQgGgGACgEQACgEAGABQASAFAEAKIAGAQQgCgRgDgEIgIgJQgEgGABgDQACgFAJADQAKAEAHAIQAIAKAEAMQAEAOgEAMQgKAZADATIgCACQgfARgPADQgDgBAAgHg");
	this.shape_38.setTransform(16.2,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B370A").s().p("AgaAZIAAgCIAeggQAOgOAKgBIgBABQgIADgTASIgNAMIgMAPIgBAAIAAAAg");
	this.shape_39.setTransform(24.8,-6.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B370A").s().p("AgJAdIAOgYIAIgMQAEgIABgGQABgHgFAAIgLADIgWAIIAAAAQAIgFANgEQATgHgBAHQAAAHgKASIgRAeIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_40.setTransform(10.4,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B370A").s().p("AgJAdIALgVQAIgOAEgHQADgEABgEQABgGgGAAIgNACIgUAKIAAgBQAVgLAIgCIAIAAQAFAAgBAEQgBAGgFAHIgIAMIgPAdIgBABIAAgBg");
	this.shape_41.setTransform(7.5,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B370A").s().p("AgJAeIAVgbIALgQIAEgLQADgIgHADQgOAFgPALIgXAQIAAgBIATgNQAHgGAKgGIAMgGQALgFAAAEQABADgFALQgEAIgGAIIgYAgIgBAAIAAgCg");
	this.shape_42.setTransform(3.9,8.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B370A").s().p("AgLASIAAAAIABgBQABAAgBABIALgQQAKgJAEgFQAAgHgEADIgGADIgJAHIgNALIAAgBIARgPQAOgMAEAGQABACgEAEIgFAGIgUAYIgCABIABgCg");
	this.shape_43.setTransform(3.1,9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B4E19").s().p("AiQBkIAKgIQATgDANgIQAMgGAPgOIAZgXQASgLAHgIQAQgOgBgLIA6gvQARABAMgIQALgHAOgNIAXgWIAUAHIkADGg");
	this.shape_44.setTransform(11.6,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B4E19").s().p("AiQBmIECjOIAfAMIkADFg");
	this.shape_45.setTransform(11.6,-2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#874407").s().p("AiCBOIEAjFIAFALIgbASQgQALgGAMQgHAOAFAXIhaBGIABgKQAAgHgBgEQgDgIgIACQgGABgOALIgdAYIgaAUQgJAIABAJQAAAMAGAMIgNAKg");
	this.shape_46.setTransform(13.5,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#874407").s().p("AiHBOID/jFIARAoIj+DHg");
	this.shape_47.setTransform(14.1,-0.1);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,9.7,1,1,0,0,0,2.6,2.2);
	this.instance_2.alpha = 0.5;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2095CF").s().p("AgPASIgEghIAQgCQAQgCACADQABADAEAeIgRACIgLAAQgGAAgBgBgAgBgLIgLACIADAVQABABAKgBIALgBIgEgVQAAgBgFAAIgFAAg");
	this.shape_48.setTransform(5.5,22.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0330D").s().p("AgIAAQABgIAMACIADAAQACAIgBAEIgRACg");
	this.shape_49.setTransform(8.9,22.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0330D").s().p("Ah0ARQABgTACgGQCMAEBYgNIACAJQgIgBgFACQgHACABAOIgJABQgCgKgIgDQgDgCgDACQgEABgCACQgBADAAAIIgRACQgBgIgGgEQgFgDgNABIgbABIgrAEQgIABgFAGIgEAHIgWAAQgVAAgKgBg");
	this.shape_50.setTransform(-2,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0330D").s().p("Ah1ARIADgZIBSAAQBcgBA2gIQAFARgBAHQguAEg0ADQhAAEglAAQgXAAgNgBg");
	this.shape_51.setTransform(-2,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_52.setTransform(4.8,18);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#574141").s().p("AAhAZIACgDIAIAGIgCADgAASAOIACgCIAHAGIgBACgAADAEIACgCIAHAEIgCAEgAgLgFIABgDIAIAFIgCACgAgbgQIACgDIAIAGIgCACgAgqgbIACgDIAHAGIgBACg");
	this.shape_53.setTransform(-0.3,14.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#574141").s().p("AgCAAIACgCIADACIgCADg");
	this.shape_54.setTransform(-5.5,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#574141").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_55.setTransform(3.7,10.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#574141").s().p("AgqAeIAIgGIACACIgHAGgAgbASIAIgFIACACIgIAGgAgLAHIAHgGIACADIgIAFgAADgDIAHgGIACADIgHAFgAASgOIAHgGIACACIgIAGgAAhgaIAIgFIACACIgIAGg");
	this.shape_56.setTransform(-1.3,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#574141").s().p("AgCAAIADgBIACABIgDACg");
	this.shape_57.setTransform(-6.5,18.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A88A8A").s().p("AgmAoIAKgBIAZAAQAOgBAKgDQASgFgbgTQgMgKgQAHQgKAEgSALIAQgOQAJgIACgHQACgGgLgGQgRgMgKgEIABgFIBgAAIAKBKQgrAFgiAAIgPAAg");
	this.shape_58.setTransform(-0.4,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A88A8A").s().p("Ag5AlQgBgMAGghIAFggIBgAAIAJBKQgsAHgfAAQgXAAgRgEg");
	this.shape_59.setTransform(-0.8,14.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#443232").s().p("AADAaIgDgKIgEgUIAAgNIABgJIAIA1g");
	this.shape_60.setTransform(12.3,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#674C4C").s().p("AgKAQQgJggAAgTQAGALAPACQAIABAHgBQAIA5gLABIgCAAQgQAAgGgUg");
	this.shape_61.setTransform(11.8,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8A6666").s().p("AADAQQgPgCgGgLIgBgDQAAgHAFgDQACgCAIgBIALgDQAGgBACAFQAHATgEAJIgHABIgIgBg");
	this.shape_62.setTransform(11.7,32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#443232").s().p("AAAAPQgBgHABgIIAAgDIAAgLIACgHIgBAkIgBAHg");
	this.shape_63.setTransform(-14.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#674C4C").s().p("AgRAiQgEgCAGgsQAPAEAGgHQAIgJAEgLQABAEAAAOQgBAogHAJQgEAEgLABQgLgBgCgCg");
	this.shape_64.setTransform(-14.4,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A6666").s().p("AgQARIAAgBQACgPADgJIADgIQACgCAQAFQAGABABAGQgEAKgJAJQgDAFgIAAIgJgBg");
	this.shape_65.setTransform(-14.2,32.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#755757").s().p("AgGAHQgDgDAAgEQAAgJAJAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(6.2,6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#574141").s().p("AgMAsIgChrIAWAJIAHBnQgBAPgMAAQgMAAgCgUg");
	this.shape_67.setTransform(6.1,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2095CF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_68.setTransform(-7.8,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2095CF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-7.7,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E4545").s().p("AgOAxIABgXQAGAFAFgDQAGgGABgJQACgIAAgWQABgMgBgLQAAgIgEgCQgGgCgEAFIAAgHIAWgJQgBBQgCAcQgBATgLAAQgMgBgCgOg");
	this.shape_70.setTransform(-7.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5E4545").s().p("AgOAyIAHhoIAWgJIgDBrQgBAUgLAAQgMAAgCgOg");
	this.shape_71.setTransform(-7.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAgBg");
	this.shape_72.setTransform(-18.3,-36.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgRBIQgFgFgBgKIAAgRQAAgYAGgXQALgrAdgVQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQgaAagIAlQgGAdAFAsQgDAFgCAAIAAAAg");
	this.shape_73.setTransform(-16.7,-44.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#20AACF").s().p("AgggBQBygRAtAFQAnAFhsAKQhmAKhdADQAwgJA5gHg");
	this.shape_74.setTransform(-4.6,-32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2095CF").s().p("AhQAfQAAg8AQgnQBAgFAogKQgLADgNAMQgaAbgLAzQgGAiA1APQAbAIAdAAIigARQgDgXABgeg");
	this.shape_75.setTransform(-2.8,-43.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2095CF").s().p("Ah/gEQAOgtA4gdQAygaBKAEQAmADAcAHIi3AQQgMAbgDBGQgBAjABAeIg8ANQgMhHAKgig");
	this.shape_76.setTransform(-7.3,-45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(32,170,207,0.498)").s().p("AkPAPQA1gPBfgLQC8gZDRAMQATAKgLADQh6AUjGAKQCIgKA4gKQAbgGAAgFQgBgFgagCQg9gFh/ANQiHALhcAdIgYAAQgDgIARgGg");
	this.shape_77.setTransform(0.8,-32.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2095CF").s().p("AjpANIgGABQAFgNAIgKIAQByIBJgPQgBgdACgjQAFhGAPghQB2gJAzgCQAagBACABQAoBmAKBBQBAgCAfABQgDg0ghgxQhAhliSAIIgvADQAagHAaAAQBZgEBFAcQBGAdAQAyIgHABIASBrQhLgDgvABQgCgngahEQgMgjgMgbQgLgBgbACQg1AChSALQgQAjgDA8QgBAlADAnQgzAHgvAKg");
	this.shape_78.setTransform(0.6,-44.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2095CF").s().p("AgFA2IgShsQAMADASA1QAKAbAHAag");
	this.shape_79.setTransform(25.8,-40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#20AACF").s().p("AAGA2IgRhqIAHgBIAQBsg");
	this.shape_80.setTransform(24,-40.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#20AACF").s().p("AgHg2IAGAAIAJBsIgIABg");
	this.shape_81.setTransform(-22.6,-37.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2095CF").s().p("AALg6IAAAAIAIBsIglAJQAIhnAVgOg");
	this.shape_82.setTransform(-24.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2095CF").s().p("Ah5ARQACg8ARgjQBSgLA1gCQAbgCAKABIAZA+QAZBEACAnQiBABhwAPQgEgnACglg");
	this.shape_83.setTransform(0.1,-43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#20AACF").s().p("AkcAYQACgFALgEICUgaQC8gZDRAMQATAKgLADQiCAWjnALIjOAHg");
	this.shape_84.setTransform(0.8,-32.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D38E60").s().p("AiFBmQgkgagUg0QgHghgBgXQAOgTACguQAAAgAGgCQAHgCAIgvQAGAcAJAAQALABAWgkIgBANQAAAMAEACQAGAEArghIAAAQQAAAPAIAAQALAAAkgiIAHALQAJAMAGAAQAJAAACgXIAVANQAXAPALgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAGATQAHATAEACQAFACAAgUIAMAhQANAiAJALQgDAZgCAHQgRBIgzAjQgwAihSAGQhRgBgvglgAipAQQAIA2AxAiQAzAjBLgKQBKgIAqgoQAjggAAg9QAAg3gYguQgDAKgLADQgOAFgOgPQABAQgXADQgXAFgVgVQABAOgRAEQgQAEgLgXQgNASgWAGQgYAHgFgYQgJAJgKAFQgVAMgIgNQgMAWgMgEIgJgIQgWAyAIAsg");
	this.shape_85.setTransform(1.1,-17.7);

	this.instance_3 = new lib.Path_2_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-10,1,1,0,0,0,5.5,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9D3C0").s().p("AgzAWQgCgGACgRQgIgCgHgMICFgPQgDAOgFAHQACAEABAIQgaAYguAEIgFAAQgTAAgRgJg");
	this.shape_86.setTransform(0.1,-9.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3BC84").s().p("AgKARQgFgCAKgWQAEgOAHAFQAJAGgCALQgCALgJAEQgEACgDAAIgFgBg");
	this.shape_87.setTransform(22,-17.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D38E60").s().p("AgRAfQgFgDgDgEQAKgZAEgZQAEgEAFgCQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_88.setTransform(22,-17.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D38E60").s().p("AgRAfIgIgHQAKgZAEgZIAJgGQAJgEAJAHQALAKgBAUQgCAXgUAJIgIABQgIAAgFgDg");
	this.shape_89.setTransform(22,-17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3BC84").s().p("AgDAMQgHgIgBgHQgBgLAJgDQAJgCACAGQAJAcgIADIgCAAQgFAAgFgGg");
	this.shape_90.setTransform(-20,-16.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-20,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38E60").s().p("AgBAgQgTgIgDgUQgDgZAUgJQAJgFAKABQAGArAGATQgGAHgIAAQgGAAgGgDg");
	this.shape_92.setTransform(-20,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCD7A4").s().p("AgeASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQANglAVAAQAUAAALAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgBAAQgGgDgHgBQgRAAgKAVQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_93.setTransform(6.4,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCD7A4").s().p("AAQATQgMgNgNAAQgGAAgGAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgDAGgIQAFgIAEgEQAGgEAFgBQAKAAAJAMQAMAQAAADQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABIgGAFIgCABg");
	this.shape_94.setTransform(-7.9,-23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_95.setTransform(7.6,-19.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F1F1F1").s().p("AgCAAQAAgDACAAQAEAAAAADQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_96.setTransform(6.4,-19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(6.9,-19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#454444").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(6.9,-19.7);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.9,-19.7,1,1,0,0,0,1.4,1.4);
	this.instance_4.alpha = 0.781;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_99.setTransform(-6.9,-18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBABQgDgBAAgDg");
	this.shape_100.setTransform(-8.1,-18.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_101.setTransform(-7.6,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454444").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(-7.6,-18.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D38E60").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_103.setTransform(-7.6,-18.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#836900").s().p("AjqAaIgBgcQgLAZgGgJQgBgCAAgFQAEAAAGgFIAMgIQgEAiAQABQAPAAAKgfQAGgUgFgOQgFgPgIAHQgGADgUAWQAKghgLAGQgLAFgZAbQACgNAggjQFygTBVgJQALACAQAHQAPAGAIAHQgVgJgNgBQgQgBAFANQgNgJgBAFIAAASQgRgYgJAJQgKAKAKAfQALAlAVADQAXAFgLg6IAfAOQAEAKgBABQgCABgEgCIgWgRQAJARAAAYQgBAagOgLQABAOgJAKQgJAKgRABQACgGADgaQgIgLgOggIgMghQABAUgGgDQgDgCgHgTIgGgSQgGAXgHACQgFACgTgLIgSgLQAEAbgJADQgLADgXgOIgVgOQgBAYgKgBQgGAAgJgMIgHgLQgkAjgLAAQgHgBgBgPIAAgQQgrAhgGgDQgEgCAAgMIABgNQgWAjgKAAQgGAAgGgOIgEgOQgIAugGACQgHACAAggQgCAugOATQACAXAGAhQgmgegJgjg");
	this.shape_104.setTransform(0.9,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#836900").s().p("AjsAaIgCgcQgLAYgFgHQgDgFAEgRIAEgQQgVAOgCgCQgCgHASgXIATgVIDEgLQDNgLA2gGQAQADAVALQAUALgCAEQgCAHgcgFQAUArgDABQgCACgEgDIgWgQQAKARgBAYQgBAagOgKQABANgIAJQgJAKgSADQADgIADgZQgJgKgNghIgMghQAAAUgFgDQgEgCgHgTIgGgSQgGAXgHACQgEABgTgKIgSgKQAEAZgKAEQgLADgXgOIgVgOQgBAYgJAAQgGgBgJgMIgHgLQgkAigMABQgHAAgBgQIABgQQgrAhgGgDQgEgCAAgNIABgMQgWAjgLAAQgGAAgFgOIgEgOQgIAugHACQgEABgBgPIgBgPQgDAtgNATQABAWAHAiQgmgfgJgig");
	this.shape_105.setTransform(1.1,-24.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D38E60").s().p("AiFBmQgkgbgUgzQgHghgBgXQANgTADguIABAQQACAPAEgBQAGgCAIgvIAEAPQAGAOAFgBQALABAWgkIgBANQAAAMAEACQAGADArggIAAAQQABAPAGAAQAMAAAkgiIAHALQAJAMAGAAQAJAAABgXIAWANQAWAPAMgEQAJgDgEgaIASAKQATALAFgCQAGgBAGgYIAHASQAGAUAEACQAFACAAgTIAMAgQANAiAJAKQgDAagCAHQgRBHgzAkQgwAihSAGQhSgBguglg");
	this.shape_106.setTransform(1.1,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C00001").s().p("AgTAWQgOAAgOgIQANAGALAAIAHAAQAKAAAGgDQAEgBACgDQADgDgCgCIgHgBIgEAAQAVgEAQgYIAPADQgYAogpAAIgCAAg");
	this.shape_107.setTransform(1.2,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#353129").s().p("AgLANIgDgTIAagGIACAIIABAOQgLADgIAAg");
	this.shape_108.setTransform(11,21.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755757").s().p("AiUDTQgDg0AJgOQgJgIgBgEQgCgHALgHQAAgsADgqQAOACAEAEQAEAFAAAPIAAAjQAAARgEAFIgLALQgEAEAGAAQAMABAEABQAHADgJAEQgHAEgIABQgEADgBASQgCAXAFAJQAHAKAXABQAbAAAHgBQAIgCgJgGQgLgIgBgCQgCgEAMgEQANgFAEgFQAFgFgOABQgSABgEgBQgEAAARgIQAQgGAEgWQAEgkAFgfQALg4ADgJQAGgSAMgBQANAAAEAGQAFAGAGAZIARBLQANAyAMAEQgcAXAVgDIATgCQAEAAgMAIQgOAIgBAMQgBALARgBQBCgBgCgZIgCgcQgCgMgJgBQgLgCgFgGQgGgIgDgXIgFgqQA6BHADAXIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigMgAiMAfQADgwAIg9QAFAIAQADQAOADAgABQAfAAARgEQALARAQAVQgwAAgWACQgXADgGASQgDAJgCATQgDAKgYAAIgWgBgAgbhNQgkgBgHgKQgHgJAHghQAGgfAEgGQAEgGAPgCQAPgCgMgQQgNgQgGANQgHAQgFAFQgJAHgKgMQgJgLgOAOIAKgmIC1gHQiAA+AEAkQACAQAUAfIgFAAg");
	this.shape_109.setTransform(0,27.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A88A8A").s().p("AgZACIgBgRQAaAIAbAAQgIADAAAJIAAAKQgZgCgTgLg");
	this.shape_110.setTransform(5.7,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#755757").s().p("AiUDSQgDgzAJgOQgJgIgBgEQgCgHALgHQAAh3AVh4IAVhfIC1gHIASBEQASBLAEAgIAMBiQAIBGAEAcIAJAIQACADgDAEQgEAEAAAFQgBAHADAVQgbAVgnAAQgaABgZgIIADgiQgJgHAAgEQgBgFALgIIgeiRQgCgMgEgFQgCgFgHgBQgHgBgDAFQgDAEgCAMIgRB/IgDAOQAAAFAFADQAFAEgBAGQAAAGgIAPQAGAHgBAXQgWAEgVAAQgiAAgigNg");
	this.shape_111.setTransform(0,27.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A88A8A").s().p("AgYALIABgDIABgHQABgFgBgCQAXABAYgFIgCAQQgOAFgYAAIgJAAg");
	this.shape_112.setTransform(-6.6,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A88A8A").s().p("AAIAPQgiAAgagKQgCgJAAgKQA0ATA5gLIgCAQQgOAFgaAAIgFAAg");
	this.shape_113.setTransform(-9.6,50);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#353129").s().p("AgKAPQgGgGACgNIAEgMQgQgGgBgKQgDgPASAHIAMAEIALAKQAJAHAAAHQAAAEgEAIQgDAEAIAIIAHAGIgFAFQgLANgSAHQgFgSABgKg");
	this.shape_114.setTransform(-21.3,1.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D38E60").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_115.setTransform(-16.5,7.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD7A4").s().p("AgTAeQgYgLgKghQASgHALgNIAIAIQAKAIAHACQALADAMgNIAfAhQgcAcgaAAQgJAAgLgFg");
	this.shape_116.setTransform(-16.5,7.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#353129").s().p("AgiAeQgGgBgCgIIgEglQgCgJAPgBIA/gEQALgBAEAMQACAFABASQAAAMgDADQgCADgJABIguAGIgRACIgFgBg");
	this.shape_117.setTransform(-24.6,-6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#874407").s().p("AAGBvQgCgBgBgFQAKACADgIQABgEgBgHIgCgLIgFgiQgDgTAAgJQAAgMgDgEQgHgHgDACIgDACIgCgQQAGgCAEgFQACgCAAgEQAAgDgCgCQgEgDgIAEIgIhAQAHAAAFgDQADgCAAgEIAAgBQAHABAAAJIAKBgIALBcQACANAAAEQgCAHgHABIgEAAIgEgBg");
	this.shape_118.setTransform(-23.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#874407").s().p("AAFBvIgCgHQgDgQgVi4IAAgLQABgCAEgBQAQgFAAAOIAKBgIALBcQACANAAAEQgCAHgHABIgEAAQgEAAgBgBg");
	this.shape_119.setTransform(-23.8,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2095CF").s().p("AAHAbQgugDgEgIQgOAGgagKQgDgTAGgOQAhALAegDQAYgDANgLQADAFAGAFQgXAVg8gEQgRgCACAIQABAJAZgDQAYAIAjABQAvACARgSQAEADABAIQgWAMgmAAIgSgBg");
	this.shape_120.setTransform(11.7,52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2095CF").s().p("AhMAZIAAgEIABgHQAHAEAOACQAaAEAcgFQAZgEAKgHQAGgGAEABIAKABQAIgBgBgHQAAgIgHABQgsAIgogQQAFgFAAgDQAaAJAogBQATAAAPgCIABAdQgKAEgLABQgKABgEgCQgIAMgjADIgWABQgYAAgdgDg");
	this.shape_121.setTransform(-12.2,53);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#20C5CF").s().p("AhCANQgJgDgBgJQArAFAggCQAjgEAIgLQAEACAKgBQALgBAKgEIAAAEQAAALgbAAQgEAAgBgCIAAgDIgMAKQgFAEgLACQgMACggACIgMABQgTAAgIgDg");
	this.shape_122.setTransform(-12.2,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(226,0,1,0.51)").s().p("AgEAMQgOgHgGgMIgDgGQgCgGAHAGIABABQADAFAGAFQANAKASADQARACgOADIgIABQgJAAgJgFg");
	this.shape_123.setTransform(-2.9,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#20C5CF").s().p("AANAMQgdgBgPgCQgKgBgFgFIgDgFIgEAGQgNABgQgGIgCgKQAZAKAPgGQADAHAvADQAzADAbgNIAAABQACAJgEADQgDACgQADIgiABIgQAAg");
	this.shape_124.setTransform(11.8,55);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A88A8A").s().p("Ag2AKIgBAEIgDgBIgBgQQAaAGAZAAQAZgBAVgIQAKgEAJgHIADARIgKAJIgDgFQgOALgYADIgOAAQgXAAgagIg");
	this.shape_125.setTransform(9,49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B370A").s().p("AgkAiIADgCIAPgOQALgIAKgLIATgUIAQgOIAAABQgPANgbAcQgGAIgMAIIgKAJIgEAEIgBAAIABgCg");
	this.shape_126.setTransform(23.3,-6.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#353129").s().p("AjbBBQgFgDABgIQgKgBAEgQQgKgFALgUQgFgPAMgJQAGgEAHgBIADAOQACAPgBAKQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQACAEgEADQAJgEgIAUQAGgDgCAIQgCAIgHAEQgDACgEAAQgCAAgDgCgAC3AzQAAgFgBgDIAGgFIAAACIgBAKQAAABABABQAAAAAAAAQABABABAAQAAAAABAAQAEAAAJgEQAQgGAOgKIABAFIgCABQgfASgRADQgCgCAAgHgACrALIAAgBQAFgMgLgLQgIgIACgFQACAEAEADQARANgHASIAAADIgEgEgAC5gTQgEgLgGgEQgJgGADgEQABADADACIAHAFIAEAEQADAFADAMgADCgiIAAAAQgFgIgHgFQgDgEACgDQAAADAEADQAJAFAFAJQAFAJABALIgLgUgADZghIAAgBIgEgNIgIgJQgGgGACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAACADACIAJAJQAEAFABAHIABAHIAAAQQAAgHgDgIg");
	this.shape_127.setTransform(-3.9,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D38E60").s().p("AA4BKIgXgYIARgLIACgCIABAAIAEgDIASgQIgBAAQAQgDAfgQIAFAXQACAXgGAQIgDAIQgIAOgMAFQgFABgGAAQgRAAgPgPgAhOg1QgWgDgSgTIgIgKIAHgBQA1gFAnAIIgFAIQgRAWgWAAIgHAAg");
	this.shape_128.setTransform(7.2,4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E20001").s().p("ABfA4QAfgWAQgPQABADAAAFQAAAIACABIgRAQIgEACIgBABIgCABIgQAMgAhuA5QgjgagJgZIAHgIQAcAoAZATgACTAaIABgKIAAgBIABgCIAGALIgEAFQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAgBgAgIgUQgigCgVgjIgDgHIAMgDIAIAKQARASAXADQAZAEAUgZIAFgIIAOADIgCAFQgYAlgmAAIgCAAgAg4g5IACAFQAGAOAPAHQAOAHAMgDQANgDgQgDQgSgCgNgLQgHgGgDgEIgBgBIgEgEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABABg");
	this.shape_129.setTransform(0.1,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A2C250").s().p("AhfA8QgZgTgbgpIAEgFQAXgbAbgPIADgDIAJgEIAOgGIADAGQAWAjAhACQAoABAYgmIADgEIAHACIACABIABABIABAAIABAAIA2AmIAHAHIAAAAIADAEQAHAJAIAMIgBACIgGAFQgQAOgfAXIgPgQIACARg");
	this.shape_130.setTransform(0.2,2.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2095CF").s().p("AjMIwIAAgEQABgKAEgFQAFgGAMgFQAZgJAGgOQAaAJAngBQAUAAAPgCIABAeQgKAEgKABQgLABgEgCQgJAMgjADIgWABQgYAAgdgDgAB3IuQgwgDgEgIQgOAGgZgKQgCgNACgLIABgGIABgEQAiALAdgDQAZgDANgLIAEAFQAGAHAMAFIAXAJQALADAEADQADAEACAIQgVALgnAAIgRAAgAAiD1QAKABAHgBQAIgCgBgBQAAgCgPABQgFAAgBgDIgBgKIgCgLQABgDACgBQALAAAAgDQAAgBgGgBQAUgCADADQABADAEAfQgUADgJAAIgHgBgAAlDYIADAWQABACAWgDIgEgVQgBgCgFAAIgQACgAjomrIgHABQAJgXASgVQAUgXAdgUQBCgsBTgEQBZgEBEAcQBGAdAQAyIgHABIASBsQhLgDgvABQgCgngZhFIgZg+QgKgBgbACQg1AChSALQgIAQgFAVQgFAagBAhQgCAlAEAnQg0AHgvAKg");
	this.shape_131.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_4},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_3},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-56.8,58.8,113.7);


(lib.player2Worng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32));

	// Layer_1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,57.3);

	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,57.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},15).to({_off:false},15).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).to({_off:true},15).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,0,86.6,114.7);


(lib.player2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F07321").s().p("AgMAdQgYgDgWgKIAKgtQARALAUADQAdAEAfgPIAKArQgaANgdAAIgQgBg");
	this.shape.setTransform(77.3,101.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F07321").s().p("AgnANIAHgiIBAAAIAIAkQgSAHgSAAQgVAAgWgJg");
	this.shape_1.setTransform(77.4,92.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2486AB").s().p("AgZAjQAAgkgCgOQgBgXAcgRQAagRACAfIgFBXQgBAIgGADIgWAFIgDAAQgNAAgDgbg");
	this.shape_2.setTransform(52.7,87.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2486AB").s().p("AAHBBIgWgFQgGgDgBgIIgFhcQABggAbASQAcARgCAZIgCA0QgCAcgNAAIgDAAg");
	this.shape_3.setTransform(35.3,88.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05F21").s().p("AAIA6QghgFgJgJQgIgKARgJQAEgCgKgEQgKgEAIgEQAHgEgFgJQgJgTgCgNQgDgSAXgFQAWgGADAVQAAApgCAQQgBAIAGAGQAFAEARAJQARAJgCAFQgCADgMAAIgVgBg");
	this.shape_4.setTransform(58.9,104.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F05F21").s().p("AgaBDQgNgBACgGQADgHAUgOQAKgHgCgHQgBgFgHgHQgFgEAGgCQAGgEAAgCQgFgZgBggQABgOAYAFQAZAEAAAQIABAbQAAAMgKAIQgJAJAHAFQALAIABAIQADANgcANQgVAKgOAAIgEgBg");
	this.shape_5.setTransform(32.9,105.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAEIAAgIIABAGIgBADIAAgBg");
	this.shape_6.setTransform(0.3,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBALIADgWIgBAUIgBADIgBgBg");
	this.shape_7.setTransform(0.2,45.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A2C19").s().p("AgGAtIgggHIAEAHQgYAAgUgMQgKgGgGgHIAAADQABAFACAGQgLgFgJgLQAEgsANgTQgBAdAOASQAAgTAFgIQACAMAKANQAUAYAoABQAfgBAUgQQAKgIAOgTQACAQgEASIAIgHQAJgJAAgOQAGAOAEgDQAEgDgCgPQAIATAGAaQgGAEgLAGIgKAEIAAgGQgKAKgWADIADgJQgTALgaAAIgRgBg");
	this.shape_8.setTransform(46.6,46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(240,115,33,0.486)").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgtAMhJQgDApACBEQBTAMACgBQALgEAbgkQADARAPANQAIAGAHADQAdAGAigIQASgEALgFQACjUgKgfQgJgFgPgEIgOgEQgaA0gUAWQgQARgFAOQgGARgIA7IABg3QAAgfgHgKQgKgOgMgeQgMgggBgQQgaAFgWAPQAGgQAHgCIAwgSQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_9.setTransform(44.2,64.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A2C19").s().p("AgIAHQgMgGAAgBQAAgEALgCQgMgKAEgEQADgEAfARQAPAIglgKQAMAKADAUQgFgHgNgHg");
	this.shape_10.setTransform(72.8,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A2C19").s().p("AgPAUQADgHAMgTQgIAFgFAAQgGAAADgEQADgFAFgFQAJgJALgBQAKAAgHALIgPATQANgIgCAIQgBAIgRALIgHACQgDAAACgGg");
	this.shape_11.setTransform(23.6,26.1);

	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(43.8,68.3,1,1,0,0,0,0.3,8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB213").s().p("AgNAOQgugDgWgIQgUgGARgEQAdgEAigCQBEgDAeAJQAhAKgkAHQgZAFgjAAIgbgBg");
	this.shape_12.setTransform(40.1,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCF13").s().p("Ah2BRQgJgDAEgXQAEgWATgiQASgjgEATQgDAcAAAkQAAAHAngDIBCgGIASg9QASg+AigCQAkgCADA5QACAdgJBCQgBAHgqAAQhUgBgxADIg0ACIgIAAg");
	this.shape_13.setTransform(38.9,10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB213").s().p("AAqAgQhRgDhSgNIAhACQCWANBDgQQAbgHgGgIQgHgIgogGQi7gViGAZIgNAAQgfAGgMgEQgEgDAFgDQAGgDANABQAdgFAvgEQBdgIBUADQBUADBeALQAwAFAeAFIAVAIIgCAMQgwgIgWAHQgwAThcAAIgWAAg");
	this.shape_14.setTransform(48.1,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB213").s().p("AgdA/QAFgqgGgmQgFgkgMgNIgDgGQAfAGAUAJQAUAJAFALQAWAlADAoQABAUgDAMgAgZgjQAKAlgEA0IA9AIQACgQgCgUQgFgpgVgdQgXgRgdgCQAGAJAFATg");
	this.shape_15.setTransform(60.1,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB213").s().p("AguAfQAFgqAOgXQAFgIAOgMQAvgSAMAEIgBAFQgJAMgHAWQgPAqABAzIhGAFQABgQADgWgAgGg0QgJAIgKATQgSAlgBAzIA2gFQgBgTADgYQAHgxAWgdQgdAAgSALg");
	this.shape_16.setTransform(36.8,7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCF13").s().p("ACwBoQhegLhUgDQhUgDhdAIQgvAEgdAFQAYhpAwgxQAYgZATgDQgOAXgGArQgDAVgBAQIBIgFQgCgyAPgrQAIgWAIgMQA+gIAqADQAVACAJADQAMAOAFAkQAGAngFApIBPAJQADgMgBgUQgDgogWgmQBUArAVBOQALAogHAfQgegFgwgFgAAKBPQCNAFBaAOQAGhEgpg2QgPgTgMgHQgMgGAEAMQAKAbgCAgQgBAQgDALIhfgNQAChNgSgeQgUgfg0ACQgtABgTBEQgKAhgBAhIhaAFQACgrALgrQgWAGgVAnQgYArgFA2QA8gLBmAAIBQABg");
	this.shape_17.setTransform(48.2,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D38E60").s().p("AADAEQgDgCgDgEIAAgBQADADAEADIAAABIgBAAg");
	this.shape_18.setTransform(12,65.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D38E60").s().p("AgEADIgFAAIgEgCIANgBIANgCIABAAIgBABIgCABIgFACIgFABg");
	this.shape_19.setTransform(8.5,66.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D38E60").s().p("AgOABIAFAAIACAAIADAAIATgEIgGAEIgFACIgDAAIgCAAIgDABg");
	this.shape_20.setTransform(8.6,64.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D38E60").s().p("AgFADIgLgDIAQAAIAGAAIADAAIADgBIADgBIACAAIgFACIgFACIgHABg");
	this.shape_21.setTransform(8.4,63.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCCF93").s().p("AgOATQAAgGADgHQgFgGgCgVIgMADQgJABgCgFQAGACAIgBQAFAAAGgCQACgBACAOIADANQACADAFAEQgIAAACAHQABADAGgEIAHgFQACgCANADQALACACgIQABgEgEgJIgDgLIAFAAIAJAiQgNAGgWgGQgJAJgHAAQgEAAgBgGg");
	this.shape_22.setTransform(12.9,64.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F07321").s().p("AgMA1IAYh2QAKgbgaCQQgDAOgEADIgBABQgDAAADgRg");
	this.shape_23.setTransform(72.8,99.2);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.3,90.9,1,1,0,0,0,2.2,0.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.3,90.9,1,1,0,0,0,2.2,0.3);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_2_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.4,90.5,1,1,0,0,0,2.5,0.4);
	this.instance_3.alpha = 0.5;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B24408").s().p("AgWAGQgJgDAAgDQAAgCAJgCQAKgCAMgBQAgAAABAHQAAADgKADQgJABgOAAQgMAAgKgBg");
	this.shape_24.setTransform(77.3,90.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(240,95,33,0.51)").s().p("AgvBVQgUgEAAgHIACgIQAnAXAdgNQAfgNgGgpIgJhHQgGgbgMABQgQACgSgHIABgJIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_25.setTransform(77.3,99.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F07321").s().p("AgvAJQgUgFAAgFIACgKQAXALAbADQApAFAngVIADAMQAAAFgUAFQgUAFgcgBQgbABgUgFg");
	this.shape_26.setTransform(77.3,107.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D38E60").s().p("AABgCQgGgCgHADIAAgBQAKgEAFACQAJADABAFIgBACQgDgHgIgBg");
	this.shape_27.setTransform(78.2,46.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB213").s().p("AgJAdQh2gJgogOIgjgMQgRgGgMACQgUADgNAAIgKgCQgEgDAFgDQAGgDANABIBMgIQBdgIBUADQBUADBeAKQAwAGAeAFIAVAHIgCAMQgwgIgWAHQgwAUhZAAQgjAAgpgDg");
	this.shape_28.setTransform(48.1,23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F29C99").s().p("AgEAGQgPgBgLgFIAGgDQAEADAPABQAQABANgHIAHAEQgPAHgSAAIgCAAg");
	this.shape_29.setTransform(46.2,47.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F29C99").s().p("AgEAJQgPgBgLgFQAKgIANgCQATgDATALQgPAIgSAAIgCAAg");
	this.shape_30.setTransform(46.2,46.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#801628").s().p("Ag3gEIgDgTIAFAAQANAUAlgBQAbAAALgEQAJgEAEgKIAJABQAFABgHAPQgIARgRAJQgTgMgSADQgNADgLAIQgSgIgGgTg");
	this.shape_31.setTransform(46.2,44.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwgIQBDgCAeADQgEAIgIADQgLAFgaAAIgCAAQgiAAgMgRg");
	this.shape_32.setTransform(45.9,43.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9D3C0").s().p("AgygIQBGgCAfACQgEAJgJAEQgLAEgbABIgCAAQgkAAgMgSg");
	this.shape_33.setTransform(45.9,43.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3BC84").s().p("AgIAUQgKgDAMgaQAFgLAGAAQAIAAABANQAAAMgHAJQgGAHgFAAIgEgBg");
	this.shape_34.setTransform(71.1,36.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCD7A4").s().p("AgKAlIgWgLQAKgVAGgiQAQgRAUARQAWASgPAcQgLAVgSAAIgIgBg");
	this.shape_35.setTransform(71.3,36.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3BC84").s().p("AgKAMQgFgKAEgJQABgFADgDQAHgIAFAEQAGAEACAPQADAOgLAGIgFABQgFAAgFgJg");
	this.shape_36.setTransform(23.4,33.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCD7A4").s().p("AAHAkQgUgCgJgWQgJgXARgPQAOgPAUAJIAGBBQgHADgIAAIgEAAg");
	this.shape_37.setTransform(23.1,33.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_38.setTransform(53.7,35.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F1F1F1").s().p("AgDAAQAAgCADgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAQgDgBAAgDg");
	this.shape_39.setTransform(52.4,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_40.setTransform(52.9,35.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#454444").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgEAEABQAGgBADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_41.setTransform(52.9,35.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(52.9,35.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1F1F1").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_43.setTransform(39.9,35.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1F1F1").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAEAAAAADQAAAEgEgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_44.setTransform(38.6,34.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_45.setTransform(39.1,34.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#454444").s().p("AgIAJQgDgDAAgGQAAgEADgEQAEgDAEgBQAGABADADQAEAEgBAEQABAGgEADQgDADgGABQgEgBgEgDg");
	this.shape_46.setTransform(39.1,34.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D38E60").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_47.setTransform(39.1,34.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6A2C19").s().p("AggARQAYglAQgBQANAAAMAXQgPgIgXAMQgMAHgKAJg");
	this.shape_48.setTransform(52.9,30.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCD7A4").s().p("AgdAYIgFgFQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAZgnARAAQAQAAALAYQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABIgCAAIgCAAQgFgDgGgBQgUABgYAWIgDABg");
	this.shape_49.setTransform(52.9,30.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6A2C19").s().p("AAFAEQgSgLgOASQADgSAJgHQAKgJAMAMQATAQACAJIgHAFQgHgKgJgFg");
	this.shape_50.setTransform(38.8,30.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCD7A4").s().p("AASAVQgNgTgNAAQgJAAgHALIgDABIgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQACgMAGgIQAHgLAJAAQAHAAAIAHQAWAUAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgGAEIgCABg");
	this.shape_51.setTransform(38.8,30.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6A2C19").s().p("AgGAtQgkgDgSgWQgQgUAGgUQgPAKAAAUQgOgnAigBIgHgHQAdAAAOAIIgFgPQALAIADAGQACADACgGIAFgJQADgCgEAMIAWgJQAHgBgJALIAVgCQAYgCALADIgTAGIARADQASAFAJAQQABABAAAAQAAAAgBAAQAAAAgBgBQgBAAgCgBQgJgHgFgCIAFAIQAFALgFANQAAgUgJgHQgFANgMAOQgWAZgdAAIgFAAg");
	this.shape_52.setTransform(46.7,44);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6A2C19").s().p("AgGA9IgggHIAFAHQgYAAgVgMIgQgNIAAADQAAAFACAGQgKgFgJgLQADgdAGgTQAMgfATADIgNgGIARgDQATgCANAGIgNgPIAKADQAMAFAIAHIAKgNQADgDABANQAQgHAOAAQAOAAgSAKQAYgDAVAEQAKADAGADIgIAEIAPAOQAOAWAIAnQgKAHgRAHIAAgGQgKAKgWADIADgJQgTAMgaAAIgRgCg");
	this.shape_53.setTransform(46.6,44.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6A2C19").s().p("AgqhKQAjADAIACQAdAIANAZQgegVgVADQgLABAHAIQAFAGAHADQgNABADAHQABACAJAJQgRAAADAPQADAPAeAEQgBANgFABQgEAAgEgDIgEgEQAKAXgHADQgEACgDgDIgMgSQgDAYgHAUQAJhLgahKg");
	this.shape_54.setTransform(71.2,30.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6A2C19").s().p("AgrhKQAiADAJACQAWAGAOARQAHAKACAHQgJADgVgIQANAMABAOQAAAHgCAEQgBgEgRgNQAJAKAAARQAAARgGABQgEAAgFgDIgDgEQAKAXgHADQgEACgDgEIgMgRQgDAYgHAUQAJhLgahKg");
	this.shape_55.setTransform(71.3,30.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCgABYAuIgGAEIANAOQAOASAGAZQBxg8g2iOQhhAOiEgNQhCgHgvgKQgtBLAbBAQAUAzAnAOQAFgVANgVIANgQQgEACgJgBQAIgMAWAAQALAAAKACIgIgLIALgDQAPgBAPAMQAFgKAMgBQALAAgEAMQAQgLAjAAIgQAPQANgEAUAEQAXAFAKAMIgFgBQgDAAgEACg");
	this.shape_56.setTransform(47.3,36.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCD7A4").s().p("AgNCRIgggHIAEAHQgYAAgUgMIgQgNIAAADQAAAFACAGQgIgEgIgIIgGgIQhBgZgchXQABhfAng1QD6AFB4AJQAaBLgJBJQgTA0gsAiQgXARgSAGIAAgGQgGAHgZALIAAgGQgKAKgWADIADgJQgTAMgbAAIgQgCg");
	this.shape_57.setTransform(47.3,36.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6A2C19").s().p("AgNAEQgWAFgFgHQAKABAIgDQAOgGAIgLQAIgJgDgGQgDgDgFgBIgGABQAIgHAEgGQAJgNgPgCQgQgCgUASQAKgRAdgKIAoABQgnA0gBBgQgMgmgBghg");
	this.shape_58.setTransform(25.8,29.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6A2C19").s().p("AgJAZIgDgVQgYAFgDgIQgEgMAJgMIAKgLQgQAKgBgMQABgPAVgNIAUgKIApABQgnA1gCBfQgGgYgEgag");
	this.shape_59.setTransform(25.6,29.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7FAEF").s().p("AgvBVQgUgEAAgHIAjijIBAAAIAkCjQAAAHgUAEQgUAFgcAAQgbAAgUgFg");
	this.shape_60.setTransform(77.3,99.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F07321").s().p("AgUANQgDgDAFgKQAEgKAEgFQAEgEgBAHQgCAFAAAFQABAKALACQAlAHgkAAQgUAAgEgEg");
	this.shape_61.setTransform(69.9,107.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F07321").s().p("AhQAZQgOAAgDgGIAxACQA1ABAbgDQAdgCg2gDQg1gDgNgFQgLgEABgOQACgNgPAGQACgEADAAIAIgBICLAAQAIAAACABQADACAEAJQAJARACALQgCAFgDACQgDACgIAAg");
	this.shape_62.setTransform(76.8,107.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCCF93").s().p("AgNAgQAQAAADgFQAGgHgIADQgMAEgJgCIAAgDIgCgCQAVABAGgHQAJgLgLAGQgMAEgOgCIACgEIgCgBQAJABAJgCQANgCABgEQABgGgKAEQgPADgLgFIACgCIgEgEQAIABAFgBQAGgBgBgDIgDgHQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEgCACgDQAOgCAOABQgCAKgMALQADACABAEQABAEgEADQACACAAAFQAAAGgEABQAEALgPAEIgHABIgGgBg");
	this.shape_63.setTransform(8.9,64.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCD7A4").s().p("AgNAfQgEgDACgHQgIgHAHgHQgGgCgBgFQgBgFAEgDQgGgEAAgIQACgIAZgDQANgBANAAQgCALgMAKQADACABAFQABAEgEACQADACAAAGQAAAFgFACQAFAKgQAEIgHACQgFAAgCgCg");
	this.shape_64.setTransform(8.7,64.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCD7A4").s().p("Ag1AqIAWgSQgFgCgHgSIgNgVQgFgKACgCQAEgEAIAFQALAGAFAPQAFgfADgMQAEgOAGAAQAJgCgGA1QALgdAHgLQAGgLAGACQAEABgEASIgJAjQAbglAHAEQAEACgaArIARgIQARgIADAEQAEAGggAQIgHAUQgMASgUgHIgXAVg");
	this.shape_65.setTransform(79.8,45.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C7D333").s().p("AgXgKQgJgOgEgJIAGgEQAMAZAWAVQANALAMgRIAIAHQgHAQgMAMQgXgVgSgbg");
	this.shape_66.setTransform(74.9,52.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ECFF56").s().p("AgXgGIgNgXIAUgMQAOAUAnAjIgFAKQgHALgHAHQgXgVgSgbg");
	this.shape_67.setTransform(74.9,52.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C7D333").s().p("AgMAfQAMgCADgJQACgGgHgPQgHgPgFgSIAIgBQAOAuAHATQAAADgZADg");
	this.shape_68.setTransform(19,65.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ECFF56").s().p("AgXAeQg8gEg2gNIAEgqQAwAQA4AEQBcAIBLgdIAAApQg2AUhKAAIghgBg");
	this.shape_69.setTransform(44.2,73.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#ECFF56").s().p("AgkAdQg0gDgsgNIAIgpQAvAJA0ADQBYAEBFgRIABAiQhGAZhKAAIgZgBg");
	this.shape_70.setTransform(44.6,65.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAkAaADQAeAEAIgsIAOAAQgGAggQAdQgQAdgUARQgWgcgNhOgAgYAPQAIAYAJgDQAMgEAVgxQgVARgTgHQgLgDgGgHQAAAOAHASg");
	this.shape_71.setTransform(45.1,54.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B1DF63").s().p("Agug0IAJAAQAGAlAaADQAeADAIgsIAOAAQgGAhgQAbQgQAegUAQQgWgagNhPg");
	this.shape_72.setTransform(45.1,54.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCD7A4").s().p("AgDAUQgZgDgGgkIBFAAQgHAngbAAIgEAAg");
	this.shape_73.setTransform(44.9,51.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F07321").s().p("AANCYQgHgFgGgOIgEgNIgEAGQgGAJgKAMQg1AJg7gTQgEgyAPhSQAJg3ALgmIAKggQAFgMAGgCQAUgHAcgLQAMBQAXAbQAUgRAQgdQAPgdAGggIAcgBIAMAHIAWANQAJAGABAGIADAgQAEAgACBJQACBFgBA5QgkAMgwAAQgUAAgVgCg");
	this.shape_74.setTransform(44.2,64.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2486AB").s().p("Ah/BmIgCg4IAKAwQAZAGAtAAQAIgdAGgdQANg6gKgCQgNgEgOgKQgOgKAVAHQAWAFAygCQAjgBgJAFQgFADgVAHQgKADAEAIIAQA1QALAsAGAAQAKABA3gFQAEgqgDhIQgBgUgVgCIguACQgbAAgLgDQgNgEgDgKQgDgJgDAGIgLAOQgHAGgcgCQgXgCgVgGQgTgGgFAzIABg/QAQgJAXgIQAugRAiABQA1ACBPAcIAEBCQADA3gBA2QgSAEgpAAIgmgBQgHgegJgdQgRg5gHACQgHADgKA7IgJA7QgJACgQABIgJABQgcAAgfgIg");
	this.shape_75.setTransform(44.6,85.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2486AB").s().p("Ah/BmQgCgaABhOIABhKIAngRQAugRAhABQA1ACBPAcIAFBCQACA3AAA2QgTAEgpAAIglgBQgIgegJgdQgRg5gHACQgHADgKA7IgIA7QgJACgQABIgKABQgcAAgfgIg");
	this.shape_76.setTransform(44.5,85.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B1DF63").s().p("AhYAzIgIhfQAKAFAOAEQAfAHAfgEQgQAHgYgBQgNgBgEAMQgFAMAGAOQAPAmAzgNQAzgNAPgWQALgQgQgPQgKgKgHgNIAJgGQARAXAbAfQgUAXgiATQgoAXgoAAQgaAAgZgJg");
	this.shape_77.setTransform(66.2,56.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1DF63").s().p("AhCBNIgSgyIAKgCQAGAUAIAGQALAJAZgGQAqgLAWgqQAHgPAAgKQAAgKgJAGQgTALgZAOQAzgfAogqQgMApgWBaQgXAOgxAFQgVADgSAAIgGAAg");
	this.shape_78.setTransform(26.9,59.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B1DF63").s().p("AhUAbQA2gLA+guIA1guIgJAgQgMArgNA4QgXAOgxAFIgtADIgSgyg");
	this.shape_79.setTransform(26.9,59.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B24408").s().p("AgMALIg4gEQALgQAzgBQAvgBAcALQgVALg0AAIgIAAg");
	this.shape_80.setTransform(52.8,94.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B24408").s().p("AgYAKIgugKQAVgQA1AFQArAEAYAKQgcAKghAAQgQAAgSgDg");
	this.shape_81.setTransform(36.5,95.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F05F21").s().p("AgcBQQgRAAgRgFQgBgQABgRQAAgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgBgCQgJgSgbhHQAZgLA7AAQAdAAAYACIAAAzQgBgMgEgIQgGgLgKACQgqANgfgFQgPgDAFAQQACAKALAdQAGANAGAEQADABAMADQAIABgEACIgMACQgJACAEAFQAEAEAMACQAHACgHADQgLAHgCAHQgEAQBJAKQAXADATgCQAWgDAGgIQACACABAHIAAAFQgoAJggAAQgiAAgZgLg");
	this.shape_82.setTransform(56.2,103.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B24408").s().p("AglAGIgLgJIgKAGQgWAAgBgEIgBgMQARAGARgBQAwAUBTgSQgBAIgNAFQgMAEggADIgOAAQggAAgQgIg");
	this.shape_83.setTransform(58.2,112.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F05F21").s().p("AhPBSIAEgFQAHAIASABQASAAAVgFIApgMQAOgFgCgJQgCgJgGgGIgFgFQATgGAFgGQAFgGgLAAIgTABQgIAAAJgFQAKgGAEgFQADgEACgLQAFgZAAgJQABgQgOACQg0AJgagRQgKgGADAlIAGAmIgBAAQgGgfgPg3QAdgNA7AHQAdAEAYAGQgLA6gEANIgFANQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgcAFIgUABQgaAAgRgNg");
	this.shape_84.setTransform(35.5,104.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B24408").s().p("AkLAYQgdgFABgHQAAgEACgFQAXASAogGQAdgFAOgHQAKgEAFAAQANABAJgCQAAAHgCACQgCACgFABIgLABQgEgBgCgEQgFAHgGADQgJAFgTAEQgLACgLAAQgOAAgQgDgAB2gKQgLAAgDgDQgDgCAAgHIAAgEQABAFADACQAEACAJAAICjAAQAIAAAEgCQADgCABgFIAAAEQAAAHgDACQgDADgKAAg");
	this.shape_85.setTransform(56.9,112);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B1DF63").s().p("AhYAzIgIhfIAuANQA4AGAvgiQARAXAbAfIgPANQgSARgUAMIgUAKQgeANgfAAQgZAAgagJg");
	this.shape_86.setTransform(66.2,56.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCD7A4").s().p("AgaAgQgMgBADgFQgKACAEgMQAIgTgBgIIgEABQgBAAgCgGQgCgFAJgDIAUgEIAMgDQACABACAEIADAIQACAFADABIAYAAIACAJIAHAZQgOAHgWgHQgJAJgGAAIgNABIgFAAg");
	this.shape_87.setTransform(12.8,64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ECFF56").s().p("AgRgPIgCgIIgDgKIAXgCIAWBBQAAADgZADg");
	this.shape_88.setTransform(18.2,65.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F07321").s().p("AkmEjQAEgIAQgOIAUgRQAFgHgGgHQgIgHgBgEQgCgEAHgCQAGgDAAgBQgDgTgKgoIgKgkQAdgNA8AHQAdAEAYAGIgGAfIgJAoIgFAOQgBAGAFAEQAEAFgBACQgBADgLAIQADAFACAGIACAWIAAANQgJADgNgCQgFAAgKAFQgNAHgdAFIgUABQgaAAgRgNgAgkEbQgSAAgRgFQgBgQABgRQABgIgBgEQgBgEgFgDQgEgDAEgEQAEgEgCgCIgjhaQAYgLA7AAQAdAAAZACIgBBwQgBAJAMAIQAIAFAUAIIAWAJQAGAEABALIAAAFQgoAJgfAAQgiAAgZgLgAB0EOQgJAAgDgCQgDgCgBgFQACgLAIgSQAFgKADgBQABgBAJAAICLAAQAJAAABABQADABAFAKQAJASABALQgBAFgDACQgDACgJAAgAh0hnQgCgMgBgNIAAgLIAAgNQAAgVACgMQACgXAJgOIAFgHIANgPQASgXARggIAaAKIgBAtIgBAWIgFBGIgBANIgEAkIgGAvIg6AEQgKgZgDgagAj8g/QABgMABgcIAAgPIABgVIABgNQADgjAHgjIAFgVIAAgBQAIgeAHgTIAdgKQAMAhAIAaIAGAWQAGAdAAARIgCAYIgDANIgKAkIgPAsg");
	this.shape_89.setTransform(57,83.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFB213").s().p("ABWBAQAFgrgFglQgFgdgHgOIgFgHIgEgFIASAEIAcAIIAGACQAVAJAEALQAXAlACAoQACAUgEANgAijAcQAGgqAOgYQAFgHAOgNIAEgBQAsgQAMAEIgCAEIgPAiQgPArABAyIhHAGQAAgRADgVg");
	this.shape_90.setTransform(48.4,7.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCF13").s().p("ACwBoQhfgLhTgDQhVgDhdAIIhMAJQAGgaAIgWQAWhFAlglQAOgPAQgIIAMgFQgOAXgGArQgDAVAAAQIBHgFQgBgyAPgrIAPgiQA/gIAqADQAVACAJADIAFAHQAHAPAFAcQAFAngFApIBPAJQAEgMgCgUQgCgogXgmQBVArAVBOIADANQAGAggFAaQgfgFgvgFg");
	this.shape_91.setTransform(48.2,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.player2, new cjs.Rectangle(0,0,86.6,114.7), null);


(lib.player1wrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31));

	// Layer_1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.4,56.8);

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,56.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},13).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},16).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},16).to({_off:true},13).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,113.7);


(lib.player1right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.4,56.8);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,0.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:0.9},16).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},16).to({_off:true,y:56.8},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,113.7);


(lib.player1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// win
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.4,56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:60.7,startPosition:1},0).wait(1).to({y:56.8,startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,58.8,113.7);


(lib.arrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		
		this.stop();
		stage.addBtn();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.998,0.998,-140.4);

	this.movieClip_4 = new lib.ClipGroup();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(0.4,0.4,0.998,0.998,-78.3,0,0,-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.movieClip_4}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-65.4},10).to({rotation:9.6},9).to({rotation:99.6,x:0.2},10).to({rotation:159.6},10).to({rotation:234.6,y:0.2},10).to({regX:-0.1,rotation:279.6,x:0.3},10).to({regX:-0.3,rotation:191.7,x:0.4,y:0.3},10).to({regY:-0.1,rotation:146.7,x:0.5,y:0.4},10).to({rotation:221.7,x:0.4,y:0.3},10).to({_off:true,regX:-0.4,rotation:281.7,y:0.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-110,243,245);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
		stage.addBtn();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.998,0.998,-140.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-65.4},10).to({rotation:9.6},9).to({rotation:99.6,x:0.2},10).to({rotation:159.6},10).to({rotation:234.6,y:0.2},10).to({regX:-0.1,rotation:279.6,x:0.3},10).to({regX:-0.3,rotation:191.7,x:0.4,y:0.3},10).to({regY:-0.1,rotation:146.7,x:0.5,y:0.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-110,243,245);


(lib.btncnscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,13.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btncnscreen, new cjs.Rectangle(-39.5,-1,79.2,29.1), null);


(lib.btncgscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,13.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btncgscreen, new cjs.Rectangle(-39.5,-1,79.2,29.1), null);


(lib.choosenamescreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* TextInput Text Change Event
		Any change in the text of the TextInput control results into execution of this function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		*/
		if(!this.textinputplayer1_change_cbk) {
			function textinputplayer1_change(evt) {
				// Start your custom code
				console.log(evt.target.value);
				// End your custom code
			}
			$("#dom_overlay_container").on("change", "#textinputplayer1", textinputplayer1_change.bind(this));
			this.textinputplayer1_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/mycss.css'});

	this.instance.setTransform(229,48.1,1,1,0,0,0,50,11);

	this.instance_1 = new lib.dractivechoosenames();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,80,1,1,0,0,0,0,30.8);

	this.instance_2 = new lib.bulding1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(409.3,313.6,1,1,0,0,0,0,30.6);

	this.instance_3 = new lib.bulding2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-409.2,312.6,1,1,0,0,0,0,30.6);

	this.instance_4 = new lib.player1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(315.9,287.3,1,1,0,0,0,29.4,56.8);

	this.instance_5 = new lib.player2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-307.5,286.8,1,1,0,0,0,43.3,57.3);

	this.hamsh = new lib.btncnscreen();
	this.hamsh.name = "hamsh";
	this.hamsh.parent = this;
	this.hamsh.setTransform(4.4,237.8,1,1,0,0,0,0,13.5);
	this.hamsh.alpha = 0.301;

	this.textinputplayer2 = new lib.an_TextInput({'id': 'textinputplayer2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.textinputplayer2.setTransform(-172.1,168,1.5,1.5,0,0,0,50,11.1);

	this.textinputplayer1 = new lib.an_TextInput({'id': 'textinputplayer1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.textinputplayer1.setTransform(171.4,167.8,1.5,1.5,0,0,0,50,11);

	this.instance_6 = new lib.gametitles();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-10.6,-66.2,1,1,0,0,0,0,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.textinputplayer1},{t:this.textinputplayer2},{t:this.hamsh},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.choosenamescreen, new cjs.Rectangle(-467.7,-113.6,935.4,457.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhHtA38MAAAhcLMCV/AAAMAAABcLg");
	mask_1.setTransform(501,358);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F8E600","#C59B00"],[0,1],0.1,12.1,0,0.1,12.1,566.2).s().p("EhPGAKSIgHzpMCeTgA6IAIUjg");
	this.shape_4.setTransform(507,137.2);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(520.9,808.9,1,1,0,0,0,480,153.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#140E00","#382F1A","#1D1500"],[0,0.122,0.592,1],4.1,269.9,-0.7,-75.7).s().p("EA1ZAH6IHYvzIOPAAIAAJZIjAGagAP4H6IHZvzISoAAInYPzgA1mH6IHYvzISnAAInXPzgEg7GAH6IHYvzISoAAInZPzgEhK/gH5IEZAAIkZJZg");
	this.shape_5.setTransform(520.9,706.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B27F00").s().p("EhK/AHSIAAujMCV/AAAIAAOjg");
	this.shape_6.setTransform(520.9,702.5);

	this.instance_1 = new lib.Blend();
	this.instance_1.parent = this;
	this.instance_1.setTransform(521,646,1,1,0,0,0,480.9,49.1);

	var maskedShapeInstanceList = [this.shape_4,this.instance,this.shape_5,this.shape_6,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(42,126,960,590), null);


(lib.odotTT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xx();
	this.instance.parent = this;
	this.instance.setTransform(-230.4,-125.6,0.381,0.381,0,0,0,0,35.4);

	this.instance_1 = new lib.Bitmap11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-265.2,-147.4,0.539,0.539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotTT, new cjs.Rectangle(-265.2,-147.4,530.5,294.9), null);


(lib.player2all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(2).call(this.frame_59).wait(1));

	// Layer_6
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F29C99").s().p("AgEAGQgPgBgLgFIAGgDQAEADAPABQAQABANgHIAHAEQgPAHgSAAIgCAAg");
	this.shape_92.setTransform(-304.7,272,1,1,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F29C99").s().p("AgEAJQgPgBgLgFQAKgIANgCQATgDATALQgPAIgSAAIgCAAg");
	this.shape_93.setTransform(-304.7,272.3,1,1,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#801628").s().p("Ag3gEIgDgTIAFAAQANAUAlgBQAbAAALgEQAJgEAEgKIAJABQAFABgHAPQgIARgRAJQgTgMgSADQgNADgLAIQgSgIgGgTg");
	this.shape_94.setTransform(-304.8,274.4,1,1,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgwgIQBDgCAeADQgEAIgIADQgLAFgaAAIgCAAQgiAAgMgRg");
	this.shape_95.setTransform(-304.5,275.8,1,1,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AAEgVIAwAAIAAArIhmAAIAAgO");
	this.shape_96.setTransform(-297.9,276.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6A2C19").s().p("AAOAjIhTAAIAAhFICLAAIAAAmIAAAfg");
	this.shape_97.setTransform(-304.5,274.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},59).wait(1));

	// Layer_5
	this.instance_4 = new lib.bulding2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-409.2,312.6,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// Layer_4
	this.player2Name = new cjs.Text("", "22px 'Arial'");
	this.player2Name.name = "player2Name";
	this.player2Name.textAlign = "center";
	this.player2Name.lineHeight = 27;
	this.player2Name.lineWidth = 119;
	this.player2Name.parent = this;
	this.player2Name.setTransform(-410.5,346.1);

	this.timeline.addTween(cjs.Tween.get(this.player2Name).wait(59).to({x:-359,lineWidth:222},0).wait(1));

	// 1
	this.instance_5 = new lib.player2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-307.5,286.8,1,1,0,0,0,43.3,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:224.7},28).to({y:286.8},29,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472,229.5,207.8,143.2);


(lib.player1all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1).call(this.frame_59).wait(1));

	// Layer_3
	this.player1Name = new cjs.Text("", "22px 'Arial'");
	this.player1Name.name = "player1Name";
	this.player1Name.textAlign = "center";
	this.player1Name.lineHeight = 27;
	this.player1Name.lineWidth = 113;
	this.player1Name.parent = this;
	this.player1Name.setTransform(409.4,346.1);

	this.timeline.addTween(cjs.Tween.get(this.player1Name).wait(60));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape.setTransform(316.4,275,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_1.setTransform(316.6,277.5,1,1,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_2.setTransform(309.7,277.6,1,1,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_3.setTransform(323.1,275.8,1,1,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_4.setTransform(316.4,276.1,1,1,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape_5.setTransform(316.4,275,1,1,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_6.setTransform(316.6,277.5,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_7.setTransform(309.7,277.6,1,1,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_8.setTransform(323.1,275.8,1,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_9.setTransform(316.4,276.1,1,1,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0AKQgCgGABgHIABgGIAkAGQAoADAdgQQACADgCAEQgFAJgXAJQgTAIgTAAQgTAAgUgHg");
	this.shape_10.setTransform(316.4,275,1,1,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqANQgQgEgDgJIB7gOQgBAag7ADIgNAAQgUAAgLgCg");
	this.shape_11.setTransform(316.6,277.5,1,1,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#801628").s().p("AgKAFQAGgHACgOIANgBQgCAUgPAPQgBgJgDgEg");
	this.shape_12.setTransform(309.7,277.6,1,1,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#801628").s().p("AgMgRIAKgBQAHAMAIACQgCARACAGQgZgOAAgWg");
	this.shape_13.setTransform(323.1,275.8,1,1,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(211,142,96,0.498)").s().p("AhEAWQgUgQACgZICtgQQAAAQgMARQgYAgg5AGIgMAAQggAAgSgOg");
	this.shape_14.setTransform(316.4,276.1,1,1,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AAsAcQgGAIgJAGQgYARghAAQgHAAgIAAAgrg5QAHgBAIAAQAhAAAYARQAJAGAGAI");
	this.shape_15.setTransform(322.9,275.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D38E60").s().p("AhXAqQglgRAAgZQAAgYAlgRQAlgRAyAAIAXABIABAAQAkACAcAOQAOAGAJAIQAOANAAAOQAAAPgOANQgJAIgOAGQgGAEgIACQgXAIgcADIgXABQgyAAglgSg");
	this.shape_16.setTransform(316.3,275.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},59).wait(1));

	// Layer_2
	this.instance_1 = new lib.player1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.9,287.3,1,1,0,0,0,29.4,56.8);

	this.player1Name_1 = new cjs.Text("", "22px 'Arial'");
	this.player1Name_1.name = "player1Name_1";
	this.player1Name_1.textAlign = "right";
	this.player1Name_1.lineHeight = 27;
	this.player1Name_1.lineWidth = 114;
	this.player1Name_1.parent = this;
	this.player1Name_1.setTransform(465.7,346.1);

	this.instance_2 = new lib.bulding1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(409.3,313.6,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.player1Name_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:58.7,y:285.6},0).wait(1).to({y:282.1},0).wait(1).to({y:278.7},0).wait(1).to({y:275.4},0).wait(1).to({y:272.1},0).wait(1).to({y:268.8},0).wait(1).to({y:265.7},0).wait(1).to({y:262.6},0).wait(1).to({y:259.5},0).wait(1).to({y:256.5},0).wait(1).to({y:253.6},0).wait(1).to({y:250.7},0).wait(1).to({y:247.9},0).wait(1).to({y:245.2},0).wait(1).to({y:242.5},0).wait(1).to({y:239.9},0).wait(1).to({y:240.8},0).wait(1).to({y:243.2},0).wait(1).to({y:245.4},0).wait(1).to({y:247.7},0).wait(1).to({y:249.8},0).wait(1).to({y:251.9},0).wait(1).to({y:253.9},0).wait(1).to({y:255.9},0).wait(1).to({y:257.9},0).wait(1).to({y:259.7},0).wait(1).to({y:261.5},0).wait(1).to({y:263.3},0).wait(1).to({y:265},0).wait(1).to({y:266.6},0).wait(1).to({y:268.2},0).wait(1).to({y:269.7},0).wait(1).to({y:271.2},0).wait(1).to({y:272.6},0).wait(1).to({y:273.9},0).wait(1).to({y:275.2},0).wait(1).to({y:276.5},0).wait(1).to({y:277.7},0).wait(1).to({y:278.8},0).wait(1).to({y:279.8},0).wait(1).to({y:280.8},0).wait(1).to({y:281.8},0).wait(1).to({y:282.7},0).wait(1).to({y:283.5},0).wait(1).to({y:284.3},0).wait(1).to({y:285},0).wait(1).to({y:285.7},0).wait(1).to({y:286.3},0).wait(1).to({y:286.8},0).wait(1).to({y:287.3},0).wait(1).to({y:287.7},0).wait(1).to({y:288.1},0).wait(1).to({y:288.4},0).wait(1).to({y:288.7},0).wait(1).to({y:288.9},0).wait(1).to({y:289},0).wait(1).to({y:289.1},0).wait(1).to({y:289.2},0).wait(1).to({regY:56.8,y:287.3},0).wait(1));

	// 1 copy
	this.instance_3 = new lib.bulding1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.3,313.6,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.5,230.3,181.3,142.3);


(lib.gamescreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* TextInput Text Change Event
		Any change in the text of the TextInput control results into execution of this function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		*/
		if(!this.textinputplayer1_change_cbk) {
			function textinputplayer1_change(evt) {
				// Start your custom code
				console.log(evt.target.value);
				// End your custom code
			}
			$("#dom_overlay_container").on("change", "#textinputplayer1", textinputplayer1_change.bind(this));
			this.textinputplayer1_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// player2fade
	this.player2Name = new cjs.Text("", "22px 'Arial'");
	this.player2Name.name = "player2Name";
	this.player2Name.textAlign = "center";
	this.player2Name.lineHeight = 27;
	this.player2Name.lineWidth = 222;
	this.player2Name.parent = this;
	this.player2Name.setTransform(-359,346.1);

	this.instance = new lib.bulding2();
	this.instance.parent = this;
	this.instance.setTransform(-409.2,312.6,1,1,0,0,0,0,30.6);

	this.instance_1 = new lib.player2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-307.5,286.8,1,1,0,0,0,43.3,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.player2Name}]}).wait(1));

	// player1fade
	this.player1Name = new cjs.Text("", "22px 'Arial'");
	this.player1Name.name = "player1Name";
	this.player1Name.textAlign = "center";
	this.player1Name.lineHeight = 27;
	this.player1Name.lineWidth = 222;
	this.player1Name.parent = this;
	this.player1Name.setTransform(365.1,346.1);

	this.instance_2 = new lib.player1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315.9,287.3,1,1,0,0,0,29.4,56.8);

	this.instance_3 = new lib.bulding1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.3,313.6,1,1,0,0,0,0,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.player1Name}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gamescreen, new cjs.Rectangle(-472,229.5,950.2,143.2), null);


(lib.player2Right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer_1
	this.instance = new lib.player2();
	this.instance.parent = this;
	this.instance.setTransform(43.3,57.3,1,1,0,0,0,0,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24.5},16).to({y:57.3},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.3,0,86.6,114.7);


(lib.choosegamescreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.odotTT();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,-15.3);

	this.instance_1 = new lib.an_CSS({'id': 'instance_1', 'href':'assets/mycss.css'});

	this.instance_1.setTransform(-10.8,76.1,1,1,0,0,0,50,11);

	this.btncgscreen = new lib.btncgscreen();
	this.btncgscreen.name = "btncgscreen";
	this.btncgscreen.parent = this;
	this.btncgscreen.setTransform(-11.6,145.7,1,1,0,0,0,0,13.5);

	this.cbcgscreen = new lib.an_ComboBox({'id': 'cbcgscreen', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, ארץ ישראל, 1, מדינות, 2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cbcgscreen.setTransform(-10.8,44.8,1,1,0,0,0,50,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtAvIAAgVIAzAAIAAgZQgBgOgFgGQgHgHgPAAQgKAAgMACIgCgTQAOgDANAAQAZAAAMAKQANALAAAXIAAAcIAQAAIAAAVg");
	this.shape.setTransform(26.8,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAvIAAgwQAAgMgFgGQgGgHgNAAIgNABIAABIIgZAAIAAhaQASgDAQAAQAWAAALAFQALAGAEAJQAEAJAAAPIAAAxg");
	this.shape_1.setTransform(16,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAvIAAguQAAgOgHgGQgIgGgPAAIgWABIgCgTQANgDAQAAQAYAAANAKQANALAAAXIAAAxg");
	this.shape_2.setTransform(5.4,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABAvIAAgVIAXAAIAAgTQAAgRgDgHQgDgIgIAAQgIAAgEAJQgFAJgFAXIgGAfIgaAAIAFgUIAHgbIgQgtIAWAAIAGAUQAOgVATAAQAQAAAKANQAKANAAAdIAAAmg");
	this.shape_3.setTransform(-9.9,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoAgQgPgQAAgfIgBggIAZAAIAAAZIAAAOIABAGQAGAAAEgDQAFgDABgFQACgFAAgMIABgRIAXAAIgBAYIgCANQgBAFgEAFQgEAEgGAEQgIAEgNABQACAHAHAEQAIAFAIABQAPgBAHgIQAIgJACgYIADgjIAYAAIgDAkQgCAWgFALQgGAKgMAIQgMAIgSAAQgZAAgOgQg");
	this.shape_4.setTransform(-21.7,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAvIAAgwQAAgMgFgGQgGgHgNAAIgNABIAABIIgZAAIAAhaQARgDARAAQAWAAALAFQALAGAEAJQAEAJABAPIAAAxg");
	this.shape_5.setTransform(-33.7,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBBIAAhUIAYAAIAABUgAAAAdIAAgRQAAgHACgFQACgEAGgIIACgDQAEgGAAgKIAAgLIg4AAIAAgWIBRAAIAAAYQAAAOgBAGQgBAGgEAFIgEAGQgEAFgBAEQgBADAAAEIAAAQg");
	this.shape_6.setTransform(-44.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_7.setTransform(365.2,144.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#565D69").s().p("AhLAzIAAhlICXAAIAABlg");
	this.shape_8.setTransform(335.5,138.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_9.setTransform(391.6,216.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A63E26").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_10.setTransform(391.6,216.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7FB2F0").s().p("AhSBpIAAjRIClAAIAADRg");
	this.shape_11.setTransform(391.6,216.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_12.setTransform(391.6,216.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_13.setTransform(339.6,216.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A63E26").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_14.setTransform(339.6,216.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7FB2F0").s().p("AhSBpIAAjRIClAAIAADRg");
	this.shape_15.setTransform(339.6,216.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_16.setTransform(339.6,216.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B7A21").s().p("AgcAzQgWAAgQgOQgRgOgEgVQAcAaAkgGQAdgFANgZQAHgNAAgMIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape_17.setTransform(320.1,237.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_18.setTransform(320.1,244.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_19.setTransform(320.1,243.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#588F27").s().p("AgbBTQgWAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAJAEAGAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_20.setTransform(320.1,234.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B7A21").s().p("AgcAzQgWAAgRgOQgRgOgDgVQAdAaAjgGQAcgFAOgZQAHgNABgMIAPABQATgCALgQQAQASAAAXQABAYgTASQgRASgZAAg");
	this.shape_21.setTransform(409,237.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_22.setTransform(408.9,244.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_23.setTransform(408.9,243.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#588F27").s().p("AgbBTQgXAAgQgOQgRgOgEgVIgBgMQAAgfAbgSQADgXAQgQQASgQAXAAQAWAAARAPQARAPADAXQAJAEAFAHQARASAAAWQAAAZgSASQgSASgZAAg");
	this.shape_24.setTransform(408.9,234.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C5CCD4").s().p("AnPANIAAgZIOfAAIAAAZg");
	this.shape_25.setTransform(365.2,199.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_26.setTransform(365.2,193.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#402516").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_27.setTransform(370.8,225.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_28.setTransform(365.2,238.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_29.setTransform(365.2,225.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_30.setTransform(365.2,213.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#87321F").s().p("AhfDFIAAmJIC/AAIAAGJg");
	this.shape_31.setTransform(365.2,225.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A63E26").s().p("AhuDNIAAmYIDdAAIAAGYg");
	this.shape_32.setTransform(365.2,224.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_33.setTransform(391.6,172.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_34.setTransform(391.6,172.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_35.setTransform(391.6,172.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_36.setTransform(391.6,172.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_37.setTransform(365.6,172.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_38.setTransform(365.6,172.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_39.setTransform(365.6,172.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_40.setTransform(365.6,172.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_41.setTransform(339.6,172.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_42.setTransform(339.6,172.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_43.setTransform(339.6,172.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_44.setTransform(339.6,172.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9F5640").s().p("AnPHbIAAu1IOfAAIAAO1g");
	this.shape_45.setTransform(365.2,197.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#402516").s().p("ApHAUIAAgnISPAAIAAAng");
	this.shape_46.setTransform(365.2,247.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4B7A21").s().p("AgcAzQgWAAgQgOQgRgOgEgVQAcAaAkgGQAdgFANgZQAHgNAAgMIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape_47.setTransform(285.3,238.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_48.setTransform(285.3,245.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_49.setTransform(285.3,244.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#588F27").s().p("AgbBTQgWAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAJAEAGAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_50.setTransform(285.3,235.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4B7A21").s().p("AgcAzQgWAAgRgOQgQgOgEgVQAcAaAkgGQAcgFAOgZQAHgNAAgMIARABQASgCALgQQAQARAAAYQAAAYgRASQgSASgZAAg");
	this.shape_51.setTransform(195.5,238.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#402516").s().p("Ag4AGIAAgLIBxAAIAAALg");
	this.shape_52.setTransform(195.5,245.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F3440").s().p("Ag0AQIAAgfIBpAAIAAAfg");
	this.shape_53.setTransform(195.5,244.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#588F27").s().p("AgcBTQgVAAgRgOQgRgOgEgVIgBgMQAAgfAbgSQACgXARgQQASgQAXAAQAWAAARAPQARAPADAXQAHAEAIAHQAQARAAAXQAAAZgSASQgSASgZAAg");
	this.shape_54.setTransform(195.5,235.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C5CCD4").s().p("AnOANIAAgZIOeAAIAAAZg");
	this.shape_55.setTransform(241.6,200.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_56.setTransform(241.6,194);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#402516").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_57.setTransform(247.2,226.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_58.setTransform(241.6,239.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_59.setTransform(241.6,226.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A63E26").s().p("AhPA5IAAhxICfAAIAABxg");
	this.shape_60.setTransform(241.6,213.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#87321F").s().p("AhfDFIAAmJIC/AAIAAGJg");
	this.shape_61.setTransform(241.6,226.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A63E26").s().p("AhuDMIAAmYIDdAAIAAGYg");
	this.shape_62.setTransform(241.6,225.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_63.setTransform(268,173);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A63E26").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_64.setTransform(268,173);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7FB2F0").s().p("AhSBpIAAjRIClAAIAADRg");
	this.shape_65.setTransform(268,173);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_66.setTransform(268,173);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_67.setTransform(242,173);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A63E26").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_68.setTransform(242,173);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7FB2F0").s().p("AhSBpIAAjRIClAAIAADRg");
	this.shape_69.setTransform(242,173);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_70.setTransform(242,173);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_71.setTransform(216,173);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A63E26").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_72.setTransform(216,173);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7FB2F0").s().p("AhSBpIAAjRIClAAIAADRg");
	this.shape_73.setTransform(216,173);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_74.setTransform(216,173);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_75.setTransform(268,217.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_76.setTransform(268,217.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_77.setTransform(268,217.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_78.setTransform(268,217.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A63E26").s().p("AhTAHIAAgNICnAAIAAANg");
	this.shape_79.setTransform(216,217.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A63E26").s().p("AgGBqIAAjTIANAAIAADTg");
	this.shape_80.setTransform(216,217.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7FB2F0").s().p("AhSBqIAAjTIClAAIAADTg");
	this.shape_81.setTransform(216,217.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A63E26").s().p("AhhB5IAAjxIDDAAIAADxg");
	this.shape_82.setTransform(216,217.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#402516").s().p("ApIAUIAAgnISQAAIAAAng");
	this.shape_83.setTransform(241.6,248.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AA8B00").s().p("AnOHhIAAvBIOeAAIAAPBg");
	this.shape_84.setTransform(241.6,198.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A63E26").s().p("AnoAxIAAhhIPRAAIAABhg");
	this.shape_85.setTransform(241.5,144.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#565D69").s().p("AhLAzIAAhlICXAAIAABlg");
	this.shape_86.setTransform(211.8,138.2);

	this.instance_2 = new lib.player1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-394.2,193.4,1,1,0,0,0,29.4,56.8);

	this.instance_3 = new lib.player2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-325.2,195,1,1,0,0,0,43.3,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cbcgscreen},{t:this.btncgscreen},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.choosegamescreen, new cjs.Rectangle(-423.6,-162.7,847.3,415.1), null);


// stage content:
(lib.HitTheHigh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var home = this;
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		/////////////////////////////מסך פתיחה-בחירת משחק/////////////////////////
		
		var mychoice = 0; //מספר המשחק
		var playerName1 = "";
		var playerName2 = "";
		var qnum = 0; //מספר השאלה
		
		var odoTBTN = new lib.odoT();
		odoTBTN.addEventListener("click", odot);
		function odot() {
			var odotT = new lib.odotTT();
			stage.addChild(odotT);
			odotT.name="odotA";
			odotT.x = stageH / 2;
			odotT.y = stageW / 2;
			
			odotT.xx.addEventListener("click", odotclear);
		}
		
		function odotclear(){
		toRemove("odotA");
			
		}
		
		/////////////////////////////מערך לשאלות בלבד/////////////////////////////
		var questionsArray = [
			[
		
			],
			[ //שאלות על משחק ארץ ישראל
				["היכן הונף דגל הדיו", lib.nopicgeza],
				["דרך איזה שער בחומות ירושלים פרצו הצנחנים לעיר העתיקה במלחמת ששת הימים", lib.nopicgeza],
				["איזו פעולה צבאית זכתה לשם מבצע אופרה", lib.nopicgeza],
				["(מי היה התובע במשפט אייכמן (1961", lib.nopicgeza],
				["איך נקרא מבצע כיבוש הגליל העליון במלחמת השחרור", lib.nopicgeza],
				["מי אמר את המשפט 'עם שאינו יודע את עברו ההווה שלו דל ועתידו לוט בערפל'", lib.nopicgeza],
				["מיהו הסופר הישראלי היחיד שזה בפרס נובל לספרות", lib.nopicgeza],
				["איפה קבורה נעמי שמר", lib.nopicgeza],
				["מי מהבאים אינו ציטוט משיר של אריק אנשטיין", lib.nopicgeza],
				["מיהו הספורטאי הישראלי היחיד שזכה במדליית זהב במשחקים האולימפיים", lib.nopicgeza]
			],
			[ //שאלות על מדינות
				["איזה מבין הדגלים הבאים הוא דגל גרמניה", lib.nopicgeza],
				["לאיזה מדינה שייך הדגל הבא", lib.ita],
				["מהי בירתה של גרמניה", lib.nopicgeza],
				["איזה מבין הדגלים הבאים הוא דגל ארגנטינה", lib.nopicgeza],
				["לאיזה מדינה שייך הדגל הבא", lib.egy],
				["מהי בירתה של אנגליה", lib.nopicgeza],
				["איזו מדינה מהדגלים הבאים נמצאת באירופה", lib.nopicgeza],
				["איזה מבין הדגלים הבאים הוא דגל קנדה", lib.nopicgeza],
				["מהי בירתה של רוסיה", lib.nopicgeza],
				["איזה מבין הדגלים הבאים הוא דגל צפון קוריאה", lib.nopicgeza]
			]
		];
		
		//array_r_text[mychoise][qnum]=המערך במקום של המשחק הראשון במקום של השאלה
		var array_r_text = [
			[],
			//משחק ראשון-ארץ ישראל
			[
				[ //תשובות לפריט 1
					["אום רשרש", true, "txt"],
					["רמת הגולן", false, "txt"],
					["באר שבע", false, "txt"],
					["חצי האי סיני", false, "txt", "notplayed"]
				],
				[
					[lib.flower, false, "pic"],
					[lib.lion, true, "pic"],
					[lib.shcem, false, "pic"],
					[lib.yafo, false, "pic", "notplayed"]
				],
				[
					["הפצצת חמאס בעזה", false, "txt"],
					["הפצצת הבופור", false, "txt"],
					["הפצצת הכור העירקי", true, "txt"],
					["הפצצת הכור הסורי", false, "txt", "notplayed"]
				],
				[
					["יחזקאל סהר", false, "txt"],
					["גדעון האוזנר", true, "txt"],
					["חיים כהן", false, "txt"],
					["ישראל קסטנר", false, "txt", "notplayed"]
				],
				[
					["מבצע אנטבה", false, "txt"],
					["מבצע חירם", true, "txt"],
					["מבצע צוק איתן", false, "txt"],
					["מבצע חומת מגן", false, "txt", "notplayed"]
				],
				[
					["יגאל אלון", true, "txt"],
					["אריאל שרון", false, "txt"],
					["משה דיין", false, "txt"],
					["יעקב דורי", false, "txt", "notplayed"]
				],
				[
					["דויד גרוסמן", false, "txt"],
					["", false, "txt"],
					["שי עגנון", true, "txt"],
					["", false, "txt", "notplayed"]
				],
				[
					["הר הרצל", false, "txt"],
					["הר הזיתים", false, "txt"],
					["קיבוץ כנרת", true, "txt"],
					["קיבוץ ברעם", false, "txt", "notplayed"]
				],
				[
					["אני ואתה נשנה את העולם", false, "txt"],
					["ולא קלה היא לא קלה דרכה, ועינייך לפעמים כה נוגות", true, "txt"],
					["אני אוהב להיות בבית, עם התה והלימון והספרים הישנים", false, "txt"],
					["יושב על הגדר, רגל פה, רגל שם", false, "txt", "notplayed"]
				],
				[
					["אריק זאבי", false, "txt"],
					["גל פרידמן", true, "txt"],
					["יעל ארד", false, "txt"],
					["גל מתתיהו", false, "txt", "notplayed"]
				]
			],
			//משחק שני- מדינות
		
			[
				[ //תשובות לפריט 1
					[lib.ger, true, "pic"],
					[lib.rus, false, "pic"],
					[lib.arg, false, "pic"],
					[lib.ita, false, "pic", "notplayed"]
				],
				[
					["רוסיה", false, "txt"],
					["איטליה", true, "txt"],
					["צרפת", false, "txt"],
					["ברזיל", false, "txt", "notplayed"]
				],
				[
					["מינכן", false, "txt"],
					["רומא", false, "txt"],
					["ברלין", true, "txt"],
					["דרזדן", false, "txt", "notplayed"]
				],
				[
					[lib.ind, false, "pic"],
					[lib.arg, true, "pic"],
					[lib.br, false, "pic"],
					[lib.can, false, "pic", "notplayed"]
				],
				[
					["איראן", false, "txt"],
					["מצרים", true, "txt"],
					["איטליה", false, "txt"],
					["צרפת", false, "txt", "notplayed"]
				],
				[
					["לונדון", true, "txt"],
					["רומא", false, "txt"],
					["ליברפול", false, "txt"],
					["ברייטון", false, "txt", "notplayed"]
				],
				[
					[lib.arg, false, "pic"],
					[lib.aus, false, "pic"],
					[lib.sou, false, "pic"],
					[lib.ita, true, "pic", "notplayed"]
				],
				[
					[lib.ind, false, "pic"],
					[lib.ira, false, "pic"],
					[lib.can, true, "pic"],
					[lib.egy, false, "pic", "notplayed"]
				],
				[
					["סוצ'י", false, "txt"],
					["מוסקבה", true, "txt"],
					["נובוסיבירסק", false, "txt"],
					["קלינינגר", false, "txt", "notplayed"]
				],
				[
					[lib.br, false, "pic"],
					[lib.sou, true, "pic"],
					[lib.usa, false, "pic"],
					[lib.chi, false, "pic", "notplayed"]
				]
			]
		];
		
		
		/////////////////////////////מסך בחירת שמות/////////////////////////
		
		var CNScreen = new lib.choosenamescreen();
		CNScreen.x = 480;
		CNScreen.y = 124;
		CNScreen.name = "CNScreen";
		
		var subjects = ["בחר משחק", "ארץ ישראל", "מדינות"];
		// קונטיינר עם הפקדים, לקוח מתוך הספרייה
		var contRd = new lib.containerRadioMC();
		contRd.x = 520;
		contRd.y = 190;
		contRd.name = "contRd";
		
		var array_radio = [contRd.rt0, contRd.rt1, contRd.rt2, contRd.rt3]; //מערך המכיל את שמות הפקדים, שנוכל לפנות אליהם בקלות
		
		
		
		// כפתור  לשאלה הבאה
		var mynext = new lib.btncnscreen();
		mynext.x = stageW / 2;
		mynext.y = 420;
		mynext.name = "mynext";
		mynext.addEventListener("click", nextq);
		
		////////////////////////////מסך בחירת משחק/////////////////////////
		
		
		start1();
		
		function start1() {
			var CGscreen = new lib.choosegamescreen();
			stage.addChild(CGscreen);
			CGscreen.x = 494.05;
			CGscreen.y = 215.8;
			CGscreen.name = "CGscreen";
		
			startgame();
		}
		
		function startgame() {
			var CGscreen = stage.getChildByName("CGscreen");
			CGscreen.btncgscreen.alpha = 0.3;
			$("#dom_overlay_container").on("change", "#cbcgscreen", cbcgscreen_change);
		
		}
		
		
		//בעת שינוי ערך בקומבו
		function cbcgscreen_change(evt) {
			var CGscreen = stage.getChildByName("CGscreen");
		
			//שימרת הערך שנבחר בקומבו
			//console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				CGscreen.btncgscreen.alpha = 0.3;
				CGscreen.btncgscreen.removeEventListener("click", ChoosePlayers);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				CGscreen.btncgscreen.alpha = 1;
				CGscreen.btncgscreen.addEventListener("click", ChoosePlayers);
			}
		}
		
		var titles = new lib.gametitles();
		titles.x = stageW / 2;
		titles.y = 110;
		
		//לחיצה על בחר
		function ChoosePlayers() {
		
			stage.addChild(titles);
			titles.gameName.text = subjects[mychoice];
			toRemove("CGscreen");
			stage.addChild(CNScreen);
			//console.log(subjects[mychoice]);
		
			if (!this.input1_change_cbk) {
				function input1_change(evt) {
					// Start your custom code
					//console.log(evt.target.value);
					// End your custom code
					playerName1 = evt.target.value;
					if (playerName1 != "" && playerName2 != "") {
						CNScreen.hamsh.alpha = 1;
						CNScreen.hamsh.addEventListener("click", startM);
					} else {
						CNScreen.hamsh.alpha = 0.3;
						CNScreen.hamsh.removeEventListener("click", startM);
					}
				}
				$("#dom_overlay_container").on("keyup", "#textinputplayer1", input1_change.bind(this));
				//$("#textinputplayer1").css("font-size","15pt");
				this.input1_change_cbk = true;
			}
		
			if (!this.input2_change_cbk) {
				function input2_change(evt) {
					// Start your custom code
					//console.log(evt.target.value);
					// End your custom code
					playerName2 = evt.target.value;
					if (playerName1 != "" && playerName2 != "") {
						CNScreen.hamsh.alpha = 1;
						CNScreen.hamsh.addEventListener("click", startM);
					} else {
						CNScreen.hamsh.alpha = 0.3;
						CNScreen.hamsh.removeEventListener("click", startM);
					}
				}
				$("#dom_overlay_container").on("keyup", "#textinputplayer2", input2_change.bind(this));
				this.input2_change_cbk = true;
			}
		}
		
		var turn = Math.floor(Math.random() * 2);
		
		function startM() {
			p1TrysArray = [];
			p2TrysArray = [];
			toRemove("Player1all");
			toRemove("Player2all");
			toRemove("P1floor" + P1CA);
			toRemove("P2floor" + P2CA);
			toRemove("GS");
			toRemove("Doneplaybtn");
			toRemove("playabtn");
			toRemove("CNScreen");
		
			var player1all = new lib.player1all();
		
			stage.addChild(player1all);
			player1all.x = 479.9;
			player1all.y = 124.35;
			player1all.name = "Player1all";
		
		
			var player2all = new lib.player2all();
		
			stage.addChild(player2all);
			player2all.x = 479.9;
			player2all.y = 124.35;
			player2all.name = "Player2all";
		
			player1all.player1Name.text = playerName1;
			player2all.player2Name.text = playerName2;
		
		
			var arrow;
			if (turn == 0) {
				arrow = new lib.arrow2();
				console.log("שחקן 2 מתחיל");
		
		
		
			} else {
				arrow = new lib.arrow1();
				console.log("שחקן 1 מתחיל");
		
			}
		
			arrow.x = 480;
			arrow.y = 300;
			arrow.name = "arrow";
			stage.addChild(arrow);
			stage.addChild(stage.contRd);
		
		
		
		
			titles.instractionTXT.text = "?מי יתחיל ראשון";
			titles.instractionTXT.font = "17px Arial";
			mynext.addEventListener("click", chooseWP);
		}
		
		stage.addBtn = function () {
			stage.addChild(mynext);
		}
		
		
		var timerP1;
		var timerP2;
		
		
		function chooseWP() {
			toRemove("P1clock");
			toRemove("P2clock");
			clearInterval(timerP1);
			clearInterval(timerP2);
		
		
			if (turn == 0) {
		
				var Player2play = stage.getChildByName("Player2all");
				var Player1play = stage.getChildByName("Player1all");
		
				var Gclock1 = new lib.clockP1();
				stage.addChild(Gclock1);
				Gclock1.x = 735;
				Gclock1.y = 420;
				Gclock1.name = "P1clock";
				var secondsLeft = 15;
				Gclock1.TXTclockplayer1.text = secondsLeft;
		
		
				timerP1 = setInterval(function () {
						if (secondsLeft == 0) {
							console.log("נגמר הזמן");
							clearInterval(timerP1);
							toRemove("P1clock");
							$(".ui-radiobutton").prop("visibility", false);
							contRd.visible = false;
							titles.questionTXT.text = "נגמר הזמן";
							timeout();
		
						} else {
							secondsLeft--;
							Gclock1.TXTclockplayer1.text = secondsLeft;
						}
					}
		
					, 1000);
			} else {
				var Player2play = stage.getChildByName("Player2all");
				var Player1play = stage.getChildByName("Player1all");
		
				///שעון///
				var Gclock2 = new lib.clockp2();
				stage.addChild(Gclock2);
				Gclock2.x = 235;
				Gclock2.y = 420;
				Gclock2.name = "P2clock";
				var secondsLeft = 15;
				Gclock2.TXTclockplayer2.text = secondsLeft;
		
		
				timerP2 = setInterval(function () {
						if (secondsLeft == 0) {
							console.log("נגמר הזמן");
							clearInterval(timerP2);
							toRemove("P2clock");
							$(".ui-radiobutton").prop("visibility", false);
		
							contRd.visible = false;
							titles.questionTXT.text = "נגמר הזמן";
							timeout();
		
						} else {
							secondsLeft--;
							Gclock2.TXTclockplayer2.text = secondsLeft;
						}
					}
		
					, 1000);
			}
		
		}
		////זמן כללי של כל שחקן, בנוי משניות ודקות/////
		var clockPlayer1Interval;
		var clockPlayer2Interval;
		
		var player1minutes = 0;
		var player2minutes = 0;
		var player1secondes = 0;
		var player2secondes = 0;
		
		
		
		////////////////מערכים לשמירת הניסיונות לכל שחקן/////////
		var p1TrysArray = [];
		var p2TrysArray = [];
		var gezapic = 0;
		/////משתנה עזר להשמת תמונות במסיחים////
		var loop = 0;
		
		// פונקציה שתרוץ בכל תחילת שאלה ותציג את הטקסט הרלוונטי, מתוך המערך הדו מימדי
		
		function createtexts() {
			if (turn == 0) {
				//if (p1TrysArray.length < array_r_text[mychoice].length) {
				//	p1TrysArray.push(0);
				//	console.log(p1TrysArray);
				//}
			} else {
				//if (p2TrysArray.length < array_r_text[mychoice].length) {
				//	p2TrysArray.push(0);
				//	console.log(p2TrysArray);
				//}
			}
		
			if (turn == 0) {
				clockPlayer1Interval = setInterval(function () {
					player1secondes++;
					if (player1secondes == 60) {
						player1minutes++;
						player1secondes = 0;
					}
				}, 1000);
			} else {
				clockPlayer2Interval = setInterval(function () {
					player2secondes++;
					if (player2secondes == 60) {
						player2minutes++;
						player2secondes = 0;
					}
				}, 1000);
			}
		
			for (var i = 0; i <= array_r_text[mychoice][qnum].length; i++) {
		
				$("#r" + i).prop("checked", false);
			}
			if (array_r_text[mychoice][qnum][array_r_text[mychoice][qnum].length - 1][3] == "played") {
				if (qnum < array_r_text[mychoice].length - 1) {
					qnum++;
					if (turn == 0) {
						qnum++;
					} else {
						qnum++;
					}
					createtexts();
				} else {
					createtexts();
					qnum = 0;
					console.log("הקיו נאם שווה אפס");
		
				}
			} else {
				if (turn == 0) {
					p1TrysArray[qnum]++;
				} else {
					p2TrysArray[qnum]++;
				}
		
				$(".ui-radiobutton").prop("disabled", false);
				titles.questionTXT.text = questionsArray[mychoice][qnum][0];
		
				var gezapic = new questionsArray[mychoice][qnum][1];
				gezapic.name = "GP";
				stage.addChild(gezapic);
				gezapic.x = 200;
				gezapic.y = 190;
		
				contRd.visible = true;
				r_statearray = [];
				console.log("qnum" + qnum);
				for (var i = 0; i < array_r_text[mychoice][qnum].length; i++) {
		
		
					//console.log(array_r_text[mychoice][qnum][i][0]);
					//השורה שבה מזינים את התוכן לרדיו בטן- את המסיחים
					if (array_r_text[mychoice][qnum][i][2] == "txt") {
						array_radio[i].text = array_r_text[mychoice][qnum][i][0];
						r_statearray[i] = false;
					} else {
						array_radio[i].text = "";
						var pic = new array_r_text[mychoice][qnum][i][0];
						scaleValue = resizeImage(contRd.PIC0, pic);
						pic.scaleX = scaleValue;
						pic.scaleY = scaleValue;
		
						if (loop == 0) {
							contRd.PIC0.addChild(pic);
						} else if (loop == 1) {
							contRd.PIC1.addChild(pic);
						} else if (loop == 2) {
							contRd.PIC2.addChild(pic);
						} else if (loop == 3) {
							contRd.PIC3.addChild(pic);
						}
		
						r_statearray[i] = false;
		
						///////////////למקם על הבמה ממערך של מסיחים כאשר במקום ה200 יהיה I
						loop++;
					}
				}
			}
		}
		
		//יצירת משתנה שהערך שלו יהיה זה שלפיו יישתנה גודל התמונה
		var scaleValue = 0;
		
		//התחלת משחק
		function nextq(evt) {
		
			contRd.check0.removeAllChildren();
			contRd.check1.removeAllChildren();
			contRd.check2.removeAllChildren();
			contRd.check3.removeAllChildren();
		
			contRd.PIC0.removeAllChildren();
			contRd.PIC1.removeAllChildren();
			contRd.PIC2.removeAllChildren();
			contRd.PIC3.removeAllChildren();
			loop = 0;
			stage.getChildByName("GP");
			toRemove("GP");
		
		
			evt.currentTarget.visible = false;
			titles.instractionTXT.text = "ענו על השאלות נכון, על מנת להשלים את המגדל הגבוה ביותר";
		
			if (stage.getChildByName("contRd") == undefined) {
				stage.addChild(contRd);
				createlisteners();
			}
		
			if (stage.getChildByName("arrow") != undefined) {
				toRemove("arrow");
			}
		
			if (correctAns == array_r_text[mychoice].length) {
				console.log("the end");
				clearInterval(clockPlayer1Interval);
				clearInterval(clockPlayer2Interval);
				clearInterval(timerP1);
				clearInterval(timerP2);
				Endgame();
		
			} else {
		
				//האם זו  השאלה האחרונה?
				if (qnum < array_r_text[mychoice].length) {
					//אם לא, הכנה לשאלה הבאה - ביטול סימן של כפתורי הרדיו ו
					for (var i = 0; i <= array_r_text[mychoice][qnum].length; i++) {
						$("#r" + i).prop("checked", false);
						if (turn == 0) {
							turn++;
							var P2A = stage.getChildByName("Player2all");
							var P1A = stage.getChildByName("Player1all");
							P2A.alpha = 1;
							P1A.alpha = 0.2;
							for (n = 1; n <= P1CA; n++) {
								stage.getChildByName("P1floor" + n).alpha = 0.2;
							}
							for (t = 1; t <= P2CA; t++) {
								stage.getChildByName("P2floor" + t).alpha = 1;
							}
							P1A.gotoAndStop(0);
						} else {
							turn--;
							var P2A = stage.getChildByName("Player2all");
							var P1A = stage.getChildByName("Player1all");
							P1A.alpha = 1;
							P2A.alpha = 0.2;
							for (t = 1; t <= P2CA; t++) {
								stage.getChildByName("P2floor" + t).alpha = 0.2;
							}
							for (n = 1; n <= P1CA; n++) {
								stage.getChildByName("P1floor" + n).alpha = 1;
							}
							P2A.gotoAndStop(0);
						}
					}
					createtexts();
		
					//יצירת הטקסטים של השאלה הבאה
				} else {
					mynext.removeEventListener("click", chooseWP);
					qnum = 0;
					createtexts();
				}
			}
		}
		
		
		
		function createlisteners() {
			for (i = 0; i < array_radio.length; i++) {
				//הוספת מאזינים ללחיצת רדיו
				$("#dom_overlay_container").on("change", "#r" + i, radio_change);
			}
			if ($('#contRd').is(':checked')) {
				radio_change();
			}
		}
		
		
		var checkedRB;
		//בלחיצה על רדיו - שינוי המערך המכיל את הסטטוסים של הרדיו
		function radio_change(evt) {
			for (var i = 0; i < array_r_text[mychoice][qnum].length; i++) {
				r_statearray[i] = false;
			}
			checkedRB = evt.currentTarget.id.charAt(1); //(INSTANCE NAMEשימוש במספר של האובייקט שנמצא באיי.די שלו (הוגדר ב
			//בסימון של רדיו, המצב שונה, כי סימון של אחד, אוטומאטית מבטל כל סימון אחר שהיה קיים	
			//לכן יש לאפס את הסטטוסים של כל כפתורי הרדיו
			for (var i = 0; i < r_statearray.length; i++) {
		
				r_statearray[mychoice][i] = false;
			}
			//לאחר מכן נסמן רק את כפתור הרדיו שנלחץ
			r_statearray[checkedRB] = evt.target.checked;
			btradio_click();
		}
		
		var P1CA = 0;
		var P2CA = 0;
		var correctAns = 0;
		//correctAns = P1CA + P2CA;
		
		function timeout() {
			qnum++;
		
			if (turn == 0) {
				//p1TrysArray[qnum]++;
				clearInterval(clockPlayer1Interval);
				clearInterval(timerP1);
				toRemove("P1clock");
		
			} else {
				//p2TrysArray[qnum]++;
				clearInterval(clockPlayer2Interval);
				clearInterval(timerP2);
				toRemove("P2clock");
			}
			$(".ui-radiobutton").prop("disabled", true);
		
			var P1A = stage.getChildByName("Player1all")
			var P2A = stage.getChildByName("Player2all")
			var soundWA = createjs.Sound.play("wornga");
		
			if (turn == 0) {
				console.log("שחקן 1 טעה");
				P1A.gotoAndStop(59);
		
			} else {
				console.log("שחקן 2 טעה");
				P2A.gotoAndStop(59);
			}
			mynext.visible = true;
		
		
		}
		
		
		//בדיקת התשובה האם היא נכונה או לא והמשך לשאלה הבאה
		function btradio_click() {
			console.log(checkedRB);
			//פניה למטריצה בה שמור המצב הנכון של הכפתורים והשוואה למערך הסטטוסים הקיים 
			//הפיכה של המערך למחרוזת עם פקודת ג'ויין שמחברת בין התאים באמצעות תו נבחר
			var P1A = stage.getChildByName("Player1all")
			var P2A = stage.getChildByName("Player2all")
			titles.instractionTXT.text = "";
		
		
			if (turn == 0) {
				clearInterval(clockPlayer1Interval);
			} else {
				clearInterval(clockPlayer2Interval);
			}
		
			//אם התשובה הנכונה נבחרה
			if (array_r_text[mychoice][qnum][checkedRB][1] == true) {
				console.log("רדיו בטן נבחר: " + checkedRB);
				correctAns++;
		
				var soundRA = createjs.Sound.play("righta");
				var V = new lib.v();
				if (checkedRB == 0) {
					scaleValue = resizeImage(contRd.check0, V);
					V.scaleX = scaleValue;
					V.scaleY = scaleValue;
					contRd.check0.addChild(V);
				} else if (checkedRB == 1) {
					scaleValue = resizeImage(contRd.check1, V);
					V.scaleX = scaleValue;
					V.scaleY = scaleValue;
					contRd.check1.addChild(V);
				} else if (checkedRB == 2) {
					scaleValue = resizeImage(contRd.check2, V);
					V.scaleX = scaleValue;
					V.scaleY = scaleValue;
					contRd.check2.addChild(V);
				} else if (checkedRB == 3) {
					scaleValue = resizeImage(contRd.check3, V);
					V.scaleX = scaleValue;
					V.scaleY = scaleValue;
					contRd.check3.addChild(V);
				}
		
				if (turn == 0) {
					P1CA++;
					console.log("שחקן 1 צדק");
					var P1B = new lib.redfloor();
					stage.addChild(P1B);
					P1B.name = "P1floor" + P1CA;
					P1B.x = 888;
					P1B.y = 409 - (P1CA * 23);
					P1A.gotoAndPlay(1);
		
				} else {
					P2CA++;
					console.log("שחקן 2 צדק");
					var P2B = new lib.yellowfloor();
					stage.addChild(P2B);
					P2B.name = "P2floor" + P2CA;
					console.log(P2B.name);
					P2B.x = 70;
					P2B.y = 409 - (P2CA * 23);
					P2A.gotoAndPlay(1);
		
		
		
				}
				//stage.getChildByName("feedback").text = "מעולה";
				array_r_text[mychoice][qnum][array_r_text[mychoice][qnum].length - 1][3] = "played";
				console.log(array_r_text[mychoice][qnum][array_r_text[mychoice][qnum].length - 1][3]);
				//home.btradio_click.addEventListener("played", CurectA);
			} else { //המשתמש ענה תשובה גויה
				var X = new lib.x();
				if (checkedRB == 0) {
					scaleValue = resizeImage(contRd.check0, X);
					X.scaleX = scaleValue;
					X.scaleY = scaleValue;
					contRd.check0.addChild(X);
				} else if (checkedRB == 1) {
					scaleValue = resizeImage(contRd.check1, X);
					X.scaleX = scaleValue;
					X.scaleY = scaleValue;
					contRd.check1.addChild(X);
				} else if (checkedRB == 2) {
					scaleValue = resizeImage(contRd.check2, X);
					X.scaleX = scaleValue;
					X.scaleY = scaleValue;
					contRd.check2.addChild(X);
				} else if (checkedRB == 3) {
					scaleValue = resizeImage(contRd.check3, X);
					X.scaleX = scaleValue;
					X.scaleY = scaleValue;
					contRd.check3.addChild(X);
				}
				var soundWA = createjs.Sound.play("wornga");
				if (turn == 0) {
					console.log("שחקן 1 טעה");
					P1A.gotoAndStop(59);
		
				} else {
					console.log("שחקן 2 טעה");
					P2A.gotoAndStop(59);
				}
		
			}
			mynext.visible = true;
			clearInterval(timerP1);
			clearInterval(timerP2);
			toRemove("P1clock");
			toRemove("P2clock");
		
			for (var i = 0; i < r_statearray.length; i++) {
				//$('#r' + i).attr("disabled", true);
				$('#r' + i).prop("disabled", true);
			}
			qnum++;
			//if (turn == 0) {
			//	qnum++;
			//} else {
			//	qnum++;
			//}
		}
		
		
		function Endgame() {
			var soundend = createjs.Sound.play("done");
		
			clearInterval(clockPlayer1Interval);
			clearInterval(clockPlayer2Interval);
			gradeCalc();
			clearInterval(timerP1);
			clearInterval(timerP2);
			toRemove("P1clock");
			toRemove("P2clock");
			toRemove("contRd");
			var P1A = stage.getChildByName("Player1all");
			var P2A = stage.getChildByName("Player2all");
			P1A.alpha = 1;
			P2A.alpha = 1;
			titles.instractionTXT.text = "";
			titles.questionTXT.text = "?מי ניצח";
		
			var GradeS = new lib.gardescreen();
			GradeS.name = "GS";
			stage.addChild(GradeS);
			GradeS.x = 400;
			GradeS.y = 220;
			GradeS.GP1.text = "ציון: " + p1Result;
			if (player1secondes < 10) {
				player1secondes = "0" + player1secondes;
			}
			GradeS.TP1.text = "זמן כולל: " + player1minutes + ":" + player1secondes;
			GradeS.GP2.text = "ציון: " + p2Result;
			if (player2secondes < 10) {
				player2secondes = "0" + player2secondes;
			}
			GradeS.TP2.text = "זמן כולל: " + player2minutes + ":" + player2secondes;
		
			var PlayA = new lib.playagbtn();
			stage.addChild(PlayA);
			PlayA.x = 500;
			PlayA.y = 400;
			PlayA.name = "playabtn";
			PlayA.addEventListener("click", startM);
		
			var Done = new lib.donebtn();
			stage.addChild(Done);
			Done.x = 400;
			Done.y = 400;
			Done.name = "Doneplaybtn";
			Done.addEventListener("click", DonePlay);
		
		}
		
		function DonePlay() {
			p1TrysArray = [];
			p2TrysArray = [];
			toRemove("GS");
			window.location.reload(true);
		
		}
		
		///ערכים בתוכם נשמר הציון////
		var p1Result = 0;
		var p2Result = 0;
		
		////////פונקציה לחישוב ציון/////////
		function gradeCalc() {
			var Np1 = parseInt(p1TrysArray.length);
			var Np2 = parseInt(p2TrysArray.length);
		
			for (i = 0; i < p1TrysArray.length; i++) {
				p1Result += parseInt(100 / (p1TrysArray[i] * Np1));
			}
			for (t = 0; t < p2TrysArray.length; t++) {
				p2Result += parseInt(100 / (p2TrysArray[t] * Np2));
			}
		}
		
		
		
		/////////////////////////////אחרים/////////////////////////
		function toRemove(thing) {
			var toRemove = stage.getChildByName(thing);
			stage.removeChild(toRemove);
		}
		
		
		
		
		///////////////////פונקצייה שתקבע באיזו מידה יש לשנות את גודל התמונה/////////////////
		//הפונקצייה מקבלת שני אובייקטים: מסגרת ותוכן שיהיה בתוכה
		
		function resizeImage(box, content) {
			//משתנים לגבולות של המסגרת והתוכן
			var boxBounds = box.nominalBounds;
			var contentBounds = content.nominalBounds;
		
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var toScale = 0;
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toScale = boxBounds.height / contentBounds.height;
			} else {
				toScale = boxBounds.width / contentBounds.width;
			}
			return toScale / 1.2;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE8B3A").s().p("AjLB0QgSAAAAgXQAAgIAFgHQAFgHAIAAIGaAAQAGAAAEAHQAFAHAAAIQAAALgFAGQgEAGgGAAgAA3ApQgJgIAAgNIAAh8IACgFIABgGQAcAFAcARIAABxQgBANgIAIQgJAIgMAAQgMAAgIgIgAhgApQgHgHgBgOIAAhtQATgOAkgMIAACHQABANgIAIQgHAIgLAAQgOAAgIgIg");
	this.shape.setTransform(895.1,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD00").s().p("AjCB9IAJggQAGgUAAgHQAAg0AlgpQAlgqA6gOQAAgRAOgMQANgMARAAQATAAANALQANAKACAUQA7ALAmAqQAnAqAAA2QAAAIAGATQAFASAEAHIAAAHg");
	this.shape_1.setTransform(895.2,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,51,0.6)").s().p("AAPAkIgZgkQgFAFgBARIgBAOIgTAAIABgPQACgQAEgGQAEgGAGgEIgRgYIAXAAIAUAdQAFgEABgNIABgMIASAAIgBAJQgCAPgDAGQgEAGgHAEIAWAfg");
	this.shape_2.setTransform(199.5,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,51,0.6)").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_3.setTransform(193.3,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,51,0.6)").s().p("AAMAzIAAg/QAAgMgGgFQgGgFgLAAIgRACIgCgPQAKgDANAAQASAAALAJQAJAIAAASIAABCg");
	this.shape_4.setTransform(187.5,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,51,0.6)").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_5.setTransform(175.6,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,51,0.6)").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_6.setTransform(166.4,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,51,0.6)").s().p("AAPAlIAAglQAAgKgFgFQgEgFgJAAIgLABIAAA4IgTAAIAAhGQAOgDANAAQARAAAHAFQAJAEADAHQAEAHAAAMIAAAmg");
	this.shape_7.setTransform(157.1,33);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,51,0.6)").s().p("AgfAyIAAhAIATAAIAABAgAAAAWIAAgNQAAgFABgEQACgDAFgGIABgDQAEgEAAgIIAAgJIgsAAIAAgQIA/AAIAAASIgBAPQgBAFgDAEIgCAFIgFAGIgBAGIAAAMg");
	this.shape_8.setTransform(148.9,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,51,0.6)").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_9.setTransform(142.9,31.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,51,0.6)").s().p("AghAlIAAhGQANgDAOAAQARAAAIAFQAIAEAEAHQADAHAAAMIAAAmgAgNgTIAAAnIAcAAIAAgUQAAgKgEgFQgFgFgKAAIgJABg");
	this.shape_10.setTransform(136.8,33);

	this.instance = new lib.odoT();
	this.instance.parent = this;
	this.instance.setTransform(81.1,31.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASBAIAAgxQAAgPgCgCQgBgFgDgCQgFgCgFAAQgFAAgEADQgGADgBAFQgDAGAAALIAAAvIgZAAIAAiAIAZAAIAAAwQAMgOAQAAQAIAAAHADQAHAEAEAFQADAEABAGQABAGAAALIAAA3g");
	this.shape_11.setTransform(863.3,31.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggA7QgKgJAAgMIAAgDIAdADQABAFACACQAEADAGAAQAKAAAEgDQAEgCACgEIAAgMIAAgNQgKAPgQAAQgTAAgLgQQgJgNABgRQAAgYALgMQALgNARAAQAQAAALAQIAAgOIAYAAIAABTQAAARgEAIQgCAIgFAFQgFAEgIADQgJADgMAAQgWAAgLgIgAgOgoQgFAHgBAOQABAPAFAGQAGAHAIAAQAIAAAHgHQAGgGAAgOQAAgPgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_12.setTransform(852.1,34.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLBAIAAhcIAXAAIAABcgAgLgoIAAgYIAXAAIAAAYg");
	this.shape_13.setTransform(844.3,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASBAIAAgxQAAgPgCgCQgBgFgDgCQgFgCgFAAQgFAAgEADQgGADgBAFQgDAGAAALIAAAvIgZAAIAAiAIAZAAIAAAwQAMgOAQAAQAIAAAHADQAHAEAEAFQADAEABAGQABAGAAALIAAA3g");
	this.shape_14.setTransform(836.3,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_15.setTransform(820.7,33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASBAIAAgxQgBgPgBgCQgBgFgEgCQgEgCgFAAQgFAAgEADQgFADgDAFQgCAGAAALIAAAvIgZAAIAAiAIAZAAIAAAwQAMgOAPAAQAJAAAHADQAHAEAEAFQADAEABAGQACAGAAALIAAA3g");
	this.shape_16.setTransform(810.3,31.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDA+QgFgCgCgEQgDgDgBgGIgBgSIAAgnIgLAAIAAgUIALAAIAAgTIAYgOIAAAhIARAAIAAAUIgRAAIAAAkIABAOIABADIAFABIAKgCIACATQgJADgLAAQgHAAgEgCg");
	this.shape_17.setTransform(801.8,31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDA+QgFgCgDgEQgCgDgBgGIgBgSIAAgnIgLAAIAAgUIALAAIAAgTIAYgOIAAAhIAQAAIAAAUIgQAAIAAAkIABAOIACADIADABIAKgCIADATQgJADgLAAQgHAAgEgCg");
	this.shape_18.setTransform(790.8,31.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBAIAAhcIAXAAIAABcgAgLgoIAAgYIAXAAIAAAYg");
	this.shape_19.setTransform(785.3,31.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaBAIAAg4IgzAAIAAA4IgaAAIAAiAIAaAAIAAA0IAzAAIAAg0IAaAAIAACAg");
	this.shape_20.setTransform(776.2,31.2);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(477.1,355.7,1,1,0,0,0,519,480.9);
	this.instance_1.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(438.1,241.1,1014,685.8);
// library properties:
lib.properties = {
	id: 'FB428E5043F6894C80A5F816B1B1106E',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HitTheHigh_atlas_.png?1518293346754", id:"HitTheHigh_atlas_"},
		{src:"sounds/done.mp3?1518293347326", id:"done"},
		{src:"sounds/righta.mp3?1518293347326", id:"righta"},
		{src:"sounds/wornga.mp3?1518293347326", id:"wornga"},
		{src:"sounds/ssss.mp3?1518293347326", id:"ssss"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1518293347326", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1518293347326", id:"sdk/anwidget.js"},
		{src:"components/ui/src/radiobutton.js?1518293347326", id:"an.RadioButton"},
		{src:"components/ui/src/css.js?1518293347326", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1518293347326", id:"an.ComboBox"},
		{src:"components/ui/src/textinput.js?1518293347326", id:"an.TextInput"}
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
an.compositions['FB428E5043F6894C80A5F816B1B1106E'] = {
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