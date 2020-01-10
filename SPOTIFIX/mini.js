// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }
//
// function setnewimage2()
// {
//     document.getElementById("image2").src="images/hplay.jpg";
// }
// function setoldimage2()
// {
//     document.getElementById("image2").src="images/ugram.jpg";
// }
//
// function setnewimage3()
// {
//     document.getElementById("image3").src="images/hplay.jpg";
// }
// function setoldimage3()
// {
//     document.getElementById("image3").src="images/arjun reddy3.jpg";
// }
//
// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }
//
// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }
//
// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }
//
// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }
//
// function setnewimage()
// {
//     document.getElementById("image").src="images/hplay.jpg";
// }
// function setoldimage()
// {
//     document.getElementById("image").src="images/kgf.jpg";
// }

var songq = ['ksongs/kgf.mp3','ksongs/ugram.mp3','ksongs/arjun.mp3','ksongs/manka.mp3','ksongs/pirate.mp3','ksongs/mayhem.mp3'];


songimg=document.querySelectorAll('#pic')

var sound = new Audio();
var currentSong = 0   // it point to the current song


console.log("mini.js connected");
function bgmplay() {                              //cplay function is to specify this function to work only on spot.html page
for (var i = 0; i < songq.length; i++) {
  songimg[i].addEventListener('click',function() {
    currentSong=this.tabIndex;
    console.log(currentSong);
    console.log(songq[currentSong]);
    sound.src=songq[currentSong]
    sound.play();
  })
}
}

function control(){

    if(sound.paused){
        sound.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        sound.pause();
        $("#play img").attr("src","Play.png");
    }
}
// currentSong=0;
function next() {
  currentSong++;
  console.log(currentSong);
  console.log(songq[currentSong]);
  sound.src=songq[currentSong];
  sound.play();
  if(currentSong>=songq.length)
  {
    currentSong=-1;
  }
}

function pre() {
  if (currentSong==0) {
    currentSong=songq.length
  }
  else {
    currentSong--;
  }
  console.log(currentSong);
  sound.src=songq[currentSong];
  sound.play();
}
