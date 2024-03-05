const { sendRequest } = require("./RequestHelper");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

const userId = 1;
const postId = 2;
printTargetPost(userId,postId);

printAllPost(userId);

function printTargetPost(userId,postId){
    _getAllPost(userId).then(function (filteredPosts){
        const targetPost = filteredPosts.filter(function (post){
            return (post.id === postId);
        })[0]
        if (targetPost){
            console.log(targetPost);
        } else {
            console.log(`The post ID: ${postId} is not existing for the user ${userId}`)
        }
    })
}


function printAllPost(userId){
    _getAllPost(userId).then(function (filteredPosts){
        console.log(filteredPosts);
    });
}


function _getAllPost(userId){
    return sendRequest(url).then(function (posts){
        return posts.filter(function (post){
            return (post.userId === userId);
        })
    });
}