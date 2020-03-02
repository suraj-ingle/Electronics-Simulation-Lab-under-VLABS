function lineOverlap(connection, comp1ID, comp2ID) {

    var pin1x = 0
    var pin2x = 0
    var pin1y = 0
    var pin2y = 0

    switch(pin1)
    {
        case 'r':
            pin1x = 10
            break;            
        case 'l':
            pin1x = -10
            break;
        case 't':
            pin1y = -10
            break;
        case 'b':
            pin1y = 10
            break;
    }

    switch(pin2)
    {
        case 'r':
            pin2x = 10
            break;            
        case 'l':
            pin2x = -10
            break;
        case 't':
            pin2y = -10
            break;
        case 'b':
            pin2y = 10
            break;
    }



    if (connection.x1 + pin1x < connection.x2 + pin2x && connection.y1 + pin1y+ pin1y < connection.y2 + pin2x) {

        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }


        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }


    }
    else if (connection.x1 + pin1x> connection.x2 + pin2x && connection.y1 + pin1y> connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }


        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
    }
    else if (connection.x1 + pin1x> connection.x2 + pin2x && connection.y1 + pin1y< connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }


        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = cornerXshift(connection, comp1ID, comp2ID)

        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }


        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = xbreakL(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = ybreakD(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
    }
    else if (connection.x1 + pin1x< connection.x2 + pin2x && connection.y1 + pin1y> connection.y2 + pin2y) {

        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }


        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = cornerYshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = ybreakU(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = xbreakR(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = cornerXshift(connection, comp1ID, comp2ID)
        }
    }
    // parallel to axis
    else if (connection.x1 + pin1x< connection.x2 + pin2x && connection.y1 + pin1y== connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }
    }
    else if (connection.x1 + pin1x> connection.x2 + pin2x && connection.y1 + pin1y== connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }
    }
    else if (connection.x1 + pin1x== connection.x2 + pin2x && connection.y1 + pin1y< connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {

        }




        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }
    }
    else if (connection.x1 + pin1x== connection.x2 + pin2x && connection.y1 + pin1y> connection.y2 + pin2y) {


        if (connection.pin1 == "r" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "r" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "l" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "l" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }




        if (connection.pin1 == "t" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "t" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }



        if (connection.pin1 == "b" && connection.pin2 == "r") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "l") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "t") {
            connection = straight(connection, comp1ID, comp2ID)
        }
        else if (connection.pin1 == "b" && connection.pin2 == "b") {
            connection = straight(connection, comp1ID, comp2ID)
        }
    }



    if (overlapEnabled) {
        for (i = 1; i < connection.x.length - 2; i++)//do not check first and last link 
        {
                //breakLine()
            
            for (c = 0; c < componentContainer.length; c++) {
                // x, x+width; y , y + height
                var cx = componentContainer[c].component.x
                var cw = componentContainer[c].component.x + componentContainer[c].component.width
                var centerX = componentContainer[c].component.x + componentContainer[c].component.width/2

                var cy = componentContainer[c].component.y
                var ch = componentContainer[c].component.y + componentContainer[c].component.height
                var centerY = componentContainer[c].component.y + componentContainer[c].component.height/2

                var overlapping = true
                var ittr = 0
                console.log("i, c = " + i + " " + c)
                while (overlapping && ittr < 200 && i < 150) {
                    
                    ittr++;

                    if (cx <= connection.x[i] && connection.x[i] <= cw) {
                        //console.log("vertical overlap possible")
                        if ((connection.y[i] <= cy && ch <= connection.y[i + 1]) || (connection.y[i + 1] <= cy && ch <= connection.y[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("virtical overlap a")
                            
                            if(connection.x[i] <= centerX){
                                connection.x[i] -= pixel
                                connection.x[i + 1] -= pixel
                            }
                            else if(connection.x[i] > centerX){
                                connection.x[i] += pixel
                                connection.x[i + 1] += pixel
                            }
                            
                        }
                        else if ((connection.y[i] <= cy && cy <= connection.y[i + 1]) || (connection.y[i + 1] <= cy && cy <= connection.y[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("virtical overlap b")

                            if(connection.x[i] <= centerX){
                                connection.x[i] -= pixel
                                connection.x[i + 1] -= pixel
                            }
                            else if(connection.x[i] > centerX){
                                connection.x[i] += pixel
                                connection.x[i + 1] += pixel
                            }
                        }
                        else if ((connection.y[i] <= ch && ch <= connection.y[i + 1]) || (connection.y[i + 1] <= ch && ch <= connection.y[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("virtical overlap c")
                            
                            if(connection.x[i] <= centerX){
                                connection.x[i] -= pixel
                                connection.x[i + 1] -= pixel
                            }
                            else if(connection.x[i] > centerX){
                                connection.x[i] += pixel
                                connection.x[i + 1] += pixel
                            }
                        }
                        else {
                            overlapping = false
                            console.log("no vertical overlap")
                            break;
                        }

                    }
                    //horizontal overlap
                    else if (cy <= connection.y[i] && connection.y[i] <= ch) {
                        //console.log("horizontal overlap possible")
                        if ((connection.x[i] <= cx && cw <= connection.x[i + 1]) || (connection.x[i + 1] <= cx && cw <= connection.x[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("horizontal overlap a")
                            
                            if(connection.y[i] <= centerY){
                                connection.y[i] -= pixel
                                connection.y[i + 1] -= pixel
                            }
                            else if(connection.y[i] > centerY){
                                connection.y[i] += pixel
                                connection.y[i + 1] += pixel
                            }
                        }
                        else if ((connection.x[i] <= cx && cx <= connection.x[i + 1]) || (connection.x[i + 1] <= cx && cx <= connection.x[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("horizontal overlap b")
                            
                            if(connection.y[i] <= centerY){
                                connection.y[i] -= pixel
                                connection.y[i + 1] -= pixel
                            }
                            else if(connection.y[i] > centerY){
                                connection.y[i] += pixel
                                connection.y[i + 1] += pixel
                            }
                        }
                        else if ((connection.x[i] <= cw && cw <= connection.x[i + 1]) || (connection.x[i + 1] <= cw && cw <= connection.x[i])) {
                            chechSelfOverlap()
                            overlapping = true
                            console.log("horizontal overlap c")
                            
                            if(connection.y[i] <= centerY){
                                connection.y[i] -= pixel
                                connection.y[i + 1] -= pixel
                            }
                            else if(connection.y[i] > centerY){
                                connection.y[i] += pixel
                                connection.y[i + 1] += pixel
                            }
                        }
                        else {
                            overlapping = false
                            console.log("no horizontal overlap")
                            break;
                        }


                    }
                    //no overlap
                    else {
                        overlapping = false
                        console.log("no vertical/horizontal/self overlap")
                        break;
                    }
                    //console.log("component " + c)
                }

            }
        }
    }
    return connection
}


var dumConnectX= []
var dumConnectY= []
var dummyCount = 0
function breakLine(){

    var i = 0
    for(i = 0; i < connection.x.length - 1; i++){ 
        var n = 1
        var x40 = []
        var yx40 = []
        if(connection.x[i] < connection.x[i+1]){
            while(connection.x[i] + n*40 <= connection.x[i+1]){
                x40.push(connection.x[i] + n*40)
                yx40.push(connection.y[i])
                n++
            }
        }
        else if(connection.x[i+1] < connection.x[i]){
            while(connection.x[i+1] - n*40 <= connection.x[i]){
                x40.push(connection.x[i+1] - n*40)
                yx40.push(connection.y[i])
                n++
            }
        }
        
        dumConnectX[dummyCount] = connection.x.slice(0,i+1).concat(x40).concat(connection.x.slice(i+1,connection.x.length))
        dumConnectY[dummyCount] = connection.y.slice(0,i+1).concat(yx40).concat(connection.y.slice(i+1,connection.y.length))
        console.log(i + n)
        //i = i + n
    }



}

function chechSelfOverlap() {
    if (i == 1) {
        for (temp = connection.x.length; temp > 1; temp--) {
            connection.x[temp] = connection.x[temp - 1]
            connection.y[temp] = connection.y[temp - 1]
        }
    }
    else if (i == connection.x.length - 3) {
        var len = connection.x.length
        for (temp = connection.x.length; temp > len - 2; temp--) {
            connection.x[temp] = connection.x[temp - 1]
            connection.y[temp] = connection.y[temp - 1]
        }
    }
}


function cornerYshift(connection, comp1ID, comp2ID) {
    console.log("cornerXshift")

    connection.x[0] = connection.x1
    connection.y[0] = connection.y1

    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1 

    connection.x[3] = connection.x1
    connection.y[3] = connection.y2

    connection.x[4] = connection.x2
    connection.y[4] = connection.y2
    connection.x[5] = connection.x2
    connection.y[5] = connection.y2 


    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel

    connection.x[6] = connection.x2
    connection.y[6] = connection.y2
    return connection
}

function cornerXshift(connection, comp1ID, comp2ID) {
    console.log("cornerXshift")


    connection.x[0] = connection.x1
    connection.y[0] = connection.y1

    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1

    connection.x[3] = connection.x2
    connection.y[3] = connection.y1

    connection.x[4] = connection.x2
    connection.y[4] = connection.y2
    connection.x[5] = connection.x2
    connection.y[5] = connection.y2


    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel

    connection.x[6] = connection.x2
    connection.y[6] = connection.y2

    return connection
}

function ybreakD(connection, comp1ID, comp2ID) {
    console.log("ybreakD")

    var dy = Math.floor((Math.abs(connection.y2 - connection.y1) / 2) / pixel) * pixel
    connection.x[0] = connection.x1
    connection.y[0] = connection.y1


    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1


    connection.x[3] = connection.x1
    connection.y[3] = connection.y1 + dy
    connection.x[4] = connection.x2
    connection.y[4] = connection.y1 + dy

    connection.x[5] = connection.x2
    connection.y[5] = connection.y2
    connection.x[6] = connection.x2
    connection.y[6] = connection.y2

    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel


    connection.x[7] = connection.x2
    connection.y[7] = connection.y2
    return connection
}

function ybreakU(connection, comp1ID, comp2ID) {
    console.log("ybreakU")


    var dy = Math.floor((Math.abs(connection.y2 - connection.y1) / 2) / pixel) * pixel

    connection.x[0] = connection.x1
    connection.y[0] = connection.y1


    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1

    connection.x[3] = connection.x1
    connection.y[3] = connection.y2 + dy
    connection.x[4] = connection.x2
    connection.y[4] = connection.y2 + dy

    connection.x[5] = connection.x2
    connection.y[5] = connection.y2
    connection.x[6] = connection.x2
    connection.y[6] = connection.y2

    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel


    connection.x[7] = connection.x2
    connection.y[7] = connection.y2
    return connection
}

function xbreakR(connection, comp1ID, comp2ID) {
    console.log("xbreakR")

    var dx = Math.floor((Math.abs(connection.x2 - connection.x1) / 2) / pixel) * pixel

    connection.x[0] = connection.x1
    connection.y[0] = connection.y1


    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1

    connection.x[3] = connection.x1 + dx
    connection.y[3] = connection.y1
    connection.x[4] = connection.x1 + dx
    connection.y[4] = connection.y2

    connection.x[5] = connection.x2
    connection.y[5] = connection.y2
    connection.x[6] = connection.x2
    connection.y[6] = connection.y2

    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel

    connection.x[7] = connection.x2
    connection.y[7] = connection.y2
    return connection
}

function xbreakL(connection, comp1ID, comp2ID) {
    console.log("xbreakL")

    var dx = Math.floor((Math.abs(connection.x2 - connection.x1) / 2) / pixel) * pixel

    connection.x[0] = connection.x1
    connection.y[0] = connection.y1


    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1

    connection.x[3] = connection.x2 + dx
    connection.y[3] = connection.y1
    connection.x[4] = connection.x2 + dx
    connection.y[4] = connection.y2

    connection.x[5] = connection.x2
    connection.y[5] = connection.y2
    connection.x[6] = connection.x2
    connection.y[6] = connection.y2

    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel


    connection.x[7] = connection.x2
    connection.y[7] = connection.y2
    return connection
}

function straight(connection, comp1ID, comp2ID) {
    console.log("straight")
    connection.x[0] = connection.x1
    connection.y[0] = connection.y1

    if (connection.pin1 == "r")
        connection.x1 += pixel
    else if (connection.pin1 == "l")
        connection.x1 -= pixel
    else if (connection.pin1 == "t")
        connection.y1 -= pixel
    else if (connection.pin1 == "b")
        connection.y1 += pixel

    if (connection.pin2 == "r")
        connection.x2 += pixel
    else if (connection.pin2 == "l")
        connection.x2 -= pixel
    else if (connection.pin2 == "t")
        connection.y2 -= pixel
    else if (connection.pin2 == "b")
        connection.y2 += pixel

    connection.x[1] = connection.x1
    connection.y[1] = connection.y1
    connection.x[2] = connection.x1
    connection.y[2] = connection.y1


    connection.x[3] = connection.x2
    connection.y[3] = connection.y2
    connection.x[4] = connection.x2
    connection.y[4] = connection.y2

    if (connection.pin2 == "r")
        connection.x2 -= pixel
    else if (connection.pin2 == "l")
        connection.x2 += pixel
    else if (connection.pin2 == "t")
        connection.y2 += pixel
    else if (connection.pin2 == "b")
        connection.y2 -= pixel


    connection.x[5] = connection.x2
    connection.y[5] = connection.y2

    return connection
}
