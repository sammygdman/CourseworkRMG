
function openHome(){
    window.location.href = "../login.html";
}
function openTemplate(){
    window.location.href = "../template.html";
}
function openHelp(){
    window.location.href = "../help.html";
}
noteList = [];
function random(numNotes){
    for (i = 0; i < numNotes; i++){
        noteList[i] = Math.floor((Math.random() * 8 + 1));
    }
    document.write(noteList);
}

function play(note){

}

function playList(noteList) {
    for (i = 0; i < noteList.length; i++) {
        if (noteList[i] = 1) play(48);
        if (noteList[i] = 2) play(50);
        if (noteList[i] = 3) play(52);
        if (noteList[i] = 4) play(53);
        if (noteList[i] = 5) play(55);
        if (noteList[i] = 6) play(57);
        if (noteList[i] = 7) play(59);
        if (noteList[i] = 8) play(60);
    }
}

function majorScale(tonic){

}

function play(){
    let ac = new AudioContext(), desk = ac.destination;

    let gain = ac.createGain();

    gain.gain.value = 0.5;
    gain.connect(desk);
    let noteID = 50
    let osc = ac.createOscillator();
    fetch('/note/get/'+ noteID, {method: 'GET'}
    ).then(response => response.json()
    ).then(responseData => {
        console.log("adding user")
        if (responseData.hasOwnProperty('ERROR')) {
            alert(responseData.ERROR)

        } else {
            localStorage.setItem("Frequency", responseData.Data);
            let frequency = parseFloat(responseData.Data);
            osc.frequency.value = frequency;
            osc.type = 'square';
            osc.connect(gain)
            osc.start();
            console.log("oooooo")
        }
    })
}

function openHome(){
    window.location.href = "/client/login.html";
}
function openTemplate(){
    window.location.href = "/client/template.html";
}
function openHelp(){
    window.location.href = "/client/help.html";
}