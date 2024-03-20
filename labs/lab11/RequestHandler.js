const Post = require('./Post');
const {sendRequest} = require('../lab9/RequestHelper');


class RequestHandler{
    async printTargetPost(userId,postId,url){
        const filteredPosts = await this.getAllPosts(userId, url);
        const targetPost = filteredPosts.filter(post => {
            return post.id === post.postId;
        })[0];
        if(targetPost){
            return new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
        }else{
            return null;
        }
    }

    async printAllPosts(userId, url){
        const allPosts = await this.getAllPosts(userId,url);
        let allPostModels = [];
        allPosts.forEach(post => {
            allPostModels.push(new Post(post.userId, post.id, post.title, post.body));
        });
        return allPostModels;
    }


    async getAllPosts(userId,url){
        const posts = await sendRequest(url);
        return posts.filter(post => {
            return post.userId === userId;
        })
    }
}

module.exports = RequestHandler;