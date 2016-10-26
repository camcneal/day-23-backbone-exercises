import Backbone from 'backbone';
import Post from '../model/blog';

const BlogCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-za-server.herokuapp.com/collections/chris_blogPosts'
});

let Blogs = new BlogCollection();

export default Blogs;
