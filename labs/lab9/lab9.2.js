const { sendRequest } = require("./RequestHelper");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

const userId = 1;
const postId = 2;
printTargetPost(userId,postId);

printAllPost(userId);

async function printTargetPost(userId,postId){
   const filteredPosts = await _getAllPost(userId);
   const targetPost = filteredPosts.filter(function (post){
        return (post.id === postId);
   })[0];
   if (targetPost){
    console.log(targetPost);
   } else{
    console.log(`The post ID: ${postId} is not existing for the user ${userId}`)
   }
}


async function printAllPost(userId){
    const allPosts = await _getAllPost(userId);
    console.log(allPosts);
}


async function _getAllPost(userId){
    const posts = await sendRequest(url);
    return posts.filter(function (post){
        return (post.userId === userId);
    })
}