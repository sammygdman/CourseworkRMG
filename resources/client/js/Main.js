let noteList = {
    '0': {note: 'C', octave: 0,  frequency: 16.35},
    '1': {note: 'C#', octave: 0, frequency: 17.32},
    '2': {note: 'D', octave: 0,  frequency: 18.35},
    '3': {note: 'D#', octave: 0, frequency: 19.45},
    '4': {note: 'E', octave: 0,  frequency: 20.60},
    '5': {note: 'F', octave: 0,  frequency: 21.83},
    '6': {note: 'F#', octave: 0, frequency: 23.12},
    '7': {note: 'G', octave: 0,  frequency: 24.50},
    '8': {note: 'G#', octave: 0, frequency: 26.96},
    '9': {note: 'A', octave: 0,  frequency: 27.50 },
    '10': {note: 'Bb', octave: 0, frequency: 29.1},
    '11': {note: 'B', octave: 0,  frequency: 30.9},
    '12': {note: 'C', octave: 1,  frequency: 32.7},
    '13': {note: 'C#', octave: 1, frequency: 34.7},
    '14': {note: 'D', octave: 1,  frequency: 36.7},
    '15': {note: 'D#', octave: 1, frequency: 38.9},
    '16': {note: 'E', octave: 1, frequency: 41.2},
    '17': {note: 'F', octave: 1,  frequency: 43.7},
    '18': {note: 'F#', octave: 1,  frequency: 46.3},
    '19': {note: 'G', octave: 1,  frequency: 49.0},
    '20': {note: 'G#', octave: 1,  frequency: 51.9},
    '21': {note: 'A', octave: 1,  frequency: 55.0},
    '22': {note: 'Bb', octave: 1,  frequency: 58.3},
    '23': {note: 'B', octave: 1,  frequency: 61.7},
    '24': {note: 'C', octave: 2,  frequency: 65.4},
    '25': {note: 'C#', octave: 2, frequency: 69.3},
    '26': {note: 'D', octave: 2,  frequency: 73.4},
    '27': {note: 'D#', octave: 2, frequency: 77.8},
    '28': {note: 'E', octave: 2,  frequency: 82.4},
    '29': {note: 'F', octave: 2,  frequency: 87.3},
    '30': {note: 'F#', octave: 2, frequency: 92.5},
    '31': {note: 'G', octave: 2,  frequency: 98.0},
    '32': {note: 'G#', octave: 2, frequency: 103.8},
    '33': {note: 'A', octave: 2,  frequency: 110.0},
    '34': {note: 'Bb', octave: 2, frequency: 116.5},
    '35': {note: 'B', octave: 2,  frequency: 123.5},
    '36': {note: 'C', octave: 3,  frequency: 130.8},
    '37': {note: 'C#', octave: 3, frequency: 138.6},
    '38': {note: 'D', octave: 3,  frequency: 146.8},
    '39': {note: 'D#', octave: 3, frequency: 155.6},
    '40': {note: 'E', octave: 3, frequency: 164.8},
    '41': {note: 'F', octave: 3,  frequency: 174.6},
    '42': {note: 'F#', octave: 3,  frequency: 185.0},
    '43': {note: 'G', octave: 3,  frequency: 196.0},
    '44': {note: 'G#', octave: 3,  frequency: 207.7},
    '45': {note: 'A', octave: 3,  frequency: 220.0},
    '46': {note: 'Bb', octave: 3,  frequency: 233.1},
    '47': {note: 'B', octave: 3,  frequency: 246.9},
    '48': {note: 'C', octave: 4,  frequency: 261.6},
    '49': {note: 'C#', octave: 4, frequency: 277.2},
    '50': {note: 'D', octave: 4,  frequency: 293.7},
    '51': {note: 'D#', octave: 4, frequency: 311.1},
    '52': {note: 'E', octave: 4,  frequency: 329.6},
    '53': {note: 'F', octave: 4,  frequency: 349.2},
    '54': {note: 'F#', octave: 4, frequency: 370.0},
    '55': {note: 'G', octave: 4,  frequency: 392.0},
    '56': {note: 'G#', octave: 4, frequency: 415.3},
    '57': {note: 'A', octave: 4,  frequency: 440.0},
    '58': {note: 'Bb', octave: 4, frequency: 466.2},
    '59': {note: 'B', octave: 4,  frequency: 493.9},
    '60': {note: 'C', octave: 5,  frequency: 523.3},
    '61': {note: 'C#', octave: 5, frequency: 554.4},
    '62': {note: 'D', octave: 5,  frequency: 587.3},
    '63': {note: 'D#', octave: 5, frequency: 622.3},
    '64': {note: 'E', octave: 5, frequency: 659.3},
    '65': {note: 'F', octave: 5,  frequency: 698.5},
    '66': {note: 'F#', octave: 5,  frequency: 740.0},
    '67': {note: 'G', octave: 5,  frequency: 784.0},
    '68': {note: 'G#', octave: 5,  frequency: 830.6},
    '69': {note: 'A', octave: 5,  frequency: 880.0},
    '70': {note: 'Bb', octave: 5,  frequency: 932.3},
    '71': {note: 'B', octave: 5,  frequency: 987.8},
    '72': {note: 'C', octave: 6, frequency: 1047}};
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

    let osc = ac.createOscillator();
    let note = noteList["frequency"];
    osc.frequency.value = 150;
    osc.type = 'square';
    osc.connect(gain)
    osc.start();
}


