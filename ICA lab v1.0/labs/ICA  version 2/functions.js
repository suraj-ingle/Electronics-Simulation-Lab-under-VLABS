var allCorrect = 1;

function generateCorrectContainer() {
    alert("comming soon...")
}

function check() {

    var allCorrect = 1;
    //alert("see");
    for (i = 0; i < pairContainer.length; i++) {
        var correct = false;
        //console.log(pairContainer[0][0]+"And"+pairContainer[0][1]);
        for (j = 0; j < correctContainer.length; j++) {
            //var c1=0;
            //alert(correctContainer[j].includes(pairContainer[i][0]) + " ans");

            if (correctContainer[j].includes(pairContainer[i][0])) {
                if (correctContainer[j].includes(pairContainer[i][1])) {
                    // if both present in same set of correctContainer,  
                    correct = true;
                    c1 = 1;
                    break;
                }
            }
            //break;
        }
        
        if (correct == true) {
            connectionContainer[i].color = "green";
            ////////////////////////  this.context.strokeStyle = "green";
        }
        else {
            connectionContainer[i].color = "red";
            allCorrect = 0;
        }
    }

    if (allCorrect == 0) {
        alert("boooomm!!!!! \n check connections..")
    }
    else{
        alert("all correct")
    }


    drawAll()

    //interval = setInterval( drawOP,100);

}


// two components
function checkOverlap(x, y, width, height, comp = null) {
    //console.log(width0,height0,width1,height1);

    for (var i = 0; i < componentContainer.length; i++) {
        
        if(comp != null){ 
            if( comp == componentContainer[i]){
            continue;
            }
        }

        if (componentContainer[i].component.x >= x - 1*pixel && componentContainer[i].component.x <= x + 1*pixel + width) {

            if (componentContainer[i].component.y >= y - 1*pixel && componentContainer[i].component.y <= y + 1*pixel + height) {
                console.log(1);
                return (false);
            }
            else if (componentContainer[i].component.y + componentContainer[i].component.height >= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height <= y + 1*pixel + height) {
                console.log(2);
                return (false);
            }
            else if (componentContainer[i].component.y <= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height >= y + 1*pixel + height) {
                console.log(3);
                return (false);
            }
        }

        if (componentContainer[i].component.x + componentContainer[i].component.width >= x - 1*pixel && componentContainer[i].component.x + componentContainer[i].component.width <= x + 1*pixel + width) {
            
            if (componentContainer[i].component.y >= y - 1*pixel && componentContainer[i].component.y <= y + 1*pixel + height) {
                console.log(4);
                return (false);
            }

            else if (componentContainer[i].component.y + componentContainer[i].component.height >= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height <= y + 1*pixel + height) {
                console.log(5);
                return (false);
            }

            else if (componentContainer[i].component.y <= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height >= y + 1*pixel + height) {
                console.log(6);
                return (false);
            }

        }
        
        if (componentContainer[i].component.x <= x - 1*pixel && componentContainer[i].component.x + componentContainer[i].component.width >= x + 1*pixel + width) {
        
            if (componentContainer[i].component.y >= y - 1*pixel && componentContainer[i].component.y <= y + 1*pixel + height) {
                console.log(7);
                return (false);
            }

            else if (componentContainer[i].component.y + componentContainer[i].component.height >= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height <= y + 1*pixel + height) {
                console.log(8);
                return (false);
            }

            else if (componentContainer[i].component.y <= y - 1*pixel && componentContainer[i].component.y + componentContainer[i].component.height >= y + 1*pixel + height) {
                console.log(9);
                return (false);
            }

        }

    }

    return (true);
}

function clearLast() {
    if (componentContainer.length > 0 && undo[undo.length - 1] == "component") {
        if (componentContainer[componentContainer.length - 1].component.type == "R1") {
            document.getElementById("b1").disabled = false;

        }
        if (componentContainer[componentContainer.length - 1].component.type == "RF") {
            document.getElementById("b2").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "C") {
            document.getElementById("b3").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "OA") {
            document.getElementById("b5").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "G") {
            document.getElementById("b6").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "L") {
            document.getElementById("b7").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "CRO") {
            document.getElementById("b8").disabled = false;
        }
        if (componentContainer[componentContainer.length - 1].component.type == "PS") {
            document.getElementById("b4").disabled = false;
        }
        componentContainer.length--;
        //console.log("component reduced");
    }
    if (connectionContainer.length > 0 && undo[undo.length - 1] == "connection") {
        connectionContainer.length--;
        pairContainer.length--;
        //console.log("connection reduced");
    }
    undo.lenght = undo.length--;
    context.clearRect(0, 0, canvas.width, canvas.height);
    //console.log(componentContainer.length+" "+connectionContainer.length+" "+undo.length);
    drawAll();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    grid(20);
    var poppedElement;
    while (componentContainer.length > 0) {
        poppedElement = componentContainer.pop();
        document.getElementById(poppedElement.id).disabled = false;
    }
    while (connectionContainer.length != 0)
        connectionContainer.pop();
    /*while(drawLineContainer.length!=0){
        drawLineContainer.pop();
    }*/
    while (pairContainer.length != 0) {
        pairContainer.pop();
    }
    while (flagStack.length != 0)
        flagStack.pop();

    //CROCHANGES////////////////////////////////
    var datapointsSI1 = [];
    var datapointsSOP1 = [];
    var datapointsT1 = [];
    var datapointsTOP1 = [];
    var datapointsSQI = [];
    var datapointsSQOP1 = [];

    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    amp = Math.abs(amp);
    //////////INPUT VALUES
    rfeed = undefined;
    rval = undefined;
    vinp = undefined;
    freq = undefined;
    vout = undefined;
}

function clearConnection() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    connectionContainer = [];
    // drawLineContainer = [];
    pairContainer = [];
    drawAll();
}



var count;
var val = [];
var Gain = [];
var Vout = [];
function generate() {
    var tableName = "tb1";
    document.getElementById("tb1").style.display = 'block';
    //document.getElementById("drawGraph").style.display='block';

    cleartable(tableName);
    inserttable(tableName);
    graph()
}
function inserttable(tableName) {
    var tb1 = document.getElementById(tableName);
    var Lf = parseInt(document.getElementById("Lastfreq").value);
    var If = parseInt(document.getElementById("Infreq").value);
    var n = parseInt(document.getElementById("list1").value);
    var gain1;
    var num = ((Lf - If) / n) + 1; //counts no. of rows in table
    count = num;

    val[0] = Math.log10(If);
    var cellid = 1;
    var finalvout = (rfeed / rval) * 5;
    for (i = 1; i <= num; i++) {
        var row = tb1.insertRow(-1);
        val.push(Math.log10(If));
        for (j = 0; j < 3; j++) {
            //console.log();
            var cell = row.insertCell(-1);
            var t1 = document.createElement("input");
            t1.type = "text";

            t1.id = "t" + cellid;

            cell.appendChild(t1);
            //val.push(If+n);



            if (cellid % 3 == 1) {
                document.getElementById("t" + cellid).value = If;

            }

            if (cellid % 3 == 2) {
                // document.getElementById("t"+cellid).value=document.getElementById("t"+(cellid-1)).value*2;
                gain1 = 10000 / (Math.sqrt(1 + Math.pow((document.getElementById("t" + (cellid - 1)).value) / freq, 2))); //ideal freq =10000 for given input
                document.getElementById("t" + cellid).value = gain1;
                Gain.push(20 * Math.log10(gain1));
            }

            if (cellid % 3 == 0) {
                document.getElementById("t" + cellid).value = document.getElementById("t" + (cellid - 2).value) * 3;
                //  Vout.push(document.getElementById("t"+(cellid-2)).value*3);
            }

            cellid++;
            //alert("hi");

        }
        If += n;
    }
}
function cleartable() {
    var tb1 = document.getElementById("tb1");
    while (tb1.rows.length > 1) {
        tb1.deleteRow(1);
    }
}

var datapoints1 = [];

function graph() {
    var datapoints1 = [];

    for (i = 0; i < count; i++) {
        //datapoints1.push({ x:i/(360*text), y:v* Math.sin(i * Math.PI /180) });

        ////console.log(val[i]);
        var freqgraph = val.pop();
        var voutgraph = Gain.pop();
        /////console.log(freqgraph);
        ////console.log(voutgraph);


        datapoints1.push({ x: freqgraph, y: voutgraph });
    }
    document.getElementById("l1").style.display = "block"
    graphline("l1", datapoints1, "Freq", "Gain");
}

//CROchanges

function drawOP() {
    for (i = 0; i < componentContainer.length; i++) {


        if (componentContainer[i].component.type == "CRO")
            time = time + 0.2;

        context.clearRect(componentContainer[i].component.x6, componentContainer[i].component.y6, 120, 29);
        //console.log("x5 = " + componentContainer[i].component.x6);

        context.beginPath();
        for (d = 0; d <= 120; d++) {
            //context.beginPath();
            context.strokeStyle = "blue";
            context.lineTo(componentContainer[i].component.x6 + d, componentContainer[i].component.y6 + 15 - (Math.cos(time + d * 0.5) * 10));

            //
        }
        //   context.closePath();           
        context.stroke();
        context.closePath();
        if (d >= 120) {
            context.moveTo(componentContainer[i].component.x6 + 5, componentContainer[i].component.y6 + 40);
        }
    }

    if (time > 500) {

        clearInterval(interval);
    }
}

function drawIP() {
    for (i = 0; i < componentContainer.length; i++) {

        // context.strokeStyle = "green";
        if (componentContainer[i].component.type == "CRO")
            time = time + 0.2;

        context.clearRect(componentContainer[i].component.x6, componentContainer[i].component.y6 + 29, 120, 30);
        // //console.log("x5 = " + componentContainer[i].component.x6);

        context.beginPath();
        for (d = 0; d <= 120; d++) {
            //context.beginPath();
            context.strokeStyle = "green";
            context.lineTo(componentContainer[i].component.x6 + d, componentContainer[i].component.y6 + 21 + 20 - (Math.sin(time + d * 0.3) * 10));
            // context.closePath();
        }

        context.moveTo(componentContainer.x6, componentContainer.y6 + 15);

        context.stroke();
        // context.closePath();                     
    }
    context.closePath();
    if (time > 500) {

        clearInterval(interval1);
    }
}

function Square_Input_for_inverter() {
    var datapointsSQI = [];
    var datapointsSQOP1 = [];
    for (t = 0; t < T * 2 * 3; t += 2 * T) {
        datapointsSQI.push({ x: t, y: 0 });
        datapointsSQI.push({ x: t, y: amp });
        datapointsSQI.push({ x: t + T, y: amp });
        datapointsSQI.push({ x: t + T, y: 0 });
        datapointsSQI.push({ x: t + T, y: -amp });
        datapointsSQI.push({ x: t + 2 * T, y: -amp });
        datapointsSQI.push({ x: t + 2 * T, y: 0 });
    }

    graphline("line1", datapointsSQI, "Time(sec)", "Input Voltage(V)");

    amp = -amp;

    for (t = 0; t < T * 2 * 3; t += 2 * T) {
        datapointsSQOP1.push({ x: t, y: 0 });
        datapointsSQOP1.push({ x: t, y: -vout });
        datapointsSQOP1.push({ x: t + T, y: -vout });
        datapointsSQOP1.push({ x: t + T, y: 0 });
        datapointsSQOP1.push({ x: t + T, y: vout });
        datapointsSQOP1.push({ x: t + 2 * T, y: vout });
        datapointsSQOP1.push({ x: t + 2 * T, y: 0 });
    }

    graphline("line2", datapointsSQOP1, "Time(sec)", "Output Voltage(V)");

}

function Sine_Input_for_inverter() {
    var datapointsSI1 = [];
    var datapointsSOP1 = [];


    for (i = 0; i <= 2 / freq; i += 1 / (400 * freq)) {
        datapointsSI1.push({ x: i, y: vinp * Math.sin(Math.PI * 2 * freq * i) });
    }
    /* for(i=0;i<=360*2;i++)
        {  
            datapointsSI1.push({ x:i*2*T/(360), y:amp* Math.sin(i * Math.PI /180) });
        }*/
    graphline("line1", datapointsSI1, "Time(sec)", "Input Voltage(V)");



    /* for(i=0;i<=360*2;i++)
  {
      datapointsSOP1.push({ x:i*2*T/(360), y: vout* Math.sin(i * Math.PI /180) });
  }*/
    for (i = 0; i <= 2 / freq; i += 1 / (400 * freq)) {
        if (vout * Math.sin(Math.PI * 2 * freq * i) > opSat) {
            datapointsSOP1.push({ x: i, y: opSat });
        }
        else if (vout * Math.sin(Math.PI * 2 * freq * i) < -opSat) {
            datapointsSOP1.push({ x: i, y: -opSat });
        }
        else {
            datapointsSOP1.push({ x: i, y: vout * Math.sin(Math.PI * 2 * freq * i) });
        }
    }
    graphline("line2", datapointsSOP1, "Time(sec)", "Output Voltage(V)");

}
//Triangular Wave    
function Triangular_Input_For_inverter() {
    var datapointsT1 = [];
    var datapointsTOP1 = [];
    for (t = 0; t < 2 * 3 * T; t += 2 * T) {
        datapointsT1.push({ x: t, y: 0 });
        datapointsT1.push({ x: t + T / 2, y: amp });
        datapointsT1.push({ x: t + T, y: 0 });
        datapointsT1.push({ x: t + T + T / 2, y: -amp });
        datapointsT1.push({ x: t + 2 * T, y: 0 })
    }

    graphline("line1", datapointsT1, "Time(sec)", "Input Voltage(V)");

    //Triangular InvO
    amp = -amp;

    for (t = 0; t < T * 2 * 3; t += 2 * T) {
        datapointsTOP1.push({ x: t, y: 0 });
        datapointsTOP1.push({ x: t + T / 2, y: -amp * gain });
        datapointsTOP1.push({ x: t + T, y: 0 });
        datapointsTOP1.push({ x: t + T + T / 2, y: amp * gain });
        datapointsTOP1.push({ x: t + 2 * T, y: 0 })
    }

    graphline("line2", datapointsTOP1, "Time(sec)", "Output Voltage(V)");
}

function freqResponse() {
    document.getElementById("newTable").style.display = 'block'
}

var croConnected1 = 0;
var croConnected2 = 0;

// check connections --> red and green
// if all greeen, all components placed and cro connected to right pins, show value, animation and enable click button
// if not and click button pressed, alert("check connections").                
//on simulation off connections blue and hide value, animation on cro and disable click button

var tempKey;

function simStart() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (document.getElementById("myonoffswitch").checked == true) {

        tempKey = changeKey;
        changeKey = -1;

        // make connections red green
        check();

        // if no red connections
        if (allCorrect == 1 && pairContainer.lenght == 10) {

            // ip signal connected to cro --> show ip animation
            for (i = 0; i < pairContainer.length; i++) {
                if ((pairContainer[i].includes(3)&&pairContainer[i].includes(15))||(pairContainer[i].includes(8)&&pairContainer[i].includes(15))||(pairContainer[i].includes(13)&&pairContainer[i].includes(15))){
              
                    //c1=1;
                    //console.log("load to cro pin 1")
                    context.beginPath();
                    interval = setInterval(drawOP, 100);
                    context.closePath();

                    croConnected1 = 1;
                    break;
                }

            }

            //op connected to CRO --> show op animation
            for (i = 0; i < pairContainer.length; i++) {
                if ((pairContainer[i].includes(0)&&pairContainer[i].includes(16))||(pairContainer[i].includes(10)&&pairContainer[i].includes(16))) {
                    // if cro connected to op, show op wave

                    //console.log("signal to cro pin 2")
                    croConnected2 = 1;

                    context.beginPath();
                    interval1 = setInterval(drawIP, 100);
                    context.closePath();

                    break;
                }
            }
            // refresh value on cro
            for (i = 0; i < componentContainer.length; i++) {

                if (componentContainer[i].component.type == "CRO") {



                    //componentContainer[i].component.value = Math.round(vout) + " Volts"                            

                    if (!isNaN(vout) && vout > opSat) {
                        componentContainer[i].component.value = Math.round(opSat) + " Volts";
                    }
                    else if (!isNaN(vout) && vout < -opSat) {
                        componentContainer[i].component.value = Math.round(-opSat) + " Volts";
                    }
                    else { componentContainer[i].component.value = 0 + " Volts"; }
                }
            }
        }
        else { alert("check connections") }
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAll();
        //cover buttons
        var coverHeight = 0;
        simCoverTime = setInterval(function () {
            document.getElementById("controlsCover").style.height = coverHeight + "px";
            coverHeight += 10

            document.getElementById("coverLable").innerText = "Simulation Running...";

            if (coverHeight > 420) {
                clearInterval(simCoverTime);
                //alert("stop")
            }
        }, 10);
    }
    else if (document.getElementById("myonoffswitch").checked == false) {
        changeKey = tempKey;
        for (i = 0; i < pairContainer.length; i++) {
            //var correct = false;
            ////console.log(pairContainer[0][0]+"And"+pairContainer[0][1]);
            for (j = 0; j < correctContainer.length; j++) {
                //var c1=0;
                connectionContainer[i].color = "blue";

                //break;
            }

        }
        changeKey = -1


        if (croConnected1 == 1) {
            clearInterval(interval);
            //clearInterval(interval1);
        }

        if (croConnected2 == 1) {
            //clearInterval(interval);
            clearInterval(interval1);
        }

        for (i = 0; i < componentContainer.length; i++) {

            if (componentContainer[i].component.type == "CRO") {
                context.clearRect(componentContainer[i].component.x6, componentContainer[i].component.y6, 120, 60);
                context.clearRect(componentContainer[i].component.x5, componentContainer[i].component.y5 + 65, 120, 40);
                componentContainer[i].component.value = "OFF";
            }
        }


        var coverHeight = 420;
        simCoverTime = setInterval(function () {
            document.getElementById("controlsCover").style.height = coverHeight + "px";
            coverHeight -= 10
            document.getElementById("coverLable").innerText = "";
            if (coverHeight < 0) {
                clearInterval(simCoverTime);
                //alert("stop")
            }
        }, 10);

        drawAll();
        //alert("simulation stoped");
    }
}
