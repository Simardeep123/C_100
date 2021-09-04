var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult= function(e){
    console.log(e);
    var speech =e.results[0][0].transcript;
    console.log(speech);
    document.getElementById("textbox").innerHTML = speech;
    if(speech == "take my selfie")
    {speak();}
}
function speak(){
    var synth = window.speechSynthesis;
var speakdata = "Taking your selfie in five seconds";
var utter= new SpeechSynthesisUtterance(speakdata);
synth.speak(utter);
Webcam.attach(camera);
setTimeout(() => {
    takeselfie();
    save_selfie();
}, 5000);
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
image_format: 'jpeg',
jpeg_quality: 90
});

function takeselfie(){
    Webcam.snap(function(abcd){
        document.getElementById("result").innerHTML = '<img id="img1" src= "' + abcd + '"/>';
    });
}

function save_selfie(){
    var loc = document.getElementById("dow");
    var image = document.getElementById("img1").src;
    loc.href = image;
    loc.click();
}