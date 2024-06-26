import Home from "./Images/Home.png"
import shorts from "./Images/shorts.png"
import subscription from "./Images/subscription.png"
const API_KEY = "AIzaSyA18QNhj2di_5PL1Mktdkem0rqi7W9rQic";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const TAGS = ["All", "Live", "Sports", "Software", "Reaction", "News", "Cricket", "Movies", "Thriller", "Indian", "Mixes", "Album", "Recently", "Football", "Shoes", "Clothes", "Fashion", "Taj", "Phones", "Shirts", "England", "TV", "Fridge"];
export const SIDEBARS = [{
    icon:  Home ,
    name: "Home"
},{
    icon: shorts ,
    name: "Shorts"
},{
    icon: subscription ,
    name: "Subscription"
}];