interface audioPlayer {
    volumen: number;
    songDuration: number;
    songName: string;
    details: details;
}

interface details {
    author: string;
    year: number;
}

const myAudio: audioPlayer = {
    volumen: 10,
    songDuration: 300,
    songName: 'hola',
    details: {
        author: 'Alex',
        year: 2021
    }
}

console.log(myAudio);

const {songName: name, songDuration: duration} = myAudio;
const {author: singer, year: yearSinged} = myAudio.details;

console.log('Nombre ', name);
console.log('Duracion ', duration);
console.log('Autor ', singer);
console.log('Año ', yearSinged);

const [p1, p2, p3] = ['vegeta', 'goku', 'trunks'];

console.log(p3);
export{};