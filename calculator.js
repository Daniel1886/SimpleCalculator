var outPut = document.getElementById("outPut");
var buttonHolders = document.getElementsByClassName("col-cal");

var lastValue = null;
var lastSecondValue = null;
var lastSign ="";
var clear =false;

for(var i =0;i<buttonHolders.length;i++){
    var b  = buttonHolders[i].childNodes[0];
    if(b.tagName == "BUTTON"){
        b.addEventListener('click', function(e){ 
            var v = e.target.innerHTML;
            if(!isNaN(v)||v=="."){
                if(clear){
                    
                    outPut.innerText=v;                   
                    lastValue =  parseFloat(outPut.innerText);
                    clear=false;
                }else{
                    if(outPut.innerText.length <8){
                        outPut.innerText+=v;
                        lastValue =  parseFloat(outPut.innerText);
                    }               
                }
              
            }else{
                if(v!="="){
                   
                    lastSecondValue =parseFloat(outPut.innerText);
                    clear =true;
                    lastSign=v;
                    if(v=="C"){
                        outPut.innerText="";    
                        lastValue = null;
                        lastSecondValue = null;
                        lastSign="";
                        clear=false;
                    }                                   
                }
                if(v=="="){
                    if(lastValue==null&&lastSecondValue==null){
                        
                    }else{

                        clear=true;
                        if(lastSign=="x"){
                            lastValue = lastValue*lastSecondValue;
                            outPut.innerText =lastValue;
                        }
                        if(lastSign =="+"){
                            lastValue = lastValue+lastSecondValue;
                            outPut.innerText =lastValue;
                        }
                        if(lastSign =="-"){
                            lastValue = lastSecondValue-lastValue;
                            outPut.innerText =lastValue;
                        }
                        if(lastSign =="/"){
                            lastValue = lastSecondValue/lastValue;
                            outPut.innerText =lastValue;
                        }
                        if(lastSign =="%"){
                            lastValue = lastSecondValue%lastValue;
                            outPut.innerText =lastValue;
                        }
                       
                    }
                   
                }
            }
           
        });
    }
}