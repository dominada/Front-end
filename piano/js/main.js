var audio_C = new Audio('assets/audio/C.mp3');
var audio_D = new Audio('assets/audio/D.mp3');
var audio_E = new Audio('assets/audio/E.mp3');
var audio_F = new Audio('audio_file.mp3');
var audio_G = new Audio('audio_file.mp3');
var audio_A = new Audio('audio_file.mp3');
var audio_B = new Audio('audio_file.mp3');
var audio_C2 = new Audio('audio_file.mp3');
console.log(audio_C.paused)
function playC()
{
    console.log("C")
    audio_C.play();
}
function stopC()
{
    const myIntervalC = setInterval(() => {
        console.log("XD")
        if (audio_C.currentTime > 0.12) {
            audio_C.pause();
            audio_C.currentTime = 0
            clearInterval(myIntervalC);
        }
        if(audio_C.paused)
        {
            clearInterval(myIntervalC);
        }
    }, 50);
}

function playD()
{
    console.log("D")
    audio_D.play();
}
function stopD()
{
    const myIntervalD = setInterval(() => {
        console.log("XD")
        if (audio_D.currentTime > 0.12) {
            audio_D.pause();
            audio_D.currentTime = 0
            clearInterval(myIntervalD);
        }
        if(audio_D.paused)
        {
            clearInterval(myIntervalD);
        }
    }, 50);
}

function playE()
{
    console.log("E")
    audio_E.play();
}
function stopE()
{
    const myIntervalE = setInterval(() => {
        console.log("XD")
        if (audio_E.currentTime > 0.12) {
            audio_E.pause();
            audio_E.currentTime = 0
            clearInterval(myIntervalE);
        }
        if(audio_E.paused)
        {
            clearInterval(myIntervalE);
        }
    }, 50);
}

document.getElementById("piano-button-1").addEventListener("mousedown", playC);
document.getElementById("piano-button-1").addEventListener("mouseup", stopC);

document.getElementById("piano-button-2").addEventListener("mousedown", playD);
document.getElementById("piano-button-2").addEventListener("mouseup", stopD);

document.getElementById("piano-button-3").addEventListener("mousedown", playE);
document.getElementById("piano-button-3").addEventListener("mouseup", stopE);

document.getElementById("piano-button-4").addEventListener("click", ()=> {
    console.log("F")
});
document.getElementById("piano-button-5").addEventListener("click", ()=> {
    console.log("G")
});
document.getElementById("piano-button-6").addEventListener("click", ()=> {
    console.log("A")
});
document.getElementById("piano-button-7").addEventListener("click", ()=> {
    console.log("B")
});
document.getElementById("piano-button-8").addEventListener("click", ()=> {
    console.log("C")
});
