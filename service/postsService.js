const postsData = require("../database/postsData")


exports.getPosts = function(){
return postsData.getPosts()
}


exports.savePost = function(post){
    return postsData.savePost(post)
}

exports.deletePosts=function(post){
    return postsData.deletePosts(post)
}