function lineOverlap(connection)  {
    var k = -1,lineFlag,controlFlag=0;
    var varx,vary;
    

    connection.newx[++k] = connection.x[0];
    connection.newy[k] = connection.y[0];
    varx = connection.x[0];
    vary =  connection.y[0];
    
    
    for(var i=0;i<connection.x.length-1;)    {
        
        if(0 == i && 0 == controlFlag)	{
            for(var j=0;j<componentContainer.length;j++)    {
                if(vary > componentContainer[j].component.height0 && vary < componentContainer[j].component.height1)    {
                    if(varx > componentContainer[j].component.width0 && varx < componentContainer[j].component.width1)   {
                        
                        var distance = componentContainer[j].component.width1-componentContainer[j].component.width0;
                        if(connection.x[i+1] > componentContainer[j].component.width1)	{
                            if(varx < (componentContainer[j].component.width0+(distance*(0.4)))) {
                                if(vary < (componentContainer[j].component.height0+componentContainer[j].component.height1)/2)   {
                                    console.log("i=0 & C1");
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = vary;
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = connection.y[i+1];
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                                else    {
                                    console.log("i=0 & C2");
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = vary;
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = connection.y[i+1];
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                            }
                            else    {
                                console.log("i=0 & C3");
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[i+1];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                controlFlag = 1;
                            }
                        }
                        else if(connection.x[i+1] < componentContainer[j].component.width0) {
                            if(varx > (componentContainer[j].component.width0+(distance*(0.6)))) {
                                if(vary < ((componentContainer[j].component.height0+componentContainer[j].component.height1)/2)+5)   {
                                    console.log("i=0 & C4");
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = vary;
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = connection.y[i+1];
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                                else    {
                                    console.log("i=0 & C5");
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = vary;
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = connection.y[i+1];
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                            }
                            else    {
                                console.log("i=0 & C6");
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[i+1];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                controlFlag = 1;
                            }
                        }
                        else    {
                            if(connection.y[i+2] < connection.y[i+1])    {
                                if(varx < (componentContainer[j].component.width0+(distance*0.6)))  {
                                    console.log("i=0 & C8");
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = vary;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = connection.x[++i];
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                                else    {
                                    console.log("i=0 & C9");
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = vary;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = connection.x[++i];
                                    connection.newy[k] = componentContainer[j].component.height0;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                            }
                            else{
                                if(varx < (componentContainer[j].component.width0+(distance*0.6)))  {
                                    console.log("i=0 & C11");
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = vary;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width0;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = connection.x[++i];
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                                else    {
                                    console.log("i=0 & C12");
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = vary;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = componentContainer[j].component.width1;
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    connection.newx[++k] = connection.x[++i];
                                    connection.newy[k] = componentContainer[j].component.height1;
                                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                    controlFlag = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        
        if(i < connection.x.length-2)  {
            var lastComponentFlag=0;
            lineFlag=0;
            for(var j=0;j<componentContainer.length;j++)    {
                if(vary > componentContainer[j].component.height0 && vary < componentContainer[j].component.height1)    {
                    if(varx < componentContainer[j].component.width0 && connection.x[i+1] > componentContainer[j].component.width1) {
                        console.log("i=1 & C1");
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(varx > componentContainer[j].component.width1 && connection.x[i+1] < componentContainer[j].component.width0)   {
                        console.log("i=1 & C2");
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(varx < componentContainer[j].component.width0 && connection.x[i+1] > componentContainer[j].component.width0 && connection.x[i+1] < componentContainer[j].component.width1)   {
                        if(componentContainer[j].component.type == connection.type)    {
                            i+=2;
                            console.log("1");
                            if(connection.x[i+1] < ((componentContainer[j].component.width0+componentContainer[j].component.width1)/2)+5)   {
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = vary;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                            else    {
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = vary;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                        }
                        else if(connection.y[i+1] < connection.y[i+2])   {
                            console.log("i=1 & C3.1");
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = vary;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else{
                            console.log("i=1 & C3.2");
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = vary;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                    }
                    else if(varx > componentContainer[j].component.width1 && connection.x[i+1] < componentContainer[j].component.width1 && connection.x[i+1] > componentContainer[j].component.width0)   {
                        if(componentContainer[j].component.type == connection.type)    {
                            i+=2;
                            console.log("2");
                            if(connection.x[i+1] > ((componentContainer[j].component.width0+componentContainer[j].component.width1)/2)-5)   {
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = vary;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                            else    {
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = vary;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                        }
                        else if(connection.y[i+1] < connection.y[i+2])   {
                            console.log("i=1 & C4.1");
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = vary;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else{
                            console.log("i=1 & C4.2");
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = vary;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                    }
                }
                
                
                if(varx > componentContainer[j].component.width0 && varx < componentContainer[j].component.width1)  {
                    if(vary < componentContainer[j].component.height0 && connection.y[i+1] > componentContainer[j].component.height1) {
                        console.log("i=1 & C5");
                        connection.newx[++k] = varx;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = varx;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(vary > componentContainer[j].component.height1 && connection.y[i+1] < componentContainer[j].component.height0) {
                        console.log("i=1 & C6");
                        connection.newx[++k] = varx;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = varx;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(vary < componentContainer[j].component.height0 && connection.y[i+1] > componentContainer[j].component.height0 && connection.y[i+1] < componentContainer[j].component.height1)   {
                        if(componentContainer[j].component.type == connection.type)    {
                            i++;
                            console.log("3");
                            if(connection.x[i+1] < ((componentContainer[j].component.width0+componentContainer[j].component.width1)/2)+5)   {
                                connection.newx[++k] = varx;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                            else    {
                                connection.newx[++k] = varx;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height0;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                        }
                        else if(connection.x[i+1] < connection.x[i+2])   {
                            console.log("i=1 & C7.1");
                            connection.newx[++k] = varx;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = connection.y[++i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else    {
                            console.log("i=1 & C7.2");
                            connection.newx[++k] = varx;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = componentContainer[j].component.height0;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = connection.y[++i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                    }
                    else if(vary > componentContainer[j].component.height1 && connection.y[i+1] < componentContainer[j].component.height1 && connection.y[i+1] > componentContainer[j].component.height0)   {
                        console.log(componentContainer[j].component.type + connection.type);
                        if(componentContainer[j].component.type == connection.type)    {
                            i++;
                            console.log("4");
                            if(connection.x[i+1] < ((componentContainer[j].component.width0+componentContainer[j].component.width1)/2)+5)   {
                                connection.newx[++k] = varx;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                            else    {
                                connection.newx[++k] = varx;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height1;
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[++i];
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                lineFlag = 1;
                            }
                        }
                        else if(connection.x[i+1] < connection.x[i+2])   {
                            console.log("i=1 & C8.1");
                            connection.newx[++k] = varx;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width1;
                            connection.newy[k] = connection.y[++i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else{
                            console.log("i=1 & C8.2");
                            connection.newx[++k] = varx;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = componentContainer[j].component.height1;
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            connection.newx[++k] = componentContainer[j].component.width0;
                            connection.newy[k] = connection.y[i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                    }
                }
            }
            if(lineFlag==0)    {
                    console.log("i=1 & Other");
                    connection.newx[++k] = connection.x[++i];
                    connection.newy[k] = connection.y[i];
                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
            }
            varx = connection.newx[k];
            vary = connection.newy[k];
        }
        
        
        if(i == connection.x.length-2)  {
            lineFlag=0;
            for(var j=0;j<componentContainer.length;j++)    {
                
                if(vary > componentContainer[j].component.height0 && vary < componentContainer[j].component.height1)    {
                    if(varx < componentContainer[j].component.width0 && connection.x[i+1] > componentContainer[j].component.width1) {
                        //console.log("Left-Right");
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height0;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(varx > componentContainer[j].component.width1 && connection.x[i+1] < componentContainer[j].component.width0) {
                        //console.log("Right-Left");
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width1;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = componentContainer[j].component.height1;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        connection.newx[++k] = componentContainer[j].component.width0;
                        connection.newy[k] = vary;
                        console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                        lineFlag = 1;
                    }
                    else if(varx < componentContainer[j].component.width0 && connection.x[i+1] > componentContainer[j].component.width0 && connection.x[i+1] < componentContainer[j].component.width1)  {
                        var distance = componentContainer[j].component.width1-componentContainer[j].component.width0;
                        
                        if(connection.x[i+1] < (componentContainer[j].component.width0+(distance*(0.6)))) {
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = connection.y[i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else {
                            if(connection.y[i+1] < ((componentContainer[j].component.height0+componentContainer[j].component.height1)/2))   {
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height0;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[++i];
                                connection.newy[k] = componentContainer[j].component.height0;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                lineFlag = 1;
                            }
                            else{
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = componentContainer[j].component.width0;
                                connection.newy[k] = componentContainer[j].component.height1;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[++i];
                                connection.newy[k] = componentContainer[j].component.height1;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                lineFlag = 1;
                            }
                        }
                    }
                    else if(varx > componentContainer[j].component.width1 && connection.x[i+1] > componentContainer[j].component.width0 && connection.x[i+1] < componentContainer[j].component.width1)  {
                        var distance = componentContainer[j].component.width1-componentContainer[j].component.width0;
                        
                        if(connection.x[i+1] > (componentContainer[j].component.width0+(distance*(0.4)))) {
                            connection.newx[++k] = connection.x[++i];
                            connection.newy[k] = connection.y[i];
                            console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                            lineFlag = 1;
                        }
                        else {
                            if(connection.y[i+1] < ((componentContainer[j].component.height0+componentContainer[j].component.height1)/2))   {
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height0;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[++i];
                                connection.newy[k] = componentContainer[j].component.height0;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                lineFlag = 1;
                            }
                            else    {
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = componentContainer[j].component.width1;
                                connection.newy[k] = componentContainer[j].component.height1;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[++i];
                                connection.newy[k] = componentContainer[j].component.height1;
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                connection.newx[++k] = connection.x[i];
                                connection.newy[k] = connection.y[i];
                                console.log(connection.newx[k]+"   |   "+connection.newy[k]);
                                lineFlag = 1;
                            }
                        }
                    }
                }
            }
            if(lineFlag==0)    {
                    console.log("Other");
                    connection.newx[++k] = connection.x[++i];
                    connection.newy[k] = connection.y[i];
                    console.log(connection.newx[k]+"   |   "+connection.newy[k]);
            }
            varx = connection.newx[k];
            vary = connection.newy[k];
        }    
    }
    return(connection);
}
