console.log("stack.js connected");
console.log("for all the recently played songs");
var stackimg=[]
var stacksong=[]



var localstackimg=[]
var localstacksong=[]
var top1=-1;
var top2=-1;
var max=6;


var stacksound;
var stackimg;
var stackpic;

localstacksong=JSON.parse(window.localStorage.getItem('j'));
localstackimg=JSON.parse(window.localStorage.getItem('pic'))

for (var i = 0; i < localstacksong.length; i++) {       //stack push
  stacksong[++top1]=localstacksong[i];
  stackimg[++top2]=localstackimg[i];
}

function stackplay() {                   //stack pop

    if(sound.paused){
        sound.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        sound.pause();
        $("#play img").attr("src","Play.png");
    }

   if (top1==-1) {
     console.log("stack empty");
   }
   else {
     stacksound=stacksong[top1];
     stackpic=stackimg[top2];
     songTitle.textContent = stacksong[top1];
     $("#play img").attr("src","Pause.png");
     $("#image img").attr("src",stackimg[top2]);  //for the image
     $("#bg img").attr("src",stackimg[top2]);
     sound.src=stacksong[top1];
     sound.play();
     top1--;
     top2--;

   }

}

function stackdisplay() {
  if (top1==-1) {
    console.log("stack is empty");
  }
  else {
    for (var i = top1; i >= 0; i--) {
      console.log(stacksong[i]);
    }
  }
}
//////////////////////////////////
var fillBar = document.getElementById("fill");

sound.addEventListener('timeupdate',function(){

    var position = sound.currentTime / sound.duration;

    fillBar.style.width = position * 100 +'%';

    if(sound.currentTime==sound.duration)
    {
      top1--;
      top2--;
      stackplay();
    }
});
