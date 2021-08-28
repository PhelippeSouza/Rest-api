const database = require("../infra/database")

exports.getPosts = function(){
    return database.query('select * from posts')
}

exports.savePost = function(post){
    return database.one('insert into posts (title, content) values ($1, $2) returning *', [post.title, post.content])
}

exports.deletePosts = function(post){
    return database.query('delete from posts where id =?',[post.id])
}