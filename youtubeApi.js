// add our requires
require('dotenv').config();
const { google } = require('googleapis');
const searchTerms = 'insane workout';
//Using the Google YouTube API to search for videos

//Searches YouTube for provided terms and returns the number defined in returnResults.
function videoSearch(searchTerms, returnResults) {
  google
    .youtube('v3')
    //to search youtube
    .search.list({
      key: process.env.YOUTUBE_TOKEN,
      part: 'snippet',
      // for workouts
      q: searchTerms,
      maxResults: returnResults,
    })
    .then((response) => {
      //restructure some data...
      const { data } = response;
      data.items.forEach((item) => {
        console.log(
          `Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`
        );
      });
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}

videoSearch(searchTerms, 10);
