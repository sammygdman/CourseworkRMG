
function openLogin(){
    window.location.href = "/client/login.html";
}
function openTemplate(){
    window.location.href = "/client/template.html";
}
function openHelp(){
    window.location.href = "/client/help.html";
}

function generator() {
    let tonic = document.querySelector('#tonic').value;
    let noteLength = document.querySelector('#noteLength').value;
    let majorScale = [0,  2, 4, 5,  7, 9,  11,  12];
    let minorScale = [0, 2, 3, 5, 7, 8, 11, 12]
    for (let i = 0; i < 7; i++) {
        let scaleKey = Math.floor((Math.random() * 8));
        let note = parseInt(tonic) + minorScale[scaleKey];
        play(note, noteLength);
    }
}


function play(noteID, noteLength){
    fetch('/note/get/'+ noteID, {method: 'GET'}
    ).then(response => response.json()
    ).then(responseData => {
        if (responseData.hasOwnProperty('ERROR')) {
            alert(responseData.ERROR)

        } else {
            localStorage.setItem("Frequency", responseData.Data);
            let ac = new AudioContext(), desk = ac.destination;
            let gain = ac.createGain();
            gain.gain.value = 0.5;
            gain.connect(desk);
            let osc = ac.createOscillator();
            osc.frequency.value = parseFloat(responseData.Data);
            osc.type = 'square';
            osc.connect(gain)
            osc.start();
            let audioCtx = new (window.AudioContext)();
            osc.stop(audioCtx.currentTime + noteLength)
            setInterval(alert(""),1000)
        }
    })
}