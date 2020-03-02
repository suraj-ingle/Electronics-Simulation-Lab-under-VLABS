var r11 = function (canvas, x, y) {
        this.connectedTo = []
        this.correctCon = []

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;

        this.type = "R1";

        this.lable = "R";
        this.value = 0;

        this.valueLable = this.value + " ohm";
        this.ipNo = 0;
        this.opNo = 1;

        this.alpha = 1

        this.width = 80;
        this.height = 60;

        this.x1 = x;
        this.y1 = y + 30;

        this.x2 = x + 20 * 4;
        this.y2 = y + 30;
}


var rf = function (canvas, x, y) {
        this.connectedTo = []
        this.correctCon = []

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "RF";

        this.lable = "RF";
        this.value = 0;
        this.valueLable = this.value + " ohm";
        this.ipNo = 2;
        this.opNo = 3;

        this.alpha = 1

        this.width = 80;
        this.height = 60;

        this.x1 = x;
        this.y1 = y + 30;

        this.x2 = x + 20 * 4;
        this.y2 = y + 30;

}

var pot = function(canvas, x, y){

        this.connectedTo = []
        this.correctCon = []

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "POT";
        
        this.alpha = 1

        this.width = 80;
        this.height = 60;

        this.lable = "Pot";
        
        this.ipNo = 19;
        this.opNo = 20;

        this.x1 = x;
        this.y1 = y + 30;

        this.x2 = x + 20 * 4;
        this.y2 = y + 30;

}

var c = function (canvas, x, y) {
        this.connectedTo = []
        this.correctCon = []

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "C";

        this.lable = "C";
        this.value = 0;
        this.valueLable = this.value + " F";

        this.ipNo = 4;
        this.opNo = 5;

        this.alpha = 1

        this.width = 60;
        this.height = 60;

        this.x1 = x;
        this.y1 = y + 30;
        this.x2 = x + 20 * 3;
        this.y2 = y + 30;
}


var op = function (canvas, x, y) {

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "OA";

        this.lable = "IC";
        this.value;

        this.ipNo = 6;
        this.ip2No = 7;
        this.opNo = 8;

        this.alpha = 1;

        this.width = 100;
        this.height = 80;
        //first ip
        this.x1 = x;
        this.y1 = y + 20;

        // op
        this.x2 = x + 20 * 5;
        this.y2 = y + 40;

        //second ip
        this.x3 = x;
        this.y3 = y + 60;


        this.x4 = x + 60;
        this.y4 = y + 5;
        this.x5 = x + 60;
        this.y5 = y + 75;
}


var ps = function (canvas, x, y) {

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.x = x;
        this.y = y;
        this.type = "PS";
        this.value = 0;
        this.valueLable = this.value + " V";
        this.ipNo = 10;
        this.opNo = 9;

        this.alpha = 1

        this.width = 80;
        this.height = 80;

        this.x1 = x + 20;
        this.y1 = y;
        this.x2 = x + 20;
        this.y2 = y + 80;
}


var g = function (canvas, x, y) {

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "G";

        this.lable = "G";
        this.ipNo = 12;
        this.opNo = this.ipNo;

        this.alpha = 1

        this.width = 80;
        this.height = 40;

        this.x1 = x + 20;
        this.y1 = y + 20;

        this.x2 = x + 20;
        this.y2 = y;
}


var rl = function (canvas, x, y) {

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "L";

        this.lable = "RL";
        this.value = 0;
        this.valueLable = this.value + " ohm";
        this.ipNo = 13;
        this.opNo = 14;

        this.alpha = 1

        this.width = 60;
        this.height = 80;

        this.x1 = x + 40;
        this.y1 = y;

        this.x2 = x + 40;
        this.y2 = y + 20 * 4;
}


var rg = function (canvas, x, y) {

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.type = "RG";

        this.lable = "RG";
        this.value = 0;
        this.valueLable = this.value;
        this.ipNo = 17;
        this.opNo = 18;

        this.alpha = 1

        this.width = 80;
        this.height = 80;

        this.x1 = x + 40;
        this.y1 = y;

        this.x2 = x + 40;
        this.y2 = y + 20 * 4;
}

var cro = function (canvas, x, y) {
        this.alpha = 1
        this.value = "OFF";
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;

        this.width = 20 * 11;
        this.height = 20 * 6;

        this.ipNo = 15
        this.opNo = 16

        this.type = "CRO";
        // op,ip, gnd
        this.x1 = x + 160;
        this.y1 = y + 120;
        this.x2 = x + 180;
        this.y2 = y + 120;
        this.x3 = x + 200;
        this.y3 = y + 120;

        // graph button
        this.x4 = x + 148;
        this.y4 = y + 20;
        //op value
        this.x5 = x + 20;
        this.y5 = y + 75;
        // sim screen
        this.x6 = x + 20;
        this.y6 = y + 10;
}



var myConnection = function (canvas, x1, y1, x2, y2, p1, p2) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.x = [];
        this.y = [];
        this.alpha = 1;
        this.pin1 = p1;
        this.pin2 = p2;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        //first point

        // last point
        this.color = "blue";
}


myConnection.prototype.drawline = function () {
        //alert("X:"+this.x);
        this.context.beginPath();
        this.context.arc(this.x[0], this.y[0], 5, 0, 2 * Math.PI, true);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(this.x[0], this.y[0]);

        for (var i = 1; i < this.x.length; i++) {
                this.context.lineTo(this.x[i], this.y[i]);
                this.context.strokeStyle = this.color;
                this.context.lineWidth = 3;
                this.context.stroke();
        }

        this.context.beginPath();
        this.context.arc(this.x[this.x.length - 1], this.y[this.x.length - 1], 5, 0, 2 * Math.PI, true);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


r11.prototype.draw = function ()  	/////////////////////////////////////////////////////// R1
{

        var x = this.x;
        var y = this.y + 30;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x+5, y);//starting
        this.context.lineTo(x + 15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.font = "15px Arial";
        this.context.fillStyle = "red"
        this.context.fillText(this.lable, x + 35, y - 15);
        this.context.fillText(this.value + " ohm", x + 20, y + 25);
        this.context.beginPath();

        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 15, y);
        this.context.lineTo(x + 20, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 20, y - 10);
        this.context.lineTo(x + 25, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 25, y);
        this.context.lineTo(x + 30, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 30, y + 10);
        this.context.lineTo(x + 40, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 40, y - 10);
        this.context.lineTo(x + 50, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 50, y + 10);
        this.context.lineTo(x + 60, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 60, y - 10);
        this.context.lineTo(x + 65, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 65, y);
        this.context.lineTo(x + 75, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}



rf.prototype.draw = function ()		//////////////////////////////////////////////////// RF
{
        var x = this.x;
        var y = this.y + 30;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x+5, y);//starting
        this.context.lineTo(x + 15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.font = "15px Arial";
        this.context.fillStyle = "red"
        this.context.fillText(this.lable, x + 35, y - 15);
        this.context.fillText(this.value + " ohm", x + 20, y + 25);
        this.context.beginPath();

        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 15, y);
        this.context.lineTo(x + 20, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 20, y - 10);
        this.context.lineTo(x + 25, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 25, y);
        this.context.lineTo(x + 30, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 30, y + 10);
        this.context.lineTo(x + 40, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 40, y - 10);
        this.context.lineTo(x + 50, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 50, y + 10);
        this.context.lineTo(x + 60, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 60, y - 10);
        this.context.lineTo(x + 65, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 65, y);
        this.context.lineTo(x + 75, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}



c.prototype.draw = function ()		//////////////////////////////////////////////////// C
{
        var x = this.x;
        var y = this.y + 30;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x + 5, y);
        this.context.lineTo(x + 25, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;

        this.context.fillStyle = "#D24B2A"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable, x + 25, y - 15);
        this.context.fillText(this.value + " F", x + 10, y + 26);
        this.context.stroke();

        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 25, y +10);
        this.context.lineTo(x + 25, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 35, y - 10);
        this.context.lineTo(x + 35, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 35, y);
        this.context.lineTo(x + 55, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


op.prototype.draw = function ()		////////////////////////// OA
{
        var x = this.x;
        var y = this.y;

        this.context.beginPath();
        this.context.moveTo(x + 20, y);//starting point
        this.context.lineTo(x + 20, y + 80);
        this.context.lineTo(x + 80, y + 40);
        this.context.lineTo(x + 20, y);

        this.context.closePath();

        this.context.fillStyle = 'red';
        this.context.fill();
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
        // IC
        this.context.fillStyle = "#6428BA"
        this.context.font = "15px Arial bold";
        this.context.fillText(this.lable, x + 40, y + 45);
        this.context.stroke();
        // input terminal 1
        this.context.moveTo(x + 20, y + 20);
        this.context.lineTo(x + 5, y + 20);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true); 	//////// left top
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        // minus sign
        this.context.moveTo(x + 25, y + 20);
        this.context.lineTo(x + 35, y + 20);

        // 2nd input terminal
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();
        this.context.moveTo(x + 20, y + 60);
        this.context.lineTo(x + 5, y + 60);
        // plus sign
        this.context.moveTo(x + 25, y + 60);
        this.context.lineTo(x + 35, y + 60);
        this.context.moveTo(x + 30, y + 65);
        this.context.lineTo(x + 30, y + 55);


        // +-15
        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText("+" + this.value, x + 65, y + 78);
        this.context.fillText("-" + this.value, x + 65, y + 15);
        this.context.stroke();

        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        // vcc
        this.context.beginPath();
        this.context.moveTo(x + 60, y + 28);
        this.context.lineTo(x + 60, y + 5);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x4, this.y4, 3, 0, 2 * Math.PI, true);	///////////////////////// positive supply
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();
        //vee 

        this.context.beginPath();
        this.context.moveTo(x + 60, y + 52);
        this.context.lineTo(x + 60, y + 75);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x5, this.y5, 3, 0, 2 * Math.PI, true);	///////////////////////// negative supply
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        /*
                this.context.beginPath();
                this.context.moveTo(x+60, y+32);
                this.context.lineTo(x+60,y+32);
                this.context.strokeStyle = "black"
                this.context.lineWidth = 3;
                this.context.stroke();
        */

        // triangle vertical side


        // output terminal
        this.context.beginPath();
        this.context.moveTo(x + 80, y + 40);
        this.context.lineTo(x + 95, y + 40);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);	///////////////////////// right
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();



        this.context.beginPath();
        this.context.arc(this.x3, this.y3, 5, 0, 2 * Math.PI, true);  /////////////////////// left bottom
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


ps.prototype.draw = function ()	////////////////////////////////////////////////////////////// PS
{
        var x = this.x + 20;
        var y = this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        // higher terminal
        this.context.beginPath();
        this.context.moveTo(x, y + 5);
        this.context.lineTo(x, y + 20);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"

        this.context.lineWidth = 3;
        this.context.stroke();

        // lower terminal
        this.context.beginPath();
        this.context.moveTo(x, y + 60);
        this.context.lineTo(x, y + 75);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        // lable
        this.context.fillStyle = "#DB20B9"
        this.context.font = "15px Arial";
        this.context.fillText(this.value + " V", x + 25, y + 45);
        this.context.stroke();

        // body
        this.context.beginPath();
        this.context.arc(x, y + 40, 20, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.stroke();

        // plus sign
        this.context.beginPath();
        this.context.moveTo(x, y + 25);
        this.context.lineTo(x, y + 35);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(x + 5, y + 30);
        this.context.lineTo(x - 5, y + 30);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        // minus sign
        this.context.beginPath();
        this.context.moveTo(x + 5, y + 53);
        this.context.lineTo(x - 5, y + 53);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        //sine wave
        this.context.beginPath();
        this.context.arc(x - 3, y + 43, 3, 0, Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(x + 3, y + 43, 3, Math.PI, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 2;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


g.prototype.draw = function () 	////////////////////////////////////////////////////// G
{
        var x = this.x + 20;
        var y = this.y + 20;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
        // verticle line
        this.context.beginPath();
        this.context.moveTo(x, y - 18);
        this.context.lineTo(x, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 4, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "green"
        this.context.font = "15px Arial";
        this.context.fillText("GND", this.x2 + 20, this.y2 + 20);
        this.context.stroke();
        // three stripes
        this.context.beginPath();
        this.context.moveTo(x - 15, y);
        this.context.lineTo(x + 15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x - 10, y + 5);
        this.context.lineTo(x + 10, y + 5);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x - 5, y + 10);
        this.context.lineTo(x + 5, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}

pot.prototype.draw = function ()		/////////////////////////// L
{
        var x = this.x;
        var y = this.y + 30;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x+5, y);//starting
        this.context.lineTo(x + 15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.font = "15px Arial";
        this.context.fillStyle = "red"
        this.context.fillText(this.lable, x + 30, y - 15);

        this.context.beginPath();
        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 15, y);
        this.context.lineTo(x + 20, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 20, y - 10);
        this.context.lineTo(x + 25, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 25, y);
        this.context.lineTo(x + 30, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        // cross 
        this.context.beginPath();
        this.context.moveTo(x+30, y+20);
        this.context.lineTo(x+60, y-15);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 30, y + 10);
        this.context.lineTo(x + 40, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 40, y - 10);
        this.context.lineTo(x + 50, y + 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 50, y + 10);
        this.context.lineTo(x + 60, y - 10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x + 60, y - 10);
        this.context.lineTo(x + 65, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x + 65, y);
        this.context.lineTo(x + 75, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

}


rl.prototype.draw = function ()		/////////////////////////// L
{
        var x = this.x + 40;
        var y = this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        context.beginPath();
        context.moveTo(x , y+5);//starting
        context.lineTo(x, y + 15);
        context.strokeStyle = "black"
        context.lineWidth = 3;

        this.context.fillStyle = "#083D72"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable, x - 35, y + 50);
        context.stroke();

        context.beginPath();
        context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x, y + 15);
        context.lineTo(x + 10, y + 20);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 20);//starting
        context.lineTo(x - 10, y + 30);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x - 10, y + 30);//starting
        context.lineTo(x + 10, y + 40);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 40);//starting
        context.lineTo(x - 10, y + 50);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x - 10, y + 50);//starting
        context.lineTo(x + 10, y + 60);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 60);//starting
        context.lineTo(x, y + 65);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x, y + 65);//starting
        context.lineTo(x, y + 75);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}

rg.prototype.draw = function ()		/////////////////////////// L
{
        var x = this.x + 40;
        var y = this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        context.beginPath();
        context.moveTo(x , y+5);//starting
        context.lineTo(x, y + 15);
        context.strokeStyle = "black"
        context.lineWidth = 3;

        this.context.fillStyle = "#083D72"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable, x - 35, y + 50);
        this.context.fillText(this.value, x + 15, y + 45);
        this.context.fillText("ohm", x + 15, y + 60);
        context.stroke();

        context.beginPath();
        context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x, y + 15);
        context.lineTo(x + 10, y + 20);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 20);//starting
        context.lineTo(x - 10, y + 30);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x - 10, y + 30);//starting
        context.lineTo(x + 10, y + 40);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 40);//starting
        context.lineTo(x - 10, y + 50);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x - 10, y + 50);//starting
        context.lineTo(x + 10, y + 60);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x + 10, y + 60);//starting
        context.lineTo(x, y + 65);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x, y + 65);//starting
        context.lineTo(x, y + 75);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}

cro.prototype.draw = function () {
        var x = this.x;
        var y = this.y;

        this.context.globalAlpha = this.alpha;
        this.context.fillStyle = "black";
        this.context.strokeStyle = "black";

        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.rect(this.x, this.y, 20 * 11, 20 * 6)// body
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.rect(this.x6, this.y6, 120, 60);//cro screen
        this.context.rect(this.x5, this.y5, 120, 40);//vout
        this.context.rect(this.x4, this.y4, 63, 40); // graph button
        this.context.stroke();

        this.context.beginPath();
        this.context.strokeStyle = "black";
        this.context.arc(this.x1, this.y1, 5, 0, 2 * Math.PI, true);//circle 1
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2, this.y2, 5, 0, 2 * Math.PI, true);//circle 2
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(this.x3, this.y3, 5, 0, 2 * Math.PI, true);//circle 3s
        this.context.stroke();

        this.context.font = "20px Georgia";
        this.context.fillStyle = "red";
        this.context.align = "center";
        this.context.fillText(this.value, this.x + 60, this.y + 100);
        this.context.fill();
        this.context.font = "12px Georgia";
        this.context.fillStyle = "red";
        this.context.align = "center";
        this.context.fillText("o/p     ", this.x + 150, this.y + 110);
        this.context.fillStyle = "green";
        this.context.fillText("      G   ", this.x + 180, this.y + 110);
        this.context.fillStyle = "black";
        this.context.fillText("     i/p", this.x + 160, this.y + 110);
        this.context.fill();

        this.context.font = "18px Georgia";
        this.context.fillStyle = "blue";
        this.context.align = "center";
        this.context.fillText("ip", this.x + 3, this.y + 35);
        this.context.fill();

        this.context.font = "18px Georgia";
        this.context.fillStyle = "green";
        this.context.align = "center";
        this.context.fillText("op", this.x, this.y + 60);
        this.context.fill();

        this.context.font = "13px Georgia";
        this.context.fillStyle = "black";
        this.context.fillText("Show", this.x4 + 15, this.y4 + 15);
        this.context.fillText("Graph", this.x4 + 15, this.y4 + 30);
        this.context.fill();

        this.context.closePath();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


