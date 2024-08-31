const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const artists = [
    {
        name: "Chamara Weerasinha",
        song: "Mathakayan Obe",
        img: "artist1.jpg",
        audio: "song1.mp3"
    },
    {
        name: "B & S",
        song: "Sri Lanka",
        img: "artist2.jpg",
        audio: "song2.mp3"
    },
    {
        name: "Danith Sri",
        song: "Pandama",
        img: "artist3.jpg",
        audio: "song3.mp3"
    },
    {
        name: "Artist 4",
        song: "Song 4",
        img: "artist4.jpg",
        audio: "song4.mp3"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    document.getElementById("artist-name").innerText = artists[index].name;
    document.getElementById("song-name").innerText = artists[index].song;
    document.getElementById("artist-img").src = artists[index].img;
    audioPlayer.src = artists[index].audio;
}

function playPauseSong() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerText = "⏸";
    } else {
        audioPlayer.pause();
        playButton.innerText = "▶️";
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + artists.length) % artists.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playButton.innerText = "⏸";
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % artists.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playButton.innerText = "⏸";
}

playButton.addEventListener("click", playPauseSong);
prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

// Load the first song initially
loadSong(currentSongIndex);