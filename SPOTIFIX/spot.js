// alert("connected")
var songq = ['animals.mp3','repeat.mp3','crowd control.mp3','venom.mp3','New Divide.mp3','wanna know.mp3'];

songrow=document.querySelectorAll("tr")

songimg=document.querySelectorAll('#pic')

var poster = ["animals.jpg","repeat.jpg","crowd control.jpg","venom.jpg","New Divide.jpg","wanna know.jpg"];


var sound = new Audio();
var currentSong = 0   // it point to the current song
var currentrow=0;
var currentcell=0;


// for (var i = 0; i < songs.length; i++) {
// songTitle[i].textContent = songs[i];
// }


console.log("spot.js connected");
function cplay() {                              //cplay function is to specify this function to work only on spot.html page
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


// queue data structure  (on clicking the next button the song corresponding to songq[front] is removed from the queue and played)
// var front =0;
// var rear=5;

$('#next').on('click',next);
// function qdelete()
// {
//   var item;
//   item=autoq[frontq];
//   console.log(item);
//   sound.src=item;
//   sound.play();
//   frontq++;
//   }



//for auto.html//
var autoq=[]
var picq=[]
var frontq=0;
var rearq=-1;
var maxq=6

var frontpic=0;    //for album pictures
var rearpic=-1;


var aq=document.querySelectorAll("#add")

function bplay() {                                    //function to add the songs in the circular queue upon clicking plus button
for (var i = 0; i < maxq; i++) {
  aq[i].addEventListener('click',qinsert)
}
}

var j
var pic
function qinsert() {
  if (frontq==0 && rearq==maxq-1) {
    console.log("player queue is full");
  }
  else{
     element=songq[this.tabIndex]
     playpic=poster[this.tabIndex]
     if(rearq==maxq-1 && frontq>0)  //overflow condition
     {
       rearq=0;                  // re initialise both rears to 0
       rearpic=0;
       autoq[rearq]=element;
       console.log(rearq);
       console.log(autoq[rearq]);
        picq[rearpic]=playpic;
     }
     else {
   // element=songq[this.tabIndex]
   if((frontq==0 && rearq==-1) || (rearq!=frontq-1))        //empty xondition
   {
   autoq[++rearq]=element;        //inserting the song stackpath
   // playpic=poster[this.tabIndex]
   picq[++rearpic]=playpic;        //inserting the song album cover
   console.log(rearq);
   console.log(autoq[rearq]);
   localStorage.setItem('j',JSON.stringify(autoq))
   localStorage.setItem('pic',JSON.stringify(picq))
}
}
}
}



// function aplay() {
//   if(sound.paused){
//       sound.play();
//       $("#play img").attr("src","Pause.png");
//   }
//   else{
//       sound.pause();
//       $("#play img").attr("src","Play.png");
//   }
//   sound.src=autoq[frontq];
//   sound.play();
//   frontq++;
// }

// localStorage.setItem('j',JSON.stringify(autoq))





////////////////
