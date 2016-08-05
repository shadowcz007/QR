(function() {

function Button(label, color, Textcolor) {
	this.Container_constructor();
	
	this.color = color;
	this.label = label;
	this.Textcolor = Textcolor;
	this.setup();
	this.width= this.setup();
}
var p = createjs.extend(Button, createjs.Container);


p.setup = function() {
	var text = new createjs.Text(this.label, "20px Arial", this.Textcolor);
	text.textBaseline = "top";
	text.textAlign = "center";
	
	var width = text.getMeasuredWidth()+30;
	var height = text.getMeasuredHeight()+20;
	
	text.x = width/2;
	text.y = 10;
	
	var background = new createjs.Shape();
	background.graphics.ss(1).s(this.color).f('rgba(0,0,0,0.9)').dr(0,0,width,height);
	
	this.addChild(background, text); 
	this.on("pressup", this.handlePressup);
	this.on("rollover", this.handleRollOver);
	this.on("rollout", this.handleRollOver);
	this.cursor = "pointer";

	this.mouseChildren = false;
	
	this.offset = Math.random()*10;
	this.count = 0;
	return width;
} ;

p.handlePressup = function (event) {
	//alert("You clicked on a button: "+this.label);
} ;

p.handleRollOver = function(event) {       
	//this.alpha = event.type == "rollover" ? 0.4 : 1;
};

window.Button = createjs.promote(Button, "Container");
}());