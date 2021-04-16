import axios from 'axios';
const fetchData = require('./PostService');

function Posts() {
  this.posts = [];

  this.getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => resp.data);
  };

  this.getPostSizes = () => {
    return this.posts.length;
  };
}
module.exports = Posts;


 