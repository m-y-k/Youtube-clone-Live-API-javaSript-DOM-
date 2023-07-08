const base_url = "https://www.googleapis.com/youtube/v3";
// const apiKey = "AIzaSyARH99EwDlCNNKmDYU4HfWUmggUZbeAMmU";
const apiKey = "AIzaSyB4dRsvdjsdwJ90_zKP9OLQMjI0Txvpsdc";
// const apiKey = "AIzaSyBOLbUwW4KStYpshgpqii4W-si_PKJbnUs";

const container = document.getElementById("videos-container");

// first we construct the url
// then we send the request
// then we convert it ot json (format we want)
// get the data and modify it accordingly

// home page videos
async function getVideos(q) {
    const url = `${base_url}/search?key=${apiKey}&q=${q}&type=videos&maxResults=20`;

    const response = await fetch(url, {method: "get"});
    const result = await response.json();
    const data = result.items;

    getVideoData(data);
    console.log(data);
}

async function getVideoData(videos) {
    let videoData = [];
    for (let i = 0; i < videos.length; i++) {
        let video_id = videos[i].id.videoId;
        videoData.push(await getVideoDetails(video_id));
    }

    console.log(videoData);
    renderVideos(videoData);
    // return videoData;
}

// searched videos 
async function getVideoDetails(video_id) {
    const url = `${base_url}/videos?key=${apiKey}&part=snippet,contentDetails,statistics&id=${video_id}`;

    const response = await fetch(url, {method: "get"});
    const result = await response.json();

    return result.items[0];
    console.log(result);
}

// renderring videos on screen
function renderVideos(videos) {
    container.innerHTML = ``;
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const image_url = video.snippet.thumbnails.high.url;
        container.innerHTML += `
            <div class="video-info" onclick="openVideoDetails('${video.id}')">
                <div class="video-image">
                    <img src="${image_url}" alt="video title" width="280" height="150" />
                    <p class="duration">23:45</p>
                </div>
                <div class="video-description">
                    <div class="channel-avatar">
                        <img src="/assets/images/yusuf.jfif" alt="channel avatar" width="40px">
                    </div>
                    <div class="right-title">
                        <p class="video-title">${video.snippet.localized.title}</p>
                        <!-- <p class="channel-name">James Gouse</p> -->
                        <p class="video-stats">James Gouse <br> 15K views.1 week ago</p>

                    </div>
                </div>
            </div>
        `;
    }
    // container.appendChild();
}

function openVideoDetails(videoId) {
    localStorage.setItem("videoId", videoId);
    window.open("/videoDetails.html");
}


// calling functions here
getVideos(""); 
// getVideoData("Yku-Dx_o0ro");
