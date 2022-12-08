const trackCover= document.querySelector("#track_cover");
const trackArtist= document.querySelector("#track_artist");
const trackTitle= document.querySelector("#track_title");
const currentMins= document.querySelector("#current_time_mins");
const currentSecs= document.querySelector("#current_time_secs");
const trackmins= document.querySelector("#track_mins");
const tracksecs= document.querySelector("#track_secs");
const prevBtn=document.querySelector("#prev");
const playPause=document.querySelector("#play_pause");
const nextBtn= document.querySelector("#next");
const trackRange=document.querySelector("#range");
const vol=document.querySelector("#vol");
const currentTrack= document.createElement("audio");
const container= document.querySelector("#container");

let isPlaying= false;
let trackIndex= 0;

const songs = [
  {
    artistName: "Chris Brown",
    songName: "Under The Influence",
    music: "musics/underTheInfluence.mp3",
  },
  {
    artistName: "Weeknd",
    songName: "I Was Never There",
    music: "musics/iWasNeverThere.mp3",
  },
  {
    artistName: "Ariane Grande",
    songName: "Boyfriend",
    music: "musics/boyfriend.mp3",
  },
  {
    artistName: "Justin Bieber",
    songName: "Sorry",
    music: "musics/sorry.mp3",
  },
  {
    artistName: "chainsmokers",
    songName: "Closer",
    music: "musics/closer.mp3",
  },
  {
    artistName: "Charlie Puth And Selena Gomez",
    songName: "Attention",
    music: "musics/attention.mp3",
  },
  {
    artistName: "Drake",
    songName: "One Dance",
    music: "musics/oneDance.mp3",
  },
  {
    artistName: "Lil Nas X",
    songName: "Industry Baby",
    music: "musics/industryBaby.mp3",
  },
  {
    artistName: "Lil Nas X",
    songName: "Montero",
    music: "musics/montero.mp3",
  },
  {
    artistName: "Zayn Malik",
    songName: "Dusk Till Down",
    music: "musics/duskTillDown.mp3",
  },
  {
    artistName: "Alan Walker",
    songName: "On My Way",
    music: "musics/onMyWay.mp3",
  },
  {
    artistName: "Alan Walker And Alok",
    songName: "Headlights",
    music: "musics/headlights.mp3",
  },
  {
    artistName: "Post Malone",
    songName: "Circles",
    music: "musics/circles.mp3",
  },
  {
    artistName: "Justin Bieber",
    songName: "favorite Girl",
    music: "musics/favoriteGirl.mp3",
  },
  {
    artistName: "Black Widow",
    songName: "Smells Like Teen Spirit",
    music: "musics/blackWidow.mp3",
  },
  {
    artistName: "Moon Knight",
    songName: "A Man Without Love",
    music: "musics/manWithoutLove.mp3",
  },
  {
    artistName: "Billie Ellish",
    songName: "Lovely",
    music: "musics/Lovely.mp3",
  },
  {
    artistName: "Unknown",
    songName: "At My Worst",
    music: "musics/atMyWorst.mp3",
  },
];
loadTrack(trackIndex);
setInterval(fulltime, 1000);


function loadTrack(trackIndex){
    currentTrack.src= songs[trackIndex].music;
    currentTrack.load();

    trackArtist.textContent= songs[trackIndex].artistName;
    trackTitle.textContent= songs[trackIndex].songName;
    volume();
};
function next(){
    if(trackIndex>=songs.length-1){
        trackIndex=0;
    }else{
        trackIndex++
    }
    loadTrack(trackIndex);
    play();
};
function prev(){
    if(trackIndex<=0){
        trackIndex=songs.length-1;
    }else{
        trackIndex--
    }
    loadTrack(trackIndex);
    play();
};
function play_pause(){
    isPlaying? pause() : play();
};
function play(){
    isPlaying= true;
    currentTrack.play();
    playPause.classList.remove("bi-play-circle");
    playPause.classList.add("bi-pause-circle");
};
function pause(){
    isPlaying= false;
    currentTrack.pause();
    playPause.classList.remove("bi-pause-circle");
    playPause.classList.add("bi-play-circle");
};
function fulltime(){
    const mins=String(Math.floor((currentTrack.duration)/60)).padStart(2,"0");
    const secs=String(Math.floor(currentTrack.duration-(mins*60))).padStart(2,"0");

    const currMins=String(Math.floor((currentTrack.currentTime)/60)).padStart(2,"0");
    const currSecs=String(Math.abs(Math.floor((currMins*60)-currentTrack.currentTime))).padStart(2,"0");

    trackmins.textContent=mins;
    tracksecs.textContent=secs;
    currentMins.textContent= currMins;
    currentSecs.textContent=currSecs;
    


    trackRange.value=currentTrack.currentTime;
    trackRange.max= currentTrack.duration;


    if(currentTrack.ended){
        next();
    };
};
function volume(){
    currentTrack.volume=vol.value/11;
};
function seek(){
    currentTrack.currentTime=trackRange.value;
};