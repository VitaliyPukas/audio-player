let songs = [
    {
        artistName: "Lofi",
        songName: "Hip-Hop_Beats_Lo-Fi_Beats",
        src: "./songs/Hip-Hop_Beats_Lo-Fi_Beats.mp3"
    },
    {
        artistName: "1",
        songName: "1",
        src: "./songs/1.mp3"
    },
    {
        artistName: "Less People",
        songName: 'Less People - Starting Late',
        src: "./songs/Less People - Starting Late.mp3"
    },
    {
        artistName: "Lofi",
        songName: "Hip-Hop_Beats_Lo-Fi_Beats_-_Jazz",
        src: "./songs/Lofi_Hip-Hop_Beats_Lo-Fi_Beats_-_Jazz.mp3"
    },
    {
        artistName: "2",
        songName: "2",
        src: "./songs/2.mp3"
    },
]


let audio = new Audio(songs[0].src);
console.log(audio);
const previousButton = document.querySelector('.previous');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const nextButton = document.querySelector('.next');
const artist = document.querySelector(".artist");
const song = document.querySelector(".song");
const musicList = document.querySelector(".music-list");


let currentSongIndex = 0;

function songInfo(){
    artist.innerHTML = songs[currentSongIndex].artistName;
    song.innerHTML = songs[currentSongIndex].songName;
}

playButton.addEventListener('click', function () {
    audio.play();
    songInfo();
});

pauseButton.addEventListener('click', function () {
    audio.pause();
    songInfo();
});

nextButton.addEventListener('click', function () {
    currentSongIndex++
    audio.pause();
    audio = new Audio(songs[currentSongIndex].src);
    audio.play();
    songInfo();
    console.log("next");
});

previousButton.addEventListener('click', function () {
    currentSongIndex--;
    audio.pause();
    audio = new Audio(songs[currentSongIndex].src);
    audio.play();
    songInfo();
    console.log("prev");
});

render()

function render() {
        const renderHtml = songs.map(i => {
            return `
            <li class="list-item">
            <button> <i class="bi bi-play"></i></button>
            <p>${i.artistName}</p>
            <p>${i.songName}</p>
            <p>00:00</p>
        </li>
            `
        })
        musicList.innerHTML = renderHtml
    }
    


//  Виведення інформації про композицію




