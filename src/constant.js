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
import game from "./Images/game.png"
import nws from "./Images/nws.png"
import sport from "./Images/sport.png"
import courses from "./Images/courses.png"
import fashion from "./Images/fashion.png"
import podcast from "./Images/podcast.png"
import studio from "./Images/studio.png"
import ymusic from "./Images/ymusic.png"
import kids from "./Images/kids.png"
import setting from "./Images/setting.png"
import flag from "./Images/flag.png"
import helps from "./Images/helps.png"
import feedback from "./Images/feedback.png"
import logo from "./Images/logo.png"
const API_KEY = "AIzaSyA18QNhj2di_5PL1Mktdkem0rqi7W9rQic";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const TAGS = ["All", "Live", "Sports", "Software", "Reaction", "News", "Cricket", "Movies", "Thriller", "Indian", "Mixes", "Album", "Recently", "Football", "Shoes", "Clothes", "Fashion", "Taj", "Phones", "Shirts", "England", "TV", "Fridge"];
export const SIDEBARS = [{
    icon: Home,
    name: "Home",
    link:"/"
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
}, {
    icon: game,
    name: "Gaming"
}, {
    icon: nws,
    name: "News"
}, {
    icon: sport,
    name: "Sports"
}, {
    icon: courses,
    name: "Courses"
}, {
    icon: fashion,
    name: "Fashion"
}, {
    icon: podcast,
    name: "Podcasts"
    }];

export const MORE = [{
    icon: logo,
    name: "TubeCast Premium"
}, {
    icon: studio,
    name: "TubeCast Studio"
}, {
    icon: ymusic,
    name: "TubeCast Music"
}, {
    icon: kids,
    name: "TubeCast kids"
    },];

export const GENERAL = [{
    icon: setting,
    name: "Settings"
}, {
    icon: flag,
    name: "Report history"
}, {
    icon: helps,
    name: "Help"
}, {
    icon: feedback,
    name: "Send feedback"
},];

