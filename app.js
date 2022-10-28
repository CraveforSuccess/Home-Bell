var arr = ["Bhajan.mp3", "Mix Bhajan.mp3", "Shree Ram Janki.mp3","Ram Siya Ram.mp3"];
console.log(arr);
var btn = document.querySelector(".btn1");

function Playthebell(){
    console.log("Played");
    var random = Math.floor(Math.random() * 4);
    console.log(random);
    var audio = new Audio(arr[random]);
    audio.play();
    setTimeout(()=>{
        audio.pause();
        console.log("Paused");
    },14000)
}






