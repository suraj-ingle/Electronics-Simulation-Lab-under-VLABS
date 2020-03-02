var r11=function(canvas,x,y)
{
        this.connectedTo= []
        this.correctCon = []

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="R1";
this.width0 = this.x-10;
this.height0 = this.y-20;
this.width1 = this.x+115;
this.height1 = this.y+10;
this.lable = "R";
this.value = 0;

this.valueLable = this.value+" ohm";
this.ipNo = 0;
this.opNo = 1;

this.alpha = 1
this.x1=x+8;
this.y1=y;

this.x2=x+102;
this.y2=y;
}


var rf=function(canvas,x,y)
{
        this.connectedTo= []
        this.correctCon = []

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="RF";
this.width0 = this.x-10;
this.height0 = this.y-20;
this.width1 = this.x+115;
this.height1 = this.y+10;
this.lable = "RF";
this.value = 0;
this.valueLable = this.value+" ohm";


this.ipNo = 2;
this.opNo = 3;

this.alpha = 1

this.x1=x-2;
this.y1=y;

this.x2=x+92;
this.y2=y;

}



var c=function(canvas,x,y)
{
        this.connectedTo= []
        this.correctCon = []

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="C";
this.width0 = this.x-10;
this.height0 = this.y-20;
this.width1 = this.x+60;
this.height1 = this.y+20;
this.lable = "C";
this.value = 0;
this.valueLable = this.value+" F";
this.ipNo = 4;
this.opNo = 5;

this.alpha = 1
this.x1=x-2;
this.y1=y;
this.x2=x+52;
this.y2=y;
}


var op=function(canvas,x,y)
{

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="OA";
this.width0 = this.x-30;
this.height0 = this.y-20;
this.width1 = this.x+90;
this.height1 = this.y+80;

this.lable = "IC";
this.ipNo = 6;
this.ip2No = 7;
this.opNo = 8;

this.alpha = 1
//first ip
this.x1=x-27; 
this.y1=y+20;

// op
this.x2 = x+82;
this.y2 = y+32;

//second ip
this.x3 = x-27;
this.y3 = y+45;


this.x4 = x+25;
this.y4 = y-12;
this.x5 = x+25;
this.y5 = y+75;
}


var ps=function(canvas,x,y)
{

this.canvas = canvas;
this.context = this.canvas.getContext("2d");

this.x=x;
this.y=y;
this.type="PS";
this.value = 0;
this.valueLable = this.value+" V";
this.ipNo = 9;
this.opNo = 10;
this.width0 = this.x-25;
this.height0 = this.y-80;
this.width1 = this.x+25;
this.height1 = this.y+20;


this.alpha = 1
this.x1=x;
this.y1=y+12;
this.x2=x;
this.y2=y-72;
}


var g=function(canvas,x,y)
{

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="G";
this.width0 = this.x-20;
this.height0 = this.y-30;
this.width1 = this.x+20;
this.height1 = this.y+15;
this.lable = "G";
this.ipNo = 12;
this.opNo = this.ipNo;

this.alpha = 1
this.x1=x;
this.y1=y-50;
this.x2=x;
this.y2=y-22;
}


var rl=function(canvas,x,y)
{

this.canvas = canvas;
this.context = this.canvas.getContext("2d");
this.x=x;
this.y=y;
this.type="L";
this.width0=this.x-15;
this.height0=this.y-15;
this.width1=this.x+15;
this.height1=this.y+90;
this.lable = "RL";
this.value = 0;
this.valueLable = this.value+" ohm";
this.ipNo = 13;
this.opNo = 14;

this.alpha = 1
this.x1=x;
this.y1=y-7;

this.x2=x;
this.y2=y+82;
}



var cro=function(canvas,x,y)
{
        this.alpha = 1
        
        this.value = "";
        /*
        if(isNaN(Math.round(vout)))
            {    this.value = ""

                }
        else{
                this.value = Math.round(vout);   
        }
        */
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x=x;
        this.y=y;
        this.type="CRO";
  
        this.ipNo = 15
        this.opNo = 16
        this.ip2No =17

        this.width0=x;
        this.height0=y;
        this.width1=x+180;
        this.height1=y+120;

        /*
        this.x1=x+115 + 25;
        this.y1=y+114 -25;
        this.x2=x+50 + 105;
        this.y2=y+114 - 25;
        this.x3=x+75 + 95;
        this.y3=y+114 - 25;
        */
        // new cro screen coordinates
        
        this.x1=x+25 + 115;
        this.y1=y+114 -25;
        this.x2=x+50 + 105;
        this.y2=y+114 -25;
        this.x3=x+75 + 95;
        this.y3=y+114 -25;
        
        this.y4=y+23;
        this.x4=x+140;
        this.x5=x+10;
        this.y5=y+10;
        this.x6=x+10;
        this.y6=y+10;
}


var myConnection=function(canvas,x1,y1,x2,y2)
{
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        
        this.alpha = 1;
        this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x=(this.x1+this.x2)/2;
        this.y=(this.y1+this.y2);
        
        this.color = "blue"
}


myConnection.prototype.drawline=function()
{
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        //alert("X:"+this.x);
      	this.context.beginPath();
        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(this.x1, this.y1);
        this.context.lineTo(this.x, this.y1);
        this.context.lineTo(this.x, this.y2);
        this.context.lineTo(this.x2, this.y2);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}



r11.prototype.draw=function()  	/////////////////////////////////////////////////////// R1
{

        var x=this.x;
       	var y=this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x+10, y);//starting
        this.context.lineTo(x+35,y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.font = "15px Arial";
        this.context.fillStyle = "black"
        this.context.fillText(this.lable,x+50,y-20);
        this.context.fillText(this.value+" ohm",x+40,y+20);
        this.context.beginPath();

        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+35,y);
        this.context.lineTo(x+40,y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+40, y-10);
        this.context.lineTo(x+45, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+45, y);
        this.context.lineTo(x+50, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+50, y+10);
        this.context.lineTo(x+60, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+60, y-10);
        this.context.lineTo(x+70, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+70, y+10);
        this.context.lineTo(x+80, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

         this.context.beginPath();
        this.context.moveTo(x+80, y-10);
        this.context.lineTo(x+85, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+85, y);
        this.context.lineTo(x+100, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}



rf.prototype.draw=function()		//////////////////////////////////////////////////// RF
{
        var x=this.x;
        var y=this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
        
        this.context.beginPath();
        this.context.moveTo(x, y);//starting
        this.context.lineTo(x+25, y);
        this.context.strokeStyle =  "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable,x+40,y-20);
        this.context.fillText(this.value+" ohm",x+30,y+20);

        this.context.beginPath();
        this.context.moveTo(x+25, y);
        this.context.lineTo(x+30, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

         this.context.beginPath();
        this.context.moveTo(x+30, y-10);
        this.context.lineTo(x+35, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

         this.context.beginPath();
        this.context.moveTo(x+35, y);
        this.context.lineTo(x+40, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+40, y+10);
        this.context.lineTo(x+50, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

         this.context.beginPath();
        this.context.moveTo(x+50, y-10);
        this.context.lineTo(x+60, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+60, y+10);
        this.context.lineTo(x+70, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

         this.context.beginPath();
        this.context.moveTo(x+70, y-10);
        this.context.lineTo(x+75, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+75, y);
        this.context.lineTo(x+85, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}



c.prototype.draw=function()		//////////////////////////////////////////////////// C
{
        var x=this.x;
        var y=this.y;
 
        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x+20, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        
        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable,x+20,y-20);
        this.context.fillText(this.value+" F",x+15,y+22);
        this.context.stroke();

        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+20, y+10);
        this.context.lineTo(x+20, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        
        /*this.context.beginPath();
        this.context.moveTo(x+20, y+10);
        this.context.lineTo(x+20, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.moveTo(x+20, y);
        this.context.lineTo(x+30, y);

        this.context.beginPath();
        this.context.moveTo(x+30, y);
        this.context.lineTo(x+30, y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();*/

        this.context.beginPath();
        this.context.moveTo(x+30, y-10);
        this.context.lineTo(x+30, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        /*this.context.beginPath();
        this.context.moveTo(x+30, y+10);
        this.context.lineTo(x+30, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();*/

        this.context.beginPath();
        this.context.moveTo(x+30, y);
        this.context.lineTo(x+50, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


op.prototype.draw=function()		////////////////////////// OA
{
        var x=this.x;
        var y=this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x, y);//starting point
        this.context.lineTo(x, y+60);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;

        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable,x+20,y+36);
        this.context.stroke();


        this.context.moveTo(x, y+20);
        this.context.lineTo(x-25, y+20);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true); 	//////// left top
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.moveTo(x+5, y+20);
        this.context.lineTo(x+15, y+20);


        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();
        this.context.moveTo(x, y+45);
        this.context.lineTo(x-25, y+45);




        this.context.moveTo(x+5, y+45);
        this.context.lineTo(x+15, y+45);
        this.context.moveTo(x+10, y+45);
        this.context.lineTo(x+10, y+40);
        this.context.moveTo(x+10, y+45);
        this.context.lineTo(x+10, y+50);

        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x+60,y+32);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        
        this.context.beginPath();
        this.context.moveTo(x+25, y+15);
        this.context.lineTo(x+25,y-10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x4,this.y4,3,0,2*Math.PI,true);	///////////////////////// positive supply
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+25, y+48);
        this.context.lineTo(x+25,y+73);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();
        
        
        this.context.beginPath();
        this.context.arc(this.x5,this.y5,3,0,2*Math.PI,true);	///////////////////////// negative supply
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x+60, y+32);
        this.context.lineTo(x+60,y+32);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.moveTo(x, y+60);
        this.context.lineTo(x+60, y+32);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+60, y+32);
        this.context.lineTo(x+80, y+32);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);	///////////////////////// right
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();



        this.context.beginPath();
        this.context.arc(this.x3,this.y3,5,0,2*Math.PI,true);  /////////////////////// left bottom
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}

       
ps.prototype.draw=function()	////////////////////////////////////////////////////////////// PS
{
        var x=this.x;
        var y=this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        this.context.beginPath();
        this.context.moveTo(x, y-10);
        this.context.lineTo(x, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;

        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText(this.value+" V",x+25,y-25);
        this.context.stroke();

        //context.moveTo(100, 275);
        this.context.beginPath();

        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();



        this.context.beginPath();
        //context.moveTo(100, 225);

        this.context.arc(x,y-30,20,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x, y-35);
        this.context.lineTo(x, y-45);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x, y-40);
        this.context.lineTo(x+5, y-40);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x, y-40);
        this.context.lineTo(x-5, y-40);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x+5, y-19);
        this.context.lineTo(x-5, y-19);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(x-3,y-27,3,0,Math.PI,true);//sine
        this.context.strokeStyle = "black"
        this.context.lineWidth = 2;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(x+3,y-27,3,Math.PI,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 2;
        this.context.stroke();

        context.beginPath();
        context.moveTo(x, y-50);
        context.lineTo(x, y-70);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


g.prototype.draw=function() 	////////////////////////////////////////////////////// G
{
var x=this.x;
       var y=this.y;

       this.context.globalAlpha = this.alpha
       this.context.fillStyle = "black"
       this.context.strokeStyle = "black"

       this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x, y-20);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x2,this.y2,4,0,2*Math.PI,true);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        /*this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x-15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();*/

        this.context.beginPath();
        this.context.moveTo(x-15, y);
        this.context.lineTo(x+15, y);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        /*this.context.moveTo(x+15, y);
        this.context.lineTo(x+15, y+5);

        this.context.beginPath();
        this.context.moveTo(x, y+5);
        this.context.lineTo(x-10, y+5);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();*/

        this.context.beginPath();
        this.context.moveTo(x-10, y+5);
        this.context.lineTo(x+10, y+5);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();


        /*this.context.moveTo(x+10, y+5);
        this.context.lineTo(x+10, y+10);

        this.context.beginPath();
        this.context.moveTo(x, y+10);
        this.context.lineTo(x-5, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();*/

        this.context.beginPath();
        this.context.moveTo(x-5, y+10);
        this.context.lineTo(x+5, y+10);
        this.context.strokeStyle = "black"
        this.context.lineWidth = 3;
        this.context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
    }




rl.prototype.draw=function()		/////////////////////////// L
{
        var x=this.x;
        var y=this.y;

        this.context.globalAlpha = this.alpha
        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"

        context.beginPath();
        context.moveTo(x, y-5);//starting
        context.lineTo(x, y+10);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        
        this.context.fillStyle = "black"
        this.context.font = "15px Arial";
        this.context.fillText(this.lable,x-30,y+50);
        this.context.fillText(this.valueLable,x+10,y+50);
        context.stroke();


        context.beginPath();
        context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x,y+10);
        context.lineTo(x+10, y+15);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x+10,y+15);//starting
        context.lineTo(x-10, y+25);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();
        
        context.beginPath();
        context.moveTo(x-10,y+25);//starting
        context.lineTo(x+10, y+35);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x+10,y+35);//starting
        context.lineTo(x-10, y+45);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x-10,y+45);//starting
        context.lineTo(x+10, y+55);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(x+10,y+55);//starting
        context.lineTo(x,y+60);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

         context.beginPath();
        context.moveTo(x,y+60);//starting
        context.lineTo(x, y+80);
        context.strokeStyle = "black"
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


cro.prototype.draw=function()
{
        var x=this.x;
        var y=this.y;
        
        this.context.globalAlpha = this.alpha;
        this.context.fillStyle = "black";
        this.context.strokeStyle = "black";

        this.context.beginPath();
        this.context.rect(this.x-25,this.y,225,120)
        this.context.rect(this.x6,this.y6,120,60);//cro screen
        this.context.rect(this.x5,this.y5+65,120,40);//vout
        this.context.stroke();
        
        this.context.beginPath();
        this.context.strokeStyle = "black";
        this.context.lineWidth = 3;
        this.context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        this.context.stroke();
        
        this.context.beginPath();
        this.context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(this.x3,this.y3,5,0,2*Math.PI,true);
        this.context.stroke();

        this.context.font = "20px Georgia";
        this.context.fillStyle = "red";
        this.context.align="center";
        this.context.fillText(this.value, this.x5+8,this.y5+93);
        this.context.fill();
        this.context.font = "17px Georgia";
        this.context.fillStyle = "red";
        this.context.align="center";
        this.context.fillText("+     ", this.x5+123,this.y5+73);
        this.context.fillStyle = "green";
        this.context.fillText( "        G   ", this.x5+123,this.y5+73);
        this.context.fillStyle = "black";
        this.context.fillText("     -", this.x5+123,this.y5+73);
        
        //this.context.fillText("Volts", this.x5+80,this.y5+93);
        this.context.fill();
        
        this.context.font = "20px Georgia";
        this.context.fillStyle = "blue";
        this.context.align="center";
        this.context.fillText("ip", this.x5-30,this.y5+25);
        this.context.fill();
        
        this.context.font = "20px Georgia";
        this.context.fillStyle = "green";
        this.context.align="center";
        this.context.fillText("op", this.x5-30,this.y5+50);
        this.context.fill();
        
        this.context.font = "9px Georgia";
        this.context.fillStyle= "black";
        this.context.fillText("CLICK",this.x4+1,this.y4+9);
        this.context.fill();
        
        this.context.rect(this.x4,this.y4,30,15);
        this.context.strokeStyle = "1px"
        this.context.stroke();
        this.context.closePath();
     //Stop button
   //     this.context.beginPath();
     
     //   this.context.closePath();
     this.context.fillStyle = "black"
        this.context.strokeStyle = "black"
}


var YC=function(canvas,x,y)
{
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x=x;
    this.y=y;
    this.x1=x;
    this.y1=y+22.5;
    this.x2=x+22.5*Math.sin(Math.PI/3);
    this.y2=y+11.25;
    this.type="YC";
    this.width0 = this.x;
    this.height0 = this.y;
    this.width1 = this.x2;
    this.height1 = this.y1;

}	
YC.prototype.draw=function()
{
        this.context.globalAlpha = 1;
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+6.375,this.y+11.25);
        context.lineTo(this.x,this.y);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+6.375,this.y+11.25);
        context.lineTo(this.x1,this.y1);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+6.375,this.y+11.25);
        context.lineTo(this.x2,this.y2);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x,this.y,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
	
}

var YC1=function(canvas,x,y)
{
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x=x;
    this.y=y+11.5;
    this.x1=x+22.5*Math.sin(Math.PI/3);
    this.y1=y+22.5;
    this.x2=x+22.5*Math.sin(Math.PI/3);
    this.y2=y;
    this.type="YC1";
    this.width0 = this.x;
    this.height0 = this.y;
    this.width1 = this.x2;
    this.height1 = this.y1;

}	
YC1.prototype.draw=function()
{
        this.context.globalAlpha = 1;
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+11.25,this.y);
        context.lineTo(this.x,this.y);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+11.25,this.y);
        context.lineTo(this.x1,this.y1);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.x+11.25,this.y);
        context.lineTo(this.x2,this.y2);
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x,this.y,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x1,this.y1,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.lineWidth = 2;
        context.arc(this.x2,this.y2,5,0,2*Math.PI,true);
        context.fillStyle = "white";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
}