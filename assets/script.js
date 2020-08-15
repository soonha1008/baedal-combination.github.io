//click upon enter
let enter = document.getElementById("people");
enter.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});


//function after button click
document.getElementById("button").onclick= function(){

    //clear all previous result
    document.getElementById("div1").innerHTML = "";
       
    //the following variables define whether the checkbox is checked or not
    let pizza = 0;
    let chicken = 0;
    let china   = 0;
    let burger  = 0;
    let porkleg = 0;
    let tbk     = 0;
    let hungry  = 0;

    if (document.getElementById("pizza").checked == true)       pizza   = 1;
    if (document.getElementById("chicken").checked == true)     chicken = 1;
    if (document.getElementById("china").checked == true)       china   = 1;
    if (document.getElementById("burger").checked == true)      burger  = 1;
    if (document.getElementById("porkleg").checked == true)     porkleg = 1;
    if (document.getElementById("tbk").checked == true)         tbk     = 1;
    if (document.getElementById("hungry").checked == true)      hungry     = 1;




    // console.log(hungry);
    function goldenratio(x){
        if (x==0){
            return 0;
        }
        if (x==1){
            return 1;
        }
        var f1 = 1;
        var f2 = 1;
        var f;
    
        while (true){
            f = f1+f2;
            if (f>x) return f1 + goldenratio(x-f2);
            else if (f == x) return f2;
            f1=f2;
            f2=f;
        }
    }    
    
    let people = document.getElementById("people").value

    if (people>9999){
        
        var Output = document.createElement("p").appendChild(document.createTextNode("::::::::계산기 과부화:::::::"));
        document.getElementById("div1").appendChild(Output);
        var gifinput = document.createElement("img");
        gifinput.src = "assets/pictures/bigdata.jpg";
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(gifinput);
        return;
    }

    if (people==22 || people == 2 || people ==222|| people == 2222){
        
        var gifinput = document.createElement("img");
        gifinput.src = "assets/pictures/kong.jpg";
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(gifinput);
    }

    if (people==69 || people==5877){
        
        var gifinput = document.createElement("img");
        gifinput.src = "assets/pictures/fishhead.png";
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(gifinput);
    }

    if (people < 0){
        
        var gifinput = document.createElement("img");
        gifinput.src = "assets/pictures/nounderstand.jpg";
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(gifinput);
        return;
    }

    //if none of the variables are checked, return
    if(!pizza&&!chicken&&!china&&!burger&&!porkleg&&!tbk){
        var Output = document.createElement("p").appendChild(document.createTextNode("음식도 없는데 사람들을 초대한다고요??"));
        document.getElementById("div1").appendChild(Output);
        var gifinput = document.createElement("img");
        gifinput.src = "assets/pictures/against.gif";
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(gifinput);
        return;
    }

    let MenuRatio = goldenratio(people)
    if(hungry){
        MenuRatio=MenuRatio*1.3;
    }

    let x           = 0;
    TbkOutput       = 0;
    ChinaOutput     = 0;
    BurgerOutput    = 0;
    ChickenOutput   = 0;
    PizzaOutput     = 0;
    PorklegOutput   = 0;

    let checkloop = 0;

    if ((pizza)&&(chicken)&&(burger)&&(!tbk)&&(!porkleg)&&(!china)){
        while (MenuRatio>x){
            if (x + 0.6 <= MenuRatio) {
                x+=0.6;
                BurgerOutput++;
            }
                    
            if (x + 1 <= MenuRatio) {
                x+=1;
                ChickenOutput+=1;
                }
                
            if (x + 1.5 <= MenuRatio) {
                        x+=1.5;
                        PizzaOutput+=1;
                    }
                
            if (x + 0.6 <= MenuRatio) {
                        x+=0.6;
                        BurgerOutput++;
                    }
            
            checkloop++;
            if(checkloop>1000) x+=999999;
            if((MenuRatio-x)>0.3 && (MenuRatio-x)<0.6) {
                BurgerOutput++;
                x+=999999;
            }
        }
    }
    
    //피치
    else if ((pizza)&&(chicken)&&(!burger)&&(!tbk)&&(!porkleg)&&(!china)){
        while (MenuRatio>x){
            if(MenuRatio>x){
                x+=1;
                ChickenOutput++;
            }
    
            if (MenuRatio>x){
               
                if (x + 1.5 <= MenuRatio) {
                    PizzaOutput+=1;
                    x+=1.5
                }
                else if (x + 1 <= MenuRatio){
                    ChickenOutput++;
                    x++;
                }
            } 

    
            // if (MenuRatio>x){
            //     x+=1;
            //     if (ChickenOutput + 1 <= MenuRatio) ChickenOutput+=1;
            // }

            checkloop++;
            if(checkloop>1000) x+=999999;
        }
    }
    //버치
    else if ((!pizza)&&(chicken)&&(burger)&&(!tbk)&&(!porkleg)&&(!china)){
        while (MenuRatio>x){
    
            if (MenuRatio>x){
                if (x + 0.4 <= MenuRatio){
                    x+=0.6; 
                    BurgerOutput++;
                }
            }
    
            if (MenuRatio>x){
                if (x + 1 <= MenuRatio){
                    x+=1;
                    ChickenOutput++;
                }
            }
    
            if (MenuRatio>x){
                if ((x + 0.4 <= MenuRatio)){
                    x+=0.6; 
                    BurgerOutput++;
                }
            }
            checkloop++;
            if(checkloop>1000) x+=999999;
        }
    }
    //universal
    else{
        while (MenuRatio>x){
            if (tbk == 1){
                if (MenuRatio>x){
                    x+=0.4;
                    TbkOutput ++;}
            }
            if (china == 1){
                if (MenuRatio>x){
                    if (x+0.3<=MenuRatio){ 
                        x+=0.6;
                        ChinaOutput+=1;
                    }
                }
            }
            if (burger == 1){
                if (MenuRatio>x){
                    if (x + 0.3 <= MenuRatio){
                        x+=0.6;
                        BurgerOutput+=1;
                    }
                }
            }
            if (tbk == 1){
                if (MenuRatio>x){
                    if (x + 0.2 <= MenuRatio ){
                        x+=0.4;
                        TbkOutput ++;
                    }
                }
            }
            if (chicken == 1){
                if (MenuRatio>x){
                    if (x + 0.5 <= MenuRatio){
                        x+=1;
                        ChickenOutput+=1;
                    }
                }
            }
            if (pizza == 1){
                if (MenuRatio>x){
                    if (x + 0.8 <= MenuRatio){
                        x+=1.5; 
                        PizzaOutput+=1;
                    }
                }
            }
            if (porkleg == 1){
                if (MenuRatio>x){
                    if (x + 0.8 <= MenuRatio) {
                        x+=1.5;
                        PorklegOutput+=1;
                    }
                }
            }
            if (burger == 1){
                if (MenuRatio>x){
                    if (x + 0.3 <= MenuRatio){
                        x+=0.6;
                        BurgerOutput+=1;
                    }
                }
            }
            if (china == 1){
                if (MenuRatio>x){
                    if (x+0.3<=MenuRatio){ 
                        x+=0.6;
                        ChinaOutput+=1;
                    }
                }
            }
            checkloop++;
            if(checkloop>1000) x+=999999;
        }
    }

    let tally = 0;
    document.getElementById("div1").appendChild(document.createElement("br"));

    var calculating = document.createElement("p").appendChild(document.createTextNode("***************계산결과***************"));
    document.getElementById("div1").appendChild(calculating);
    if (pizza == 1) {
        // document.getElementById("piz-test").innerHTML = "피자 라지 " + PizzaOutput + "판";}
        // else document.getElementById("piz-test").remove();

        tally = 1;
        var NewPizza = document.createElement("p").appendChild(document.createTextNode("피자:　" + PizzaOutput + "판"));
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewPizza);
    }
    if (chicken == 1){
        // document.getElementById("chi-test").innerHTML = "Chicken :  " + ChickenOutput;}
        // else document.getElementById("chi-test").remove();
        if (tally == 1){
            addcomma();
        }
        tally = 1;
        var NewChicken = document.createElement("p").appendChild(document.createTextNode("치킨:　" + ChickenOutput + "마리"));
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewChicken);

    }
    if (china == 1){
        if (tally == 1){
            addcomma();
        }
        tally = 1;
        var NewChina = document.createElement("p").appendChild(document.createTextNode("짜장면/짬뽕:　"+ ChinaOutput + "그릇"));
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewChina);
    }
    if (burger==1){
        if (tally == 1){
            addcomma();
        }
        tally = 1;
        var NewBurger = document.createElement("p").appendChild(document.createTextNode("햄버거:　" + BurgerOutput + "세트"))
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewBurger);
        // document.getElementById("burg-test").innerHTML = "Burger :   " + BurgerOutput;}
        // else document.getElementById("burg-test").remove();
    }
    if (porkleg == 1){
        if (tally == 1){
            addcomma();
        }
        tally = 1;
        var NewPorkleg = document.createElement("p").appendChild(document.createTextNode("족발/보쌈:　" + PorklegOutput + "개"));
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewPorkleg);
        // document.getElementById("pork-test").innerHTML = "Porkleg :  " + PorklegOutput;}
        // else document.getElementById("pork-test").remove();
    }
    if (tbk == 1){
        if (tally == 1){
            addcomma();
        }
        tally = 1;
        var NewTbk = document.createElement("p").appendChild(document.createTextNode("떡볶이:　"+ TbkOutput +"인분 ("+(TbkOutput*2500)+"원어치)"));
        document.getElementById("div1").appendChild(document.createElement("br"));
        document.getElementById("div1").appendChild(NewTbk);
        // document.getElementById("tbk-test").innerHTML = "TBK :      " + TbkOutput;}
        // else document.getElementById("tbk-test").remove();
    }

    if (tally == 1){
        document.getElementById("div1").appendChild(document.createElement("br"));
        var Output = document.createElement("p").appendChild(document.createTextNode(" ****************************************"));
        document.getElementById("div1").appendChild(Output);
    }

    function addcomma(){
        var comma = document.createElement("p").appendChild(document.createTextNode(", "));
        document.getElementById("div1").appendChild(comma);
    }

    tally = 0;
}
