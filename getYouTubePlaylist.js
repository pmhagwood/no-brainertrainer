// add our requires
const https = require('https');
const axios = require('axios');
require('dotenv').config();
const playListId = 'PLIZGnF3VDshQbTIGuQijx4PmQVgkmTq7G';
playlistData = [];

const key = process.env.YOUTUBE_TOKEN;
var config = {
    method: 'get',
    url: `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&key=${key}`,
    headers: { }
  };

  axios(config)
    .then(function (response) {
      let listVideoCount = parseInt(JSON.stringify(response.data.pageInfo.totalResults));
      // let videoId = JSON.stringify(response.data.items[1].snippet.resourceId.videoId);
      console.log(listVideoCount);
      for (i = 0; i < listVideoCount; i++){
          let videoTitle = JSON.stringify(response.data.items[i].snippet.title);
          let videoThumbnail = JSON.stringify(response.data.items[i].snippet.thumbnails.standard.url);
          let videoId = JSON.stringify(response.data.items[i].snippet.resourceId.videoId);
          let embedCode = `<iframe width="830" height="467" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          playlistData.push([videoTitle, videoThumbnail, videoId, embedCode]);
        //for testing
          console.log(`The video title is: ${videoTitle}`);
          console.log(`The video thumbnail URL is: ${videoThumbnail}`);
          console.log(`The video ID: ${videoId}`);
          console.log(`The video embedCodeIs: ${embedCode}`);
      }
      // console.log(playlistData[0]);
    })
    .catch(function (error) {
    console.log(error);
  });
  


// Playlist Ids:
// Hell Level: PLIZGnF3VDshQbTIGuQijx4PmQVgkmTq7G
// Nightmare Level: PLIZGnF3VDshTqZYOvg3cVdOkM7oVtOdA1
// Normal Level: PLIZGnF3VDshRjjivPc_D30JMiFVKlMYHU
// Surprise Me: PLIZGnF3VDshSJhVpChUbMyh4pktQvyL6s
