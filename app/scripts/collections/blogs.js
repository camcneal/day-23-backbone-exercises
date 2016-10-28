import Backbone from 'backbone';
import Post from '../model/blog';

const BlogCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-za-server.herokuapp.com/collections/chris_blogPosts'
});

// console.log(this.models);

let blogs = new BlogCollection();

export default blogs;
