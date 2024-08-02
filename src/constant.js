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
export const SUGGESTION_DATA_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key=${API_KEY}&q=`;
export const SUGGESTION_API = `https://proxy.cors.sh/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const TAGS = ["All", "Live", "Sports", "Software", "Reaction", "News", "Cricket", "Movies", "Thriller", "Indian", "Mixes", "Album", "Recently", "Football", "Shoes", "Clothes", "Fashion", "Taj", "Phones", "Shirts", "England", "TV", "Fridge"];
export const SIDEBARS = [{
    id:1,
    icon: Home,
    name: "Home",
    link:"/"
}, {
    id:2,
    icon: shorts,
    name: "Shorts"
    }, {
    id:3,
    icon: subscription,
    name: "Subscription"
}];

export const YOU = [{
    id:1,
    icon: men,
    name: "Your channel"
}, {
    id: 2,
    icon: history,
    name: "History"
    }, {
    id:3,
    icon: playlist,
    name: "Playlists"
},
    {
    id:4,
    icon: yvideo,
    name: "Your videos"
},
    {
    id:5,
    icon: watch,
    name: "Watch later"
},
    {
    id:6,
    icon: liked,
    name: "Liked videos"
}];
export const EXPLORE = [{
    id:1,
    icon: trending,
    name: "Trending"
}, {
    id:2,
    icon: bag,
    name: "Shopping"
    }, {
    id:3,
    icon: music,
    name: "Music"
    }, {
    id:4,
    icon: movies,
    name: "Movies"
    }, {
    id:5,
    icon: live,
    name: "Live"
    }, {
    id:6,
    icon: game,
    name: "Gaming"
    }, {
    id:7,
    icon: nws,
    name: "News"
    }, {
    id: 8,
    icon: sport,
    name: "Sports"
    }, {
    id: 9,
    icon: courses,
    name: "Courses"
    }, {
    id:10,
    icon: fashion,
    name: "Fashion"
    }, {
    id:11,
    icon: podcast,
    name: "Podcasts"
    }];

export const MORE = [{
    id:1,
    icon: logo,
    name: "TubeCast Premium"
}, {
    id:2,
    icon: studio,
    name: "TubeCast Studio"
    }, {
    id:3,
    icon: ymusic,
    name: "TubeCast Music"
    }, {
    id:4,
    icon: kids,
    name: "TubeCast kids"
    },];

export const GENERAL = [{
    id: 1,
    icon: setting,
    name: "Settings"
}, {
    id:2,
    icon: flag,
    name: "Report history"
    }, {
    id:3,
    icon: helps,
    name: "Help"
    }, {
    id:4,
    icon: feedback,
    name: "Send feedback"
},];

