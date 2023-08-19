// rn = Random Number
// event bubbling :: any event will be raise if click on select area , if event listner not found in its 
//inner code, ëvent bubbling will find event listner in its parent code & so On. 



var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble(){
    var round = "";
    for(var a = 0; a<=118; a++){
        
        var rn = Math.floor(Math.random()*10);
        round += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pnbtm").innerHTML = round;
}
function decScore(){
    score -=5;
    document.querySelector("#scoreval").textContent = score;
}
function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit (){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitbox").textContent = hitrn;
}
function runTimer(){
    var timerFun = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerFun);
            document.querySelector("#pnbtm").innerHTML = `<h1>Ja Chala Ja</h1>`;
        }
    }, 1000);
}
document.querySelector("#runagain").addEventListener("click", function(){
            location.reload();

})
document.querySelector("#pnbtm").addEventListener("click", function (details) {
    var Clickednumber = Number(details.target.textContent);
    //    console.log(Clickednumber);
    if(Clickednumber === hitrn){
        incScore();
        getNewHit();
        makeBubble();
    }
    else{
        if(timer>0){
            alert("sahi valy py CLICK kr")
            decScore();
        }
        else{
        
        }  
    }
});

getNewHit();
makeBubble();
runTimer();
