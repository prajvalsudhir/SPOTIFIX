// import{ aplay } from 'spot.js'
var fillBar = document.getElementById("fill");

var songTitle = document.getElementById("songTitle");



sound.addEventListener('timeupdate',function(){

    var position = sound.currentTime / sound.duration;

    fillBar.style.width = position * 100 +'%';

    if(sound.currentTime==sound.duration)
    {
      mainf++;
      aplay();
    }
});
var mainp=[]      //auto.html main player queue
mainp=JSON.parse(window.localStorage.getItem('j'));

var mainimg=[]

mainimg=JSON.parse(window.localStorage.getItem('pic'));

/// to play the inserted songs in autoq
var mainr=mainp.length-1  //main rear
var mainf=0;             //main front

function aplay() {                           //deleting from queue
  if(sound.paused){
      sound.play();
      $("#play img").attr("src","Pause.png");
  }
  else{
      sound.pause();
      $("#play img").attr("src","Play.png");
  }


  if (mainf==0 && mainr==-1) {
    console.log("main queue finished playing all the songs added \n NOW PLAYING THE QUEUE AGAIN");
     // return;                                  //to empty the queue
  }
  if (mainf==mainr) {                          // only one song in queue
    songTitle.textContent = mainp[mainf];
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",mainimg[mainf]);  //for the image
    $("#bg img").attr("src",mainimg[mainf]);    //for the bg image
    sound.src=mainp[mainf];
    sound.play();
    mainr=-1;                                   //reset the values
    mainf=0;
  }
  else if (mainf==mainp.length-1) {              //front is at end
    songTitle.textContent = mainp[mainf];
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",mainimg[mainf]);  //for the image
    $("#bg img").attr("src",mainimg[mainf]);    //for the bg image
    sound.src=mainp[mainf];
    sound.play();
    mainf=0;
  }

  else{

  songTitle.textContent = mainp[mainf];       //updating the song title
  $("#play img").attr("src","Pause.png");
  $("#image img").attr("src",mainimg[mainf]);  //for the image
  $("#bg img").attr("src",mainimg[mainf]);    //for the bg image
  sound.src=mainp[mainf++];
  sound.play();
}
}


function display() {
if(mainf==0 && mainr==-1)
{
  console.log("main queue is empty");
}
if (mainf>mainr) {
  for (var i = 0; i <= mainr; i++) {
    console.log(mainp[i]);
  }
  for (var j = front; j <= mainp.length; j++) {
    console.log(mainp[j]);
  }
  console.log("rear is at:");
  console.log(mainr);
  console.log(mainp[mainr]);
  console.log("front is at");
  console.log(mainf);
  console.log(mainp[mainf]);
}
else {
  for (var i = mainf; i <= mainr; i++) {
      console.log(mainp[i]);
  }
  console.log("rear is at:");
    console.log(mainr);
  console.log(mainp[mainr]);
  console.log("front is at");
    console.log(mainf);
  console.log(mainp[mainf]);
}
}
