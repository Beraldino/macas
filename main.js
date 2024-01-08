screenWidth = 0;
screenHeight = 0;

apple = "";
speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function prreload() {
  apple = loadImage('apple.webp');
}

function Number() {
  toNumber = Number(content);
  if(Number.isInteger(toNumber)) {
  document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
  drawApple = "set";
  }
  else {
    deocumet.getElementById("status").innerHTML = "O número não foi reconhecido"
  }
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 canvas = createCanvas(900,600);

 screenWidth = window.innerWidth
 screenHeight= window.innerHeight

}

function draw() {
  if(drawApple == "set")
  {
    for(var i = 1; i <= toNumber; i++)
    {
      x = Math.floor(Math.random() * 700);
      x = Math.floor(Math.random() * 400);
      Image(apple,x, y, 50, 50);
    }
    speakData = document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    speak();

  }
}


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
