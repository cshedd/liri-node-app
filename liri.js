var fs = require('fs');
var argOne = process.argv[2];
var argTwo = process.argv[3];
var request = require('request');

// Twitter

var keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});
var params = {count: 20};

// Spotify

var spotify = require('spotify');

// Function to get tweets

function getTweets(){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if(!error){
			for(var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text + "Posted on: " + tweets[i].created_at + "\n");
			}
		} else {
			console.log(error);
		}
	});
}

function getSong(){
	var queryInput = "I Want it That Way";
	if (argTwo !== undefined) {
		queryInput = argTwo;
	}
	spotify.search({ type: 'track', query: queryInput, count: 1}, function(err, data){
		if(err){
			console.log('Error: ' + err);
			return;
		}
		console.log("Artist: " + data.tracks.items[0].artists[0].name);
		console.log("Song: " + data.tracks.items[0].name);
		console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
		console.log("Album: " + data.tracks.items[0].album.name);
		fs.appendFile('log.txt', "Artist: " + data.tracks.items[0].artists[0].name + "\n" + "Song: " + data.tracks.items[0].name + "\n" + "Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify + "\n" + "Album: " + data.tracks.items[0].album.name); 
	});
}

function getMovie(){
	var queryInput = ""
}