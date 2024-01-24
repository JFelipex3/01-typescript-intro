interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};
// propiedad: nuevoNombre
// Cuando existen objetos conviene desestructurar a continuación, tambien se puede desestructurar en una sola línea, pero es complicado para la lectura

// const {
//     song: anotherSong,
//     songDuration: duration,
//     details: {author}    
// } = audioPlayer;

const { song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const [ , , p3]: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje 3: ', p3 || 'No hay Personaje');

export {};