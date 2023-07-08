const base_url = "https://www.googleapis.com/youtube/v3";
// const apiKey = "AIzaSyARH99EwDlCNNKmDYU4HfWUmggUZbeAMmU";
// const apiKey = "AIzaSyB4dRsvdjsdwJ90_zKP9OLQMjI0Txvpsdc";
const apiKey = "AIzaSyBOLbUwW4KStYpshgpqii4W-si_PKJbnUs";

const video_container = document.getElementById("yt-video");
const videoId = localStorage.getItem("videoId");

video_container.src = `https://www.youtube.com/embed/${videoId}`;