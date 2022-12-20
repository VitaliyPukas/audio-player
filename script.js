const songs = [
    {
        id: 12,
        artistName: "Artem Pivovarov",
        songName: "Oj na gori",
        songTime: "04:23",
        src: "./songs/artem_pivovarov_-_oj_na_gori.mp3",
    },
    {
        artistName: "Ljusja Kava",
        songName: "Nezlamna",
        songTime: "03:55",
        src: "./songs/ljusja_kava_-_nezlamna.mp3"
    },
    {
        artistName: "Kozak-sistem",
        songName: 'Bilja topoli',
        songTime: "04:12",
        src: "./songs/shumei_-_bilja_topoli_odner_remix.mp3"
    },
    {
        id: 1,
        artistName: "Skofka",
        songName: "V dorogu",
        songTime: "05:10",
        src: "./songs/skofka_-_v_dorogu.mp3",
        listened: false
    },
    {
        artistName: "The Weeknd and Ariana Grande",
        songName: "Save your tears",
        songTime: "04:55",
        src: "./songs/the_weeknd__ariana_grande_-_save_your_tears_remix.mp3"
    }
]

let audio = new Audio(songs[0].src);

const player = document.querySelector('#player');
const miniPlayer = document.querySelector("#open-player");
const previousButton = document.querySelector('#pre-btn');
const playButton = document.querySelector('#play-btn');
const pauseButton = document.querySelector('#pause-btn');
const artist = document.querySelector("#artist");
const song = document.querySelector("#song");
const musicList = document.querySelector("#music-list");

let currentSongIndex = 0;


function openPlayer() {
    player.style.display = "inline-block";
    miniPlayer.style.display = "none";
}

function closePlayer() {
    player.style.display = "none";
    miniPlayer.style.display = "inline-block";
}

function songInfo() {
    artist.innerHTML = songs[currentSongIndex].artistName;
    song.innerHTML = songs[currentSongIndex].songName;
}
songInfo();

function volMinus(){
    audio.volume -= 0.1;
}

function volPlus(){
    audio.volume += 0.1;
}

function playBtn() {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    audio.play();
    songInfo();
}; 

function stopBtn() {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    audio.pause();
    songInfo();
}; 

function nextBtn() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
        audio.pause();
        audio = new Audio(songs[currentSongIndex].src);
        audio.play();
        songInfo();
    }else{
        audio.pause();
        audio = new Audio(songs[currentSongIndex].src);
        audio.play();
        songInfo();
    }
    
};

function preBtn() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
        audio.pause();
        audio = new Audio(songs[currentSongIndex].src);
        audio.play();
        songInfo();
    } else {
        audio.pause();
        audio = new Audio(songs[currentSongIndex].src);
        audio.play();
        songInfo();
    }
};

function render() {
    const renderHtml = songs.map(i => {
        return `<li class="list-item">
            <button class="list-btn"}> <i class="bi bi-play"></i></button>
            <p class="list-artist">${i.artistName}</p>
            <p class="list-song">${i.songName}</p>
            <p class="list-time">${i.songTime}</p>
        </li>`
    })
    musicList.innerHTML = renderHtml;
};

render();




