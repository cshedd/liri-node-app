# LIRI Bot

LIRI stands for Language Interpretation and Recognition Interface. This is a command line node app that takes in parameters and gives you back data.

## Usage

<pre>
$ node liri.js
Usage: node liri.js my-tweets|spotify-this-song <song>|movie-this <movie>|do-what-it-says
Notes: For 'do-what-it-says', a file called random.txt is parsed for a comma-delimited command to execute.
</pre>

## Examples

### View your 20 most recent tweets

<pre>
$ node liri.js my-tweets
---------------------------------------------------
Tweet # 1 "WWC Women In Tech @ Google Fiber Space || ...."
          Posted on: Sat Nov 19 23:12:52 +0000 2016 
Tweet # 2 "Eeee, excited to help as a STEM mentor in the MAGIC Program..."
          Posted on: Wed Nov 16 16:22:30 +0000 2016
</pre>          

### Look up song info on Spotify

<pre>
$ node liri.js spotify-this-song "Ridin Solo (Njomza Remix)"
---------------------------------------------------
Artist: Hippie Sabotage
Song: Ridin Solo (Njomza Remix)
Spotify Preview Link: https://open.spotify.com/track/02P9rHGHgrCUglkuAafwrP
Album: Sunny - EP
</pre>

### Look up movie info on OMDB

<pre>
$ node liri.js movie-this "Captain Phillips"
---------------------------------------------------
Title: Captain Phillips
Year: 2013
IMDB Rating: 7.9
Country: USA
Language: English, Somali
Plot: The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the US-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.
Actors: Tom Hanks, Catherine Keener, Barkhad Abdi, Barkhad Abdirahman
Rotten Tomatoes Rating: 
Rotten Tomatoes URL:
</pre>

### Perform a LIRI command in random.txt

<pre>
$ cat random.txt
spotify-this-song, "I Want it That Way"

$ node liri.js do-what-it-says
spotify-this-song
-----------------------------------------------------
Artist: Backstreet Boys
Song: I Want It That Way
Spotify Preview Link: https://open.spotify.com/track/6e40mgJiCid5HRAGrbpGA6
Album: The Hits--Chapter One
</pre>
