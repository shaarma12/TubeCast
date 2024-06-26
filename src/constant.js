import Home from "./Images/Home.png"
import shorts from "./Images/shorts.png"
import subscription from "./Images/subscription.png"
import liked from "./Images/liked.png"
import playlist from "./Images/playlist.png"
import watch from "./Images/watch.png"
import yvideo from "./Images/yvideo.png"
import history from "./Images/history.png"
import men from "./Images/men.png"
import bag from "./Images/bag.png"
import live from "./Images/live.png"
import movies from "./Images/movies.png"
import music from "./Images/music.png"
import trending from "./Images/trending.png"
const API_KEY = "AIzaSyA18QNhj2di_5PL1Mktdkem0rqi7W9rQic";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const TAGS = ["All", "Live", "Sports", "Software", "Reaction", "News", "Cricket", "Movies", "Thriller", "Indian", "Mixes", "Album", "Recently", "Football", "Shoes", "Clothes", "Fashion", "Taj", "Phones", "Shirts", "England", "TV", "Fridge"];
export const SIDEBARS = [{
    icon: Home,
    name: "Home"
}, {
    icon: shorts,
    name: "Shorts"
}, {
    icon: subscription,
    name: "Subscription"
}];

export const YOU = [{
    icon: men,
    name: "Your channel"
}, {
    icon: history,
    name: "History"
}, {
    icon: playlist,
    name: "Playlists"
},
{
    icon: yvideo,
    name: "Your videos"
},
{
    icon: watch,
    name: "Watch later"
},
{
    icon: liked,
    name: "Liked videos"
}];
export const EXPLORE = [{
    icon: trending,
    name: "Trending"
}, {
    icon: bag,
    name: "Shopping"
}, {
    icon: music,
    name: "Music"
}, {
    icon: movies,
    name: "Movies"
}, {
    icon: live,
    name: "Live"
}];