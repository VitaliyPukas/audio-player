console.log("audio");




const player = document.querySelector("#player");


const audoPlayer = new Audio(src="./songs/the_weeknd__ariana_grande_-_save_your_tears_remix.mp3");

console.log(audoPlayer);


player.innerHTML = audoPlayer;


