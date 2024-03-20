const RequestHandler = require('./RequestHandler')

async function lab11(){

    // Constants defination
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUG = '/posts';

    let url = `${BASE_URL}${SLUG}`

    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandle object
    const requestHandler = new RequestHandler();

    // get and print target post
    const targetPost = await requestHandler.printTargetPost(userId, postId, url);
    const allPost = await requestHandler.printAllPosts(userId,url);

    if(targetPost){
        console.log(targetPost);
    } else{
        console.log(`The post id: ${postId} is not existing for the user ${userId}`);
    }

    console.log(allPost);
}

lab11()