"use strict";
const album1 = makeAlbum('Talor Swift', 'Reputation');
const album2 = makeAlbum('Billie Eilish', 'Dont smile at me');
const album3 = makeAlbum('Nirvana', 'Nevermind', 10);
function makeAlbum(artist, albumTitle, numTracks) {
    let album = {
        artist,
        albumTitle,
        numTracks
    };
    if (numTracks !== undefined) {
        album.numTracks = numTracks;
    }
    return album;
}
console.log(album1);
console.log(album2);
console.log(album3);
