const db = require('../models');
const Post = require('../models').Post;

Post.sync({force: true})
.then(() => db.sequelize.sync())
//add the following post to the database:
.then(() => Post.create(
  {title: 'Calorie counter encountered on Amazon', body: 'I can assure you that watching your figureand buying 40 pound bag of marshmallows are two entirely exclusive lifestyles', image: "https://i.redditmedia.com/3OwH_pbgeJkoY4n_fGsa_UXzjLBtTWQcmgk4uwmM0fM.png?w=578&s=4b3523111abf2dfe45aa6d61b2e7cedc"}
))
.then((post) => {
  //use an automatically created 'accessor' method to add the categories
  post.addCategories([1, 3])
})
.then(() => Post.create(
  {title: 'Why would you use React JS over Angular JS?', body: "I've been nominated to represent React JS in internal company debate. Even though we use Angular JS. We use these debates as away to learn about other frameworks and technologies. And to also see if we can use it. So why would you use React JS over Angular JS?"}
))
.then((post) => {
  post.addCategories([2, 5])
})
.then(() => Post.create(
  {title: 'Things to know before starting a reasonably large-scale React.js project?', body: "A couple things about the project: The app will be a single page app built entirely on existing RESTful JSON services. Our front end stack will be something like: React.js, Superagent, FlatIron Director and Highcharts. Some common UI features we'll be implementing: a carousel, typeahead search, infinite scrolling tables, maybe some dialogs? We will probably use Bootstrap CSS for styling. With that said I'm trying to avoid getting halfway through the project and finding some dramatic error in our logic. Has anyone done something similar? What did you find?"}
))
.then((post) => {
  post.addCategories([1, 3])
})
.then(() => Post.create(
  {title: 'Smooch', body: 'Dogs Kissing', image: "https://i.redditmedia.com/69HvngvfuY0BQ10FQlaW7uzol5IxGa7bYbhl_LYH2Pc.jpg?w=584&s=27bac6ebf3eeab7ba7d5157f6703a3f3"}
))
.then((post) => {
  post.addCategories([4, 3])
})
.then(() => Post.create(
  {title: '[Fluff] My dog is an idiot.', body: "This happened about 30 minutes ago. Got home, greeted the dog, let her out to do her business and went to run a perfect bubble bath. With the bath ran and the dog back inside and sorted, I lay back in warm bubbly heaven thinking all was right with the world. I was wrong. I sneezed. What's the big deal about a sneeze? Well let me tell you about my dog. Shes a sweetheart but she's also a few sandwiches short of a picnic.", image: ""}
))
.then((post) => {
  post.addCategories([1, 3, 5])
})
.then(() => Post.create(
  {title: 'My Mom and Bob Ross during an event in Central Park, NYC in 1989', body: "", image: "https://i.reddituploads.com/2d15d961b6004408a17d8c2df59a1c4c?fit=max&h=1536&w=1536&s=c6972b20a549790cb9cdf08fdce2ec3d"}
))
.then((post) => {
  post.addCategories([2, 3, 4])
})
.then(() => Post.create(
  {title: 'Good animation guide for react.js?', body: "Is there any good guide for animations for react.js? I've tried do it with standard transition and transform way, but it's not working.", image: ""}
))
.then((post) => {
  post.addCategories([5, 4])
})
.then(() => Post.create(
  {title: 'React vs Vue.js ', body: "although opinions will be probably biased towards React , I really like both of them and I wanted to know what general concensus on Vue.js was and how does it fare against React (havent really made other than simple tutorials on Vue BTW) EDIT: Another thing that interests me is elm so if someone has something bad to comment about it please do. Also wondering if the scary low version of elm (0.17) its because its not production ready or if its like react pre v15", image: ""}
))
.then((post) => {
  post.addCategories([4, 3])
})
.then(() => Post.create(
  {title: 'We are the team working on React Native. Ask us anything!', body: "We are the (some) of the team working on React Native, a popular open source project from Facebook that was released in March 2015. The project aims to make it possible for developers to write top quality native iOS and Android apps using the same core technologies as on the web - JavaScript, React, and a subset of CSS. Not to be confused with other JavaScript-driven app frameworks that use webviews, React Native uses real native views. So in a webview based app the developer might re-create an iOS UISwitch using HTML/JS/CSS and try to get as close to the actual behavior as possible, but with React Native we just use the actual UISwitch. Try out some of the apps in our Showcase.", image: ""}
))
.then((post) => {
  post.addCategories([2])
})
.then(() => Post.create(
  {title: 'Charizard made from seasonal leaves', body: "", image: "https://i.imgur.com/g76WwGy.jpg"}
))
.then((post) => {
  post.addCategories([5])
})
.then(() => Post.create(
  {title: 'Good resources to learn React.js?', body: "Any of you can recommend good (and preferably free) resources to learn react? Also, I've recently finished making TodoMVC with vanilla js using node and express as the api backend server, any ideas for a nice project to learn react with?", image: ""}
))
.then((post) => {
  post.addCategories([4])
})
.then(() => Post.create(
  {title: 'React.js infinite scroll', body: "So Im fairly new to react.js and I know how to do infinite scroll using jquery. I mean it's dead easy to in jquery jquery pseudocode: 1. check if user is at bottom of page 2.get more data using ajax 3.append response to body but how do we do that in react? like facebook's news feed is that implemented in react or just plain javascript/jquery?", image: ""}
))
.then((post) => {
  post.addCategories([4,5])
})
.then(() => Post.create(
  {title: '9 things every React.js beginner should know', body: "", image: ""}
))
.then((post) => {
  post.addCategories([2,4])
})
.then(() => Post.create(
  {title: "Why isn't AJAX present in Many examples of React/Flow/Redux?", body: "Based on the responses, I've gathered that: The libraries, React/Flux/Redux, are very specialized and concern themselves with only the thing they do and do not care much about how you connect it with the others. The docs are specialized and can't focus on how to connect with other libraries. The teams behind these libraries are small and can't focus themselves with creating educational material. People make too many tutorials that are about creating a localStorage-based todo-list apps People write content which is very specialized to React/Flux/Redux and less about connecting various libraries together or making real world apps. It is clear that the current state of educational material isn't enough for newbies to get into making real world apps easily enough. The learning curve is too steep, more than it should be.", image: ""}
))
.then((post) => {
  post.addCategories([2,4])
})

// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
