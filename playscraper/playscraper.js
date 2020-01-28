var gplay = require('google-play-scraper');
const fs = require('fs');

var reviews = gplay.reviews({
  appId: 'com.lbslocal.android.local',
  sort: gplay.sort.RATING
});

reviews.then(console.log, console.log);
